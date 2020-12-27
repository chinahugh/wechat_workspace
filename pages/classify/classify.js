Page({
  data: {
    vtabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['全部', '桶装水', '饮水设备','瓶装水']
    const vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})
  },

  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab:index})
    console.log('change', index)
  }

})
