﻿using System.Collections.Generic;

namespace CodeCamper.Model
{
    public class Session : SessionBrief
    {
        public string Description { get; set; }

        public Person Speaker { get; set; }

        public virtual Track Track { get; set; }


        public virtual ICollection<Attendance> AttendanceList { get; set; }
    }
}
