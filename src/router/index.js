import About from "../views/About"
import Home from "../views/Home"
import Timer from "../views/Timer"
import NotMatch from '../views/NotMatch'
import Test from "../views/Test"
import Async from '../views/Async'
import AHookUse from "../views/AHookUse"

export default [
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