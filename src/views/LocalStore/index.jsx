import { useAsyncEffect, useSetState } from "ahooks";
import * as lf from "localforage"
import { useEffect, useRef } from "react/cjs/react.development"
// import './dco.esm'
let i = 0
window.localforage = lf

const LocalStore = () => {
  const refDriveReady = useRef(false)
  const [user, setUser] = useSetState({})
  const dbName = 'DCOSDK'

  // 初始化配置
  useAsyncEffect( async () => {
    const store = lf.createInstance({
      name: 'sdk',
      storeName: 'dco'
    })

    await store.ready()

    const store2 = lf.createInstance({
      name: 'sdk',
      storeName: 'dco2'
    })
    await store2.ready()

    store.setItem('user', 'liuyue')
    store2.setItem('a', 1)

  }, [])

  async function saveItem() {
    i ++
    let r = await lf.setItem('userName' + i,  '' + Math.random())
    console.log('saveItem', r);
  }

  async function getItem() {
    let r = await lf.getItem('userName')
    console.log(r)
    setUser(prev => prev.userName = r)
  }

  async function getLen() {
    let r = await lf.length()
    console.log(r)
  }

  async function getAllKey() {
    let allKeys = await lf.keys()
    console.log(allKeys)
  }

  async function iterateKey() {
    let a = []
    let v = await lf.iterate((v, k, i) => {
      if (i < 3) {
        a.push(v)
        return
      } else {
        return a
      }
    })
    console.log(v)
  }

  async function dropDB() {
    lf.dropInstance({
      name: dbName
    })
    console.log('删除成功');
  }

  async function createDB() {
    console.log('创建新DB');
    await lf.createInstance({
      name: 'SDK',
      storeName: 'newDB'
    })
    console.log('创建成功');
  }

  return(
    <>
      <h3>LocalStore</h3>
      <p>用户名：{user.userName}</p>
      <button onClick={saveItem}>save username</button>
      <p>
        <button onClick={getItem}>get username</button>
      </p>
      <button onClick={getLen}>获取数据库长度</button>
      <p>
        <button onClick={getAllKey}>获取所有 key</button>
      </p>
      <button onClick={iterateKey}>key 迭代</button>
      <p>
        <button onClick={dropDB}>删除实例</button>
      </p>
      <button onClick={createDB}>创建一个新实例</button>
    </>
  )
}

export default LocalStore