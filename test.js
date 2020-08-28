const minify = require('terser').minify

const code = `
class Test {
  update() {
    const some = wrap();
    const merged = { ...this, ...some };
    return merged;
  }
}
`

async function main() {
  const res = await minify({ code })
  console.error(res)
}
main().catch(e => console.error(e))
