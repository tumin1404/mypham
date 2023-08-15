using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class ChitietHoadonban_MD
    {
        public int sales_details_id { get; set; }
        public int sales_details_sales_id { get; set; }
        public int sales_details_product_id { get; set; }
        public int sales_details_product_quantity { get; set; }
        public float sales_details_product_sale { get; set; }
        public string sales_details_date_created { get; set; }
    }
}
