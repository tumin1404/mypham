using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace be_5.Models
{
    public class Slide_MD
    {
        public int slide_id { get; set; }
        public int slide_staff_id { get; set; }
        public string slide_img { get; set; }
        public string slide_link { get; set; }
        public string slide_note { get; set; }
        public string slide_date_created { get; set; }
    }
}
