const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Armash Portfolio";

/**
 * Basic Profile information you can change it to fit your needs.
 */
const PROFILE_INFO = {
  full_name: "Syed Armash Hussain",
  occupation: "Software Engineer",
  nickname: "Armash XD",
  about: {
    title: "About Me ",
    description: `I am a software engineer with over 2.5 years of experience in the industry. 
    My main areas of expertise are Laravel, React, Vue, and front-end web development with HTML, CSS, and JavaScript. 
    I have a strong foundation in computer science principles and enjoy using my skills to build intuitive and efficient web applications. 
    I am passionate about staying up to date with the latest technologies and constantly improving my skillset. In my current role, 
    I have had the opportunity to work on a variety of projects, from small business websites to large-scale web applications. 
    I am a team player and enjoy collaborating with others to find creative solutions to complex problems.
     I am always looking for ways to make a positive impact through my 
     work and am excited to see what the future holds in this exciting field.`,
    skills_title: "Tech Stack",
    certificate_title: "Certificates",
    work_experience_title: "Experience",
  },
};

/**
 * Main page greeting text
 */
const GREETING = {
  title: "Hello, there folks !",
  description: `My name is ${PROFILE_INFO.full_name} and I'm a ${PROFILE_INFO.occupation} through Research And Development`,
  buttonText: "Know More About Me !",
  onButtonHoverText: "Know More About Me !",
};


/**
 * Projects that you have worked on
 */
const PROJECTS = [
  {
    title: "Healthcare talent link",
    description: `HealthcareTalentLink (HCTL) is a thriving platform driven by the ambition to link the diverse healthcare community and its talent. The digital platform focuses diligently on connecting all products, services, professionals, opportunities, and engagements within the healthcare realm`,
    link: "https://uat.healthcaretalentlink.com/about",
    img: "/assets/images/hctl.png",
    skills: [
      {
        title: "Html/CSS JavaScript",
      },
      {
        title: "Laravel",
      },
      {
        title: "React",
      },
      {
        title: "Next.js",
      },
      {
        title: "Tailwind",
      },
      {
        title: "MySQL",
      },
    ],
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
  {
    title: "Calendax",
    description: `Manage your appointments, events and much more using calendax.`,
    link: "https://calendax.daxclients.com/",
    img: "/assets/images/Calendax.png",
    skills: [
      {
        title: "Html/CSS JavaScript",
      },
      {
        title: "Laravel",
      },
      {
        title: "React",
      },
      {
        title: "jQuery",
      },
      {
        title: "MySQL",
      },
    ],
    transition: {
      type: "linear",
      duration: 0.8,
    },
  },
  {
    title: "My Res ERP",
    description: `ResERP software for real estate builders and developers is a 
    specialised enterprise resource planning system built for real estate builders, 
    developers, or construction companies’ unique needs.`,
    link: "https://demo.myreserp.com/login",
    img: "/assets/images/RESERP_2.PNG",
    skills: [
      {
        title: "Html/CSS JavaScript",
      },
      {
        title: "Laravel",
      },
      {
        title: "jQuery",
      },
      {
        title: "React",
      },
      {
        title: "MySQL",
      },
    ],
    transition: {
      type: "linear",
      duration: 1.2,
    },
  },
  {
    title: "Flex Market",
    description: `Flex Market is an E-commerce platform where you can buy and sell stuff.`,
    link: "https://flexemarket.com/",
    img: "/assets/images/FLEX.PNG",
    skills: [
      {
        title: "Html/CSS JavaScript",
      },
      {
        title: "Laravel",
      },
      {
        title: "Vue",
      },
      {
        title: "Nuxt.js",
      },
      {
        title: "MySQL",
      },
    ],
    transition: {
      type: "linear",
      duration: 1.4,
    },
  },
  {
    title: "Bullseye",
    description: `Bullseye survey conducts various surveys related to consumption of tobacco.`,
    link: "https://bulleyes.afnato.com/",
    img: "/assets/images/Bullseye.PNG",
    skills: [
      {
        title: "Html/CSS JavaScript",
      },
      {
        title: "Laravel",
      },
      {
        title: "React",
      },
      {
        title: "MySQL",
      },
    ],
    transition: {
      type: "linear",
      duration: 1.5,
    },
  },
];

/**
 * Your work experience
 */
const WORK_EXPERIENCES = [
  {
    company_name: "Digital Auxilius",
    job_title: "Software Engineer",
    description: `Responsible for creating and maintaining software products and projects using the LAMP stack (Linux, Apache, MySQL, and PHP)
    Front-end technologies used include Next.js, React.js, and jQuery. Responsible for leading a team of 2-3 individuals. .`,
    time_period: "Sep 2022",
    is_current: true,
    is_description: false,
    points: [
      "Responsible for creating and maintaining software products and projects using the LAMP stack (Linux, Apache, MySQL, and PHP).",
      "Working on front-end using Next.js, React.js, Tailwind, Ant Design and jQuery.",
      "Leading two junior developers and assisting seniors in daily tasks.",
      "Reviewing Pull Requests and troubleshooting if there are any bugs.",
      "Writing clean, maintainable, and efficient code. Both on front-end and back-end.",
      "Debugging, troubleshooting, and fixing technical issues in a timely manner.",
    ],
    has_link: false,
    transition: {
      type: "linear",
      duration: 0.8,
    },
  },
  {
    company_name: "Techibits",
    job_title: "Software Engineer",
    description: ``,
    time_period: "May 2021 - Sep 2022",
    is_current: false,
    is_description: false,
    points: [
      "Responsible for creating and maintaining software products and projects using the LAMP stack (Linux, Apache, MySQL, and PHP).",
      "Front-end technologies used includes React.js and jQuery.",
      "Writing clean, maintainable, and efficient code. Both on front-end and back-end.",
      "Debugging, troubleshooting, and fixing technical issues in a timely manner.",
      `Designing and implementing complex business logic in there product.`,
    ],
    has_link: false,
    transition: {
      type: "linear",
      duration: 1.0,
    },
  },
  {
    company_name: "Boossto !",
    job_title: "Web Developer",
    description: ``,
    time_period: "Nov 2020 - May 2021",
    points: [""],
    is_description: true,
    has_link: false,
    is_current: false,
    transition: {
      type: "linear",
      duration: 1.2,
    },
  },
];

const VISIBILITY = {
  show_projects: true, // show projects default is true
  show_skills: true, // show skills default is true
  show_experiences: true, // show experiences default is true
  show_about_me: true, // show about me section default is true
  show_github_repo: true, // you can find the fetch function in services/fetchGithubProfile use your api key to show your repos. default is true
}


/**
 * Since i am using daisy ui for this project, I'm limited to what themes they have provided you can create your own theme using daisyui.
 * https://daisyui.com/docs/themes/
 * My theme changer only supports swapping between two themes hence you can use only two themes for now. In future you will be able to switch between multiple themes.
 * After adding your themes here don't forget to add your themes in tailwind.config.js
 * I will be improving this feature in future. :-)
 */
const APP_THEMES = ["black", "light"];

export {
  VISIBILITY,
  PROFILE_INFO,
  APP_NAME,
  GREETING,
  PROJECTS,
  APP_THEMES,
  WORK_EXPERIENCES,
};
