// pages/company/jingdong/jingdong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [
      {
        id: "jingdong",
        ch_name: "京东集团",
        views: 20,
        likes: 8,
        big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180629/52d76eda8b1c54885676bf7ffb7a3e290e6c37018c8d2078a5236ba96cecc087.jpg",
        work: [
          {
            name: "公司简介",
            info: "京东于2004年正式涉足电商领域。2016年，京东集团市场交易额达到9392亿元*。京东是中国收入规模最大的互联网企业。2017年7月，京东再次入榜《财富》全球500强，位列第261位，成为排名最高的中国互联网企业，在全球仅次于亚马逊和Alphabet，位列互联网企业第三。2014年5月，京东集团在美国纳斯达克证券交易所正式挂牌上市，是中国第一个成功赴美上市的大型综合型电商平台。2015年7月，京东凭借高成长性入选纳斯达克100指数和纳斯达克100平均加权指数",
            show: false,
            index: 0
          },
          {
            name: "产品经理",
            info: "岗位职责：\n 1.协同数据产品组同事共同搭建京东商城居家事业群数据策略平台; \n2.通过结构化产品设计承载京东商城10个一级类目、京东集团一半以上千亿gmv项目的搜索、推荐、营销策略落地; \n 3.基于商家、用户、平台的维度诉求进行综合产品设计，对平台GMV提升负责，构建平台生态; \n4.与其他平台产品部门通力合作为实现共同产品价值努力。\n \n 任职要求： \n 1.211 / 985研究生或本科学历 19级在读学生; /n 2.计算机/通信等相关工科类专业或对产品架构设计有一定见解; /n 3.聪明、能够深度思考，善于沟通，能够驱动多方为共同目标负责;\n 4.不低于连续4个月的实习时间。如果你觉得自己 聪明能干，乐观积极可以不设限。\n \n 你将获得：\n 1.亿级别大型电商平台产品经验；\n 2.数据产品部负责人亲自辅导，快速成长为行业资深；\n 3.直接获得转正机会，优先升职机会；\n 4.一线互联网公司实习薪资 + 住房补贴、餐补。\n 5.待遇：6k-10k	",
            show: false,
            index: 0
          }
        ],
        longitude: "116.570059",
        latitude: "39.791678",
      }
    ]
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
      url: '../jingdong/map/map'
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