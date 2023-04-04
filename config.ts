const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Mateenius Portfolio";

/**
 * Basic Profile information you can change it to fit your needs.
 */
const PROFILE_INFO = {
  full_name: "Abdul mateen",
  occupation: "Software Engineer",
  nickname: "Mateenius",
  about: {
    title: "About Me ",
    description: `
    As a seasoned JavaScript developer, I have a deep understanding of the language and a broad experience working with its various environments, libraries, and frameworks. Whether it's developing front-end applications, building back-end systems, or integrating with APIs, I have a proven track record of delivering high-quality, scalable, and efficient solutions. I am passionate about coding and always strive to stay up-to-date with the latest technologies and best practices. My goal is to continue growing as a developer and make a positive impact in the tech community.
    
    I AM 🙋🏽 HERE TO HELP.
    
    Thankyou 🙏🏽🙏🏽!`,
    skills_title: "Tech Stack",
    certificate_title: "Certificates",
    work_experience_title: "Experience",
  },
};

/**
 * Main page greeting text
 */
const GREETING = {
  title: "Hi !",
  description: `My name is ${PROFILE_INFO.full_name} and I'm a ${PROFILE_INFO.occupation}`,
  buttonText: "Know More About Me !",
  onButtonHoverText: "Know More About Me !",
};


/**
 * Projects that you have worked on
 */
const PROJECTS = [
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
  }
];

/**
 * Your work experience
 */
const WORK_EXPERIENCES = [
  {
    company_name: "Techibits",
    job_title: "Software Engineer",
    description: ``,
    time_period: "May 2022 - Until",
    is_current: true,
    is_description: false,
    points: [
      "Responsible for creating and maintaining software products and projects using the LAMP stack (Linux, Apache, MySQL, and PHP).",
      "Front-end web technologies used includes React.js and jQuery.",
      "Mobile application technologies used includes React native, Capacitor Framework 7.",
      "Writing clean, maintainable, and efficient code. Both on front-end and back-end.",
      "Debugging, troubleshooting, and fixing technical issues in a timely manner.",
      `Designing and implementing complex business logic in there product.`,
    ],
    has_link: false,
    transition: {
      type: "linear",
      duration: 1.0,
    },
  }
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
