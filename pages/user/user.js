const app = getApp()
Page({
    data: {
        userInfo: {
            name: "胡国晖",
            avatarUrl: "/images/11.png"
        },classs: [
            {
              icoPath: "/images/qd.png",
              name: "签到"
            },
            {
                icoPath: "/images/fb.png",
                name: "已购买"
              },{
                icoPath: "/images/zj.png",
                name: "足迹"
              }      
      
          ]
    },
    tabChange(e) {
        console.log('tab change', e)
        app.tabChange(e);
    },
    onLoad: function (options) {

    },

    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})