interface DataType {
   id: number;
   page:string;
   class_name?: string;
   img_transparent?:string;
   date: string;
   info_name: string;
   info_time: number;
   title: string;
   desc?:string;
   category?:string;
}[];

const inner_blog_data: DataType[] = [

   {
      id: 1,
      page:"blog_1",
      class_name: "blog-item-1",
      date: "08 JAN",
      info_name: "Mark Quins . ",
      info_time: 8,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 2,
      page:"blog_1",
      class_name: "blog-item-2",
      date: "17 AUG",
      info_name: "Rashed Kabir . ",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 3,
      page:"blog_1",
      class_name: "blog-item-3",
      date: "21 SEP",
      info_name: "Rashed Kabir . ",
      info_time: 8,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 4,
      page:"blog_1",
      class_name: "blog-item-4",
      date: "14 JUN",
      info_name: "Jannatul Ferdaus ",
      info_time: 7,
      title: "In a laoreet purus. Integer turpis quam, laoreet",
   },
   {
      id: 5,
      page:"blog_1",
      class_name: "blog-item-5",
      date: "07 FEB",
      info_name: "Jubayer Hasan ",
      info_time: 5,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 6,
      page:"blog_1",
      class_name: "blog-item-6",
      date: "21 SEP",
      info_name: "Mahfuz Riad ",
      info_time: 6,
      title: "Efficitur id eget nisl. Proin porta est convallis.",
   },
   {
      id: 7,
      page:"blog_1",
      class_name: "blog-item-4",
      date: "14 JUN",
      info_name: "Jannatul Ferdaus ",
      info_time: 7,
      title: "In a laoreet purus. Integer turpis quam, laoreet",
   },
   {
      id: 8,
      page:"blog_1",
      class_name: "blog-item-5",
      date: "07 FEB",
      info_name: "Jubayer Hasan ",
      info_time: 5,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 9,
      page:"blog_1",
      class_name: "blog-item-6",
      date: "21 SEP",
      info_name: "Mahfuz Riad ",
      info_time: 6,
      title: "Efficitur id eget nisl. Proin porta est convallis.",
   },
   {
      id: 10,
      page:"blog_1",
      class_name: "blog-item-1",
      date: "08 JAN",
      info_name: "Mark Quins . ",
      info_time: 8,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 11,
      page:"blog_1",
      class_name: "blog-item-2",
      date: "17 AUG",
      info_name: "Rashed Kabir . ",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 12,
      page:"blog_1",
      class_name: "blog-item-3",
      date: "21 SEP",
      info_name: "Rashed Kabir . ",
      info_time: 8,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 13,
      page:"blog_1",
      class_name: "blog-item-4",
      date: "14 JUN",
      info_name: "Jannatul Ferdaus ",
      info_time: 7,
      title: "In a laoreet purus. Integer turpis quam, laoreet",
   },
   {
      id: 14,
      page:"blog_1",
      class_name: "blog-item-5",
      date: "07 FEB",
      info_name: "Jubayer Hasan ",
      info_time: 5,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 15,
      page:"blog_1",
      class_name: "blog-item-6",
      date: "21 SEP",
      info_name: "Mahfuz Riad ",
      info_time: 6,
      title: "Efficitur id eget nisl. Proin porta est convallis.",
   },

   // blog_02
   
   {
      id: 1,
      page:"blog_2",
      class_name: "blog-item-1",
      date: "17 SEP",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Print, publishing qui visual ux layout mockups.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 2,
      page:"blog_2",
      class_name: "blog-item-2",
      date: "12 JULY",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 3,
      page:"blog_2",
      img_transparent: "bg-grey",
      date: "12 JULY",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Medieval to the digital everything there know",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 4,
      page:"blog_2",
      class_name: "blog-item-3",
      date: "03 JUN",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Speaking remotely at WordCamp US.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 5,
      page:"blog_2",
      class_name: "blog-item-4",
      date: "27 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Efficitur id eget nisl. Proin porta est convallis.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 6,
      page:"blog_2",
      class_name: "blog-item-3",
      date: "03 JUN",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Speaking remotely at WordCamp US.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 7,
      page:"blog_2",
      class_name: "blog-item-4",
      date: "27 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Efficitur id eget nisl. Proin porta est convallis.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 8,
      page:"blog_2",
      class_name: "blog-item-1",
      date: "17 SEP",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Print, publishing qui visual ux layout mockups.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 9,
      page:"blog_2",
      class_name: "blog-item-2",
      date: "12 JULY",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 10,
      page:"blog_2",
      img_transparent: "bg-grey",
      date: "12 JULY",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Medieval to the digital everything there know",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },
   {
      id: 11,
      page:"blog_2",
      class_name: "blog-item-3",
      date: "03 JUN",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Speaking remotely at WordCamp US.",
      desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
   },

   // blog_03
   
   {
      id: 1,
      page:"blog_3",
      category:"villa",
      class_name: "blog-3-item-1",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 2,
      page:"blog_3",
      category:"apartments",
      class_name: "blog-3-item-2",
      date: "12 AUG",
      info_name: "Jubayer Hasan . ",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 3,
      page:"blog_3",
      category:"mortgage",
      class_name: "blog-3-item-3",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "In a laoreet purus. Integer turpis quam, laoreet",
   },
   {
      id: 4,
      page:"blog_3",
      category:"home",
      class_name: "blog-3-item-4",
      date: "12 AUG",
      info_name: "Jannatul Ferdaus .  ",
      info_time: 6,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 5,
      page:"blog_3",
      category:"sale",
      class_name: "blog-3-item-5",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 6,
      page:"blog_3",
      category:"flat",
      class_name: "blog-3-item-6",
      date: "12 AUG",
      info_name: "Jubayer Hasan .",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 7,
      page:"blog_3",
      category:"villa",
      class_name: "blog-3-item-5",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 8,
      page:"blog_3",
      category:"sale",
      class_name: "blog-3-item-6",
      date: "12 AUG",
      info_name: "Jubayer Hasan .",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   }, {
      id: 9,
      page:"blog_3",
      category:"flat",
      class_name: "blog-3-item-1",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 10,
      page:"blog_3",
      category:"mortgage",
      class_name: "blog-3-item-2",
      date: "12 AUG",
      info_name: "Jubayer Hasan . ",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 11,
      page:"blog_3",
      category:"apartments",
      class_name: "blog-3-item-3",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "In a laoreet purus. Integer turpis quam, laoreet",
   },
   {
      id: 12,
      page:"blog_3",
      category:"villa",
      class_name: "blog-3-item-4",
      date: "12 AUG",
      info_name: "Jannatul Ferdaus .  ",
      info_time: 6,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 13,
      page:"blog_3",
      category:"home",
      class_name: "blog-3-item-1",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 13,
      page:"blog_3",
      category:"mortgage",
      class_name: "blog-3-item-2",
      date: "12 AUG",
      info_name: "Jubayer Hasan . ",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 15,
      page:"blog_3",
      category:"apartments",
      class_name: "blog-3-item-3",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "In a laoreet purus. Integer turpis quam, laoreet",
   },
   {
      id: 16,
      page:"blog_3",
      category:"home",
      class_name: "blog-3-item-4",
      date: "12 AUG",
      info_name: "Jannatul Ferdaus .  ",
      info_time: 6,
      title: "Print, publishing qui visual ux layout mockups.",
   },
   {
      id: 17,
      page:"blog_3",
      category:"sale",
      class_name: "blog-3-item-5",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 18,
      page:"blog_3",
      category:"sale",
      class_name: "blog-3-item-6",
      date: "12 AUG",
      info_name: "Jubayer Hasan .",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 19,
      page:"blog_3",
      category:"flat",
      class_name: "blog-3-item-5",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
   {
      id: 20,
      page:"blog_3",
      category:"villa",
      class_name: "blog-3-item-6",
      date: "12 AUG",
      info_name: "Jubayer Hasan .",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   }, {
      id: 21,
      page:"blog_3",
      category:"flat",
      class_name: "blog-3-item-1",
      date: "09 FEB",
      info_name: "Rashed Kabir . ",
      info_time: 6,
      title: "Spending Habits, 13 Tips for grow Your Money.",
   },
]

export default inner_blog_data;
