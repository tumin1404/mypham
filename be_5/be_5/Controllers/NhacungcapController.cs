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
    public class NhacungcapController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public NhacungcapController(IConfiguration configuration, IWebHostEnvironment env)
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
                            dbo.distributor
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
                            dbo.distributor where distributor_id=@distributor_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@distributor_id", id);
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
                            dbo.distributor where distributor_name like @ten
                            OR distributor_address like @ten OR distributor_phone like @ten
                            OR distributor_mail like @ten OR distributor_note like @ten
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
        public JsonResult Post(Nhacungcap_MD ncc)
        {
            string query = @"
                           insert into dbo.distributor
                           (distributor_name,distributor_address,distributor_phone,distributor_mail,distributor_note)
                    values (@distributor_name,@distributor_address,@distributor_phone,@distributor_mail,@distributor_note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@distributor_name", ncc.distributor_name);
                    myCommand.Parameters.AddWithValue("@distributor_address", ncc.distributor_address);
                    myCommand.Parameters.AddWithValue("@distributor_phone", ncc.distributor_phone);
                    myCommand.Parameters.AddWithValue("@distributor_mail", ncc.distributor_mail);
                    myCommand.Parameters.AddWithValue("@distributor_note", ncc.distributor_note);
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
        public JsonResult Put(Nhacungcap_MD ncc)
        {
            string query = @"
                           update dbo.distributor
                           set distributor_name= @distributor_name,
                            distributor_address=@distributor_address,
                            distributor_phone=@distributor_phone,
                            distributor_mail=@distributor_mail,
                            distributor_note=@distributor_note
                            where distributor_id=@distributor_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@distributor_id", ncc.distributor_id);
                    myCommand.Parameters.AddWithValue("@distributor_name", ncc.distributor_name);
                    myCommand.Parameters.AddWithValue("@distributor_address", ncc.distributor_address);
                    myCommand.Parameters.AddWithValue("@distributor_phone", ncc.distributor_phone);
                    myCommand.Parameters.AddWithValue("@distributor_mail", ncc.distributor_mail);
                    myCommand.Parameters.AddWithValue("@distributor_note", ncc.distributor_note);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{distributor_id}")]
        public JsonResult Delete(int distributor_id)
        {
            string query = @"
                           delete from dbo.distributor
                            where distributor_id=@distributor_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@distributor_id", distributor_id);
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
