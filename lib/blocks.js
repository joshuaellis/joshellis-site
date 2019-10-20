/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export const serializers = (container = 'div') => ({
  types: {},
  marks: {
    color: ({ mark, children }) => (
      <span className="generic__colour-text" style={{ color: mark.hex }}>
        {testMarkdownLink(children[0])}
      </span>
    ),
  },
  container,
});

const testMarkdownLink = str => {
  const regexp = /\[([^\[]+)\]\(([^\)]+)\)/g;
  if (regexp.test(str)) {
    return linkReplacer(str.split(regexp).filter(x => x !== ''));
  }
  return str;
};

const linkReplacer = ([tagTitle, tagURL]) => (
  <a href={tagURL} rel="no_opener" target="_blank">
    {tagTitle}
  </a>
);
