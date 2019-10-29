//index.js
//获取应用实例
const app = getApp()

Page({
  data: 
  {
    isPlayingMusic:false
  },
  bgm: null,
  music_url:'G:\新建文件夹 (2)\微信小程序\音乐\images\林宥嘉 - 突然想起你 (Live).mp3',
  onReady:function(){
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'marry me'
    this.bgm.epname = 'wedding'
    this.bgm.singer = 'singer'
    this.bgm.cIoverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(()=> {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '18653126394',
    })
  },
  callBride: function () {
    wx.makePhoneCall({
      phoneNumber: '18653126394',
    })
  },
  play:function(e) {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
