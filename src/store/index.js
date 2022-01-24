import {  autorun, makeAutoObservable, reaction, when } from "mobx";

class RootStore {
  num = 0
  title = ''

  list =[{
    name: 1,
    age: 10,
    key: 1,
  }, {
    name: 2,
    age: 20,
    key: 2
  }]

  get oddNum() {
    let v = this.num % 2
    return v === 1 ? v : 0
  }

  constructor() {
    console.log('constructor RootStore')
    makeAutoObservable(this, {
    }, {
      autoBind: true
    })
  }

  addList(val) {
    this.list.push(val)
  }

  addNum(payload) {
    if (payload) {
      this.num += payload
    } else {
      this.num ++
    }
  }

  subNum() {
    this.num --
  }

  changeTitle() {
    this.title = '' + Math.random()
  }


  loading = false

  toggleLoading() {
    this.loading = !this.loading
    console.log(this.loading)
  }

  hideLoading() {
    this.loading = false
  }


}
const store =  new RootStore()


// 当 todoList 为 5 时触发回调
autorun(() => {
  if (store.list.length == 5) {
    console.log('接口上报')
    store.list.length = 0
  }
})




export default store