using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class Hoadonnhap_MD
    {
        public int bill_imports_id { get; set; }
        public int bill_imports_distributor_id { get; set; }
        public int bill_imports_staff_id { get; set; }
        public string bill_imports_date { get; set; }
        public string bill_imports_total_payment { get; set; }
        public string bill_imports_payments { get; set; }
        public string bill_imports_note { get; set; }
        public string bill_imports_date_created { get; set; }
    }
}
