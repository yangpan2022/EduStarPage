export const site = {
  name: "EduStar Academic Centre",
  tagline:
    "Shaping futures, One student at a time. MOE registered education centre dedicated to academic excellence.",
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
  addressLines: ["190 Middle Road, #15-06 Fortune Centre", "Singapore 188979"],
  mapEmbed:
    "https://maps.google.com/maps?q=190%20Middle%20Road%2C%20%2315-06%20Fortune%20Centre%20Singapore%20188979&t=m&z=16&output=embed&iwloc=near",
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Meet Our Team", href: "/meet-our-team" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "International Course", href: "/internationalcourse" },
      {
        label: "Singapore Government Courses",
        href: "/singaporegovernmentcourses",
      },
      { label: "University Admission", href: "/university-admission" },
      {
        label: "Primary/Secondary School Admission",
        href: "/primary-secondary-school-admission",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "University Test", href: "/university-test" },
      { label: "Competitions", href: "/competitions" },
      {
        label: "Questionbank",
        href: "/questionbank",
        children: [
          { label: "Primary School", href: "/questionbank/primary-school" },
          { label: "Secondary School", href: "/questionbank/secondary-school" },
          { label: "IB Questionbank", href: "/questionbank/ib" },
        ],
      },
      {
        label: "Singapore International School",
        href: "/singapore-international-school",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];
