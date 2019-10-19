const blocksToHtml = require('@sanity/block-content-to-html');

export default function convertBlocks(blocks) {
  const { h } = blocksToHtml;
  const serializers = {
    types: {},
    marks: {},
  };
  return blocksToHtml({
    blocks,
    serializers,
  });
}
