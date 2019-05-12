import BM_BOOK_CLOSEUP from './images/work/insideblackmirror/InsideBlackMirror-11.5-NosediveDetail.jpg';
import BM_ARKANGEL from './images/work/insideblackmirror/244_Arkangel_ReProof.jpg';
import BM_BRB from './images/work/insideblackmirror/Brb-layers-1.jpg';
import BM_WALDO from './images/work/insideblackmirror/waldo-2.jpg';
import BM_SANJUNIPERO from './images/work/insideblackmirror/San-Junipero.jpg';

import GCI2018 from './images/work/wef/GCI_Desktop2018.jpg';
import RAY_ORANGES from './images/work/wef/ray_oranges.png';

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
  '2017': [
    'Genesys UX',
    // 'Algo~rhythm',
  ],
};

const CONTENT = {
  // 'Applied Charts': [],
  'Cartographic Colour': [],
  'Blackshaw Interior Site': [],
  'Inside Black Mirror': [
    {
      type: 'standfirst',
      content:
        'Inside Black Mirror is the first official book about the cult series. The project was split into three phases – prototyping, the book and the website.',
      id: 'bm-01',
    },
    {
      type: 'paragraph',
      content:
        'Prototyping: Using javascript I was able to co-create a series of digital tools used to distort imagery, video and audio taken from the show in a variety of engaging ways. As a result the four distinct filters were created for the book’s chapter openers.',
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
      content:
        'Book: The four filters are ‘Colour Seperation’ – distorting the RGB layers of the image. ‘Vector Explosion’ – using tiny nodes icons were reproduced as reactive dots that would scatter as the user’s mouse entered. ‘Pixel Sorting’ – sections of the image are captured and each pixel is then sorted by brightness to create a waterfall effect. ‘Emoji Mosaic’ – by scanning each pixel for it’s average colour it is then replaced by a corresponding emoji.',
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
      content:
        'Website: The final part of this project was an online afterlife for these filters, whereby users are able to either select an episode (or upload their own photo) apply the desired filter and download the image.',
      id: 'bm-06',
    },
    {
      type: 'url',
      content: 'insideblackmirror.com',
      url: 'https://www.insideblackmirror.com/',
      id: 'bm-07',
    },
  ],
  'Hoffmann Centre Reports': [],
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
  ],
  'Design Skills': [],
  'Genesys UX': [],
  // 'Algo~rhythm': [],
};

export { CONTENT };
export { PROJECTS };
export { PALETTE };
export { COLORARR };
