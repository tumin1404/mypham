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
    public class NhanvienController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public NhanvienController(IConfiguration configuration, IWebHostEnvironment env)
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
                            dbo.staff
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
                            dbo.staff where staff_id=@staff_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@staff_id", id);
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
                            dbo.staff where staff_name like @ten OR staff_note like @ten
                            OR staff_dateofbirth like @ten OR staff_address like @ten
                            OR staff_phone like @ten OR staff_mail like @ten
                            OR staff_sex like @ten OR staff_levels like @ten
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
        public JsonResult Post(Nhanvien_MD nv)
        {
            string query = @"
                           insert into dbo.staff
                           (staff_name,staff_dateofbirth,staff_address,staff_phone,staff_mail,staff_sex,staff_levels,staff_note)
                    values (@staff_name,@staff_dateofbirth,@staff_address,@staff_phone,@staff_mail,@staff_sex,@staff_levels,@staff_note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@staff_name", nv.staff_name);
                    myCommand.Parameters.AddWithValue("@staff_dateofbirth", nv.staff_dateofbirth);
                    myCommand.Parameters.AddWithValue("@staff_address", nv.staff_address);
                    myCommand.Parameters.AddWithValue("@staff_phone", nv.staff_phone);
                    myCommand.Parameters.AddWithValue("@staff_mail", nv.staff_mail);
                    myCommand.Parameters.AddWithValue("@staff_sex", nv.staff_sex);
                    myCommand.Parameters.AddWithValue("@staff_levels", nv.staff_levels);
                    myCommand.Parameters.AddWithValue("@staff_note", nv.staff_note);
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
        public JsonResult Put(Nhanvien_MD nv)
        {
            string query = @"
                           update dbo.staff
                           set staff_name= @staff_name,
                            staff_dateofbirth=@staff_dateofbirth,
                            staff_address=@staff_address,
                            staff_phone=@staff_phone,
                            staff_mail=@staff_mail,
                            staff_sex=@staff_sex,
                            staff_levels=@staff_levels,
                            staff_note=@staff_note
                            where staff_id=@staff_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@staff_name", nv.staff_name);
                    myCommand.Parameters.AddWithValue("@staff_dateofbirth", nv.staff_dateofbirth);
                    myCommand.Parameters.AddWithValue("@staff_address", nv.staff_address);
                    myCommand.Parameters.AddWithValue("@staff_phone", nv.staff_phone);
                    myCommand.Parameters.AddWithValue("@staff_mail", nv.staff_mail);
                    myCommand.Parameters.AddWithValue("@staff_sex", nv.staff_sex);
                    myCommand.Parameters.AddWithValue("@staff_levels", nv.staff_levels);
                    myCommand.Parameters.AddWithValue("@staff_note", nv.staff_note);
                    myCommand.Parameters.AddWithValue("@staff_id", nv.staff_id);
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
                           delete from dbo.staff
                            where staff_id=@staff_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@staff_id", id);

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
