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
    public class TaikhoanController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public TaikhoanController(IConfiguration configuration, IWebHostEnvironment env)
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
                            dbo.users
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
                            dbo.users where users_id=@users_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@users_id", id);
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
                            dbo.users where users_full_name like @ten OR users_name like @ten
                            OR users_password like @ten OR users_mail like @ten
                            OR users_phone like @ten OR users_token like @ten
                            OR users_role like @ten OR users_status like @ten OR users_note like @ten
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
        [Route("dangnhap")]
        [HttpPost]
        public JsonResult Dangnhap(Taikhoan_MD tk)
        {
            string query = @"
                           select count(*) from dbo.users
                           where users_name=@users_name and users_password=@users_password
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@users_name", tk.users_name);
                    myCommand.Parameters.AddWithValue("@users_password", tk.users_password);
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
        public JsonResult Post(Taikhoan_MD tk)
        {
            string query = @"
                           insert into dbo.users
                           (users_full_name,users_name,users_password,users_mail,users_phone,users_token,users_role,users_status,users_note)
                    values (@users_full_name,@users_name,@users_password,@users_mail,@users_phone,@users_token,@users_role,@users_status,@users_note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@users_full_name", tk.users_full_name);
                    myCommand.Parameters.AddWithValue("@users_name", tk.users_name);
                    myCommand.Parameters.AddWithValue("@users_password", tk.users_password);
                    myCommand.Parameters.AddWithValue("@users_mail", tk.users_mail);
                    myCommand.Parameters.AddWithValue("@users_phone", tk.users_phone);
                    myCommand.Parameters.AddWithValue("@users_token", tk.users_token);
                    myCommand.Parameters.AddWithValue("@users_role", tk.users_role);
                    myCommand.Parameters.AddWithValue("@users_status", tk.users_status);
                    myCommand.Parameters.AddWithValue("@users_note", tk.users_note);
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
        public JsonResult Put(Taikhoan_MD tk)
        {
            string query = @"
                           update dbo.users
                           set users_full_name= @users_full_name,
                            users_name=@users_name,
                            users_password=@users_password,
                            users_mail=@users_mail,
                            users_phone=@users_phone,
                            users_token=@users_token,
                            users_role=@users_role,
                            users_status=@users_status,
                            users_note=@users_note
                            where users_id=@users_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@users_full_name", tk.users_full_name);
                    myCommand.Parameters.AddWithValue("@users_name", tk.users_name);
                    myCommand.Parameters.AddWithValue("@users_password", tk.users_password);
                    myCommand.Parameters.AddWithValue("@users_mail", tk.users_mail);
                    myCommand.Parameters.AddWithValue("@users_phone", tk.users_phone);
                    myCommand.Parameters.AddWithValue("@users_token", tk.users_token);
                    myCommand.Parameters.AddWithValue("@users_role", tk.users_role);
                    myCommand.Parameters.AddWithValue("@users_status", tk.users_status);
                    myCommand.Parameters.AddWithValue("@users_note", tk.users_note);
                    myCommand.Parameters.AddWithValue("@users_id", tk.users_id);
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
                           delete from dbo.users
                            where users_id=@users_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@users_id", id);

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
