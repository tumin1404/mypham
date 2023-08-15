using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using be_5.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace be_5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoaisanphamController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public LoaisanphamController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [Route("GetAll")]
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select *
                            from
                            dbo.category
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [Route("Gethot")]
        [HttpGet]
        public JsonResult Gethot()
        {
            string query = @"
                            select TOP(3)cate_id,cate_name
                            from
                            dbo.category ORDER BY cate_name
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpGet("{id}")]
        public JsonResult GetbyID(int id)
        {
            string query = @"
                            select *
                            from
                            dbo.category where cate_id=@cate_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cate_id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpGet("timkiem/{ten}")]
        public JsonResult timkiem(string ten)
        {
            string query = @"
                            select *
                            from
                            dbo.category where cate_name like @ten
                            OR cate_note like @ten
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ten", ten);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [Route("Post")]
        [HttpPost]
        public JsonResult Post(Loaisanpham_MD lsp)
        {
            string query = @"
                           insert into dbo.category
                           (cate_name,cate_img,cate_note)
                    values (@cate_name,@cate_img,@cate_note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cate_name", lsp.cate_name);
                    myCommand.Parameters.AddWithValue("@cate_img", lsp.cate_img);
                    myCommand.Parameters.AddWithValue("@cate_note", lsp.cate_note);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [Route("Put")]
        [HttpPut]
        public JsonResult Put(Loaisanpham_MD lsp)
        {
            string query = @"
                           update dbo.category
                           set cate_name= @cate_name,
                            cate_img=@cate_img,
                            cate_note=@cate_note
                            where cate_id=@cate_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cate_id", lsp.cate_id);
                    myCommand.Parameters.AddWithValue("@cate_name", lsp.cate_name);
                    myCommand.Parameters.AddWithValue("@cate_img", lsp.cate_img);
                    myCommand.Parameters.AddWithValue("@cate_note", lsp.cate_note);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                           delete from dbo.category
                            where cate_id=@cate_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cate_id", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
