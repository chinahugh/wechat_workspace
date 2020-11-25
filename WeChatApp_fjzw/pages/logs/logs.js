//logs.js
const util = require('../../utils/util.js')

// Page({
//   data: {
//     logs: []
//   },
//   onLoad: function () {
//     this.setData({
//       logs: (wx.getStorageSync('logs') || []).map(log => {
//         return util.formatTime(new Date(log))
//       })
//     })
//   }
// })

Page({
  data: {
    tips: '请稍后',
    show: true,
    animated: true
  },
  onShow() {
    this.timer = setInterval(() => {
      this.setData({
        show: !this.data.show
      })
    }, 2000)
  },
  onUnload() {
    clearInterval(this.timer)
  }
})