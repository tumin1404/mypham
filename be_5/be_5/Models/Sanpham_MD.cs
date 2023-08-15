using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class Sanpham_MD
    {
        public int product_id { get; set; }
        public int product_cate_id { get; set; }
        public int product_distributor_id { get; set; }
        public string product_name { get; set; }
        public string product_img { get; set; }
        public string product_price { get; set; }
        public string product_sale { get; set; }
        public int product_quantity { get; set; }
        public string product_unit { get; set; }
        public string product_note { get; set; }
        public string product_date_created { get; set; }
    }
}
