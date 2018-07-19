// pages/company/MacDonald/MacDonald.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: "MacDonald",
      ch_name: "麦当劳",
      views: 15,
      likes: 5,
      big_image:  "http://www.hunanyuda.com/ueditor/php/upload/image/20171026/1508997194123307.jpg",
      work: [
        {
          name: "公司简介",
          info: "麦当劳（McDonald's）是全球大型跨国连锁餐厅，1955年创立于美国芝加哥，在世界上大约拥有3万间分店。主要售卖汉堡包，以及薯条、炸鸡、汽水、冰品、沙拉、水果等快餐食品。",
          show: false,
          index: 0
        },
        {
          name: "学生兼职服务生",
          info: "岗位职责：\n 1.按照麦当劳执行标准、经理安排认真做好桌椅、餐厅工具设备卫生，准备好各种用品，确保正常营业使用; \n2.接待顾客应主动、热情、礼貌、耐心、周到，使顾客有宾至如归之感;\n3.按餐厅标准运用礼貌语言，为客人提供杰出的服务; \n \n 任职要求： \n1.年满16周岁，高中或以上学历;\n2.有意愿从事并热爱顾客服务工作;\n3.喜欢快节奏的工作并能适应轮班;\n4.每周至少20小时;\n 5.待遇：每小时12~20元之间浮动，根据工作时间和表现浮动",
          show: false,
          index: 0
        }
      ],
      longitude: "116.400601",
      latitude: "40.006283",
    }]
  },
  selectTap: function (e) {
    var that = this;
    var workId = e.currentTarget.dataset.id;
    //console.log(workId);
    workId = workId - 1;
    console.log(workId);
    var workShow = that.data.info[0].work[workId].show;
    console.log(workShow);
    var show = "info[0].work[" + workId + "].show";
    that.setData({
      [show]: !workShow
    });
  },
  onContact: function () {
    wx.navigateTo({
      url: '../MacDonald/map/map'
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