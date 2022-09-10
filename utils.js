const path = require('path')

module.exports.resolve = (dir) => {
  return path.join(__dirname, './', dir)
}

module.exports.getNow = () => {
  var d = new Date()
  var year = d.getFullYear()
  var month = change(d.getMonth() + 1)
  var day = change(d.getDate())
  var hour = change(d.getHours())
  var minute = change(d.getMinutes())
  var second = change(d.getSeconds())

  function change(t) {
    if (t < 10) {
      return '0' + t
    } else {
      return t
    }
  }
  var time = year + '-' + month + '-' + day + '-' + hour + '-' + minute + '-' + second
  return time
}
