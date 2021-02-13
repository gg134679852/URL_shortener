let originId = ''
let obj = []
module.exports = {
  urlId: (id,url) => {
    if(obj.length > 0){
      obj.splice(0,1)
    }
    originId = id.split('')
    obj.push({
      shortId: originId.slice(19).join(''),
               originUrl: url
    })
  },
  obj
}
