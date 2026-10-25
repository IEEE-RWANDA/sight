// ═════════════════════════════════════════════════════════════
//  IEEE Rwanda SIGHT Group — WEBSITE CONTENT
//  Everything visitors read on sight.ieeerwanda.org lives here.
//  Edit the text between the quotes "like this", save, done.
//  Lines marked  placeholder: true  are samples — replace them.
// ═════════════════════════════════════════════════════════════
import type { SiteContent } from "./types";
import { COMMON_RESOURCES, SUBSECTION_EVENTS } from "./shared";

const content: SiteContent = {
  id: "sight",
  shortName: "IEEE Rwanda SIGHT",
  fullName: "IEEE Rwanda SIGHT Group",
  identifierLabel: "Rwanda Subsection",

  headerTitle: ["IEEE Rwanda", "SIGHT Group"],

  description:
    "IEEE Rwanda SIGHT (Special Interest Group on Humanitarian Technology) — engineers and students applying technology to sustainable development challenges with communities in Rwanda.",
  siteUrl: "https://sight.ieeerwanda.org",

  // Colours from the IEEE Humanitarian Technologies / IEEE SIGHT guidelines:
  // IEEE Blue, Dark Blue, SIGHT red #BA0C2F (the identifier "wedge") and orange #E87722.
  colors: { brand: "#00629B", accent: "#BA0C2F", surface: "#E6EFF5" },

  // The photo, headline and button at the top of the home page.
  hero: {
    image: "/sight/hero/kigali-houses.jpg",
    alt: "Homes on the hills of Kigali",
    title: "Engineering with communities.",
    cta: { label: "Volunteer with us", href: "/get-involved/" },
    credit: { name: "Protais Benjamin Mugenzi / Unsplash", url: "https://unsplash.com/photos/K15V22xU1zs" },
  },

  // Shown beside "About us" on the home page. Remove to show the text on its own.
  aboutPhoto: {
    image: "/sight/hero/lagos-classroom.jpg",
    alt: "Pupils learning in a classroom",
    credit: { name: "Doug Linstedt / Unsplash", url: "https://unsplash.com/photos/jEEYZsaxbH4" },
    focus: "center 40%",
  },

  about: {
    heading: "About IEEE Rwanda SIGHT",
    intro: [
      "IEEE SIGHT — the Special Interest Group on Humanitarian Technology — is a global network of IEEE volunteers who partner with under-served communities and local organisations to use technology for sustainable development.",
      "The Rwanda SIGHT Group gives engineers and students in Rwanda a way to put their skills to work on local problems: identifying needs together with communities, designing practical solutions, applying for IEEE humanitarian funding and delivering projects that last.",
    ],
    mission:
      "To apply engineering and technology, together with communities, to sustainable development challenges in Rwanda — and to grow a generation of engineers who design with people, not just for them.",
    vision: "Communities across Rwanda benefiting from appropriate, well-maintained technology designed with them.",
    goals: [
      "Deliver community-driven humanitarian technology projects in Rwanda.",
      "Build the skills of IEEE members in needs assessment, design and project delivery.",
      "Connect local projects with IEEE humanitarian funding and global partners.",
    ],
    objectives: [
      "Run needs-assessment visits with community and NGO partners.",
      "Develop and submit projects to IEEE SIGHT and IEEE HAC funding calls.",
      "Hold workshops on humanitarian engineering and sustainable development.",
      "Support student branches in starting their own SIGHT activities.",
    ],
    parent: ["IEEE", "IEEE Region 8", "IEEE Rwanda Subsection", "IEEE SIGHT"],
  },

  whatWeDo: [
    "Community needs assessments with local partners",
    "Humanitarian technology projects — energy, water, health and digital access",
    "Workshops on humanitarian engineering and the SDGs",
    "Applying for IEEE SIGHT and IEEE HAC project funding",
    "Mentoring student teams on community projects",
  ],

  focus: {
    heading: "Where we put engineering to work",
    intro: "Our projects start with a community need. These are the areas where we focus first.",
    cards: [
      { tag: "SDG 7", title: "Energy access", description: "Solar, storage and productive-use energy for homes, schools and health centres." },
      { tag: "SDG 6", title: "Clean water", description: "Water pumping, treatment and monitoring for rural communities." },
      { tag: "SDG 4", title: "Education & digital inclusion", description: "Connectivity, devices and STEM outreach for schools." },
      { tag: "SDG 3", title: "Health technology", description: "Reliable power and simple technologies for clinics and health posts." },
    ],
  },

  extraPage: {
    slug: "projects",
    title: "Projects",
    intro:
      "SIGHT projects are designed with the community and a local partner, and are usually funded through IEEE SIGHT or IEEE HAC. Here is what we are working on.",
    cards: [
      {
        tag: "Sample · Planning",
        title: "Sample project: Solar power for a rural health post",
        description: "Replace this card with a real project: the community, the problem, the solution, the partners and the current status.",
        placeholder: true,
      },
      {
        tag: "Open call",
        title: "Have a project idea?",
        description:
          "If you know a community need technology could help with, tell us. We help shape ideas into proposals for IEEE humanitarian funding.",
        href: "/contact/",
        linkLabel: "Contact us",
      },
    ],
  },

  officers: [
    { group: "Executive Committee", name: "Akabway Rurangwa", role: "Chair", affiliation: "SLS Energy Ltd" },
    { group: "Executive Committee", name: "Akebert Arefaine", role: "Vice Chair" },
    { group: "Executive Committee", name: "Samuel Chukwuma", role: "Secretary" },
    { group: "Executive Committee", name: "Patricia Murira", role: "Treasurer" },
    { group: "Committee", name: "Sean Mavhima", role: "Project Coordinator" },
    { group: "Committee", name: "Steven Mbarushimana", role: "Member" },
    { group: "Committee", name: "Alia Teto", role: "Member" },
  ],

  events: [
    {
      title: "Sample: Introduction to humanitarian engineering workshop",
      date: "2026-11-27",
      time: "14:00–17:00",
      location: "Kigali (venue to be confirmed)",
      type: "Workshop",
      summary: "Replace this sample with your next real event. Put the vTools registration link in registerUrl.",
      placeholder: true,
    },
    ...SUBSECTION_EVENTS,
  ],

  getInvolved: {
    intro:
      "SIGHT is open to every IEEE member, and our events are open to anyone who wants to use technology to help communities.",
    eligibility: "No humanitarian experience needed — engineers, students and non-engineers all bring something useful.",
    steps: [
      { title: "Join IEEE", text: "Create an IEEE account and choose student or professional membership.", link: { label: "ieee.org/join", href: "https://www.ieee.org/membership/join/index.html" } },
      { title: "Join SIGHT", text: "Add IEEE SIGHT to your membership — it is free for IEEE members.", link: { label: "sight.ieee.org", href: "https://sight.ieee.org" } },
      { title: "Pick a project", text: "Come to a meeting, meet the team and join a project that matches your skills.", link: { label: "Our projects", href: "/projects/" } },
    ],
    benefits: [
      "Hands-on experience delivering real community projects",
      "Training in needs assessment, design and project management",
      "Access to IEEE humanitarian funding opportunities",
      "A global network of humanitarian-technology volunteers",
      "Meaningful leadership experience",
    ],
    volunteerText:
      "We need engineers, students, project managers, writers and photographers. Tell us how you'd like to help.",
  },

  resources: [
    {
      category: "Humanitarian technology",
      items: [
        { title: "IEEE SIGHT", description: "Global SIGHT home page, funding calls and toolkits.", url: "https://sight.ieee.org" },
        { title: "IEEE Humanitarian Technologies (HAC)", description: "IEEE's humanitarian activities and funding.", url: "https://hac.ieee.org" },
        { title: "IEEE Smart Village", description: "Sustainable energy and education for off-grid communities.", url: "https://smartvillage.ieee.org" },
        { title: "EPICS in IEEE", description: "Student-led community engineering projects.", url: "https://epics.ieee.org" },
      ],
    },
    COMMON_RESOURCES,
  ],

  partners: [
    { name: "IEEE Rwanda Subsection", url: "https://www.ieeerwanda.org" },
    { name: "IEEE SIGHT", url: "https://sight.ieee.org" },
  ],

  contact: {
    // email: "unit-name@ieee.org",   <- add the unit email here when you have one
    address: "Kigali, Rwanda",
  },

  social: {
    linkedin: "https://www.linkedin.com/showcase/ieee-rwanda-sight-group/",
  },
};

export default content;
