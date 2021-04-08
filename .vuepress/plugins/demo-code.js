const mdIt = require('markdown-it')
const mdItContainer = require('markdown-it-container')
const highlight = require('highlight.js')

const filterHTMLTokenFromTokens = (blockMap, tokens) => {
  if (!blockMap) return []
  return tokens.filter((token) => {
    const { map, type } = token
    return (
      type === 'html_block' && map[0] >= blockMap[0] && map[1] <= blockMap[1]
    )
  })
}

const getHighlightCode = (str, lang = 'vue') => {
  const code = highlight.highlightAuto(str, ['xml'])
  return `<pre><code class="html xml hljs ">${code.value}</code></pre>`
}

const getRender = (md, options = {}, ctx) => {
  return (tokens, idx) => {
    const { nesting, info = '', map } = tokens[idx]

    // end tag
    if (nesting === -1) {
      return '</template></code-block>'
    }

    // get code block desciption
    const matchedInfo = info.trim().match(/^demo\s+(.*)$/)
    const description = matchedInfo && matchedInfo[1]
    const descTemplate = mdIt().render(description || '')

    // get inner code
    let htmlStr = ''
    let lastLine = ''
    const htmlTokens = filterHTMLTokenFromTokens(map, tokens)

    htmlTokens.forEach((token) => {
      const { map } = token
      const delta = map[0] - (lastLine || map[1])
      if (delta > 0) htmlStr += '\n'.repeat(delta)
      htmlStr += token.content
      lastLine = map[1]
    })

    return `<code-block 
                    description="${description || ''}"
                    scrollViewSelector="${options.scrollViewSelector ||
                      'html'}">
                        <span slot="description">${descTemplate}</span>
                        <template slot="code">
                            ${getHighlightCode(htmlStr)}
                        </template>
                    <template>`
  }
}

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-demo-code',
    extendMarkdown: (md) => {
      md.use(mdItContainer, 'demo', {
        render: getRender(md, options, ctx),
      })
    },
  }
}
