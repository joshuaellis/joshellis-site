const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const MarkdownIt = require('markdown-it')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(process.cwd(), '../.env') })

const createOutputPath = locale =>
  `../src/references/locales/${locale}/index.json`

const SHEET_KEY = process.env.STRINGS_SHEET_KEY
const TABS = [1, 2, 3, 4, 5, 6]
const FINAL_TEXT_COLUMN = 'text'

const markdownFormatter = new MarkdownIt({
  html: true,
  typographer: true
})

async function fetchAndParseTab (tabId) {
  try {
    const res = await fetch(
      `https://spreadsheets.google.com/feeds/list/${SHEET_KEY}/${tabId}/public/values?alt=json`
    )
    const { feed } = await res.json()
    const output = {}
    const title = feed.title.$t.toLowerCase()

    if (feed.entry) {
      feed.entry.forEach(item => {
        if (item.gsx$id && item.gsx$id.$t) {
          const id = `${item.gsx$id.$t.toLowerCase().trim()}`
          let value

          try {
            value = item[`gsx$${FINAL_TEXT_COLUMN}`].$t
          } catch (err) {
            value = ''
          }
          output[id] = markdownFormatter.renderInline(value)
        }
      })
    }

    return { data: output, title }
  } catch (err) {
    console.log(err)
  }
}

async function main () {
  for (const tab of TABS) {
    const { data, title } = await fetchAndParseTab(tab)

    fs.writeFileSync(
      path.resolve(__dirname, createOutputPath(title)),
      JSON.stringify(data, null, 2)
    )
  }
}

main()
