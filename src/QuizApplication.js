import React, { useState } from 'react'
import newquestions from './NewData'
//import newquestions from '../data'


const QuizApplication = () => {
  let [currentIndex,setCurrentIndex]= useState(0) // 
  let [marks,setMarks] = useState(0)
  let [isfinished,setIsfinished]=useState(false)
  let [selectedOption,setSelectedOption]=useState("")

  let currentQuestion = newquestions[currentIndex]
  console.log(marks)
  console.log(isfinished)
  let handleNext = () => {
    setCurrentIndex(currentIndex+1)
    setSelectedOption("");
    if(currentIndex+1 === newquestions.length) {
      setIsfinished(true)
    }
  } 
  let handleOptions =(option) =>{
    setSelectedOption(option);
    if(option.trim() === currentQuestion.answer){
      setMarks(marks+1)
    }
  }
  let handleRestart = () => {
    setCurrentIndex(0)
    setIsfinished(false)
    setMarks(0) 
    setSelectedOption("#6a0dad");
  }
return (
    <div>
      <h1 style={{color:'crimson'}}>Quiz Application</h1>
      {isfinished ? (<div>
        <h1> Your Score: {marks}</h1>
        <button style={{color:'white'}}onClick={handleRestart}>Restart</button>
        </div>) : ( <div>
          <div className='questions'>
      <h1>{currentQuestion.question}</h1>
      <div className='options'>
      {currentQuestion.options.map((option,idx)=>(
        <button 
        key={idx}
        className={`option-button ${selectedOption === option ? 'selected' : ''}`}
        onClick={()=>handleOptions(option)}>
          {option}
        </button>
      ))}
      </div>
      <button style={{color:'white'}} onClick={handleNext}>Next</button>
      </div>
          </div>)
      
    }
    </div>
  )
}

export default QuizApplication;