// pages/company/qisike/qisike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: "qisike",
      ch_name: "奇思客",
      views: 10,
      likes: 6,
      big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20170210/68ca00947c0925573f846fbc88eb008d56c840796bb2c8c88e1847aa2809728c.jpg",
      work: [
        {
          name: "公司简介",
          info: "北京奇思客网络科技有限公司，成立于2012年初，总部位于北京中关村，是一家致力于为全球用户提供专业优质的海外电商推广业务的移动互联网科技公司。自公司成立以来，团队不断壮大，业务发展迅速----2013年徐州设立分公司。2014年获得澳银资本的1000万元天使融资。2015年在成都建立技术研发中心，专注于APP的开发与运营。2016年已完成千万美金级A轮融资。",
          show: false,
          index: 0
        },
        {
          name: "Facebook广告实习生",
          info: "岗位职责：\n 1.负责电商产品的Facebook广告投放; \n2.实时监控广告数据，并作分析、统计，及时调整投放策略;\n3.定期输出投放数据和用户分析报表; \n \n 任职要求： \n 1.通过CET6,有扎实的英文功底;\n2.勤奋好学，对跨境电商或Facebook社交营销有兴趣;\n3.学习能力强，有良好的沟通表达能力;\n4.应届生亦可，有老师亲自带;\n 5.待遇：5k-10k	",
          show: false,
          index: 0
        }
      ],
      longitude: "117.210057",
      latitude: "34.233022",
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
      url: '../qisike/map/map'
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