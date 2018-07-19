// pages/company/starbucks/starbucks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: "starbucks",
      ch_name: "Starbucks咖啡",
      views: 6,
      likes: 2,
      big_image: "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=02580eac2e1f95cab2f89ae4a87e145b/b7fd5266d01609243e4aa9c9df0735fae7cd34f0.jpg",
      work: [
        {
          name: "公司简介",
          info: "星巴克（Starbucks）是美国一家连锁咖啡公司的名称，1971年成立，是全球最大的咖啡连锁店，其总部坐落美国华盛顿州西雅图市。星巴克旗下零售产品包括30多款全球顶级的咖啡豆、手工制作的浓缩咖啡和多款咖啡冷热饮料、新鲜美味的各式糕点食品以及丰富多样的咖啡机、咖啡杯等商品。",
          show: false,
          index: 0
        },
        {
          name: "学生兼职服务生",
          info: "岗位职责：\n 1. 制作和提供品质如一的饮料、咖啡和食品; \n2. 与顾客和工作伙伴保持良好的沟通，为所有顾客提供优质的服务;\n3. 每天执行清洁工作，保持干净和舒适的门店环境和工作环境;\n4. 每天执行清洁工作，保持干净和舒适的门店环境和工作环境;\n \n 任职要求： \n1. 全日制在读学生;\n2. 接受倒班工作（门店一般营运时间7:00am – 12:00pm）;\n3. 每周能提供24小时以上工时;\n4. 兼职实习时间半年以上;\n 5.待遇：周结，13.6元/时 ",
          show: false,
          index: 0
        }
      ],
      longitude: "116.32375",
      latitude: "39.98593",
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
      url: '../starbucks/map/map'
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