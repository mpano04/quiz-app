
import './App.css'
import Header from './components/header/Header.jsx';

function App() {

  return(
    <div className='app'>
      <Header />
      <div className='quiz-layout'>
        <div className='quiz-content'>
          {/* Left Side */}
        </div>
        <div className='quiz-sidebar'>
          {/* Right Side content*/}
        </div>
      </div>
    </div>
  );
}

export default App
