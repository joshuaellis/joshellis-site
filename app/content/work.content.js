import IMG_WALDO from '../assets/images/work-images/black-mirror/waldo-2.jpg';
import IMG_USS_CALLISTER from '../assets/images/work-images/black-mirror/USS-callister.jpg';
import IMG_BE_RIGHT_BACK from '../assets/images/work-images/black-mirror/Brb-layers-1.jpg';
import IMG_MILLION_MERITS from '../assets/images/work-images/black-mirror/15millymerits.jpg';
import IMG_ARKANGEL from '../assets/images/work-images/black-mirror/244_Arkangel_ReProof.jpg';
import IMG_NATIONAL_ANTHEM from '../assets/images/work-images/black-mirror/National-athem-pig-edit.jpg';
import IMG_NOSEDIVE from '../assets/images/work-images/black-mirror/Nosedive.jpg';
import IMG_SAN_JUNIPERO from '../assets/images/work-images/black-mirror/San-Junipero.jpg';

import RAY_ORANGES from '../assets/images/work-images/wef/ray_oranges.png';

export const PROJECTS = [
  'Giles Revell',
  'Blackshaw Interior',
  'Black Mirror',
  'Hoffmann Centre',
  'World Forum',
  'Design Council',
  'Genesys',
];

export const TEXT = {
  'Giles Revell': [
    'Designer // Developer',
    'Freelance',
    '2019',
    'For his upcoming gallery in Crossrail Roof Gardens, Giles and I collaborated to create a minimalistic website that would emulate the look and feel of his publication, Cartographic Colour. Completed within a short timeframe, the site was designed and built within ten days to advertise the sales of his artworks and book alongside his exhibition. To ensure the site is responsive the dot background on the mobile copy is repsonsive to the height of the text block to generate the correct amount of dots needed everytime.',
    'https://www.cartographiccolour.com/',
    'cartographiccolour.com',
  ],

  'Blackshaw Interior': [
    'Developer',
    'Freelance',
    '2019',
    `Working with designer Charlotte Mistry (Brand Strategist & Graphic Designer at Blackshaw Interior Design), we created a fully bespoke Wordpress theme and plugin for Blackshaw's rebrand. What was important for the client was the flexibility in building their page's content. To do this I created flexible content blocks for specific wordpress post and page types. The end result was a light weight theme with minimal libraries and image optimizing. Other features for the site include an image carousel on the homepage and an instagram image scraper to include their profile feed on their news page.`,
    'https://www.blackshawinteriordesign.com/',
    'blackshaw.com',
  ],

  'Black Mirror': [
    'Designer // Developer',
    'Applied Works',
    '2018',
    "Inside Black Mirror is the first official book about the cult series. The project was split into three phases – prototyping, the book and the website.\n\n Prototyping: using javascript I was able to co-create a series of digital tools used to distort imagery, video and audio taken from the show in a variety of different ways. As a result the four distinct filters were created for the book's chapter openers.\n\n  Book: the four filters are 'Colour Seperation' – distorting the rgb layers of the image. 'Vector Explosion' – using tiny nodes icons were reproduced as reactive dots that would scatter as the user's mouse entered. 'Pixel Sorting' – sections of the image are captured and each pixel is then sorted by brightness to create a waterfall effect. 'Emoji Mosaic' – by scanning each pixel for it's average colour it is then replaced by a corresponding emoji.\n\n Website: the final part of this project was an online afterlife for the filters, users are able to either select an episode (or upload their own photo) and download that image after a filter has been applied.",
    'https://www.insideblackmirror.com/',
    'insideblackmirror.com',
    true,
  ],

  'Hoffmann Centre': [
    'Designer',
    'Applied Works',
    '2018',
    "Applied Works and the Hoffmann Centre for sustainable resource economy have a lasting relationship that has saw us collaborate with them to brand their organisation and build their entire site. For their first printed publication 'Healthy Diets from Sustainable Production: Indonesia' I created six bespoke charts using the D3 based javascript library C3.js to map their data to pin point accuracy. The graphs were then coloured using the Hoffmann centre's brand guidelines duing which I was able to expand their colour palette to include a tertiary group of colours. The charts were coloured in both CMYK for print and RGB for their web version.",
    'https://hoffmanncentre.chathamhouse.org/',
    'hoffmanncentre.org',
    true,
  ],

  'World Forum': [
    'Designer',
    'Applied Works',
    '2018',
    'The Global Competitive Index (GCI) is produced by World Economic Forum every year and is used by millions of policy-makers and industries across the world. This project saw me updating the colour scheme of their signature hero graph to create an engaging chart. Alongside this I redesigned the accompanying icon set to be up to date with their new iconography guidelines produced that year. For their printed reports I found, commissioned and co-art directed Ray Oranges to illustrate the front cover of the report.',
    'http://reports.weforum.org/global-competitiveness-report-2018/country-economy-profiles/#economy=GBR',
    'GCI-2018.com',
    true,
  ],

  'Design Council': [
    'Designer // Art Director',
    'Applied Works',
    '2018',
    'To accompany the rigorous research that went into creating their Designing a Future Economy report the Design Council asked Applied Works to create an engaging story of why the UK government must invest in design early on in education. Using information in the report as narrative points the copy was refined and editted to be sharp and concise. Illustrations were then provided by Nathalie Lees to give a visual flair to the piece. Each slide consisting of illustration and copy is designed to be seen either as a stand alone or with the rest of the narrative. Animation was added later when developers were building the site to bring the work to life.',
    'http://designskills.designcouncil.org.uk/?src=home',
    'designskills.com',
  ],

  Genesys: [
    'Designer',
    'Applied Works',
    '2017 - 2019',
    "Through design strategy to UX/UI design, every Genesys brief brings brand new challenges that require a rigourous process of interegation and investigation to ensure the end result satisfys the audience's, stakeholder's and client's needs. By building an intimate knowledge of an existing product and the users who interact with the software we're able to redesign the product from the ground up, including existing features that make the software powerful but adding user centred features to improve the overall experience. All the UI components designed for products is shared across other existing products to help define the Genesys ecosytem.",
  ],
};

export const IMAGES = {
  // 'Hoffmann Centre':[],
  'World Forum': [
    {
      src: RAY_ORANGES,
      alt: 'GCI2018 – Ray Oranges commission',
      id: 'ray-oranges',
      caption: "Ray Oranges' illustration from the GCI 2018 report",
    },
  ],
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
