// pages/company/costa/costa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: "costa",
      ch_name: "costa咖啡",
      views: 3,
      likes: 0,
      big_image:
        "http://www.kafeipp.com/uploads/allimg/150817/1-150QG64510524.jpg",
      work: [
        {
          name: "公司简介",
          info: "Costa兄弟于1981年在伦敦开了第一家咖啡专卖店，其后在他们的家庭和朋友协助下，Costa咖啡专卖店以每年开两家新店的成长率扩展。1988 年，Costa兄弟将烘焙咖啡豆工厂转移到伦敦Lambeth区Old Paradise街，并以此工厂作为存放烘烤器和青咖啡豆（那些等待被烘焙的咖啡豆）之用。随后公司发展迅速， 新配置咖啡豆烘烤器， 成为了Costa业务发展的关键因素。",
          show: false,
          index: 0
        },
        {
          name: "学生兼职服务生",
          info: "岗位职责：\n 1. 热情欢迎每位顾客，以确保顾客在门店中能获得无与伦比的咖啡体验; \n2. 始终满足顾客的需求，并在适当的时候为每位顾客给予合适的产品建议;\n3. 时刻保持整洁有序的工作环境，给顾客提供温馨、友好、舒适干净的环境;\n4.遵循COSTA的营运政策和程序，包括现金处理、安全和巡查等，确保门店正常营运;\n \n 任职要求： \n1.年龄在18-30周岁 ，高中或以上学历，热情自信，有良好的顾客服务意识;\n2. 品行端正，经验不拘，愿接受店铺基础训练，男女不限，必须有健康证或者有健康证办理凭条;\n3. 吃苦耐劳，最少做一个月以上;\n4. 每周一天倒休;\n 5.待遇：周结，150元/天 ",
          show: false,
          index: 0
        }
      ],
      longitude: "116.320906",
      latitude: "39.984115",
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
      url: '../costa/map/map'
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