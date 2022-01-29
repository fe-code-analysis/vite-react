import About from "../views/About"
import Home from "../views/Home"
import Timer from "../views/Timer"
import NotMatch from '../views/NotMatch'
import Test from "../views/Test"
import Async from '../views/Async'
import AHookUse from "../views/AHookUse"
import LocalStore from "../views/LocalStore"
import FetchRetry from "../views/FetchRetry"
import PageUnload from "../views/PageUnload"

export default [{
  path: '/pageunload',
  exact: true,
  view: PageUnload,
  meta: {
    title: '页面卸载'
  },
  key: Math.random()
}, {
  path: '/fetchretry',
  exact: true,
  view: FetchRetry,
  meta: {
    title: '接口重试'
  },
  key: Math.random()
}, {
  path: '/localstore',
  exact: true,
  view: LocalStore,
  meta: {
    title: '本地存储'
  },
  key: Math.random()
},
  {
    path: '/ahookuse',
    exact: true,
    view: AHookUse,
    meta: {
      title: 'AHookUse 使用'
    },
    key: Math.random()
  },
  {
    path: '/async',
    exact: true,
    view: Async,
    meta: {
      title: '异步'
    },
    key: Math.random()
  },
  {
    path: '/about',
    exact: true,
    view: About,
    meta: {
      title: '关于'
    },
    key: 1
  },

  {
    path: '/timer',
    exact: true,
    view: Timer,
    meta: {
      title: '定时器'
    },
    key: 2,
  },

  {
    path: '/',
    exact: true,
    view: Home,
    meta: {
      title: '主页'
    },
    key: 3
  },  

  {
    path: '/test',
    exact: true,
    view: Test,
    meta: {
      title: 'test',
    },
    key: 5
  },

  // The Last
  {
    view: NotMatch,
    meta: {
      title: '404'
    },
    key: 4
  },
]