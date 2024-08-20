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
            <span className='feedback-icon'></span>&nbsp;Feedback
          </header>
      </div>
    </main>
  )
}
