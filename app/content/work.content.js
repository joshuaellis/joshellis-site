import IMG_WALDO from '../assets/images/work-images/black-mirror/waldo-2.jpg';
import IMG_USS_CALLISTER from '../assets/images/work-images/black-mirror/USS-callister.jpg';
import IMG_BE_RIGHT_BACK from '../assets/images/work-images/black-mirror/Brb-layers-1.jpg';

export const PROJECTS = [
  'Black Mirror',
  'World Forum',
  'Design Council',
  'Genesys',
];

export const TEXT = {
  'Black Mirror': [
    'Designer // Developer',
    'Applied Works',
    '2018',
    `Using the javascript library P5.js I was able to co-create a series of digital tools used to distort imagery taken from the show whether that be a significant icon or still. The artworks were then produced as chapter openers for the book "Inside Black Mirror".`,
    'https://www.insideblackmirror.com/',
    'insideblackmirror.com',
    true,
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
      src: IMG_WALDO,
      alt: 'image_01',
      id: 'image_01',
      caption: 'this is an image caption',
    },
    {
      src: IMG_USS_CALLISTER,
      alt: 'image_02',
      id: 'image_02',
      caption: 'this is a second image caption',
    },
    {
      src: IMG_BE_RIGHT_BACK,
      alt: 'image_03',
      id: 'image_03',
      caption:
        'this is a third image caption that is really long to test on mobile',
    },
  ],
};
