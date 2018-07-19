// pages/company/rencai/rencai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: "rencai",
      ch_name: "人才官",
      views: 8,
      likes: 0,
      big_image: " https://img.bosszhipin.com/beijin/mcs/chatphoto/20180312/3c17c9e2f8461696182af6642ee96c44df98959f56e2c121fab280cf34cc2665.jpg",
      work: [
        {
          name: "公司简介",
          info: "全球区块链知名企业，其交易所排名全球前5位。多家著名机构投资，成立于2013年，主要面向全球提供数字资产服务，全球著名的交易平台之一。 核心团队来自阿里、腾讯、华为等世界知名企业。已经发展成为全球领先的区块链集团。建立了美国站、韩国站、全球跨境支付网络、区块链工程院，并拥有数字资产及衍生品交易平台等。积累了丰富的区块链研究及技术开发经验，在区块链产业投资布局及战略合作上展现出突出的前瞻性。",
          show: false,
          index: 0
        },
        {
          name: "区块链研究员",
          info: "岗位职责：\n 1.负责区块链行业海内外创新动向跟踪，市场调研，进行区块链整体及细分行业竞争格局分析，形成行业研究报告;\n 2.协助高级研究员完成项目评估，形成投资意见。\n \n 岗位要求：\n 1.要求计算机、数学或金融背景，突出的英文能力，具有2年以上PE/VC、投行、FA机构或咨询机构从业经验，对商业和市场变化敏感，有清晰的逻辑思维能力和创新的视角;\n 2.有新科技方向、金融方向、区块链方向投资经验或报告经验优先;\n 3.有海外优质项目渠道资源优先。\n 4.待遇：10k - 15k",
          show: false,
          index: 0
        }
      ],
      longitude: "116.570059",
      latitude: "39.911458",
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
      url: '../rencai/map/map'
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