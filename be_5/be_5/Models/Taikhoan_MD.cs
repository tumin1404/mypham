using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class Taikhoan_MD
    {
        public int users_id { get; set; }
        public string users_full_name { get; set; }
        public string users_name { get; set; }
        public string users_password { get; set; }
        public string users_mail { get; set; }
        public string users_phone { get; set; }
        public string users_token { get; set; }
        public string users_role { get; set; }
        public string users_status { get; set; }
        public string users_note { get; set; }
        public string users_date_created { get; set; }
    }
}
