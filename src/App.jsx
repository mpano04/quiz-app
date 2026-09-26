
import './App.css'
import Header from './components/header/Header.jsx';

function App() {

  return(
    <div className='app'>
      <Header />
      <div className='quiz-layout'>
        <section className='quiz-content'>
          <div className='question-area'>
            Question
          </div>
          <div className='navigation-area'>
            Previous and Next Button
          </div>
          <div className='explanation-area'>
            Explanations
          </div>
        </section>

        <aside className='quiz-sidebar'>
          {/* Right Side content*/}
        </aside>
      </div>
    </div>
  );
}

export default App
