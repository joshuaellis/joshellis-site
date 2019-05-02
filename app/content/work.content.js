import IMG_WALDO from '../assets/images/work-images/black-mirror/waldo-2.jpg';
import IMG_USS_CALLISTER from '../assets/images/work-images/black-mirror/USS-callister.jpg';
import IMG_BE_RIGHT_BACK from '../assets/images/work-images/black-mirror/Brb-layers-1.jpg';
import IMG_MILLION_MERITS from '../assets/images/work-images/black-mirror/15millymerits.jpg';
import IMG_ARKANGEL from '../assets/images/work-images/black-mirror/244_Arkangel_ReProof.jpg';
import IMG_NATIONAL_ANTHEM from '../assets/images/work-images/black-mirror/National-athem-pig-edit.jpg';
import IMG_NOSEDIVE from '../assets/images/work-images/black-mirror/Nosedive.jpg';
import IMG_SAN_JUNIPERO from '../assets/images/work-images/black-mirror/San-Junipero.jpg';

export const PROJECTS = [
  // 'Giles Revell',
  'Blackshaw Interior',
  'Black Mirror',
  // 'Hoffmann Centre',
  'World Forum',
  'Design Council',
  'Genesys',
];

export const TEXT = {
  'Giles Revell': [
    'Designer // Developer',
    'Freelance',
    '2019',
    'This is about the project',
    'https://www.cartographiccolour.com/',
    'cartographiccolour.com',
  ],

  'Blackshaw Interior': [
    'Developer',
    'Freelance',
    '2019',
    `Working with design Charlotte Mistry I created a fully bespoke Wordpress theme and plugin for their rebranded front-end. What was important for the client was the flexibility in building their project pages, to do this I created a module backend system to create flexible content blocks. The end result was a light weight theme with minimal libraries and image optimizing.`,
    'https://www.blackshawinteriordesign.com/',
    'blackshaw.com',
  ],

  'Black Mirror': [
    'Designer // Developer',
    'Applied Works',
    '2018',
    `Using the javascript library P5.js I was able to co-create a series of digital tools used to distort imagery taken from the show whether that be a significant icon or still. The artworks were then produced as chapter openers for the book "Inside Black Mirror" in collaboration with Zoë Bather & Ebury Publishing.`,
    'https://www.insideblackmirror.com/',
    'insideblackmirror.com',
    true,
  ],

  'Hoffmann Centre': [
    'Designer',
    'Applied Works',
    '2018',
    'About the project',
    'https://hoffmanncentre.chathamhouse.org/',
    'hoffmanncentre.org',
  ],

  'World Forum': [
    'Designer',
    'Applied Works',
    '2018',
    'The Global Competitive Index (GCI) produced by World Economic Forum every year is used by millions of policy-makers and industries across the world. 2018 saw me updating the colour scheme to create an engaging chart and redesigning the accompanying icon set to be up to date with their iconography guidelines produced that year. Ray Oranges was commissioned to illustrate the cover of the report.',
    'http://reports.weforum.org/global-competitiveness-report-2018/country-economy-profiles/#economy=GBR',
    'GCI-2018.com',
  ],

  'Design Council': [
    'Designer // Art Director',
    'Applied Works',
    '2018',
    'The goal of this project was to create an engaging story of why the UK government must invest in design earlier on in education in terms that policy-makers would understand. During this project Nathalie Lees was commissioned to bring to life this story through illustration.',
    'http://designskills.designcouncil.org.uk/?src=home',
    'designskills.com',
  ],

  Genesys: [
    'Designer',
    'Applied Works',
    '2017 - 2018',
    "Through strategy to UX design, any Genesys brief brings brand new challenges that require a rigourous process of interegation to ensure the end result satisfys the audience, stakeholders and client's needs. One of our main tasks is to maintain a robust and detailed UX guideline library to ensure coherent design across any project we undertake from them.",
  ],
};

export const IMAGES = {
  'Black Mirror': [
    {
      src: IMG_NATIONAL_ANTHEM,
      alt: 'Black Mirror – National Anthem',
      id: 'national-anthem',
      caption: 'Series 1, Episode 1 – The National Anthem',
    },
    {
      src: IMG_MILLION_MERITS,
      alt: 'Black Mirror – 15 Million Merits',
      id: 'million-merits',
      caption: 'Series 1, Episode 2 – 15 Million Merits',
    },
    {
      src: IMG_BE_RIGHT_BACK,
      alt: 'Black Mirror – Be Right Back',
      id: 'be-right-back',
      caption: 'Series 2, Episode 1 – Be Right Back',
    },
    {
      src: IMG_WALDO,
      alt: 'Black Mirror - The Waldo Moment',
      id: 'waldo',
      caption: 'Series 2, Episode 3 – The Waldo Moment',
    },
    {
      src: IMG_NOSEDIVE,
      alt: 'Black Mirror - Nosedive',
      id: 'nosedive',
      caption: 'Series 3, Episode 1 – Nosedive',
    },
    {
      src: IMG_SAN_JUNIPERO,
      alt: 'Black Mirror - San Junipero',
      id: 'san-junipero',
      caption: 'Series 3, Episode 4 – San Junipero',
    },
    {
      src: IMG_USS_CALLISTER,
      alt: 'Black Mirror - USS Callister',
      id: 'callister',
      caption: 'Series 4, Episode 1 – USS Callister',
    },
    {
      src: IMG_ARKANGEL,
      alt: 'Black Mirror - Arkangel',
      id: 'arkangel',
      caption: 'Series 4, Episode 2 – Arkangel',
    },
  ],
};
