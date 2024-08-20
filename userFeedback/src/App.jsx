import React, {useState, useRef} from 'react'
import "./App.css"

export default function App() {
  // const [feedbackOpen, setFeedbackOpen] = useState(false);
  const feedbackRef = useRef(null);

  const handleButtonClick = () => {
    feedbackRef.current.style.display='flex'
  }
  return (
    <main className='feedback-container'>
      <div className='feedback-button'><button onClick={() => handleButtonClick()}>Feedback</button></div>
      <div className='feedback' ref={feedbackRef}>
          <header>
            <div className='header-left'>
            <span className='feedback-icon'><i class="fa-regular fa-comment"></i></span>&nbsp;Feedback
            </div>
            <div className='header-right'>
              <button onClick={() => feedbackRef.current.style.display='none'}><i class="fa-solid fa-xmark"></i></button>
            </div>
          </header>
          <div className='feedback-body'>
            <h1>How are you feeling</h1>
            <h5>Your input is valuable in helping us better understand your needs and tailer our service accordingly.</h5>
          </div>
      </div>
    </main>
  )
}
