const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const MarkdownIt = require('markdown-it');

const SHEET_KEY = '1s8q_k8eTo0Rx7l5EnacQv300jRF6k0J-29ax2IQCtTU';
const TABS = [1];
const FINAL_TEXT_COLUMN = 'text';

const markdownFormatter = new MarkdownIt({
  typographer: true,
});

// eslint-disable-next-line consistent-return
async function fetchAndParseTab(tabId) {
  try {
    const res = await fetch(
      `https://spreadsheets.google.com/feeds/list/${SHEET_KEY}/${tabId}/public/values?alt=json`,
    );
    const data = await res.json();
    const output = {};
    data.feed.entry.forEach(item => {
      if (item.gsx$id && item.gsx$id.$t) {
        const id = item.gsx$id.$t.toLowerCase().trim();
        let value;

        try {
          value = item[`gsx$${FINAL_TEXT_COLUMN}`].$t;
        } catch (err) {
          value = '';
        }
        output[id] = markdownFormatter.renderInline(value);
      }
    });
    return output;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  let output = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const tab of TABS) {
    // eslint-disable-next-line no-await-in-loop
    const data = await fetchAndParseTab(tab);
    output = Object.assign(output, data);
  }

  const outputPath = path.resolve(__dirname, '../../static/strings.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
}

main();
