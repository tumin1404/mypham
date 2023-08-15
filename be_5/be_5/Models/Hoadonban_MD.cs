using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class Hoadonban_MD
    {
        public int bill_sales_id { get; set; }
        public int bill_sales_customer_id { get; set; }
        public int bill_sales_staff_id { get; set; }
        public string bill_sales_date_order { get; set; }
        public string bill_sales_total_payment { get; set; }
        public string bill_sales_payments { get; set; }
        public string bill_sales__note { get; set; }
        public string bill_sales_date_created { get; set; }
    }
}
