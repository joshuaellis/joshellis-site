export default {
  title: 'Josh Ellis',
  description: '',
  titleTemplate: '%s – Josh Ellis',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.joshellis.co.uk/',
    site_name: 'Josh Ellis',
    images: [
      {
        url: '',
        width: 0,
        height: 0,
        alt: '',
      },
    ],
  },
  twitter: {
    handle: '@_josh_ellis_',
    site: '@_josh_ellis_',
    cardType: 'summary_large_image',
  },
}

export const getUrl = (path) => `https://www.joshellis.co.uk${path}`
