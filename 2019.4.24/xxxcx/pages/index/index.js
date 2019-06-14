//index.js
//获取应用实例
//const app = getApp()

Page({
  data: {
       title:"hello 小程序",
       id1:"aa",
       list:["小程序开发","小程序1111111","vue2222222"],
       arr:[
           {
             id:1,
           title: "前端开发",
           name: ["javascript", "jquery","vue"]
           },
           {
            id:2,
            title:"后端开发",
            name:["nodejs","php","java"]
           },
          

       ],
       flag:true 

  },

  onLoad: function () {


  },
  tap1(n){
    console.log(n.currentTarget.dataset)   // 在事件对象中取值
         console.log("aaaaaaaaaa")
  },
  t2(){
     console.log("bbbbbbbbbbbbbbb")

     this.setData({title:"我是修改后的标题"})

     
    console.log(this.data.title)

  },
  t3(){
      console.log("cccccccccccccc")

  }



})
