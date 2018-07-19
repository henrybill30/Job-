// pages/company/gaoweida/gaoweida.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: " gaoweida",
      ch_name: "高伟达公司",
      views: 8,
      likes: 2,
      big_image: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180426/fcf3a4a052ac4b898e6a558de9c74d8dcfcd208495d565ef66e7dff9f98764da.jpg",
      work: [
        {
          name: "公司简介",
          info: "高伟达公司（上市公司，股票代码：300465）成立至今近20年，是一家能够时刻洞察并解决企业信息化需求，稳健发展的中国IT解决方案和实施服务公司。2014年度IDC评为银行IT解决方案整体市场前五名。公司现有员工近3000名，总部设在北京，下设上海、深圳、南京、武汉、成都、厦门、大连、宁波、长沙等地分支构成。我们的分支机构均设置在最接近客户的地方，能够在最短的时间内为辖区的客户提供迅速、高效的技术服务。",
          show: false,
          index: 0
        },
        {
          name: " JAVA实习生",
          info: "岗位职责：\n 1.负责开发及相关工作; \n \n 任职要求： \n 1.本科计算机科学与技术或者相关专业;/n 2.熟练java语言，有过java开发项目实习工作经验者优先考虑; /n 3.责任心强，具有团队协作精神，良好的学习能力，善于总结归纳; \n 5.待遇：2k-4k	",
          show: false,
          index: 0
        }
      ],
      longitude: "116.469923",
      latitude: "39.955767",
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
      url: '../gaoweida/map/map'
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