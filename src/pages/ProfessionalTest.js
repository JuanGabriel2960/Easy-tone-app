import React, {useState} from 'react'
import piano from '../images/piano.png'
import chordC from '../images/chordC.png'
import chordCm from '../images/chordCm.png'
import chordD from '../images/chordD.png'
import chordDm from '../images/chordDm.png'
import chordE from '../images/chordE.png'
import chordEm from '../images/chordEm.png'
import chordF from '../images/chordF.png'
import chordFm from '../images/chordFm.png'
import chordG from '../images/chordG.png'
import chordGm from '../images/chordGm.png'
import chordA from '../images/chordA.png'
import chordAm from '../images/chordAm.png'
import chordB from '../images/chordB.png'
import chordBm from '../images/chordBm.png'

let ans = 1
let score = 0
let feedback = ''

const ProfessionalTest = () => {

    const [test, setTest] = useState(chordF)

    const handleAnswer = (e)=>{
        if(ans===1){
            if(e.target.classList.contains('f')){
                score++
            }
            setTest(chordE)
            ans++
        }else if(ans===2){
            if(e.target.classList.contains('e')){
                score++
            }
            setTest(chordAm)
            ans++
        }else if(ans===3){
            if(e.target.classList.contains('am')){
                score++
            }
            setTest(chordCm)
            ans++
        }else if(ans===4){
            if(e.target.classList.contains('cm')){
                score++
            }
            setTest(chordG)
            ans++
        }else if(ans===5){
            if(e.target.classList.contains('g')){
                score++
            }
            setTest(chordB)
            ans++
        }else if(ans===6){
            if(e.target.classList.contains('b')){
                score++
            }
            setTest(chordDm)
            ans++
        }else if(ans===7){
            if(e.target.classList.contains('dm')){
                score++
            }
            ans++
            setTest(chordEm)
        }else if(ans===8){
            if(e.target.classList.contains('em')){
                score++
            }
            ans++
            setTest(chordD)
        }else if(ans===9){
            if(e.target.classList.contains('d')){
                score++
            }
            ans++
            setTest(chordFm)
        }else if(ans===10){
            if(e.target.classList.contains('fm')){
                score++
            }
            ans++
            setTest(chordA)
        }else if(ans===11){
            if(e.target.classList.contains('a')){
                score++
            }
            ans++
            setTest(chordGm)
        }else if(ans===12){
            if(e.target.classList.contains('gm')){
                score++
            }
            ans++
            setTest(chordC)
        }else if(ans===13){
            if(e.target.classList.contains('c')){
                score++
            }
            ans++
            setTest(chordBm)
        }else if(ans===14){
            if(e.target.classList.contains('bm')){
                score++
            }
            ans++
            setTest(chordF)
        }else if(ans===15){
            if(e.target.classList.contains('f')){
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
            <p>Select which is the chord represented in the keyboard image.</p>
            <img className='test' alt='' src={test}/>
            <div className='cont-answer'>
                <div onClick={handleAnswer} className='answer c'>C</div>
                <div onClick={handleAnswer} className='answer cm'>Cm</div>
                <div onClick={handleAnswer} className='answer d'>D</div>
                <div onClick={handleAnswer} className='answer dm'>Dm</div>
                <div onClick={handleAnswer} className='answer e'>E</div>
                <div onClick={handleAnswer} className='answer em'>Em</div>
                <div onClick={handleAnswer} className='answer f'>F</div>
                <div onClick={handleAnswer} className='answer fm'>Fm</div>
                <div onClick={handleAnswer} className='answer g'>G</div>
                <div onClick={handleAnswer} className='answer gm'>Gm</div>
                <div onClick={handleAnswer} className='answer a'>A</div>
                <div onClick={handleAnswer} className='answer am'>Am</div>
                <div onClick={handleAnswer} className='answer b'>B</div>
                <div onClick={handleAnswer} className='answer bm'>Bm</div>
            </div>
            <div className='score center'>
                <h3>Score: {score}</h3>
                <p className='fb hide'>{feedback}</p>
            </div>
        </div>
    )
}

export default ProfessionalTest
