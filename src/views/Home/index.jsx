import { Link } from "react-router-dom"

const Home = (props) => {

  return(
    <>
      <h3>Home</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/timer">Timer</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/async">Async</Link>
        </li>
        <li>
          <Link to="/ahookuse">AHookUse</Link>
        </li>
        <li>
          <Link to="/localstore">LocalStore</Link>
        </li>
        <li>
          <Link to="/fetchretry">FeatchRetry</Link>
        </li>
        <li>
          <Link to="/pageunload">PageUnload</Link>
        </li>
        <li>
          <Link to="/lazyload">LazyLoad</Link>
        </li>
        <li>
        <Link to="/gradient">线性渐变</Link>
        </li>
      </ul>
    </>
  )
}

export default Home