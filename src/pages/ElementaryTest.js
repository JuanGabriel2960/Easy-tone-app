import React, { useState } from 'react'
import piano from '../images/piano.png'
import pianoC from '../images/pianoC.png'
import pianoD from '../images/pianoD.png'
import pianoE from '../images/pianoE.png'
import pianoF from '../images/pianoF.png'
import pianoG from '../images/pianoG.png'
import pianoA from '../images/pianoA.png'
import pianoB from '../images/pianoB.png'

let ans = 1
let score = 0
let feedback = ''

const ElementaryTest = () => {

    const [test, setTest] = useState(pianoF)

    const handleAnswer = (e)=>{
        if(ans===1){
            if(e.target.classList.contains('f')){
                score++
            }
            setTest(pianoB)
            ans++
        }else if(ans===2){
            if(e.target.classList.contains('b')){
                score++
            }
            setTest(pianoA)
            ans++
        }else if(ans===3){
            if(e.target.classList.contains('a')){
                score++
            }
            setTest(pianoG)
            ans++
        }else if(ans===4){
            if(e.target.classList.contains('g')){
                score++
            }
            setTest(pianoE)
            ans++
        }else if(ans===5){
            if(e.target.classList.contains('e')){
                score++
            }
            setTest(pianoC)
            ans++
        }else if(ans===6){
            if(e.target.classList.contains('c')){
                score++
            }
            setTest(pianoD)
            ans++
        }else if(ans===7){
            if(e.target.classList.contains('d')){
                score++
            }
            ans++
            setTest(pianoE)
        }else if(ans===8){
            if(e.target.classList.contains('e')){
                score++
            }
            ans++
            setTest(pianoF)
        }else if(ans===9){
            if(e.target.classList.contains('f')){
                score++
            }
            ans++
            setTest(pianoA)
        }else if(ans===10){
            if(e.target.classList.contains('a')){
                score++
            }
            ans++
            setTest(pianoB)
        }else if(ans===11){
            if(e.target.classList.contains('b')){
                score++
            }
            ans++
            setTest(pianoC)
        }else if(ans===12){
            if(e.target.classList.contains('c')){
                score++
            }
            ans++
            setTest(pianoD)
        }else if(ans===13){
            if(e.target.classList.contains('d')){
                score++
            }
            ans++
            setTest(pianoG)
        }else if(ans===14){
            if(e.target.classList.contains('g')){
                score++
            }
            ans++
            setTest(pianoB)
        }else if(ans===15){
            if(e.target.classList.contains('b')){
                score++
            }
            setTest(piano)
            document.querySelector('.fb').classList.remove('hide')
        }
            
    }

    if(score<=5){
        feedback = 'You have not passed the test, you must re-read the theory and apply the test again before continuing to the next lesson.'
    }if(score>=10){
        feedback = 'You have passed the test, even so we would recommend you to review the theory a little more.'
    }if(score===15){
        feedback = 'Perfect! You made it amazing. you can skip to the next lesson with no problems'
    }

    return (
        <div className='cont-test container'>
            <h1>Music Test</h1>
            <p>Select which is the note represented in the keyboard image.</p>
            <img className='test' alt='' src={test}/>
            <div className='cont-answer'>
                <div onClick={handleAnswer} className='answer c'>C</div>
                <div onClick={handleAnswer} className='answer d'>D</div>
                <div onClick={handleAnswer} className='answer e'>E</div>
                <div onClick={handleAnswer} className='answer f'>F</div>
                <div onClick={handleAnswer} className='answer g'>G</div>
                <div onClick={handleAnswer} className='answer a'>A</div>
                <div onClick={handleAnswer} className='answer b'>B</div>
            </div>
            <div className='score center'>
                <h3>Score: {score}</h3>
                <p className='fb hide'>{feedback}</p>
            </div>
        </div>
    )
}

export default ElementaryTest
