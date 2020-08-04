import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Edits Underway', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to',
  name: 'Edits Underway',
  subtitle: "See what's possible...",
  cta: 'Get an estimate today',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Want your writing to be publish-ready but still sound like you?',
  paragraphTwo: '.'
  paragraphThree: "Whether you're going indie or seeking representation, let your work make the best first impression possible. We specialize in personalized copyediting and critique services on the following:",
  paragraphFour: "• Adventure  • Book Club Fiction  • Culture  • General Fiction  •",
  paragraphFive: "• Memoir  • Romance  • Travel  • Women's Fiction  •",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Light Copyedit',
    info: 'When you need a light hand to catch grammar issues, punctuation, and other mechanical errors. Price per project based on level of edit desired.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Heavy Copyedit',
    info: 'When you need a bit more... This includes a lighter edit plus suggestions for rewording to avoid confusion, reformatting, consistency of story tone and an eye for character consistency. Price per project, based on level of editing desired.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Critique',
    info: 'Structured review of query letter, book jacket material, synopsis, first pages. Includes feedback on hook, story elements, and cohesion. Price per hour, based on Editorial Freelance Association rates.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get a free estimate today',
  btn: 'Tell us about your project',
  link: 'https://russoediting.typeform.com/to/X0OdHM3T',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/editsunderway',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
