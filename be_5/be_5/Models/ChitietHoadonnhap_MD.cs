using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class ChitietHoadonnhap_MD
    {
        public int imports_details_id { get; set; }
        public int imports_details_imports_id { get; set; }
        public int imports_details_product_id { get; set; }
        public int imports_details_product_quantity { get; set; }
        public string imports_details_product_unit { get; set; }
        public string imports_details_date_created { get; set; }
    }
}
