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
    public class HoadonbanController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public HoadonbanController(IConfiguration configuration, IWebHostEnvironment env)
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
                            dbo.bill_sales
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
                            dbo.bill_sales where bill_sales_id=@bill_sales_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_sales_id", id);
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
                            dbo.bill_sales where bill_sales_customer_id like @ten OR bill_sales_staff_id like @ten
                            OR bill_sales_date_order like @ten OR bill_sales_total_payment like @ten
                            OR bill_sales_payments like @ten OR bill_sales__note like @ten
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
        public JsonResult Post(Hoadonban_MD hdb)
        {
            string query = @"
                           insert into dbo.bill_sales
                           (bill_sales_customer_id,bill_sales_staff_id,bill_sales_date_order,bill_sales_total_payment,bill_sales_payments,bill_sales__note)
                    values (@bill_sales_customer_id,@bill_sales_staff_id,@bill_sales_date_order,@bill_sales_total_payment,@bill_sales_payments,@bill_sales__note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_sales_customer_id", hdb.bill_sales_customer_id);
                    myCommand.Parameters.AddWithValue("@bill_sales_staff_id", hdb.bill_sales_staff_id);
                    myCommand.Parameters.AddWithValue("@bill_sales_date_order", hdb.bill_sales_date_order);
                    myCommand.Parameters.AddWithValue("@bill_sales_total_payment", hdb.bill_sales_total_payment);
                    myCommand.Parameters.AddWithValue("@bill_sales_payments", hdb.bill_sales_payments);
                    myCommand.Parameters.AddWithValue("@bill_sales__note", hdb.bill_sales__note);
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
        public JsonResult Put(Hoadonban_MD hdb)
        {
            string query = @"
                           update dbo.bill_sales
                           set bill_sales_customer_id= @bill_sales_customer_id,
                            bill_sales_staff_id=@bill_sales_staff_id,
                            bill_sales_date_order=@bill_sales_date_order,
                            bill_sales_total_payment=@bill_sales_total_payment,
                            bill_sales_payments=@bill_sales_payments,
                            bill_sales__note=@bill_sales__note,
                            where bill_sales_id=@bill_sales_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_sales_customer_id", hdb.bill_sales_customer_id);
                    myCommand.Parameters.AddWithValue("@bill_sales_staff_id", hdb.bill_sales_staff_id);
                    myCommand.Parameters.AddWithValue("@bill_sales_date_order", hdb.bill_sales_date_order);
                    myCommand.Parameters.AddWithValue("@bill_sales_total_payment", hdb.bill_sales_total_payment);
                    myCommand.Parameters.AddWithValue("@bill_sales_payments", hdb.bill_sales_payments);
                    myCommand.Parameters.AddWithValue("@bill_sales__note", hdb.bill_sales__note);
                    myCommand.Parameters.AddWithValue("@bill_sales_id", hdb.bill_sales_id);
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
                           delete from dbo.bill_sales
                            where bill_sales_id=@bill_sales_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@bill_sales_id", id);

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
