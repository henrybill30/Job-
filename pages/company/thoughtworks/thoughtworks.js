// pages/company/thoughtworks/thoughtworks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/down.jpg",
    info: [{
      id: "thoughtworks",
      ch_name: "ThoughtWorks",
      views: 15,
      likes: 2,
      big_image: " https://img.bosszhipin.com/beijin/mcs/bar/20171121/751af5d2df680899fdb431ef445fc657be1bd4a3bd2a63f070bdbdada9aad826.png",
      work: [
        {
          name: "公司简介",
          info: "ThoughtWorks是一家全球信息技术服务公司，在美国、英国、澳大利亚、印度、巴西等十余个国家设有办公室，成为超过3000卓越开发者的技术乐园。其中，500位在中国，通过全球技术资源共享和人才交流，服务世界各行业的顶尖客户。目前，我们的客户遍及国内外互联网、金融、零售、运输、能源、医疗等行业。中国区服务的客户包含渣打银行、BCG、JP摩根、美国Delta航空、澳大利亚Telstra电信、中国银行、平安集团、中国电信、顺丰速运、有信科技、中信集团等多家国内外知名企业。"
        },
        {
          name: "算法工程师",
          info: "工作要求：\n 1.精通Python、Java、Scala、Matlab、SPSS、R、SAS等任意一种程序设计语言或工具;\n2. 拥有应用数学、机器学习、模式识别、人工智能、数据挖掘、信号处理、自动化控制、系统工程、信息管理、数理统计等相关专业;\n3.有搜索引擎、精准营销、用户画像、推荐算法、异常检测、数据挖掘、图像识别、语音识别等相关项目经;\n4.良好的业务理解能力和沟通技巧，具备很强的抗压能力和团队合作能力，可以出差;\n5.如果你愿意提交：已经发表过的论文，毕业论文、研究课题的成果，那就更好啦。\n6.待遇：10k-20k。",
          show: false,
          index: 0
        },
        {
          name: "软件测试工程师",
          info: "工作要求：\n 1. 负责项目产品质量保证工作，跟不同角色沟通，确保团队对需求理解的一致性；\n2.根据需求设计测试用例并执行，设计和实现功能测试自动化；\n3.报告、管理和分析缺陷；\n 4.宏观掌控项目产品质量信息，并及时反馈给团队。\n 5.待遇：10k-20k。",
          show: false,
          index: 0
        },
        {
          name: "软件开发工程师",
          info: "工作要求：\n 1.用高质量的代码帮助全球顶尖客户攻克业务瓶颈；\n2.建高可用、高灵活的系统框架，敏捷支撑客户业务的多变与指数级增长；\n3.践行自动化测试与持续集成，探索前沿的自动化部署方案，实现业界一流的交付体验；\n4.用匠心精神攻艰克难，突围技术难题。我们用技术，与客户们一起改变世界！\n 5.待遇：10k-20k。",
          show: false,
          index: 0
        }
      ],
      longitude: "116.439071",
      latitude: "39.945025"
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
  onContact:function(){
    wx.navigateTo({
      url: '../thoughtworks/map/map'
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