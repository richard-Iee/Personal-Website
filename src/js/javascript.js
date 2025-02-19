const lazyload = () => {
  let wt = $(window).scrollTop(); //* top of the window
  let wb = wt + $(window).height(); //* bottom of the window

  $(".content-lazyload").each(function () {
    let ot = $(this).offset().top; //* top of object (i.e. advertising div)
    let ob = ot + $(this).height(); //* bottom of object

    let SERVER_RENDER_CONTENT = /*html*/ `
      <section id="s2Render" class="s2 sansSerifFLF-demibold">
        <div>
          <p
            class="sansSerifFLF-medium intro-description job-title pt-4 pt-xl-5 mt-0 mt-xl-5 mb-0 mb-xl-5"
          >
            <span class="sansSerifFLF-italic">G'day</span>, my name is
            <span class="sansSerifFLF-demibold">Richard</span>, welcome to my little
            corner of the internet! I'm an undergraduate honours student at the
            <span
              class="usyd-orange cursor-pointer"
              onclick="window.open('https://www.sydney.edu.au/', '_blank');"
              >University of Sydney</span
            >, <span class="australia-green">Australia</span>. You can find me on
            <span
              onclick="window.open('https://www.linkedin.com/in/richard875/', '_blank');"
              class="linkedin-blue cursor-pointer"
              ><u>Linkedin</u></span
            >
            or
            <span
              onclick="window.open('mailto:hello@richard-lee.com', '_blank');"
              class="red cursor-pointer"
              ><u>email me</u></span
            >.
            <span class="desktop-intro-description">
              Simply get started by hovering over the
              <span class="sansSerifFLF-demibold yellow">navigation bar</span>, hope
              you enjoy my page and have a great day!
            </span>
            <span class="mobile-intro-description">
              Hope you enjoy my page and have a great day!
            </span>
          </p>
          <div class="gap d-none d-xl-block"></div>
        </div>
        <div data-aos="fade-up" class="pics-summary d-flex flex-column flex-xl-row">
          <div
            class="pic-summary pic-summary-border d-flex align-items-center justify-content-center"
          >
            <img width="10%" class="slik-logo d-block d-sm-none" />
            <img
              width="7%"
              class="slik-logo d-none d-sm-block d-xl-none"
            />
            <img width="20%" class="slik-logo d-none d-xl-block" />
          </div>
          <div
            class="pic-summary pic-summary-border d-flex align-items-center justify-content-center"
          >
            <img width="45%" class="d-block d-sm-none" src="./Assets/uoa.png" />
            <img
              width="30%"
              class="d-none d-sm-block d-xl-none"
              src="./Assets/uoa.png"
            />
            <img width="60%" class="d-none d-xl-block" src="./Assets/uoa.png" />
          </div>
          <div
            class="pic-summary pic-summary-border d-flex align-items-center justify-content-center"
          >
            <img width="40%" class="usyd-logo d-block d-sm-none" />
            <img width="65%" class="usyd-logo d-none d-xl-block" />
            <img width="30%" class="usyd-logo pb-4 d-none d-sm-block d-xl-none" />
          </div>
          <div
            class="pic-summary pic-summary-border d-flex align-items-center justify-content-center"
          >
            <img width="50%" class="nz-gov-logo d-block d-sm-none" />
            <img width="35%" class="nz-gov-logo d-none d-sm-block d-xl-none" />
            <img width="70%" class="nz-gov-logo d-none d-xl-block" />
          </div>
          <div
            class="pic-summary pic-summary-border-last d-flex align-items-center justify-content-center"
          >
            <img width="40%" class="d-block d-sm-none" src="./Assets/yourcar.png" />
            <img
              width="25%"
              class="d-none d-sm-block d-xl-none"
              src="./Assets/yourcar.png"
            />
            <img width="60%" class="d-none d-xl-block" src="./Assets/yourcar.png" />
          </div>
        </div>
        <p class="big-title" id="internExperienceAndProjects">
          Work Experience & Projects
        </p>
        <p class="medium-title">Work Experience</p>
        <hr />
        <div class="gap-small"></div>
        <img class="slik-logo d-sm-none" width="10%" />
        <div class="gap d-sm-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Creative Software Engineer</p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img class="slik-logo" height="100%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">
          SLIK Creative Agency&nbsp;&nbsp;|&nbsp;&nbsp;Jun<span class="d-none d-sm-inline-block">e</span> 2022 — Dec<span class="d-none d-sm-inline-block">ember</span> 2022&nbsp;&nbsp;|&nbsp;&nbsp;Sydney, Australia
        </p>
        <p class="job-description">
          • Created Australia's first Metaverse virtual playground with Three.js and Blender for hosting virtual meetings and corporate events
        </p>
        <p class="job-description">
          • Developed statically generated web apps with Gatsby for Nine News, including
          <a class="red" href="https://impact-report.smh.com.au" target="_blank"
            ><u>Sydney Morning Herald's Annual Impact Report</u></a
          >
        </p>
        <p class="job-description">
          • Migrated a legacy email builder app from Angular to React for better maintainability and redesigned its UI for a refined user experience
        </p>
        <p class="job-description">
          - <span class="red">Tech stack</span>: React/Gatsby • Contentful • Node.js/Nest.js • MongoDB • Three.js • GSAP • Blender • Netlify • Heroku • AWS
        </p>
        <div class="gap"></div>
        <img class="nz-gov-logo d-sm-none" width="45%" />
        <div class="gap d-sm-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red mb-0">Software Engineer (Fixed term)</p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img class="nz-gov-logo" height="100%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap-small d-block d-sm-none mt-1"></div>
        <p class="date-range pt-0">Government of New Zealand, Waitemata District Health Board</p>
        <p class="date-range">
          Aug<span class="d-none d-sm-inline-block">ust</span> 2021 — Feb<span
            class="d-none d-sm-inline-block"
            >ruary</span
          >
          2022&nbsp;&nbsp;|&nbsp;&nbsp;Auckland, New Zealand
        </p>
        <p class="job-description">
          • Developed and designed a monitoring web application with Angular and .NET Core to monitor hospitals' legacy system status
        </p>
        <p class="job-description">
          • Implemented and designed a bespoke management dashboard web application for the admin to manipulate data stored in Redis
        </p>
        <p class="job-description">
          • Improved Google Chrome's lighthouse score for an application by over 60% by redesigning the frontend layout structure
        </p>
        <p class="job-description">
          - <span class="red">Tech stack</span>: Angular • .NET • Redis • C# • TypeScript • Oracle SQL Database • Jira • Azure DevOps
        </p>
        <div class="gap"></div>
        <img class="summary-canary-logo d-sm-none" width="35%" />
        <div class="gap d-sm-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Software Engineer</p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img class="summary-canary-logo" height="90%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">Canary Data Solutions Ltd.&nbsp;&nbsp;|&nbsp;&nbsp;Sep<span class="d-none d-sm-inline-block">tember</span> 2020 — Aug<span
            class="d-none d-sm-inline-block"
            >ust</span
          >
          2021&nbsp;&nbsp;|&nbsp;&nbsp;Auckland, New Zealand
        </p>
        <p class="job-description">
          • Engaged and worked with clients from all sectors to develop custom applications to suit their business needs
        </p>
        <p class="job-description">
          • Complete redesign of the company website by incorporating modern design principles
          <a class="red" href="https://canary.co.nz/" target="_blank"
            ><u>(https://www.canary.co.nz/)</u></a
          >
        </p>
        <p class="job-description">
          • Reduced an application's runtime error by over 65% by migrating the backend server to TypeScript and introducing unit tests
        </p>
        <p class="job-description">
          - <span class="red">Tech stack</span>: Vue • TypeScript • ASP.NET • C#/VB • Microsoft SQL Server • Knockout.js • Jenkins • TeamCity • Octopus
        </p>
        <div class="gap"></div>
        <img class="d-sm-none" src="./Assets/chancery.png" width="10%" />
        <div class="gap d-sm-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">
              Software Engineer - Chancery investment banking interview App
            </p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img src="./Assets/chancery.png" height="90%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">
          Sep<span class="d-none d-sm-inline-block">tember</span> 2020 — Mar<span
            class="d-none d-sm-inline-block"
            >ch</span
          >
          2021&nbsp;&nbsp;|&nbsp;&nbsp;Berkeley, CA
        </p>
        <p class="job-description">
          • Improved front-end fetch logic by adding helper functions
        </p>
        <p class="job-description">
          • Improved mobile browsing experience by redesigning the mobile layout
        </p>
        <p class="job-description">
          • Created the front-end UI and logic for the feedback button
        </p>
        <p class="job-description">
          - <span class="red">Tech stack</span>: React • Node.js • jQuery • Bootstrap
        </p>
        <div class="gap"></div>
        <img class="d-sm-none" src="./Assets/yourcar.png" width="30%" />
        <div class="gap d-sm-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Intern Software Developer</p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img src="./Assets/yourcar.png" height="60%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">Yourcar (Startup)&nbsp;&nbsp;|&nbsp;&nbsp;Jan<span class="d-none d-sm-inline-block">uary</span> 2020 — Sep<span
            class="d-none d-sm-inline-block"
            >tember</span
          >
          2020&nbsp;&nbsp;|&nbsp;&nbsp;Auckland, New Zealand
        </p>
        <p class="job-description">
          • Developed an internal tool that calculates the write-off percentage of New Zealand new vehicles in the first 18 months of purchase
        </p>
        <p class="job-description">
          • Improved company web application's durability by implementing a complete functional test on the frontend site using Cypress
        </p>
        <p class="job-description">
          • Gained valuable professional experience by working in a fast-paced startup environment
        </p>
        <p class="job-description">
          - <span class="red">Skills gained</span>: React/Next.js • PostgreSQL • GraphQL • Postman API Testing • Jest • Cypress • HubSpot • Barista Skills! &#9749;
        </p>
        <div class="gap"></div>
        <img class="d-sm-none" src="./Assets/uoa.png" width="45%" />
        <div class="gap d-sm-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Web Developer</p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img src="./Assets/uoa.png" height="150%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">The University of Auckland&nbsp;&nbsp;|&nbsp;&nbsp;Jan<span class="d-none d-sm-inline-block">uary</span> 2020 — Nov<span
            class="d-none d-sm-inline-block"
            >ember</span
          >
          2020&nbsp;&nbsp;|&nbsp;&nbsp;Marketing team
        </p>
        <p class="job-description">
          • Working in a team of four, we rebuilt and designed Velocity (CIE)'s
          Website with Javascript and WordPress
        </p>
        <p class="job-description">• Maintenance of the Velocity Website</p>
        <p class="job-description">
          - <span class="red">Tech stack</span>: WordPress • HTML • CSS • Javascript •
          Git
        </p>
        <a
          href="./Assets/downableMaterial/velocityWebsite.jpg"
          target="_blank"
          class="pButton"
        >
          <div class="pButtonText">View my design!</div>
          <div class="pButtonimage">
            <img src="./Assets/figma.png" height="60%" />
          </div>
        </a>
        <div class="gap d-block d-sm-none"></div>
        <p class="medium-title">Software Projects</p>
        <hr />
        <div class="title-box">
          <div class="h-100 d-flex flex-row">
            <p class="job-title red">
              Leetcode Algorithm Practice Web Application <span style="cursor: pointer;" onclick="window.open('https://neetcode.richard-lee.com/',  '_blank');">(<u>Link</u>)</span>
            </p>
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="job-description w-100">
          • Designed and developed a coding practice web application to try out the new Vue Nuxt 3 framework
        </p>
        <p class="job-description w-100">
          • Incorporated persistent data storage to store and retrieve user comments and track study progress
        </p>
        <p class="job-description w-100">
          • Implemented IBM's Carbon Design System for user interface design to achieve a clean and streamlined user experience
        </p>
        <p class="job-description">
          - <span class="red">Utilised</span>: Vue 3 • Nuxt 3 • TypeScript • Tailwind CSS • Carbon Design System • Caching • Persistent Data Storage
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100 d-flex flex-row">
            <p class="job-title red">
              Chrome extension to enable YouTube comment section
            </p>
            <img
              src="./Assets/youtube.png"
              class="h-100 pb-0 pb-md-1 pb-lg-0 pl-3 d-none d-sm-block"
            />
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="job-description w-100">
          • Developed a Chrome browser extension that lets user comment on “comment
          disabled” YouTube videos
        </p>
        <p class="job-description w-100">
          • Created an algorithm that sorts comments with timestamp and number of
          likes as attributes
        </p>
        <p class="job-description w-100">
          • Host on AWS with AWS DynamoDB and AWS Lambda
        </p>
        <p class="job-description w-100">
          • Integrated OAuth and OpenCV for one-click log in
        </p>
        <p class="job-description">
          - <span class="red">Utilised</span>: jQuery • AJAX • AWS DynamoDB • AWS
          Lambda • Serverless • Chrome extension SDK • Node.js
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100 d-flex flex-row">
            <p class="job-title text-nowrap-tablet red">
              Nasdaq ETF portfolio copier and autotrader
            </p>
            <img
              class="nasdaq-logo h-75 pb-0 pb-md-1 pb-lg-0 pl-3 d-none d-sm-block"
            />
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="job-description w-100">
          • Developed an automation software that fetches ETF portfolios from web API
          and calculates changes made since the last fetch
        </p>
        <p class="job-description w-100">
          • Software will send out daily reports to notify the user of portfolio
          changes
        </p>
        <p class="job-description w-100">
          • When connected to trading brokers, the software can use API calls to
          execute orders
        </p>
        <p class="job-description">
          - <span class="red">Utilised</span>: Node.js • AJAX • TypeScript • Moment.js
          • Nodemailer • Shell commands • Beautifulsoup
        </p>
        <a
          href="https://github.com/richard875/OutSmartNASQ-tracker"
          target="_black"
          class="pButton"
        >
          <div class="pButtonText">View on Github</div>
          <div class="pButtonimage" style="background-color: #212121">
            <i class="fab fa-github white github-button-icon"></i>
          </div>
        </a>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">
              Personal portfolio website
              <span class="black">(this project!)</span>
            </p>
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="job-description">
          • Developed my own portfolio website to better present myself
        </p>
        <p class="job-description">
          • Used to host on AWS with S3, Route 53 and Cloudfront, now housing with
          Netlify
        </p>
        <p class="job-description">
          - <span class="red">Utilised</span>: Netlify • HTML • CSS • JavaScript •
          jQuery • Bootstrap • Knockout • Font Awesome
        </p>
        <a
          href="https://github.com/richard875/Personal-Website"
          target="_black"
          class="pButton"
        >
          <div class="pButtonText">View on Github</div>
          <div class="pButtonimage" style="background-color: #212121">
            <i class="fab fa-github white github-button-icon"></i>
          </div>
        </a>
        <div class="gap"></div>

        <div class="gap d-none d-sm-block d-lg-block d-xl-none"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">University of Auckland Morotsport Club Mobile Application</p>
          </div>
          <div class="w-25 d-none d-sm-block">
            <img loading="lazy" src="./Assets/appQR.png" class="qrCodeExpo" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="job-description job-description-app">
          • Developed a cross-platform mobile App for my University Club to share news and upcoming events using React Native and Expo
        </p>
        <p class="job-description job-description-app">
          • Created a backend API for the App with AWS DynamoDB and AWS Lambda using the Serverless framework
        </p>
        <p class="job-description job-description-app">
          • Maintenance of the App including posting new articles, fixing bugs and issuing updates
        </p>
        <p class="job-description">
          - <span class="red">Utilised</span>: React Native • Expo • React Router • AWS DynamoDB • AWS Lambda • The Serverless Framework
        </p>
        <a
          href="https://github.com/richard875/Motorsport-Club"
          target="_blank"
          class="pButton"
        >
          <div class="pButtonText">View on Github</div>
          <div class="pButtonimage" style="background-color: #ff4141">
            <img src="./Assets/icon.png" class="motorsport-button-icon" />
          </div>
        </a>
        <div data-aos="fade-up" class="appPic w-100 d-flex flex-row">
          <div
            class="picBox w-100 d-flex align-items-center"
            style="scroll-snap-align: start"
          >
            <img loading="lazy" style="width: 90%" src="./Assets/appPic1.png" />
          </div>
          <div
            class="picBox w-100 d-flex align-items-center justify-content-center"
            style="scroll-snap-align: center"
          >
            <img loading="lazy" style="width: 90%" src="./Assets/appPic2.png" />
          </div>
          <div
            class="picBox w-100 d-flex align-items-center justify-content-end"
            style="scroll-snap-align: end"
          >
            <img loading="lazy" style="width: 90%" src="./Assets/appPic3.png" />
          </div>
        </div>
        <div class="gap d-none d-sm-block d-lg-block d-xl-none"></div>
        <div class="gap d-none d-sm-block d-lg-block d-xl-none"></div>
        <div class="gap d-none d-sm-block d-lg-block d-xl-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="big-title" id="skills">Skills</p>
        <hr class="d-sm-none" />
        <div data-aos="fade-up" class="d-none d-lg-block m-auto" style="width: 90%">
          <div
            class="skills-grid d-flex flex-row align-items-center justify-content-between mt-5 mb-5"
          >
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/typescript.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                JavaScript / TypeScript
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/dotnet.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                ASP.NET
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/cSharp.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                C# / VB
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/react.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                React / React Native
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/graphQL.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                GraphQL
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/jest.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                Jest
              </div>
            </div>
          </div>
          <div
            class="skills-grid d-flex flex-row align-items-center justify-content-around mt-5"
          >
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/aws.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                AWS / Serverless
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/octopus.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                Octopus Deploy
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/teamcity.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                TeamCity
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/python.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                Python
              </div>
            </div>
            <div class="my-skill h-100 d-flex flex-column">
              <div
                class="skills-svg d-flex align-items-center justify-content-center"
              >
                <img loading="lazy" src="./Assets/skills/mssql.svg" />
              </div>
              <div
                class="skills-name d-flex align-items-center justify-content-center text-center"
              >
                mssql
              </div>
            </div>
          </div>
        </div>
        <div class="gap d-none d-sm-block d-lg-block d-xl-none"></div>
        <div class="gap"></div>
        <div data-aos="fade-up">
          <div class="title-box">
            <div class="h-100">
              <p class="skills-text black">ASP.NET / C#</p>
            </div>
          </div>
          <div class="gap d-block d-sm-none"></div>
          <div class="w-75"><div class="skill-set"></div></div>
          <div class="gap"></div>
          <div class="title-box">
            <div class="h-100">
              <p class="skills-text black">JavaScript / TypeScript</p>
            </div>
          </div>
          <div class="gap d-block d-sm-none"></div>
          <div class="w-75"><div class="skill-set"></div></div>
          <div class="gap"></div>
          <div class="title-box">
            <div class="h-100">
              <p class="skills-text black">Python</p>
            </div>
          </div>
          <div class="gap d-block d-sm-none"></div>
          <div class="w-50"><div class="skill-set"></div></div>
          <div class="gap"></div>
          <div class="title-box">
            <div class="h-100">
              <p class="skills-text black">React and React Native</p>
            </div>
          </div>
          <div class="gap d-block d-sm-none"></div>
          <div class="w-50"><div class="skill-set"></div></div>
          <div class="gap"></div>
          <div class="title-box">
            <div class="h-100">
              <p class="skills-text black">Version Control</p>
            </div>
          </div>
          <div class="gap d-block d-sm-none"></div>
          <div class="w-50"><div class="skill-set"></div></div>
          <div class="gap"></div>
          <div class="title-box">
            <div class="h-100">
              <p class="skills-text black">AWS / Serverless</p>
            </div>
          </div>
          <div class="gap d-block d-sm-none"></div>
          <div class="w-25"><div class="skill-set"></div></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="big-title">Volunteering & Employments</p>
        <p class="medium-title" id="volunteeringAndOthers">Volunteering and Others</p>
        <hr />
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">University of Auckland Motorsport Club</p>
          </div>
          <div class="title-box-right d-none d-sm-flex">
            <img src="./Assets/redBull.png" height="80%" />
          </div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">
          <span class="red">- President and founder</span> | Jul<span
            class="d-none d-sm-inline-block"
            >y</span
          >
          2019 — Jul<span class="d-none d-sm-inline-block">y</span>
          2020
        </p>
        <p class="date-range">
          <span class="red">- Secretary and software engineer</span> | Jul<span
            class="d-none d-sm-inline-block"
            >y</span
          >
          2020 — Feb<span class="d-none d-sm-inline-block">ruary</span>
          2021
        </p>
        <div class="gap-small d-none d-xl-block"></div>
        <p class="job-description w-100">
          • Founded the University of Auckland Motorsport Club in my first year of
          University (~500 Members)
        </p>
        <p class="job-description w-100">
          • The purpose of the club is to create entertainment for busy University
          life as well as promote Safe Driving
        </p>
        <p class="job-description w-100">
          • Sponsored by Red Bull, hold events about once every month during the
          semesters
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100 d-flex flex-row">
            <p class="job-title text-nowrap-tablet red">
              University of Auckland Centre for Innovation and Entrepreneurship
            </p>
            <img
              src="./Assets/velocity_logo_square.png"
              class="h-75 pl-3 mt-1 d-none d-sm-block"
            />
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">
          Aug<span class="d-none d-sm-inline-block">ust</span> 2019 — Dec<span
            class="d-none d-sm-inline-block"
            >ember</span
          >
          2019&nbsp;&nbsp;|&nbsp;&nbsp;Education team
        </p>
        <p class="job-description w-100">
          • MC for innovation seminars which runs fortnightly
        </p>
        <p class="job-description w-100">
          • Volunteer at Velocity events, e.g. Innovation challenge, 100k finals
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100 d-flex flex-row">
            <p class="job-title text-nowrap-tablet red">
              Volunteer at Nelson Cathedral
            </p>
            <img
              src="./Assets/church/church.png"
              class="h-75 pl-3 d-none d-sm-block"
            />
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">2014 — 2017</p>
        <p class="job-description w-100">
          • Volunteered over 200 hours at the Nelson Christ Church Cathedral between
          2014 and 2017
        </p>
        <p class="job-description w-100">
          • Helped out with Sunday school and Church's school holiday kids' program
          (about 2 to 3 times a year)
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100 d-flex flex-row">
            <p class="job-title red">Class representative for the University</p>
            <img
              src="./Assets/university_flat.png"
              class="pl-3 d-none d-sm-block"
              style="height: 85%"
            />
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">Semester One and Two 2019, Semester Two 2021</p>
        <p class="job-description w-100">
          • Class representative for ECON 151 in semester one 2019, COMPSCI 110, 120
          in semester two 2019
        </p>
        <p class="job-description w-100">
          • Class representative for COMPSCI 389 in semester two 2021
        </p>
        <p class="job-description w-100">
          • Helped students better communicating with their lecturer by creating
          Facebooks pages, regular surveys and so on
        </p>
        <a
          href="./Assets/downableMaterial/Class Rep.pdf"
          target="_blank"
          class="pButton"
        >
          <div class="pButtonText pl-2 pr-2">View my certificate!</div>
          <div class="pButtonimage" style="background-color: #33a1ff">
            <img
              src="./Assets/certificate Class Rep png/certificate.png"
              class="certificate-button-icon"
            />
          </div>
        </a>
        <div class="gap"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="job-title red">
          •
          <span class="black"
            >Attend tech conferences regularly, e.g. OWASP, Postman Galaxy, AWS
            re:Invent...
          </span>
        </p>
        <div class="gap"></div>
        <p class="job-title red">
          •
          <span class="black">
            Car lover. In high school, I bought cheap vehicles, fixed them up, and
            refurbished them, then sold them at a higher price. I have owned 8
            vehicles so far. (More in the
            <span class="red cursor-pointer" onclick="personalStatements()">
              About
            </span>
            section)
          </span>
        </p>
        <div class="gap"></div>
        <p class="job-title red">
          •
          <span class="black">
            More than
            <span class="phoneRepairExperience"></span> years of experience repairing
            phones and computers
          </span>
        </p>
        <p class="medium-title" id="employments">Employments</p>
        <hr />
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Store Manager and Repair Technician, Auckland</p>
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">
          Dec<span class="d-none d-sm-inline-block">ember</span> 2019 – Mar<span
            class="d-none d-sm-inline-block"
            >ch</span
          >
          2020
        </p>
        <p class="job-description w-100">
          • Manage the store, handling stock ordering and customer queries
        </p>
        <p class="job-description w-100">
          • The roll involves repairing mobile devices and providing support services
          to software
        </p>
        <p class="job-description w-100">• Usually repairs 3 - 4 devices a day</p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Software & Hardware Repair Technician, Nelson</p>
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">
          Mar<span class="d-none d-sm-inline-block">ch</span> 2018 – Dec<span
            class="d-none d-sm-inline-block"
            >ember</span
          >
          2018
        </p>
        <p class="job-description w-100">
          • In this position, I was responsible for repairing broken devices presented
          by clients. Common issues I dealt with included cracked screen replacements,
          worn out batteries, motherboard failure, operating system diagnosis and
          repair, and a wide variety of other related work
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Classroom & Window Cleaner – Nelson College</p>
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">2017</p>
        <p class="job-description w-100">
          • General cleaning of school environments, including vacuuming, window
          cleaning, sweeping, and rubbish clearing
        </p>
        <div class="gap"></div>
        <div class="title-box">
          <div class="h-100">
            <p class="job-title red">Kitchenhand – Nelson College</p>
          </div>
          <div class="title-box-right"></div>
        </div>
        <div class="gap d-block d-sm-none"></div>
        <p class="date-range">2015 - 2018</p>
        <p class="job-description w-100">
          • This is a casual position and involves cleaning around the kitchen, food
          preparation, stock rotation, and miscellaneous tasks
        </p>
        <p class="big-title">About</p>
        <p class="medium-title" id="personalStatements">Personal Statements</p>
        <hr />
        <p class="personal-description personalIntroduction"></p>
        <div class="gap"></div>
        <p class="job-title red">Communication</p>
        <p class="personal-description">
          I actively enjoy communication and collaboration: brainstorming, group work,
          and vibrant discussion are the contexts in which I am in my element and am
          the most productive.
        </p>
        <div class="gap"></div>
        <p class="job-title red">Personal Life and Hobbies</p>
        <p class="personal-description">
          I take great interest in technology and entrepreneurship. My personal
          hobbies and interests include cars (including repairing and selling),
          digital technology (such as blockchain, AI/ML, human-computer interaction
          and discrete mathematics), hard technology (such as repairing phones,
          computers and other hardware as a hobby and for business), and banking /
          commercial sector (such as stock trading. and investing).
        </p>
        <div class="gap"></div>
        <p class="job-title red">Goal</p>
        <p class="personal-description">
          A prominent goal for myself during my time in tertiary study is to gain
          meaningful experience in the commercial sector. This is important to me
          because I value opportunities to engage with people who are experienced in
          their field, improve my own skills, broaden my perspective, and form
          connections in the field that I look up to and seek to one day join.
        </p>
        <p class="medium-title" id="education">Education</p>
        <hr />
        <div class="usydLogo"></div>
        <div class="gap"></div>
        <div
          class="title-box flex-column flex-sm-row align-items-start align-items-sm-center"
        >
          <p class="school-title red">University of Sydney</p>
          <p class="school-title black">Bachelor of Science (Honours)</p>
        </div>
        <div class="gap-small"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div
          class="title-box flex-column flex-sm-row align-items-start align-items-sm-center"
        >
          <p class="school-small-text black">
            Feb<span class="d-none d-sm-inline-block">ruary</span> 2022 — Nov<span
              class="d-none d-sm-inline-block"
              >ember</span
            >
            2022 (Expected)
          </p>
          <p class="school-small-text black">Computer Science</p>
        </div>
        <div class="gap"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="school-small-text black">
          <span class="red">•</span> Academic teaching assistant for SOFT2412 - Agile Software Development Practices (Java)
        </p>
        <img
          data-aos="fade-up"
          loading="lazy"
          src="./Assets/sydney-opera-house.png"
          class="w-100 pt-5 d-none d-sm-block"
        />
        <div class="gap d-block d-sm-none"></div>
        <div class="uoaLogo"></div>
        <div class="gap"></div>
        <div
          class="title-box flex-column flex-sm-row align-items-start align-items-sm-center"
        >
          <p class="school-title red">University of Auckland</p>
          <p class="school-title black">Bachelor of Science</p>
        </div>
        <div class="gap-small"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div
          class="title-box flex-column flex-sm-row align-items-start align-items-sm-center"
        >
          <p class="school-small-text black">
            Mar<span class="d-none d-sm-inline-block">ch</span> 2019 — Nov<span
              class="d-none d-sm-inline-block"
              >ember</span
            >
            2021
          </p>
          <p class="school-small-text black">Computer Science</p>
        </div>
        <div class="gap"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="school-small-text black">Outstanding courses:</p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 110 - Introduction to Computer
          Systems - A-
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 210 - Computer Systems 1 - A+
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 220 - Algorithms and Data
          Structures - A
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 230 - Object-Oriented Software
          Development - A+
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 335 - Functional Programming and
          Distributed Services - A+
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 350 - Mathematical Foundations
          of Computer Science - A
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Computer Science 389 - Research Methods in
          Computer Science - A+
        </p>
        <p class="school-small-text black">
          <span class="red">•</span> Business Analytics 100G - Digital Information
          Literacy - A+
        </p>
        <img
          data-aos="fade-up"
          loading="lazy"
          src="./Assets/aucklandCity.jpeg"
          class="w-100 pt-5 d-none d-sm-block"
        />
        <div class="gap d-block d-sm-none"></div>
        <div class="nelsonCollegeLogo"></div>
        <div class="gap"></div>
        <div
          class="title-box flex-column flex-sm-row align-items-start align-items-sm-center"
        >
          <p class="school-title red">Nelson College</p>
          <p class="school-title black">NCEA Level 3 achieved with Excellence</p>
        </div>
        <div class="gap-small"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div
          class="title-box flex-column flex-sm-row align-items-start align-items-sm-center"
        >
          <p class="school-small-text black">
            Jul<span class="d-none d-sm-inline-block">y</span> 2014 — Dec<span
              class="d-none d-sm-inline-block"
              >ember</span
            >
            2018
          </p>
          <p class="school-small-text black">Nelson, New Zealand</p>
        </div>
        <img
          data-aos="fade-up"
          loading="lazy"
          src="./Assets/nelsonCity.jpg"
          class="w-100 pt-5 d-none d-sm-block"
        />
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <div class="gap d-block d-sm-none"></div>
        <p class="big-title">Hobbies</p>
        <hr />
        <p class="personal-description">
          <span class="red">Hockey</span> — I played field hockey for two and a half
          years in high school
        </p>
        <div class="gap d-block d-sm-none"></div>
        <p class="personal-description">
          <span class="red">Mountain Biking</span> — I enjoy mountain biking a lot,
          with a mixture of casual trial riding and intance downhill riding
        </p>
        <div class="gap"></div>
        <p class="job-title black" id="cars">Cars</p>
        <div class="gap-small"></div>
        <div class="car-scroll-height">
          <div class="car-scroll-wrapper">
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_1.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_2.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_3.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_4.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" class="width" src="./Assets/cars/car_5.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" class="width" src="./Assets/cars/car_6.JPG" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" class="width" src="./Assets/cars/car_7.JPG" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_8.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_9.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_10.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_11.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_12.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_13.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_14.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" src="./Assets/cars/car_15.png" />
            </div>
            <div class="scroll-car">
              <img loading="lazy" class="width" src="./Assets/cars/alonso.JPG" />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      </section>

      <section class="s3 d-flex flex-column pb-3 pb-xl-0" id="contact">
        <div class="flex-row bottom-left d-none d-xl-flex">
          <div class="bottom-sides d-flex align-items-center justify-content-center">
            <div class="w-75 h-75 d-flex flex-column justify-content-center">
              <div class="d-flex flex-row">
                <div class="dimond"></div>
                <div class="dimond"></div>
                <div class="dimond"></div>
              </div>
              <p class="conMes w-75 white sansSerifBldFLF-medium">
                Flick me a quick message!
              </p>
              <img
                class="wave position-relative"
                width="17%"
                src="./Assets/sfondo-astratto-colorato-con-elementi-di-memphis/wave.png"
              />
            </div>
          </div>
          <div class="bottom-sides">
            <div
              class="w-100 h-100 d-flex align-items-center"
              style="margin-top: 5vh"
            >
              <form
                target="_blank"
                action="https://formsubmit.co/370ecea85520a9259161919e8aefcf3b"
                method="POST"
              >
                <input
                  class="inputName"
                  type="text"
                  id="fname"
                  name="Name"
                  placeholder="Name"
                  required
                /><br />
                <div class="gapBetweenInputLine"></div>
                <div class="inputLine"></div>
                <div class="h3vw"></div>
                <input
                  class="inputName"
                  type="email"
                  id="femail"
                  name="Email"
                  placeholder="Email"
                  required
                /><br />
                <div class="gapBetweenInputLine"></div>
                <div class="inputLine"></div>
                <div class="h3vw"></div>
                <div class="inputName">Message</div>
                <textarea
                  id="fmessage"
                  name="Message"
                  class="message"
                  rows="3vw"
                  cols="70vw"
                  required
                ></textarea>
                <div style="width: 30vw" class="inputLine"></div>
                <div class="gapBetweenInputLine h2vw"></div>
                <input class="submitButton" type="submit" value="Submit" />
                <p id="demo"></p>
              </form>
            </div>
          </div>
        </div>
        <div class="bottom-left m-3 ml-sm-5 d-xl-none">
          <p class="conMes white sansSerifBldFLF-medium">Let's catch up!</p>
          <div class="contact-for-responsive">
            <p
              onclick="window.open('mailto:hello@richard-lee.com', '_blank');"
              class="white sansSerifBookFLF-medium"
            >
              Contact me
              <i class="angle-right"></i>
            </p>
          </div>

          <div class="d-block d-sm-none white">
            <p class="contact-header-for-mobile sansSerifBldFLF-medium">Contact</p>
            <hr style="background: white" />
            <div class="contact-info-for-mobile white sansSerifFLF-demibold">
              <a href="mailto:hello@richard-lee.com" target="_blank" class="white"
                ><i class="far fa-envelope"></i>&nbsp;&nbsp;hello@richard-lee.com</a
              >
            </div>
            <div class="contact-list-for-mobile d-flex justify-content-between w-100">
              <a
                href="https://www.linkedin.com/in/richard875/"
                target="_blank"
                class="d-flex align-items-center justify-content-center"
                style="flex: 0.17; background-color: #0072b1"
              >
                <i class="fab fa-linkedin github-button-icon white"></i>
              </a>
              <a
                href="https://github.com/richard875"
                target="_blank"
                class="d-flex align-items-center justify-content-center"
                style="flex: 0.17; background-color: black; margin-left: 1.5vw"
              >
                <i class="fab fa-github github-button-icon white"></i>
              </a>
              <a
                href="./Assets/downableMaterial/richardLee_resume.pdf"
                target="_blank"
                class="footer-button d-flex align-items-center justify-content-center white sansSerifFLF-demibold"
                style="flex: 0.6; margin-left: 1.5vw"
              >
                View my Resume
              </a>
            </div>

            <p class="contact-header-for-mobile sansSerifBldFLF-medium">
              richard-lee<span class="pink">.com</span>
            </p>
            <div class="contact-info-for-mobile white sansSerifFLF-demibold">
              I promise that you'll never find another like me!
            </div>
            <div class="contact-info-for-mobile white sansSerifFLF-demibold">
              References on request
            </div>
            <div class="contact-info-for-mobile white sansSerifFLF-demibold">
              <span class="productionYear"></span>&nbsp;A Richard Lee's Production
            </div>
            <div class="d-flex flex-row mt-3">
              <img height="30px" class="mr-3" src="Assets/flag/australia.png" />
              <img height="30px" class="mr-3" src="Assets/flag/aboriginal.png" />
              <img height="30px" src="Assets/flag/torresStrait.png" />
            </div>
          </div>
        </div>

        <div class="flex-row-reverse flex-xl-row bottom-right d-none d-sm-flex">
          <div class="d-flex align-items-center justify-content-center bottom-sides">
            <div
              class="d-flex flex-column justify-content-between sansSerifBookFLF-medium white"
              style="height: 70%; width: 70%"
            >
              <div class="contact-list d-flex">
                <a
                  href="https://www.linkedin.com/in/richard875/"
                  target="_blank"
                  class="d-flex align-items-center justify-content-center"
                  style="flex: 0.2; background-color: #0072b1; text-decoration: none"
                >
                  <i class="fab fa-linkedin white github-button-icon"></i>
                </a>
                <a
                  href="https://github.com/richard875"
                  target="_blank"
                  class="d-flex align-items-center justify-content-center"
                  style="
                    flex: 0.2;
                    background-color: black;
                    margin-left: 1.5vw;
                    text-decoration: none;
                  "
                >
                  <i class="fab fa-github white github-button-icon"></i>
                </a>
                <a
                  href="./Assets/downableMaterial/richardLee_resume.pdf"
                  target="_blank"
                  class="viewRes d-flex align-items-center justify-content-center white sansSerifBookFLF-medium"
                  style="flex: 0.6; margin-left: 1.5vw"
                >
                  View my Resume
                </a>
              </div>
              <div
                class="website-icon-for-tablet position-absolute white sansSerifBldFLF-medium d-none d-sm-block d-xl-none pink"
              >
                <span class="white">richard-lee</span>.com
              </div>
              <p class="bottomMessage d-sm-none d-xl-block">
                I promise that you'll never find another like me!
              </p>
              <p class="bottomMessage d-sm-none d-xl-block">References on request</p>
              <p class="bottomMessage copyright-for-tablet">
                <span class="productionYear"></span
                ><span class="d-sm-none d-xl-inline-block">&nbsp;A</span>&nbsp;Richard
                Lee<span class="d-sm-none d-xl-inline-block">'s Production</span>
              </p>
              <div class="d-flex flex-row flag-for-tablet">
                <img height="30px" class="mr-3" src="Assets/flag/australia.png" />
                <img height="30px" class="mr-3" src="Assets/flag/aboriginal.png" />
                <img height="30px" src="Assets/flag/torresStrait.png" />
              </div>
            </div>
          </div>
          <div
            class="d-flex align-items-center bottom-sides"
            style="padding-bottom: 2vh"
          >
            <div class="d-flex flex-row white">
              <div class="d-sm-none d-xl-block">
                <div class="bottomLink white sansSerifBldFLF-medium">
                  richard-lee.com
                </div>
                <div style="height: 1vw"></div>
                <a
                  onclick="toHome()"
                  class="bottomEles sansSerifBookFLF-medium white cursor-pointer"
                  >Home</a
                >
                <div class="h06vw"></div>
                <a
                  onclick="introduction()"
                  class="bottomEles sansSerifBookFLF-medium white cursor-pointer"
                  >Introduction</a
                >
                <div class="h06vw"></div>
                <a
                  onclick="internExperienceAndProjects()"
                  class="bottomEles sansSerifBookFLF-medium white cursor-pointer"
                  >Work & Projects</a
                >
                <div class="h06vw"></div>
                <a
                  onclick="volunteeringAndOthers()"
                  class="bottomEles sansSerifBookFLF-medium white cursor-pointer"
                  >Volunteering & Employments</a
                >
                <div class="h06vw"></div>
                <a
                  onclick="personalStatements()"
                  class="bottomEles sansSerifBookFLF-medium white cursor-pointer"
                  >Hobbies & Contact</a
                >
              </div>
              <div
                style="padding-left: 5vw"
                class="d-flex flex-column contact-for-tablet"
              >
                <div
                  class="bottomLink white sansSerifBldFLF-medium d-sm-none d-xl-block"
                >
                  Email
                </div>
                <div class="h05vw d-sm-none d-xl-block"></div>
                <a
                  href="mailto:hello@richard-lee.com"
                  target="_blank"
                  class="bottomEles sansSerifBookFLF-medium white f09vw"
                >
                  hello@richard-lee.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    if (!$(this).attr("loaded") && wt <= ob && wb >= ot) {
      $(this).html(SERVER_RENDER_CONTENT);
      $(this).attr("loaded", true);
      $(this).css("padding-top", "");
    }
  });

  $(".productionYear")
    .get()
    .forEach((e) => (e.innerHTML = PRODUCTION_YEAR));
  $(".phoneRepairExperience")
    .get()
    .forEach((e) => (e.innerHTML = PHONE_REPAIR_EXPERIENCE));
  $(".personalIntroduction")
    .get()
    .forEach((e) => (e.innerHTML = PERSONAL_STATEMENT));

  // https://codepen.io/thenutz/pen/VwYeYEE
  const slider = document.querySelector(".car-scroll-wrapper");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-speed
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });

  // enabke aos
  AOS.init();

  // Set loaded to true
  loaded = true;
};

const PERSONAL_STATEMENT =
  "I am a highly motivated and organised individual, who demonstrates \
the qualities of independent and critical thinking through my \
university, work, and hobby life. With strong attention to detail, \
I consistently meet personal and professional goals on time and to an \
excellent standard.";
const PRODUCTION_YEAR = new Date().getFullYear();
const PHONE_REPAIR_EXPERIENCE = new Date().getFullYear() - 2015;
const IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

let landed = false;
let loaded = false;
if (document.hasFocus()) landed = true;

const landingScreen = () => {
  let SPLASH = /*html*/ `
  <div id="splash">
      <div class="anim">
        <div id="loader">
          <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
            <defs>
              <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <g id="airplane">
              <path
                fill="#000"
                d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
          h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
          c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
          c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
          c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
          C-0.225,19.36-0.228,20.637,0.677,20.977z"
                transform="translate(44,0) rotate(90 0 0)"
              />
            </g>
            <g id="shadow" transform="scale(.9)">
              <path
                fill="#000"
                fill-opacity="0.3"
                d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
          h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
          c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
          c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
          c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
          C-0.225,19.36-0.228,20.637,0.677,20.977z"
                transform="translate(64,30) rotate(90 0 0)"
                filter="url(#f1)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  `;

  $("#splash").remove();
  $("#dark-mode").after(SPLASH);
};

if (!landed) {
  const checkFocus = () => {
    if (document.hasFocus()) {
      landed = true;
      landingScreen();
      clearInterval(checkLandingInterval);
    }
  };

  // Check page focus every 10 millisecond if haven't landed
  const checkLandingInterval = setInterval(checkFocus, 10);
}

$(".personalIntroduction")
  .get()
  .forEach((e) => (e.innerHTML = PERSONAL_STATEMENT));

$(this).scrollTop() == 0
  ? $(".fa-user").fadeIn(200)
  : $(".fa-user").css("display", "none");

let toHome = () => $("html, body").animate({ scrollTop: 0 }, 100);

let introduction = () =>
  $("html, body").animate({ scrollTop: $("#s2Render").offset().top }, 100);

let internExperienceAndProjects = () =>
  $("html, body").animate(
    { scrollTop: $("#internExperienceAndProjects").offset().top - 100 },
    100
  );

let volunteeringAndOthers = () =>
  $("html, body").animate(
    { scrollTop: $("#volunteeringAndOthers").offset().top - 100 },
    100
  );

let personalStatements = () =>
  $("html, body").animate(
    { scrollTop: $("#personalStatements").offset().top - 100 },
    100
  );

let toBottom = () =>
  $("html, body").animate({ scrollTop: $(document).height() }, 100);

// When the user scrolls the page, execute function
window.onscroll = () => {
  let replaceClass = (id, newClass) => {
    let className = $(`#${id}`).attr("class");
    let elem = $(`#${id}`);
    if (elem.hasClass(className)) elem.removeClass(className);
    elem.addClass(newClass);
  };

  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("prograssOverlayBar").style.height = scrolled + "%";

  let scrollPosition = $(this).scrollTop();
  let internExperienceAndProjects = $("#internExperienceAndProjects").offset()
    .top;
  let skills = $("#skills").offset().top;
  let volunteeringAndOthers = $("#volunteeringAndOthers").offset().top;
  let employments = $("#employments").offset().top;
  let personalStatements = $("#personalStatements").offset().top;
  let education = $("#education").offset().top;
  let cars = $("#cars").offset().top;
  let contact = $("#contact").offset().top;

  if (scrollPosition < internExperienceAndProjects)
    replaceClass("sideIconDesktopNav", "fas fa-user");

  if (scrollPosition >= internExperienceAndProjects && scrollPosition < skills)
    replaceClass("sideIconDesktopNav", "fas fa-lightbulb");

  if (scrollPosition >= skills && scrollPosition < volunteeringAndOthers)
    replaceClass("sideIconDesktopNav", "fas fa-star");

  if (scrollPosition >= volunteeringAndOthers && scrollPosition < employments)
    replaceClass("sideIconDesktopNav", "fas fa-hands-helping");

  if (scrollPosition >= employments && scrollPosition < personalStatements)
    replaceClass("sideIconDesktopNav", "fas fa-building");

  if (scrollPosition >= personalStatements && scrollPosition < education)
    replaceClass("sideIconDesktopNav", "fas fa-info");

  if (scrollPosition >= education && scrollPosition < cars - 200)
    replaceClass("sideIconDesktopNav", "fas fa-university");

  if (scrollPosition >= cars - 200 && scrollPosition < contact - 300)
    replaceClass("sideIconDesktopNav", "fas fa-car");

  if (scrollPosition >= contact - 300)
    replaceClass("sideIconDesktopNav", "fas fa-envelope special-envelope");

  $(this).scrollTop() > $(document).height() * 0.04
    ? $(".backToTop").fadeIn()
    : $(".backToTop").fadeOut();

  $(this).scrollTop() > $(document).height() * 0.02 &&
  $(this).scrollTop() < $(document).height() * 0.9
    ? $(".toBottom").fadeIn()
    : $(".toBottom").fadeOut();

  $(this).scrollTop() > $(document).height() * 0.04
    ? $(".mobile-util-menu").css("right", "0vw")
    : $(".mobile-util-menu").css("right", "-15vw");

  let top = $(window).scrollTop() + $(window).height(),
    isVisible = top > $(".skill-set").offset().top;

  $(".skill-set").toggleClass("animate", isVisible);
};

let starNumber = () => 10 + Math.floor(Math.random() * Math.floor(30));

let starSpecs = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let starPosition = (max) => Math.floor(Math.random() * Math.floor(max));

for (let i = 0; i <= starNumber(); i++) {
  starDimensions = starSpecs(100, 500) / 1000;
  starXPos = starPosition(1000);
  starYPos = starPosition(1000) / 10;
  if (!IS_SAFARI)
    $(".frontLeftPic").prepend(
      `<div class="stars blink d-none d-xl-flex" style="top: ${starYPos}vh; left: ${starXPos}px; width: ${starDimensions}vw; height: ${starDimensions}vw"></div>`
    );
}

$(".scrollDown").click(() => introduction());

$(".catchUp").click(() =>
  $("html, body").animate({ scrollTop: $(document).height() }, 100)
);

let mobileDevice = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    mobileDevice.Android() ||
    mobileDevice.BlackBerry() ||
    mobileDevice.iOS() ||
    mobileDevice.Opera() ||
    mobileDevice.Windows(),
};

/* if the device is not ios hide the download button */
if (mobileDevice.iOS()) $(".mobile-back-to-top").css("visibility", "hidden");

const toggle = document.querySelector(".dark-mode-button");
toggle.checked = false;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggle.checked = true;

  document
    .querySelector("meta[name='twitter:widgets:theme']")
    .setAttribute("content", "dark");

  $("#dark-mode").addClass("dark-mode-theme");
}

$(".dark-mode-button").click(() => {
  $("#dark-mode").hasClass("dark-mode-theme")
    ? $("#dark-mode").removeClass()
    : $("#dark-mode").addClass("dark-mode-theme");
});

$("#homeS1").hover(() => {
  if (loaded) return;
  lazyload();
});

$("#homeScrollDownButton").hover(() => {
  if (loaded) return;
  lazyload();
});

$("#homeDesktopNavMenu").hover(() => {
  if (loaded) return;
  lazyload();
});

$("#homeCatchUp").hover(() => {
  if (loaded) return;
  lazyload();
});

$(window).scroll(() => {
  if (loaded) return;
  lazyload();
});
