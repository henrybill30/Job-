//index.js
//获取应用实例
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

const app = getApp()

Page({
  data: {
    input: '',
    //swipr的参数
    indicatorDots: true,
    autoplay: true,
    interval: 2500,  //播放速率
    duration: 1000,
    circular: true,

    //从json文件中获取的信息
    //获取推荐商镜recommend
     bizinfo: [
      {
        id: "bupt",
        image: "http://www.bizspace.cn:8690/appsrc/biz/bupt/banner.png?md5=bbb"
      }
    ],
    content: [
      {
        id: "Enterprise",
        ch_name: "工作",
        ch_image: "/images/Enterprise.png"
      },
      {
        id: "Shixi",
        ch_name: "实习",
        ch_image: "/images/Shixi.png"
      },
      {
        id: "Partwork",
        ch_name: "兼职",
        ch_image: "/images/Partwork.png"
      }
    ],
    info: [ ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var sort = this.sorting();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },
  onLoad: function () {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/LP`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          requestResult: JSON.stringify(result.data)
          //将一个JavaScript值(对象或者数组)转换为一个 JSON字符串

        })
        console.log(result.data.data.msg);
        that.setData({
          'bizinfo[1]': result.data.data.msg[1],
          'bizinfo[2]': result.data.data.msg[4],
          'bizinfo[3]': result.data.data.msg[14],
          'info[0]': result.data.data.msg[14],
          'info[1]': result.data.data.msg[7],
          'info[2]': result.data.data.msg[4],
          'info[3]': result.data.data.msg[1],
          'info[4]': result.data.data.msg[3],
          'info[5]': result.data.data.msg[11],
          'info[6]': result.data.data.msg[13],
          'info[7]': result.data.data.msg[5],
          'info[8]': result.data.data.msg[6],
        })
        //console.log(that.data.bizinfo[1])
        
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  wxSearchInput: function (e) {
    var value = e.detail.value
    this.setData({
      input: value
    })
    //console.log(this.data.input);
  },
  wxSearchFn: function (e) {
    var input = this.data.input;
    if (input == '工作') {
      wx.navigateTo({
        url: '/pages/allclasses/Enterprise/Enterprise'
      })
    } else if (input == '实习') {
      wx.navigateTo({
        url: '/pages/allclasses/Shixi/Shixi'
      })
    } else if (input == '兼职') {
      wx.navigateTo({
        url: '/pages/allclasses/Partwork/Partwork'
      })
    } else if (input == '京东') {
      wx.navigateTo({
        url: '/pages/company/jingdong/jingdong'
      })
    } else if (input == '麦当劳') {
      wx.navigateTo({
        url: '/pages/company/MacDonald/MacDonald'
      })
    } else if (input == 'costa') {
      wx.navigateTo({
        url: '/pages/company/costa/costa'
      })
    } else if (input == '高伟达') {
      wx.navigateTo({
        url: '/pages/company/gaoweida/gaoweida'
      })
    } else if (input == '奇思客') {
      wx.navigateTo({
        url: '/pages/company/qisike/qisike'
      })
    } else if (input == '人才官') {
      wx.navigateTo({
        url: '/pages/company/rencai/rencai'
      })
    } else if (input == '数加') {
      wx.navigateTo({
        url: '/pages/company/shujia/shujia'
      })
    } else if (input == '星巴克') {
      wx.navigateTo({
        url: '/pages/company/starbucks/starbucks'
      })
    } else if (input == 'thoughtworks') {
      wx.navigateTo({
        url: '/pages/company/thoughtworks/thoughtworks'
      })
    } else {
      wx.showToast({
        title: '抱歉，未搜索到该信息',
        icon: 'none',
        duration: 1500
      })
    }
  },

  toast:function (e) {
    var that = this;
    var imgId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/company/' + imgId + '/' + imgId
    })
  },
  allbiz: function (e) {
    var img = e.currentTarget.dataset;//使用event.currentTarget.dataset.XX获取内容
    //console.log(img);
    var imgid = img.id;
    //console.log(imgid);
    wx.navigateTo({
      url: '/pages/allclasses/'+imgid+'/'+imgid
    })
  },

  onClick:function(e){
    var that = this;
    var biz = e.currentTarget.dataset;
    var bizId = biz.id;
    console.log(bizId);
    bizId = bizId - 1;
    var companyId = that.data.info[bizId].id;
    console.log(companyId);
    wx.navigateTo({
      url: '/pages/company/' + companyId + '/' + companyId
    });
    var views = that.data.info[bizId].view
    views += 1;
    var view = "info[" + bizId + "].view";
    that.setData({
      [view]: views
    });
    //console.log(that.data.info[bizId].views)
  },

  like:function(e){
    var that = this;
    var biz = e.currentTarget.dataset;
    var bizId = biz.id;
    //console.log(bizId);
    bizId = bizId - 1;
    var love = this.data.info[bizId].like;
    love = love + 1;
    var good = "info[" + bizId + "].like";
    that.setData({
       [good]: love,
     });
    //console.log(that.data.info[bizId].likes);
  },
  compare:function(propertyName) {
    return function (object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 < value1) {
        return -1;
      }
      else if (value2 > value1) {
        return 1;
      }
      else {
        return 0;
      }
    }
  },
  sorting:function(){
    var that = this;
    var array = that.data.info;
    //console.log(array)
    var com = that.compare("like");
    array.sort(com);
    //console.log(array);
    var Array = "info";
    that.setData({
      [Array]: array,
    });
  } 
})
