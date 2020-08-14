import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Edits Underway', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  name: "You've written your story",
  subtitle: "Now you're ready to share it",
  cta: "Get a free estimate today",
};

// ABOUT DATA
export const aboutData = {
  img: 'frontpage-image.jpg',
  paragraphOne: "Want your story published, but concerned your voice will be lost?",
  paragraphTwo: "We understand how it feels when you've created the perfect story, and just want that extra bit of help or second look.",
  paragraphThree: "Whether you're going indie or seeking representation, you need to make a strong first impression.", 
  paragraphFour: "We specialize in personalized copyediting and critique services for:",
  paragraphFive: "• Adventure  • Book Club Fiction  • Culture  • General Fiction  •",
  paragraphSix: "• Memoir  • Romance  • Travel  • Women's Fiction  •",
  resume: '', // if no resume, the button will not show up
  cta: 'Ready to see your story shine?',
  btn: 'Contact the editor',
  link: 'https://russoediting.typeform.com/to/X0OdHM3T',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'light-edit.jpg',
    title: 'Light Copyedit',
    info: 'A light edit to catch grammar , punctuation, and other mechanical errors.',
    info2: 'The fastest and most inexpensive way to get you publish-ready, while retaining your voice',
    info3: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'heavy-edit.jpg',
    title: 'Heavy Copyedit',
    info: 'Everything in a Light Copyedit, plus:',
    info2: '• A deeper look at character and story consistency',
    info3: '• Specific suggestions to keep your reader engaged',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'critique.jpg',
    title: 'Critique',
    info: "Need to know if you're hitting the mark? Get a structured review of pitch, query letter, book jacket material, synopsis, or first pages.",
    info2: 'Includes feedback on hook, story elements, dialogue, and more.',
    info3: 'Beta reading also available',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'custom-package.jpg',
    title: 'Custom Packages',
    info: "Unsure where to start? We can design a custom editorial and pre-publishing package designed for your unique needs.",
    info2: 'Contact us today to learn how we can work for you.',
    info3: '',
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
