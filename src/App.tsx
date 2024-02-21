import { Suspense } from "react"
import { useRoutes, Link } from "react-router-dom"
import { shallowEqual, useDispatch } from "react-redux"

import routes from "@/router"
import { useAppSelector } from "@/store"

import { increment } from "@/store/modules/counter"

const App = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数:{count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
