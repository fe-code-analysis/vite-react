import './App.css'
import useMediaQuery from './hooks/useMediaQuery'

const Text = () => {
  console.log('render text')
  return (
    <p>323</p>
  )
}

const Btn = () => {
  console.log('render btn')
  return (
    <button>button</button>
  )
}
const ResponsiveText = () => {
  const text = useMediaQuery(
    '(max-width: 800px), (max-height: 600px)',
    <Text />,
    <Btn />
  );

  console.log(text)

  return <span>{text}</span>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveText />
      </header>
    </div>
  )
}

export default App
