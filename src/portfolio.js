/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Junaid Afzal",
  title: "Hi all, I'm Junaid",
  subTitle: emoji(
    "Open Source Enthusiast and Passionate Machine Learning Engineer with extensive experience in LLMs, chatbots, stable diffusion, and voice processing. Skilled in deploying AI models, serverless architectures, and developing innovative AI-driven tools. Proven track record in contributing to significant funding rounds and delivering impactful AI solutions that enhance user experience and operational efficiency."
  ),
  resumeLink:
    "src/containers/resume/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/imJunaidAfzal",
  linkedin: "https://www.linkedin.com/in/imjunaidafzal/",
  gmail: "junaid729710211597@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/15276432/junaidafzal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE MACHINE LEARNING ENGINEER AND OPEN SOURCE ENTHUSIAST",
  skills: [
    emoji("⚡ Develop and fine-tune Large Language Models (LLMs) for various applications"),
    emoji("⚡ Build and deploy advanced chatbots and AI-driven tools"),
    emoji("⚡ Expertise in stable diffusion and generative AI for creating innovative solutions"),
    emoji("⚡ Implement voice processing systems including speech-to-text and text-to-speech"),
    emoji("⚡ Contribute to open source projects and foster collaborative innovation"),
    emoji("⚡ Design and deploy serverless architectures for scalable AI solutions"),
    emoji("⚡ Develop and manage data ingestion and transformation pipelines"),
    emoji("⚡ Integration of AI models with cloud services such as AWS, GCP, and Azure")
  ],

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "OpenCV",
    fontAwesomeClassname: "fas fa-video"
  },
  {
    skillName: "HuggingFace",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Stable Diffusion",
    fontAwesomeClassname: "fas fa-magic"
  },
  {
    skillName: "Generative AI",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "LLMs",
    fontAwesomeClassname: "fas fa-cogs"
  },
  {
    skillName: "Voice Analysis",
    fontAwesomeClassname: "fas fa-microphone"
  },
  {
    skillName: "Open Source",
    fontAwesomeClassname: "fas fa-code-branch"
  },
  {
    skillName: "Serverless",
    fontAwesomeClassname: "fas fa-cloud"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "GCP",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "FastAPI",
    fontAwesomeClassname: "fas fa-rocket"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
    skillName: "Chatbots",
    fontAwesomeClassname: "fas fa-comments"
  },
  {
    skillName: "NLP",
    fontAwesomeClassname: "fas fa-language"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning/AI",
      progressPercentage: "90%"
    },
    {
      Stack: "LLMOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Services",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/athena.png"),
      projectName: "Athena FundX",
      projectDesc: "Athena FundX is a platform dedicated to empowering the next generation of women entrepreneurs. I have designed the AI services from the ground up to provide invaluable guidance and support. Our AI-assisted learning modules help transform startup visions into reality, ensuring female entrepreneurs have access to the necessary resources and support. From financial inclusion to awards and events, Athena FundX is committed to driving equitable participation in the startup ecosystem and fostering innovation among women worldwide.",
      footerLink: [
        {
          name: "Athena FundX",
          url: "https://athenafundx.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Advanced Data Science with IBM Specialization",
      subtitle: "Completed a comprehensive specialization in Advanced Data Science with IBM.",
      image: require("./assets/images/IBM_logo_in.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/VPRV6FWR56XC"
        }
      ]
    },
    {
      title: "Operationalizing LLMs on Azure",
      subtitle: "Earned certification from Duke University for Operationalizing Large Language Models in production.",
      image: require("./assets/images/dukeLogo.png"),
      imageAlt: "Duke University Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/JK5KM9D3QSGB"
        }
      ]
    },
    {
      title: "Deploying Machine Learning Models in Production",
      subtitle: "Earned certification from DeepLearning.AI for Deploying and managing AI models in production.",
      image: require("./assets/images/deeplearningai.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/GPSK7X3WWHBW"
        }
      ]
    },
    {
      title: "Scientific Computing and Python for Data Science",
      subtitle: "Earned certification with HONORS for Scientific Computing with Python.",
      image: require("./assets/images/WQU_logo_color.png"),
      imageAlt: "worldquant university logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://wqu.thedataincubator.com/certificate/6280780879757312"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3134594790",
  email_address: "junaid729710211597@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
