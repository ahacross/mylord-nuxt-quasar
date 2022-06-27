Array.prototype.first = function () {
  return this[0]
}

Array.prototype.last = function () {
  return this[this.length - 1]
}

Array.prototype.eq = function (num) {
  return this[num]
}

// Date.prototype.getWeek = function () {
//   const onejan = new Date(this.getFullYear(), 0, 1)
//   const today = new Date(this.getFullYear(), this.getMonth(), this.getDate())
//   const dayOfYear = (today - onejan + 86400000) / 86400000
//   return Math.ceil(dayOfYear / 7)
// }
//
// Date.prototype.getWeekState = function () {
//   const toDay = new Date()
//   let resultWeekCnt = toDay.getWeek() - this.getWeek()
//   if (toDay.getFullYear() > this.getFullYear()) {
//     resultWeekCnt = 52 + resultWeekCnt
//   }
//
//   return resultWeekCnt
// }
