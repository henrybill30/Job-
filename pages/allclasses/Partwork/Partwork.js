// pages/allclasses/Partwork/Partwork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bizinfo: [
      {
        id: "starbucks",
        ch_name: "Starbucks咖啡",
        views: 6,
        likes: 2,
        big_image: "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=02580eac2e1f95cab2f89ae4a87e145b/b7fd5266d01609243e4aa9c9df0735fae7cd34f0.jpg",
        ch_shot_info: "星巴克（Starbucks）是美国一家连锁咖啡公司的名称，1971年成立，是全球最大的咖啡连锁店，其总部坐落美国华盛顿州西雅图市。星巴克旗下零售产品包括30多款全球顶级的咖啡豆、手工制作的浓缩咖啡和多款咖啡冷热饮料、新鲜美味的各式糕点食品以及丰富多样的咖啡机、咖啡杯等商品。",
      },
      {
        id: "MacDonald",
        ch_name: "麦当劳",
        views: 15,
        likes: 5,
        big_image:
          "http://www.hunanyuda.com/ueditor/php/upload/image/20171026/1508997194123307.jpg",
        ch_shot_info: "麦当劳（McDonald's）是全球大型跨国连锁餐厅，1955年创立于美国芝加哥，在世界上大约拥有3万间分店。主要售卖汉堡包，以及薯条、炸鸡、汽水、冰品、沙拉、水果等快餐食品。",
      },
      {
        id: "costa",
        ch_name: "costa咖啡",
        views: 3,
        likes: 0,
        big_image:
          "http://www.kafeipp.com/uploads/allimg/150817/1-150QG64510524.jpg",
        ch_shot_info: "Costa兄弟于1981年在伦敦开了第一家咖啡专卖店，其后在他们的家庭和朋友协助下，Costa咖啡专卖店以每年开两家新店的成长率扩展。1988 年，Costa兄弟将烘焙咖啡豆工厂转移到伦敦Lambeth区Old Paradise街，并以此工厂作为存放烘烤器和青咖啡豆（那些等待被烘焙的咖啡豆）之用。随后公司发展迅速， 新配置咖啡豆烘烤器， 成为了Costa业务发展的关键因素。",
      }
    ]
  },
  allbiz: function (e) {
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