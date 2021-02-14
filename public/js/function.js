const shortid = require('shortid')
const obj = []

module.exports = {
  urlId: (url) => {
    let originId = ''
    let splitId = ''
    let id = ''
    
    for(i=0;i<=1;i++){

      originId+=shortid.generate()
      splitId = originId.split('')

      if (splitId.includes('_') || splitId.includes('-')){
        splitId = ''
        continue
      }else{
        id = splitId.join('')
      }
    }

    obj.push({
      originUrl: url ,
      shortId: id.slice(0,5)
    })
  },
  obj
}