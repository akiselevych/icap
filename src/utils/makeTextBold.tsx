const makeTextBold = (text: string) => {
  const arr = text.split('<br />');
  const boldText = arr.map((item, i) => {
    return item.split('<bold>').map((item, i) => {

      return item.includes('</bold>') ? item.split("</bold>").map((text, i) => {
        return !i ? <span style={{ fontWeight: 600 }} key={i}>{text}</span> : text
      }
      ) : item
    })
  })
  return boldText
}

export default makeTextBold;