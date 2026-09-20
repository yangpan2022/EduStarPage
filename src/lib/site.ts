export const site = {
  name: "EduStar Academic Centre",
  tagline:
    "Shaping futures, One student at a time. MOE registered education centre dedicated to academic excellence.",
  taglineZh: "塑造未来，从每一位学生开始。MOE 注册教育中心，致力于学术卓越。",
  phone: "+65 8858 2378",
  phoneHref: "tel:+6588582378",
  whatsapp: "https://wa.me/6588582378",
  instagram: "https://www.instagram.com/edustar_sg/",
  linkedin: "https://www.linkedin.com/company/edustar-academic-centre",
  xiaohongshu:
    "https://www.xiaohongshu.com/user/profile/5b3ed56811be106353c752e9?xsec_token=ABk-IfoIYdfUuhGuG4u0MYCNImQu3hrrd-8tMqhIFUPYE%3D&xsec_source=pc_search",
  email: "ops@edustarcorp.com",
  emailAlt: "alexzhaile@gmail.com",
  hours: "9:00 AM - 9:00 PM",
  hoursZh: "上午 9:00 - 晚上 9:00",
  addressLines: ["190 Middle Road, #15-06 Fortune Centre", "Singapore 188979"],
  mapEmbed:
    "https://maps.google.com/maps?q=190%20Middle%20Road%2C%20%2315-06%20Fortune%20Centre%20Singapore%20188979&t=m&z=16&output=embed&iwloc=near",
};

export type NavItem = {
  label: string;
  labelZh: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "About Us", labelZh: "关于我们", href: "/about-us" },
  { label: "Testimonial", labelZh: "学员评价", href: "/testimonial" },
  { label: "Meet Our Team", labelZh: "师资团队", href: "/meet-our-team" },
  {
    label: "Services",
    labelZh: "服务项目",
    href: "/services",
    children: [
      { label: "International Course", labelZh: "国际课程", href: "/internationalcourse" },
      {
        label: "Singapore Government Courses",
        labelZh: "新加坡政府学校课程",
        href: "/singaporegovernmentcourses",
      },
      { label: "University Admission", labelZh: "大学申请", href: "/university-admission" },
      {
        label: "Primary/Secondary School Admission",
        labelZh: "中小学入学",
        href: "/primary-secondary-school-admission",
      },
    ],
  },
  {
    label: "Resources",
    labelZh: "学习资源",
    href: "/resources",
    children: [
      { label: "University Test", labelZh: "升学测评", href: "/university-test" },
      { label: "Competitions", labelZh: "竞赛", href: "/competitions" },
      {
        label: "Questionbank",
        labelZh: "题库",
        href: "/questionbank",
        children: [
          { label: "Primary School", labelZh: "小学", href: "/questionbank/primary-school" },
          { label: "Secondary School", labelZh: "中学", href: "/questionbank/secondary-school" },
          { label: "IB Questionbank", labelZh: "IB 题库", href: "/questionbank/ib" },
        ],
      },
      {
        label: "Singapore International School",
        labelZh: "新加坡国际学校",
        href: "/singapore-international-school",
      },
    ],
  },
  { label: "Contact", labelZh: "联系我们", href: "/contact" },
];
