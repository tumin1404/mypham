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
    public class HoadonnhapController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public HoadonnhapController(IConfiguration configuration, IWebHostEnvironment env)
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
                            dbo.bill_imports
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
                            dbo.bill_imports where bill_imports_id=@bill_imports_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_imports_id", id);
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
                            dbo.bill_imports where bill_imports_distributor_id like @ten OR bill_imports_staff_id like @ten
                            OR bill_imports_date like @ten OR bill_imports_total_payment like @ten
                            OR bill_imports_payments like @ten OR bill_imports_note like @ten
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
        public JsonResult Post(Hoadonnhap_MD hdn)
        {
            string query = @"
                           insert into dbo.bill_imports
                           (bill_imports_distributor_id,bill_imports_staff_id,bill_imports_date,bill_imports_total_payment,bill_imports_payments,bill_imports_note)
                    values (@bill_imports_distributor_id,@bill_imports_staff_id,@bill_imports_date,@bill_imports_total_payment,@bill_imports_payments,@bill_imports_note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_imports_distributor_id", hdn.bill_imports_distributor_id);
                    myCommand.Parameters.AddWithValue("@bill_imports_staff_id", hdn.bill_imports_staff_id);
                    myCommand.Parameters.AddWithValue("@bill_imports_date", hdn.bill_imports_date);
                    myCommand.Parameters.AddWithValue("@bill_imports_total_payment", hdn.bill_imports_total_payment);
                    myCommand.Parameters.AddWithValue("@bill_imports_payments", hdn.bill_imports_payments);
                    myCommand.Parameters.AddWithValue("@bill_imports_note", hdn.bill_imports_note);
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
        public JsonResult Put(Hoadonnhap_MD hdn)
        {
            string query = @"
                           update dbo.bill_imports
                           set bill_imports_distributor_id= @bill_imports_distributor_id,
                            bill_imports_staff_id=@bill_imports_staff_id,
                            bill_imports_date=@bill_imports_date,
                            bill_imports_total_payment=@bill_imports_total_payment,
                            bill_imports_payments=@bill_imports_payments,
                            bill_imports_note=@bill_imports_note,
                            where bill_imports_id=@bill_imports_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_imports_distributor_id", hdn.bill_imports_distributor_id);
                    myCommand.Parameters.AddWithValue("@bill_imports_staff_id", hdn.bill_imports_staff_id);
                    myCommand.Parameters.AddWithValue("@bill_imports_date", hdn.bill_imports_date);
                    myCommand.Parameters.AddWithValue("@bill_imports_total_payment", hdn.bill_imports_total_payment);
                    myCommand.Parameters.AddWithValue("@bill_imports_payments", hdn.bill_imports_payments);
                    myCommand.Parameters.AddWithValue("@bill_imports_note", hdn.bill_imports_note);
                    myCommand.Parameters.AddWithValue("@bill_imports_id", hdn.bill_imports_id);
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
                           delete from dbo.bill_imports
                            where bill_imports_id=@bill_imports_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_imports_id", id);

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
