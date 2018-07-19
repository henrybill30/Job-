// pages/allclasses/Shixi/Shixi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bizinfo: [
      {
        id: "shujia",
        ch_name: "天津数加科技",
        views: 3,
        likes: 3,
        big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180702/2c3415399af4447782f900ab1618c1e6cfcd208495d565ef66e7dff9f98764da.jpg ",
        ch_shot_info: "天津数加科技有限公司成立于2018年，是一个区块链创业团队致力于打造区块链行业的入口级产品。核心团队毕业于北大、清华、北航等高校，在区块链行业有丰富的开发实战经验以及连续成功创业经验。目前已经获得数千万元天使轮投资。",
      },
      {
        id: "gaoweida",
        ch_name: "高伟达公司",
        views: 8,
        likes: 2,
        big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180426/fcf3a4a052ac4b898e6a558de9c74d8dcfcd208495d565ef66e7dff9f98764da.jpg",
        ch_shot_info: "高伟达公司（上市公司，股票代码：300465）成立至今近20年，是一家能够时刻洞察并解决企业信息化需求，稳健发展的中国IT解决方案和实施服务公司。2014年度IDC评为银行IT解决方案整体市场前五名。公司现有员工近3000名，总部设在北京，下设上海、深圳、南京、武汉、成都、厦门、大连、宁波、长沙等地分支构成。我们的分支机构均设置在最接近客户的地方，能够在最短的时间内为辖区的客户提供迅速、高效的技术服务。",
      },
      {
        id: "qisike",
        ch_name: "奇思客",
        views: 10,
        likes: 6,
        big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20170210/68ca00947c0925573f846fbc88eb008d56c840796bb2c8c88e1847aa2809728c.jpg",
        ch_shot_info: "北京奇思客网络科技有限公司，成立于2012年初，总部位于北京中关村，是一家致力于为全球用户提供专业优质的海外电商推广业务的移动互联网科技公司。自公司成立以来，团队不断壮大，业务发展迅速----2013年徐州设立分公司。2014年获得澳银资本的1000万元天使融资。2015年在成都建立技术研发中心，专注于APP的开发与运营。2016年已完成千万美金级A轮融资。",
      }
    ]
  },
  allbiz: function (e) {
    var that = this;
    var imgId = e.currentTarget.dataset.id;
    console.log(imgId)
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