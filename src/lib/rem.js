;((doc, win) => {
  const docEl = document.documentElement
  let tid
  const setRem = () => {
    //let visualView = Math.min(docEl.getBoundingClientRect().width, 540);
    let visualView = docEl.getBoundingClientRect().width
    let baseRem = 0
    if(visualView>900){
      baseRem = 1920
    }else{
      baseRem = 750
    }
    let newBase = 100 * visualView / baseRem
    docEl.style.fontSize = newBase + 'px'
  }

  window.addEventListener('resize', () => {
    clearTimeout(tid)
    tid = setTimeout(setRem, 300)
  })
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(setRem, 300)
    }
  })
  setRem()
})(document, window)
