export default class SocketService {
  /**
   * 单例
   */
  static instance = null
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  // 和服务端连接的socket对象
  ws = null
  // 标识是否连接成功
  connected = false
  // 请求数据尝试的次数
  sendRetryCount = 0
  // 重新连接尝试的次数
  connectRetryCount = 0

  // 存储回到函数
  callBackMapping = {}

  // 定义连接服务器的方法
  connect() {
    // 连接服务器
    if (!window.WebSocket) return console.log('您的浏览器不支持 WebSocket')

    if (process.env.NODE_ENV === 'development') {
      this.ws = new WebSocket('ws://101.34.160.195:9998')
    } else {
      this.ws = new WebSocket('wss://101.34.160.195:9998')
    }

    // 使用接口地址
    // this.ws = new WebSocket('ws://101.34.160.195:9998')

    // 连接成功的事件
    this.ws.onopen = () => {
      this.connected = true
      this.connectRetryCount = 0
      console.log('连接服务端成功了')
    }

    // 接收到服务端数据
    this.ws.onmessage = msg => {
      // 保存接收到的数据
      const recvData = JSON.parse(msg.data)
      // console.log('接收到数据：',recvData);
      // 取出业务模块类型
      const socketType = recvData.socketType
      // 判断回调函数是否存在
      if (this.callBackMapping[socketType]) {
        const action = recvData.action
        if (action === 'getData') {
          // 获取数据  realData真实数据
          const realData = JSON.parse(recvData.data)
          // console.log('真实数据：',realData);
          this.callBackMapping[socketType].call(this, realData)
        } else if (action === 'fullScreen') {
          // 全屏事件
          this.callBackMapping[socketType].call(this, recvData)
        } else if (action === 'themeChange') {
          // 主题切换
          this.callBackMapping[socketType].call(this, recvData)
        }
      }
    }

    // 连接服务端失败
    this.ws.onerror = () => {
      this.connected = false
      console.log('连接服务端失败')
    }

    // 连接已关闭  当连接成功后:服务器关闭
    this.ws.onclose = () => {
      this.connectRetryCount++
      this.connected = false
      console.log('连接已关闭')
      setTimeout(() => {
        this.connect()
      }, this.connectRetryCount * 500)
    }
  }

  /**
   * 注册回调函数
   * @param {socketType} 业务模块类型
   * @param {*} callback
   */
  registerCallBack(socketType, callback) {
    this.callBackMapping[socketType] = callback
  }

  // 取消某一个回调函数
  unRegisterCallBack(socketType) {
    this.callBackMapping[socketType] = null
  }

  // 发送数据的方法
  send(data) {
    if (this.connected) {
      this.sendRetryCount = 0
      // 调用 webSocket 身上的send方法
      // console.log('发送请求：',data);
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++

      setTimeout(() => {
        this.send(data)
      }, this.sendRetryCount * 500)
    }
  }
}
