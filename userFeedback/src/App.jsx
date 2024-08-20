import React, {useState, useRef} from 'react'
import "./App.css"

export default function App() {
  const [emojiClick, setEmojiClick] = useState('')
  const feedbackRef = useRef(null);

  const emojiInfo={
    1:{description:'very good',emoji:'🥵'},
    2: {description: 'good', emoji: '😊'},
    3: {description: 'neutral', emoji: '😐'},
    4: {description: 'bad', emoji: '😔'},
    5: {description: 'very bad', emoji: '🤬'}
  }
  const handleButtonClick = () => {
    feedbackRef.current.style.display='flex'
  }
  const handleEmojiClick = (e, key) => {
    if(emojiClick && emojiClick !== emojiInfo[key].description){
      return ; 
    }else{
      if(emojiInfo[key].description === emojiClick){
        e.target.classList.remove('active');
        setEmojiClick('');
      }else{
        e.target.classList.add('active');
        setEmojiClick(emojiInfo[key].description);
      }
    }
  }
 

  return (
    <main className='feedback-container'>
      <div className='feedback-button'><button onClick={() => handleButtonClick()}>Feedback</button></div>
      <div className='feedback' ref={feedbackRef}>
          <header>
            <div className='header-left'>
            <span className='feedback-icon'><i className="fa-regular fa-comment"></i></span>&nbsp;Feedback
            </div>
            <div className='header-right'>
              <button onClick={() => feedbackRef.current.style.display='none'}><i className="fa-solid fa-xmark"></i></button>
            </div>
          </header>
          <div className='feedback-body'>
            <h1>How are you feeling</h1>
            <h5>Your input is valuable in helping us better understand your needs and tailer our service accordingly.</h5>
          </div>
          <div className='feedback-icons'>
           {Object.keys(emojiInfo).map((key) => <button className="emoji" key={key} onClick={(e)=> handleEmojiClick(e, key)} >{emojiInfo[key].emoji}</button>)}
          </div>
      </div>
    </main>
  )
}
