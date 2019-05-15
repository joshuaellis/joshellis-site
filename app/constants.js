/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import BM_BOOK_CLOSEUP from './images/work/insideblackmirror/InsideBlackMirror-11.5-NosediveDetail.jpg';
import BM_ARKANGEL from './images/work/insideblackmirror/244_Arkangel_ReProof.jpg';
import BM_BRB from './images/work/insideblackmirror/Brb-layers-1.jpg';
import BM_WALDO from './images/work/insideblackmirror/waldo-2.jpg';
import BM_SANJUNIPERO from './images/work/insideblackmirror/San-Junipero.jpg';

import GCI2018 from './images/work/wef/GCI_Desktop2018.jpg';
import RAY_ORANGES from './images/work/wef/ray_oranges.png';

import FIG1A from './images/work/hoffmanncentre/FIG1A.png';
import FIG1B from './images/work/hoffmanncentre/FIG1B.png';
import FIG1C from './images/work/hoffmanncentre/FIG1C.png';

import SLIDE_ONE from './images/work/designskills/design-skills-01.png';
import SLIDE_TWO from './images/work/designskills/design-skills-02.png';
import SLIDE_THREE from './images/work/designskills/design-skills-03.png';

import CARTO_DESKTOP from './images/work/cartographic/cartographic-desktop.png';
import CARTO_MOBILE from './images/work/cartographic/cartographic-mobile.png';

import BLACK_DESKTOP from './images/work/blackshaw/blackshaw-desktop.png';
import BLACK_MOBILE from './images/work/blackshaw/blackshaw-mobile.png';

import ALGO_IMG from './images/work/algorhythm/algo.jpg';

const PALETTE = {
  black: '#1a1a1a',
  white: '#fdfdfd',
  blue: '#5DA9E2',
  red: '#FF6F85',
  orange: '#F8A22D',
  green: '#5FD16D',
  footerBackground: '#E8E8E8',
  photoBackground: '#F4F4F4',
};

const COLORARR = ['blue', 'red', 'orange', 'green'];

const PROJECTS = {
  '2019': [
    // 'Applied Charts <label>WIP</label>',
    'Cartographic Colour',
    'Blackshaw Interior Site',
  ],
  '2018': [
    'Inside Black Mirror',
    'Hoffmann Centre Reports',
    'Global Competitive Index 2018',
    'Design Skills',
  ],
  '2017': ['Genesys UX', 'algo~rhythm'],
};

const MOBILE_TITLES = {
  'Cartographic Colour': 'Cartographic',
  'Blackshaw Interior Site': 'Blackshaw',
  'Inside Black Mirror': 'Black Mirror',
  'Hoffmann Centre Reports': 'Hoffmann',
  'Global Competitive Index 2018': 'GCI 2018',
  'Design Skills': 'Design Skills',
  'Genesys UX': 'Genesys UX',
  'algo~rhythm': 'algo~rhythm',
};

const CONTENT = {
  // 'Applied Charts': [],
  'Cartographic Colour': [
    {
      type: 'standfirst',
      content:
        'For his upcoming gallery in Crossrail Roof Gardens, Giles and I collaborated to create a minimalistic website that would emulate the look and feel of his publication, Cartographic Colour.',
      id: 'cc-01',
    },
    {
      type: 'paragraph',
      content:
        'Completed within a short timeframe, the site was designed and built within ten days to advertise the sales of his artworks and book alongside his exhibition. To ensure the site is responsive, the dot background on the mobile copy is repsonsive to the height of the text block to generate the correct amount of dots needed everytime the webpage loads.',
      id: 'cc-02',
    },
    {
      type: 'img-carousel',
      content: [
        {
          type: 'image',
          content: CARTO_DESKTOP,
          alt: 'Cartographic Colour desktop site screenshot',
          caption: 'Cartographic Colour desktop site',
          id: 'cc-03.1',
        },
        {
          type: 'image',
          content: CARTO_MOBILE,
          alt: 'Cartographic Colour mobile site screenshot series',
          caption: 'Cartographic Colour mobile site',
          id: 'cc-03.2',
        },
      ],
      id: 'cc-03',
    },
    {
      type: 'url',
      content: 'cartographiccolour.com',
      url: 'https://www.cartographiccolour.com/',
      id: 'cc-04',
    },
  ],
  'Blackshaw Interior Site': [
    {
      type: 'standfirst',
      content:
        "Working with designer Charlotte Mistry (Brand Strategist & Graphic Designer at Blackshaw Interior Design), we created a fully bespoke Wordpress theme and plugin for Blackshaw's rebrand.",
      id: 'bsi-01',
    },
    {
      type: 'image',
      content: BLACK_DESKTOP,
      alt: "Desktop homepage of Blackshaw Interior Design's website",
      caption: 'Desktop homepage view of the site.',
      id: 'bsi-02',
    },
    {
      type: 'paragraph',
      content:
        "The client expressed the importance of flexibility whilst building their page's content. To fulfill this I created flexible content blocks for specific wordpress post and page types. The end result was a light weight theme with minimal libraries and image optimizing.",
      id: 'bsi-03',
    },
    {
      type: 'image',
      content: BLACK_MOBILE,
      alt:
        "Selection of mobile screenshots from Blackshaw Interior Design's website",
      caption:
        'Mobile view of the site, from left to right –  Homepage, Portfolio, Single project.',
      id: 'bsi-04',
    },
    {
      type: 'paragraph',
      content:
        'Other features for the site include an image carousel on the homepage and an instagram image scraper to include their profile feed on their news page.',
      id: 'bsi-05',
    },
    {
      type: 'url',
      content: 'blackshawinterior.com',
      url: 'https://blackshawinteriordesign.com/',
      id: 'bsi-06',
    },
  ],
  'Inside Black Mirror': [
    {
      type: 'standfirst',
      content:
        'Inside Black Mirror is the first official book about the cult series. The project was split into three phases – prototyping, the book and the website.',
      id: 'bm-01',
    },
    {
      type: 'paragraph',
      content: [
        <label>Prototyping:</label>,
        ' Using javascript I was able to co-create a series of digital tools used to distort imagery, video and audio taken from the show in a variety of engaging ways. As a result the four distinct filters were created for the book’s chapter openers.',
      ],
      id: 'bm-02',
    },
    {
      type: 'image',
      content: BM_BOOK_CLOSEUP,
      alt: 'inside black mirror nosedive close up',
      caption: 'Close up of the emoji filter in production',
      id: 'bm-03',
    },
    {
      type: 'paragraph',
      content: [
        <label>Book:</label>,
        ' The four filters are ‘Colour Seperation’ – distorting the RGB layers of the image. ‘Vector Explosion’ – using tiny nodes icons were reproduced as reactive dots that would scatter as the user’s mouse entered. ‘Pixel Sorting’ – sections of the image are captured and each pixel is then sorted by brightness to create a waterfall effect. ‘Emoji Mosaic’ – by scanning each pixel for it’s average colour it is then replaced by a corresponding emoji.',
      ],
      id: 'bm-04',
    },
    {
      type: 'img-carousel',
      content: [
        {
          type: 'image',
          content: BM_BRB,
          alt: 'inside black mirror Be Right Back',
          caption: 'Series 2, Episode 1 – Be Right Back',
          id: 'bm-05.1',
        },
        {
          type: 'image',
          content: BM_WALDO,
          alt: 'inside black mirror The Waldo Moment',
          caption: 'Series 2, Episode 3 – The Waldo Moment',
          id: 'bm-05.2',
        },
        {
          type: 'image',
          content: BM_SANJUNIPERO,
          alt: 'inside black mirror San Junipero',
          caption: 'Series 3, Episode 4 –San Junipero',
          id: 'bm-05.3',
        },
        {
          type: 'image',
          content: BM_ARKANGEL,
          alt: 'inside black mirror Arkangel',
          caption: 'Series 4, Episode 2 – Arkangel',
          id: 'bm-05.4',
        },
      ],
      id: 'bm-05',
    },
    {
      type: 'paragraph',
      content: [
        <label>Website:</label>,
        ' The final part of this project was an online afterlife for these filters, whereby users are able to either select an episode (or upload their own photo) apply the desired filter and download the image.',
      ],
      id: 'bm-06',
    },
    {
      type: 'url',
      content: 'insideblackmirror.com',
      url: 'https://www.insideblackmirror.com/',
      id: 'bm-07',
    },
  ],
  'Hoffmann Centre Reports': [
    {
      type: 'standfirst',
      content:
        'Applied Works and the Hoffmann Centre for sustainable resource economy have a lasting relationship which has seen us collaborate with them to brand their organisation and build their entire site.',
      id: 'hoff-01',
    },
    {
      type: 'paragraph',
      content:
        "For their first printed publication 'Healthy Diets from Sustainable Production: Indonesia' I created six bespoke charts using the D3 based javascript library C3.js to map their data and pin point accuracy. The graphs were then coloured using the Hoffmann centre's brand guidelines during which I was able to expand their colour palette to include a tertiary group of colours.",
      id: 'hoff-02',
    },
    {
      type: 'img-carousel',
      content: [
        {
          type: 'image',
          content: FIG1A,
          alt: 'Hoffmann Centre Indonesia Report – Fig 1A',
          caption: 'Fig 1a. Economic and demographic transition',
          id: 'hoff-03.1',
        },
        {
          type: 'image',
          content: FIG1B,
          alt: 'Hoffmann Centre Indonesia Report – Fig 1B',
          caption: 'Fig 1b. Structural transition',
          id: 'hoff-03.2',
        },
        {
          type: 'image',
          content: FIG1C,
          alt: 'Hoffmann Centre Indonesia Report – Fig 1C',
          caption: 'Fig 1c. Dietary transition',
          id: 'hoff-03.3',
        },
      ],
      id: 'hoff-03',
    },
    {
      type: 'paragraph',
      content:
        'The charts were coloured in both CMYK for print and RGB for their web version. The article for the report can be seen usng the link below',
      id: 'hoff-04',
    },
    {
      type: 'url',
      content: 'hoffmanncentre.org',
      url:
        'https://hoffmanncentre.chathamhouse.org/article/healthy-diets-from-sustainable-production-indonesia/',
      id: 'hoff-05',
    },
  ],
  'Global Competitive Index 2018': [
    {
      type: 'standfirst',
      content:
        'The Global Competitive Index (GCI) is produced by World Economic Forum every year and is used by millions of policy-makers and industries across the world.',
      id: 'wef-01',
    },
    {
      type: 'paragraph',
      content:
        'This project saw me updating the colour scheme of their signature hero graph to create an engaging chart. Alongside this I redesigned the accompanying icon set to ensure it’s up to date with their new iconography guidelines produced that year.',
      id: 'wef-02',
    },
    {
      type: 'image',
      content: GCI2018,
      alt: 'Global competitive index 2018 hero chart',
      caption: 'Desktop hero chart',
      id: 'wef-03',
    },
    {
      type: 'paragraph',
      content:
        'For their printed reports I sourced, commissioned and co-art directed Ray Oranges to illustrate the front cover of the report.',
      id: 'wef-04',
    },
    {
      type: 'image',
      content: RAY_ORANGES,
      alt: 'GCI2018 report illustration by Ray Oranges',
      caption: 'Ray Oranges’ illustration',
      id: 'wef-05',
    },
    {
      type: 'url',
      content: 'reports-weforum.org',
      url:
        'http://reports.weforum.org/global-competitiveness-report-2018/country-economy-profiles/#economy=GBR',
      id: 'wef-06',
    },
  ],
  'Design Skills': [
    {
      type: 'standfirst',
      content:
        'To accompany the rigorous research that went into creating their ‘Designing a Future Economy’ report Applied Works created an engaging story explaning why the UK government must invest in design early on within the educational system.',
      id: 'des-01',
    },
    {
      type: 'paragraph',
      content:
        'Using copy from the report as narrative markers it was then refined and edited to be sharp and concise. Illustrations were provided by Nathalie Lees to give visual flair to the story. Each slide, consisting of an illustration and one sentence of copy is designed to be seen either as a stand alone composition or as part of the narrative sequence. Animation was added later when developers were building the site to bring the work to life.',
      id: 'des-02',
    },
    {
      type: 'img-carousel',
      content: [
        {
          type: 'image',
          content: SLIDE_ONE,
          alt: 'Slide one of design skills',
          caption: 'Slide one',
          id: 'des-03.1',
        },
        {
          type: 'image',
          content: SLIDE_TWO,
          alt: 'Slide two of design skills',
          caption: 'Slide two',
          id: 'des-03.2',
        },
        {
          type: 'image',
          content: SLIDE_THREE,
          alt: 'Slide three of design skills',
          caption: 'Slide three',
          id: 'des-03.3',
        },
      ],
      id: 'des-03',
    },
    {
      type: 'url',
      content: 'designskills.org',
      url: 'http://designskills.designcouncil.org.uk/?src=home',
      id: 'des-04',
    },
  ],
  'Genesys UX': [
    {
      type: 'standfirst',
      content:
        "Through design strategy to UX/UI design, every Genesys brief brings new challenges that require a rigourous process of interegation and investigation to ensure the end result satisfys the audience's, stakeholder's and client's needs.",
      id: 'gen-01',
    },
    {
      type: 'paragraph',
      content:
        "By building an intimate knowledge of an existing product and the users who interact with the software, we're able to redesign the product from the ground up. This includes existing features that make the software powerful but adding user centred features to improve the overall user experience. All the UI components designed for products are shared across other existing products to help define the Genesys ecosytem",
      id: 'gen-02',
    },
  ],
  'algo~rhythm': [
    {
      type: 'standfirst',
      content:
        "Made in response to D&AD's New Blood 2017 Arjowiggin's brief algo~rhythm is a promotional service that takes your favourite Sony music song and generates a unique pattern online",
      id: 'ar-01',
    },
    {
      type: 'paragraph',
      content:
        "It is then printed and perforated on a 12” by 12” sheet of Arjowiggin's Pop'Set paper with the colour of both the stock and pattern determined by the user to become a bespoke slip-mat. They are then sent out to customers in a gate folded vinyl cover. Made using Arjowiggins' conqueror CX22 brilliant white paper, and once opened reveals all the present Sony music artists.",
      id: 'ar-02',
    },
    {
      type: 'image',
      content: ALGO_IMG,
      alt:
        'Example of a bespoke slipmat and the gatefold vinyl cover the product is delivered in.',
      caption:
        'Example of a bespoke slipmat and the gatefold vinyl cover the product is delivered in.',
      id: 'ar-03',
    },
    {
      type: 'paragraph',
      content: [
        "algo~rhythm gets its name from the algorithm used on the website, taking data directly from Spotify's song data and converting it into the end visuals. The variables in this algorithm are:",
        <br />,
        <label>Popularity</label>,
        ' — shown by the thickness of the line',
        <br />,
        <label>BPM</label>,
        ' — shown by the frequency of the line',
        <br />,
        <label>Length</label>,
        ' — shown by the length of line',
      ],
      id: 'ar-04',
    },
    {
      type: 'video',
      url: 'https://player.vimeo.com/video/213445995',
      title: 'algo~rhythm',
      options: {
        allow: 'autoplay; fullscreen',
      },
      id: 'ar-05',
    },
  ],
};

export { CONTENT };
export { MOBILE_TITLES };
export { PROJECTS };
export { PALETTE };
export { COLORARR };
