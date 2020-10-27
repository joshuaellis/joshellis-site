// const fs = require('fs')
// const path = require('path')
const fetch = require('node-fetch')
const MarkdownIt = require('markdown-it')
// const dotenv = require('dotenv')

// dotenv.config({ path: path.resolve(process.cwd(), '../.env') })

// const createOutputPath = locale =>
//   `../src/references/locales/${locale}/index.json`

const SHEET_KEY = process.env.STRINGS_SHEET_KEY
const TABS = [1, 2, 3, 4, 5, 6]
const FINAL_TEXT_COLUMN = 'text'

const markdownFormatter = new MarkdownIt({
  html: true,
  typographer: true
})

const parseArrayData = str =>
  str.split('\n\n').map(string =>
    string.split(',').map(x => {
      if (x.match('https: //') || x.match('mailto: ')) {
        return x
          .split(' ')
          .join('')
          .trim()
      } else {
        return x.trim()
      }
    })
  )

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
          let dontMarkdown = false

          try {
            value = item[`gsx$${FINAL_TEXT_COLUMN}`].$t

            if (value.match('\n\n')) {
              dontMarkdown = true
              value = parseArrayData(value)
            }
          } catch (err) {
            value = ''
          }

          if (dontMarkdown) {
            if (id.split('.')[1] === 'experience') {
              value.forEach((val, i) => {
                const [place, time] = val
                output[`${id}.${i}.place`] = place
                output[`${id}.${i}.time`] = time
              })
            } else if (id.split('.')[1] === 'social') {
              value.forEach((val, i) => {
                const [label, link] = val
                output[`${id}.${i}.label`] = label
                output[`${id}.${i}.link`] = link
              })
            } else {
              output[id] = value
            }
          } else {
            output[id] = markdownFormatter.renderInline(value)
          }
        }
      })
    }

    return { data: output, title }
  } catch (err) {
    console.log(err)
  }
}

// async function main () {
//   for (const tab of TABS) {
//     const { data, title } = await fetchAndParseTab(tab)

//     fs.writeFileSync(
//       path.resolve(__dirname, createOutputPath(title)),
//       JSON.stringify(data, null, 2)
//     )
//   }
// }

// main()

export const fetchStrings = async () => {
  let messages = {}

  for (const tab of TABS) {
    const { data, title } = await fetchAndParseTab(tab)

    messages = { ...messages, [title]: data }
  }

  return messages
}
