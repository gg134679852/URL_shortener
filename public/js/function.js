const shortid = require('shortid')
const obj = []

module.exports = {
  urlId: (url) => {
    let originId = ''
    let splitId = ''
    let id = ''
    
    for(i=0;i<1;i++){
      originId += shortid.generate()
      splitId = originId.split('').slice(0,5)

      if (splitId.includes('_') || splitId.includes('-')) {
        splitId.splice(splitId.indexOf('_'),1,Math.floor(Math.random()*5)+1)
        splitId.splice(splitId.indexOf('-'), 1, Math.floor(Math.random() * 5) + 1)
        }
        id = splitId.join('')
      }
    obj.push({
      originUrl: url ,
      shortId: id
    })
   },
   obj
  }
  