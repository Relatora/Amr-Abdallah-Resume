module.exports = {
  siteTitle: "Hi! I'm Amr Abdallah!",
  siteDescription: `This is my resume. Amr Abdallah`,
  keyWords: [
    'gatsbyjs',
    'react',
    'Web Development',
    'vue',
    'javascript',
    'html',
    'css',
    'go lang',
    'java',
    'spring boot',
    'python',
  ],
  authorName: 'Amr Abdallah',
  twitterUsername: 'relatora',
  githubUsername: 'Relatora',
  authorAvatar: '/images/avatar.png',
  authorDescription: `<p>Developer, passionate about what I do.</p>
 <p>In 2019 I enrolled in a postgraduate degree at Lambton College CSAC program (Computer Software & Database Development) where I learned many skills and implemented what I know in projects affiliated to Lambton research center such as developing a digital signage <strong>HTML/CSS/JS</strong> compiler that takes in a <strong>JSON</strong> string and automatically downloads assets via WebSocket from the web then maps these assets regardless of dimensions or location dynamically to a full page <strong>Electron JS</strong> browser page and all of that ran on a <strong>Raspberry Pi</strong> that can be placed behind any screens for display. </p>
 <p>I currently work as a software developer at Avaros EMR for my internship where I’m doing many exciting things such as integrating Twilio SMS in the scheduler backend using <strong>Go Lang and PostgreSQL. </strong> Also worked as part of a team on developing a patient online booking frontend using <strong>ReactJS</strong> developing many components. Furthermore, we worked on troubleshooting and adding functionality to a <strong>Java</strong> based EMR solution.</p>`,
  skills: [
    {
      name: 'HTML',
      level: 98,
    },
    {
      name: 'CSS',
      level: 90,
    },
    {
      name: 'Javascript',
      level: 95,
    },
    {
      name: 'NodeJs',
      level: 95,
    },
    {
      name: 'React',
      level: 90,
    },
    {
      name: 'Vue',
      level: 88,
    },
    {
      name: 'Go Lang',
      level: 90,
    },
    {
      name: 'Python',
      level: 93,
    },
    {
      name: 'C# MVC',
      level: 90,
    },
    {
      name: 'Android Development',
      level: 94,
    },
    {
      name: 'SQL (PostgreSQL, Oracle, MySQL, MongoDB, ...)',
      level: 96,
    },
    {
      name: 'Git',
      level: 80,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Avaros EMR',
      begin: {
        month: 'May',
        year: '2020',
      },
      duration: null,
      occupation: 'Full stack Developer',
      description: `I am part of the Corporate team, responsible for the development of: <br/>
        <ul>
          <li>
             Patients schedular backend using Go Lang.
          </li>
          <li>
             Online booking frontend using React + Webhooks, RxJS & TypeScript
          </li>
          <li>
            Various database migrations.
          </li>
          <li>
            Maintaining Oscar EMR by bug fixing and adding or modifying functionality.
          </li>
        </ul>`,
    },
    {
      company: 'Applied Research and Innovation Department Lambton College',
      begin: {
        month: 'nov',
        year: '2019',
      },
      duration: '6 Months',
      occupation: 'Software Developer',
      description: `
        <ul>
          <li>
             Created a digital signage solution for Eye Look Media. The client requested a player that takes in a JSON string containing the assets location and playlist with special rules for playing media. The assets then get's downloaded and gets diplayed according to stated locations, dimensions and rules. I implemented this solution with pure JavaScript and GSAP library.
          </li>
          <li>
             Researched together with my team the market for an Amazon like business. Formulated an investment document for LinkGreen. Assessed their system for vulnerabilities.
          </li>
        </ul>`,
    },
    {
      company: 'Tertec',
      begin: {
        month: 'june',
        year: '2019',
      },
      duration: '6 months',
      occupation: 'Software Developer',
      description:
        'Worked on an internet of things (IoT) project. Using Vue JS and D3 JS to build interactive components that can be dragged, dropped and manipulated.',
    },
    {
      company: 'Lambton College',
      begin: {
        month: 'Apr',
        year: '2019',
      },
      duration: '1 year',
      occupation: 'Tutor',
      description:
        'Helped students with courses such as Python, Database Development, Java SE/EE, C#, JS, Program Logic and Design and NodeJS.',
    },
    {
      company: 'Modern Education Schools',
      begin: {
        month: 'sep',
        year: '2016',
      },
      duration: '2 years',
      occupation: 'ICT Teacher',
      description:
        'Gathered resources and created the syllabus that was based on Microsoft Word, Excel, PowerPoint and Access together with Scratch Programming, flow charts, HTML and CSS for web development.',
    },
    {
      company: 'Modern Schools of Egypt',
      begin: {
        month: 'sep',
        year: '2016',
      },
      duration: '10 years',
      occupation: 'ICT Teacher',
      description:
        'Gathered resources and created the syllabus that was based on Microsoft Word, Excel, PowerPoint and Access together with Scratch Programming, flow charts, HTML and CSS for web development.',
    },
    {
      company: 'Gulf Network Solutions',
      begin: {
        month: 'sep',
        year: '2016',
      },
      duration: '3 years',
      occupation: 'Software Developer',
      description: `
        <ul>
          <li>
             SFA (Sales Force Automation): A developer to Sales Force automation solution using Pocket PC as the sales force terminal, MS SQL replication.
          </li>
          <li>
             McDonalds Egypt E-Learning Card Slips: Implementing the logic and algorithm of randomizing and categorizing of the E-Learning card slip batches that McDonald's has issued for promotion.
          </li>
          <li>
             Other utilities, services and tools for GNS internal usage.
          </li>
        </ul>`,
    },
    {
      company: 'Middle East Network Solutions',
      begin: {
        month: 'jan',
        year: '2000',
      },
      duration: '3 years',
      occupation: 'Software Developer',
      description: `
        <ul>
          <li>
             Developed as part of a team a SMS based banking solution for the National Bank of Egypt.
          </li>
          <li>
             Worked on an automated call center solution at Misr for Custody and Stock Depository. Team leader for developing their dynamic call center and Instructed a team to fully adapt the solution to their system .
          </li>
          <li>
             Developed Goldi’s dynamic call center solution.
          </li>
        </ul>`,
    },
  ],
  portifolio: [
    {
      image: '/images/Everalda_home.png',
      description: 'Everalda',
      url: 'http://12.42.204.30:7251/index.html',
    },
    {
      image: '/images/ExpoSure_backend_code.png',
      description: 'ExpoSure NodeJS Backend',
      url: 'https://github.com/Relatora/ExpoSure-Backend-NodeJS',
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/relatora',
    linkedin: 'https://www.linkedin.com/in/amr-samir-abdallah-b199194a/',
    github: 'https://github.com/Relatora',
    email: 'relatora@gmail.com',
  },
  siteUrl: 'https://www.linkedin.com/in/amr-samir-abdallah-b199194a/',
  pathPrefix: '/Amr-Resume', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'G-GP8DED3449',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  secondary_color: '#f56f42',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}
