export const normalTime = (time) => {
  if (!time) { time = 0 }
  let oDate = new Date()
  oDate.setTime(time)
  let year = oDate.getFullYear()
  let month = toDou(oDate.getMonth() + 1)
  let date = toDou(oDate.getDate())
  let hour = toDou(oDate.getHours())
  let minu = toDou(oDate.getMinutes())
  let sec = toDou(oDate.getSeconds())
  return `${year}-${month}-${date} ${hour}:${minu}:${sec}`
}

function toDou (n) {
  return n > 9 ? '' + n : '0' + n
}
