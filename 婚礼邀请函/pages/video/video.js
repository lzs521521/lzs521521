// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [{
      create_time: '2019-10-21 11:08:11', title: '海边随拍',
      src: 'G:/新建文件夹 (2)/微信小程序/音乐/images/林宥嘉 - 突然想起你 (Live).mp3'
    }, {
      create_time: '2019-10-21 11:11:11', title: '勿忘心安',
        src: 'G:/新建文件夹 (2)/微信小程序/音乐/images/林宥嘉 - 突然想起你 (Live).mp3'
    }, {
      create_time: '2019-10-21 11:11:11', title: '点滴记忆',
        src: 'G:/新建文件夹 (2)/微信小程序/音乐/images/林宥嘉 - 突然想起你 (Live).mp3'
    }],
    src:'G:/新建文件夹 (2)/微信小程序/音乐/images/林宥嘉 - 突然想起你 (Live).mp3',
    danmuList:[
      {text:'第 1s 出现的弹幕',color: 'ff0000',time:1},
      {text:'第 3s 出现的弹幕', color: 'ff00ff',time:3}
    ]
  },
  videoContext:null,
  inputValue:'',
  onReady:function() {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindSenfDanmu: function() {
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],
      maxDuration:60,
      camera:'back',
      success:res => {
         this.setData({
           src:res.tempFilePath
         }) 
      }
    })
  },
  onReady:function(){
    const TxvContext = requirePlugin('tencentvideo')
    var txvContext = TxvContext.getTxvContext('txv1')
    txvContext.play()
    txvContext.pause()
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