// pages/company/costa/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [
      {
        longitude: "116.320906",
        latitude: "39.984115",
        phone: "13716103359",
        mail: "123456789@qq.com",
        markers: [{
          iconPath: "",
          id: 0,
          longitude: "116.320906",
          latitude: "39.984115",
          width: 35,
          height: 45
        }],
      }
    ]
  },
  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['电话：' + this.data.info[0].phone, '邮箱：' + this.data.info[0].mail],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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