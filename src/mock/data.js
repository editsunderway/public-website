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
  paragraphTwo: "Whether you're going indie or seeking representation, let your work make the best first impression possible",
  paragraphThree: "• Adventure  • Book Club Fiction  • Culture  • General Fiction  • Memoir  • Romance  • Travel  • Women's Fiction",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Copyediting: A lighter hand',
    info: 'What most authors think of as proofreading: catching grammar faux pas, punctuation, and other mechanical errors.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Copyediting: A heavier hand',
    info: 'The lighter edit plus suggestions for rewording to avoid confusion, reformatting, consistency of story tone and an eye for character consistency.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Critique/Feedback',
    info: 'Review of query letter, synopsis, first pages or full manuscript for feedback on hook, story elements, and cohesion.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get a free estimate today',
  btn: 'Tell us about your project',
  email: 'https://russoediting.typeform.com/to/X0OdHM3T',
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
