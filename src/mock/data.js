import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Edits Underway', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: "You've written your story",
  subtitle: "Now you're ready to share it",
  cta: "Get a free estimate today",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Want your writing to be publish-ready but still sound like you?',
  paragraphTwo: "Whether you're going indie or seeking representation, let your work make the best first impression possible. Specializing in personalized copyediting and critique services for the following:",
  paragraphThree: "• Adventure  • Book Club Fiction  • Culture  • General Fiction  •",
  paragraphFour: "• Memoir  • Romance  • Travel  • Women's Fiction  •",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Light Editing',
    info: 'When you need a light hand to catch grammar issues, punctuation, and other mechanical errors.',
    info2: 'Price per project, based on level of edit desired.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Heavy Copyedit',
    info: 'When you need a bit more... Includes light copyedit, plus suggestions for revisions to avoid confusion, and a deeper look at character and story consistency.',
    info2: 'Price per project, based on level of editing desired.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Critique',
    info: "Need to know if you're hitting the mark? Get a structured review of pitch, query letter, book jacket material, synopsis, or first pages. Includes feedback on hook, story elements, dialogue, and more. Beta reading also available.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ready to see your story shine?',
  btn: 'Contact the editor',
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
