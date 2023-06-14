export interface PostProps {
  id: string;
  img: any;
  imgAlt: string;
  title: string;
  cardText: string;
  date: string;
  hashtags: string[];
  extraImgs: string[];
  fullText: string;
}

export interface CardProps {
  id: string;
  img: any;
  imgAlt: string;
  title: string;
  cardText: string;
  date: string;
  hashtags: string[];
}

export const postsList: PostProps[] = [
  {
    id: "1a",
    img: "/images/blog-1post/class.jpg",
    imgAlt: "dive",
    title: "Course Sandefjord",
    cardText: "Final day of the Open Water course in Sandefjord",
    date: "12/06/23",
    hashtags: [
      "#sea",
      "#dive",

      "#scubadive",
      "#padi",
      "#course",
      "#summer",
      "#dive",
      "#sandefjord",
      "#scuba",
      "#padi",
      "#course",
    ],
    extraImgs: [
      "/images/blog-1post/sandefjordDive-logo.png",
      "/images/blog-1post/padi-logo.png",
    ],
    fullText: `Today marked the conclusion of our third course of the season at Sandfjord Dive School. We conducted a PADI Open Water Course and Junior Open Water Course with a team of three instructors and a group of seven students. With a small instructor-to-student ratio, we were able to provide personalized attention and deliver an excellent course.

    The course spanned four days, beginning with a day in the pool. During this session, we covered all the essential skills and techniques needed to ensure our students felt comfortable and performed well underwater. Following the pool training, we embarked on three days of ocean dives, with two dives scheduled each day.
    
    The final dive of the course served as a test for our students. They were required to plan and execute the dive alongside their dive buddy, while the instructor observed from a distance, like a supportive shadow. This allowed us to assess their readiness for certification. I had the pleasure of working closely with two students throughout the course, and I must say, they showed tremendous improvement from day one.
    
    Despite some challenging visibility conditions, we had a blast during this course. We encountered fascinating marine life such as nudibranchs, lobster, crabs, and a variety of colorful fish. Moreover, we were blessed with perfect summer weather and abundant sunshine throughout the entire course, making the experience even more enjoyable.
    
    Overall, it was a successful and rewarding course, providing our students with the necessary skills and knowledge to explore the underwater world safely. We look forward to more exciting adventures in the future!`,
  },
  {
    id: "2b",
    img: "/images/reef-shark.jpg",
    imgAlt: "dive",
    title: "Course Sandefjord",
    cardText: "Final day of the Open Water course in Sandefjord",
    date: "12/06/23",
    hashtags: ["#tech", "#javascript", "#software"],
    extraImgs: [
      "/images/blog-1post/sandefjordDive-logo.png",
      "/images/blog-1post/padi-logo.png",
    ],
    fullText: `Today marked the conclusion of our third course of the season at Sandfjord Dive School. We conducted a PADI Open Water Course and Junior Open Water Course with a team of three instructors and a group of seven students. With a small instructor-to-student ratio, we were able to provide personalized attention and deliver an excellent course.

    The course spanned four days, beginning with a day in the pool. During this session, we covered all the essential skills and techniques needed to ensure our students felt comfortable and performed well underwater. Following the pool training, we embarked on three days of ocean dives, with two dives scheduled each day.
    
    The final dive of the course served as a test for our students. They were required to plan and execute the dive alongside their dive buddy, while the instructor observed from a distance, like a supportive shadow. This allowed us to assess their readiness for certification. I had the pleasure of working closely with two students throughout the course, and I must say, they showed tremendous improvement from day one.
    
    Despite some challenging visibility conditions, we had a blast during this course. We encountered fascinating marine life such as nudibranchs, lobster, crabs, and a variety of colorful fish. Moreover, we were blessed with perfect summer weather and abundant sunshine throughout the entire course, making the experience even more enjoyable.
    
    Overall, it was a successful and rewarding course, providing our students with the necessary skills and knowledge to explore the underwater world safely. We look forward to more exciting adventures in the future!`,
  },
];
