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
    public class SanphamController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public SanphamController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [Route("GetAll")]
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select product_id,product_cate_id,product_distributor_id,product_name,
                            product_img,product_price,product_sale,product_quantity,product_unit,
                            product_note,product_date_created,cate_name,distributor_name
                            from
                            dbo.product,dbo.category,dbo.distributor
                            where product.product_cate_id=category.cate_id and product.product_distributor_id=distributor.distributor_id
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
                            select TOP(4)product_id,product_cate_id,product_name,product_img,product_price,product_sale,product_note,cate_name
                            from
                            dbo.product,dbo.category where product.product_cate_id=category.cate_id ORDER BY product_sale
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
                            select product_id,product_cate_id,product_name,product_img,
                            product_price,product_sale,product_quantity,product_unit,product_note,cate_name,distributor_name
                            from
                            dbo.product ,dbo.category,dbo.distributor where product.product_cate_id=category.cate_id
                            AND product.product_distributor_id=distributor.distributor_id AND product_id=@product_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@product_id", id);
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
                            select product_id,product_cate_id,product_name,
                            product_img,product_price,product_sale,product_note,cate_name,distributor_name
                            from dbo.product ,dbo.category,dbo.distributor
                            where product.product_cate_id=category.cate_id and product.product_distributor_id=distributor.distributor_id
                            AND product_name like @ten or product_price like @ten or product_sale like @ten
                            or product_quantity like @ten or product_unit like @ten or product_note like @ten
                            or cate_name like @ten or distributor_name like @ten
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
        [HttpGet("getcateid/{cate_id}")]
        public JsonResult GetbyCateLike(int cate_id)
        {
            string query = @"
                             select product_id,product_cate_id,product_name,product_img,product_price,product_sale,product_note,cate_name
                             from
                             dbo.product ,dbo.category where product.product_cate_id=category.cate_id AND cate_id=@cate_id
                             ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cate_id", cate_id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpGet("getcatedetail/{cate_id}")]
        public JsonResult GetbyCateDetail(int cate_id)
        {
            string query = @"
                             select top(4)product_id,product_cate_id,product_name,product_img,product_price,product_sale,product_note,cate_name
                             from
                             dbo.product ,dbo.category where product.product_cate_id=category.cate_id AND cate_id=@cate_id
                             ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cate_id", cate_id);
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
        public JsonResult Post(Sanpham_MD sp)
        {
            string query = @"
                           insert into dbo.product
                           (product_cate_id,product_distributor_id,product_name,product_img,product_price,product_sale,product_quantity,product_unit,product_note)
                    values (@product_cate_id,@product_distributor_id,@product_name,@product_img,@product_price,@product_sale,@product_quantity,@product_unit,@product_note)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@product_cate_id", sp.product_cate_id);
                    myCommand.Parameters.AddWithValue("@product_distributor_id", sp.product_distributor_id);
                    myCommand.Parameters.AddWithValue("@product_name", sp.product_name);
                    myCommand.Parameters.AddWithValue("@product_img", sp.product_img);
                    myCommand.Parameters.AddWithValue("@product_price", sp.product_price);
                    myCommand.Parameters.AddWithValue("@product_sale", sp.product_sale);
                    myCommand.Parameters.AddWithValue("@product_quantity", sp.product_quantity);
                    myCommand.Parameters.AddWithValue("@product_unit", sp.product_unit);
                    myCommand.Parameters.AddWithValue("@product_note", sp.product_note);
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
        public JsonResult Put(Sanpham_MD sp)
        {
            string query = @"
                           update dbo.product
                           set product_cate_id= @product_cate_id,
                            product_distributor_id=@product_distributor_id,
                            product_name=@product_name,
                            product_img=@product_img,
                            product_price=@product_price,
                            product_sale=@product_sale,
                            product_quantity=@product_quantity,
                            product_unit=@product_unit,
                            product_note=@product_note
                            where product_id=@product_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@product_id", sp.product_id);
                    myCommand.Parameters.AddWithValue("@product_cate_id", sp.product_cate_id);
                    myCommand.Parameters.AddWithValue("@product_distributor_id", sp.product_distributor_id);
                    myCommand.Parameters.AddWithValue("@product_name", sp.product_name);
                    myCommand.Parameters.AddWithValue("@product_img", sp.product_img);
                    myCommand.Parameters.AddWithValue("@product_price", sp.product_price);
                    myCommand.Parameters.AddWithValue("@product_sale", sp.product_sale);
                    myCommand.Parameters.AddWithValue("@product_quantity", sp.product_quantity);
                    myCommand.Parameters.AddWithValue("@product_unit", sp.product_unit);
                    myCommand.Parameters.AddWithValue("@product_note", sp.product_note);
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
                           delete from dbo.product
                            where product_id=@product_id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("myphamCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@product_id", id);

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
