// pages/company/shujia/shujia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: " shujia ",
      ch_name: "天津数加科技",
      views: 3,
      likes: 3,
      big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180702/2c3415399af4447782f900ab1618c1e6cfcd208495d565ef66e7dff9f98764da.jpg ",
      work: [
        {
          name: "公司简介",
          info: "天津数加科技有限公司成立于2018年，是一个区块链创业团队,致力于打造区块链行业的入口级产品。核心团队毕业于北大、清华、北航等高校，在区块链行业有丰富的开发实战经验以及连续成功创业经验。目前已经获得数千万元天使轮投资。",
          show: false,
          index: 0
        },
        {
          name: "开发实习生",
          info: "岗位职责：\n 1.研究各种网页、接口，探寻特点和规律;\n2.编写抓取互联网内容的爬虫和网络机器人工具;\n 3.研究优化算法，提升爬虫系统的稳定性、可扩展性;\n4.攻破各种反爬虫、反作弊策略;\n \n 任职要求： \n 1.良好的沟通能力，团队合作精神，有极大的热情解决困难问题;\n 2.计算机相关专业，有相关项目的开发经验优先; \n 3.熟悉网络相关的技术，了解代理、VPN等网络技术;\n 4.有Github者优先，有技术博客者优先，每周不少于4天工作时间，不少于3个月; \n 5.待遇：4k-6k	",
          show: false,
          index: 0
        }
      ],
      longitude: "116.340315",
      latitude: "39.999888",
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
      url: '../shujia/map/map'
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