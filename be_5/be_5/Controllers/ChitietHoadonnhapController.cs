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
    public class ChitietHoadonnhapController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ChitietHoadonnhapController(IConfiguration configuration, IWebHostEnvironment env)
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
                            dbo.bill_imports_details
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
                            dbo.bill_imports_details where imports_details_id=@imports_details_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@imports_details_id", id);
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
                            dbo.bill_imports_details where imports_details_imports_id like @ten OR imports_details_product_id like @ten
                            OR imports_details_product_quantity like @ten OR imports_details_product_unit like @ten
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
        public JsonResult Post(ChitietHoadonnhap_MD cthdn)
        {
            string query = @"
                           insert into dbo.bill_imports_details
                           (imports_details_imports_id,imports_details_product_id,imports_details_product_quantity,imports_details_product_unit)
                    values (@imports_details_imports_id,@imports_details_product_id,@imports_details_product_quantity,@imports_details_product_unit)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@imports_details_imports_id", cthdn.imports_details_imports_id);
                    myCommand.Parameters.AddWithValue("@imports_details_product_id", cthdn.imports_details_product_id);
                    myCommand.Parameters.AddWithValue("@imports_details_product_quantity", cthdn.imports_details_product_quantity);
                    myCommand.Parameters.AddWithValue("@imports_details_product_unit", cthdn.imports_details_product_unit);
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
        public JsonResult Put(ChitietHoadonnhap_MD cthdn)
        {
            string query = @"
                           update dbo.bill_imports_details
                           set imports_details_imports_id= @imports_details_imports_id,
                            imports_details_product_id=@imports_details_product_id,
                            imports_details_product_quantity=@imports_details_product_quantity,
                            imports_details_product_unit=@imports_details_product_unit,
                            where imports_details_id=@imports_details_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@imports_details_imports_id", cthdn.imports_details_imports_id);
                    myCommand.Parameters.AddWithValue("@imports_details_product_id", cthdn.imports_details_product_id);
                    myCommand.Parameters.AddWithValue("@imports_details_product_quantity", cthdn.imports_details_product_quantity);
                    myCommand.Parameters.AddWithValue("@imports_details_product_unit", cthdn.imports_details_product_unit);
                    myCommand.Parameters.AddWithValue("@imports_details_id", cthdn.imports_details_id);
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
                           delete from dbo.bill_imports_details
                            where imports_details_id=@imports_details_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@imports_details_id", id);

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
