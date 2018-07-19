// pages/allbiz/allbiz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bizinfo: [
      {
        id: "thoughtworks",
        ch_name: "ThoughtWorks",
        views: 15,
        likes: 2,
        big_image: "https://img.bosszhipin.com/beijin/mcs/bar/20171121/751af5d2df680899fdb431ef445fc657be1bd4a3bd2a63f070bdbdada9aad826.png",
        ch_shot_info: "ThoughtWorks是一家全球信息技术服务公司，在美国、英国、澳大利亚、印度、巴西等十余个国家设有办公室，成为超过3000卓越开发者的技术乐园。其中，500位在中国，通过全球技术资源共享和人才交流，服务世界各行业的顶尖客户。目前，我们的客户遍及国内外互联网、金融、零售、运输、能源、医疗等行业。中国区服务的客户包含渣打银行、BCG、JP摩根、美国Delta航空、澳大利亚Telstra电信、中国银行、平安集团、中国电信、顺丰速运、有信科技、中信集团等多家国内外知名企业。"
      },
      {
        id: "jingdong",
        ch_name: "京东集团",
        views: 20,
        likes: 8,
        big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180629/52d76eda8b1c54885676bf7ffb7a3e290e6c37018c8d2078a5236ba96cecc087.jpg",
        ch_shot_info: "京东于2004年正式涉足电商领域。2016年，京东集团市场交易额达到9392亿元*。京东是中国收入规模最大的互联网企业。2017年7月，京东再次入榜《财富》全球500强，位列第261位，成为排名最高的中国互联网企业，在全球仅次于亚马逊和Alphabet，位列互联网企业第三。2014年5月，京东集团在美国纳斯达克证券交易所正式挂牌上市，是中国第一个成功赴美上市的大型综合型电商平台。2015年7月，京东凭借高成长性入选纳斯达克100指数和纳斯达克100平均加权指数"
      },
      {
        id: "rencai",
        ch_name: "人才官",
        views: 8,
        likes: 0,
        big_image: " https://img.bosszhipin.com/beijin/mcs/chatphoto/20180312/3c17c9e2f8461696182af6642ee96c44df98959f56e2c121fab280cf34cc2665.jpg",
        ch_shot_info: "全球区块链知名企业，其交易所排名全球前5位。多家著名机构投资，成立于2013年，主要面向全球提供数字资产服务，全球著名的交易平台之一。 核心团队来自阿里、腾讯、华为等世界知名企业。已经发展成为全球领先的区块链集团。建立了美国站、韩国站、全球跨境支付网络、区块链工程院，并拥有数字资产及衍生品交易平台等。积累了丰富的区块链研究及技术开发经验，在区块链产业投资布局及战略合作上展现出突出的前瞻性。"
      }
    ]
  },
  allbiz:function (e) {
    var that = this;
    var imgId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/company/' + imgId + '/' + imgId
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