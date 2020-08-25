import React, {useState} from 'react'
import piano from '../images/piano.png'
import Unison from '../images/Unison.png'
import _2ndMajor from '../images/2ndMajor.png'
import _2ndMinor from '../images/2ndMinor.png'
import _3rdMajor from '../images/3rdMajor.png'
import _3rdMinor from '../images/3rdMinor.png'
import _4thAugmented from '../images/4thAugmented.png'
import _4thPerfect from '../images/4thPerfect.png'
import _5thAugmented from '../images/5thAugmented.png'
import _5thPerfect from '../images/5thPerfect.png'
import _6thMajor from '../images/6thMajor.png'
import _7thMajor from '../images/7thMajor.png'
import _7thMinor from '../images/7thMajor.png'

let ans = 1
let score = 0
let feedback = ''

const HigherTest = () => {

    const [test, setTest] = useState(_4thPerfect)

    const handleAnswer = (e)=>{
        if(ans===1){
            if(e.target.classList.contains('4pe')){
                score++
            }
            setTest(_5thAugmented)
            ans++
        }else if(ans===2){
            if(e.target.classList.contains('5au')){
                score++
            }
            setTest(_6thMajor)
            ans++
        }else if(ans===3){
            if(e.target.classList.contains('6ma')){
                score++
            }
            setTest(_3rdMinor)
            ans++
        }else if(ans===4){
            if(e.target.classList.contains('3mi')){
                score++
            }
            setTest(_3rdMajor)
            ans++
        }else if(ans===5){
            if(e.target.classList.contains('3ma')){
                score++
            }
            setTest(_7thMinor)
            ans++
        }else if(ans===6){
            if(e.target.classList.contains('7mi')){
                score++
            }
            setTest(_2ndMajor)
            ans++
        }else if(ans===7){
            if(e.target.classList.contains('2ma')){
                score++
            }
            ans++
            setTest(_4thAugmented)
        }else if(ans===8){
            if(e.target.classList.contains('4au')){
                score++
            }
            ans++
            setTest(_2ndMinor)
        }else if(ans===9){
            if(e.target.classList.contains('2mi')){
                score++
            }
            ans++
            setTest(_5thPerfect)
        }else if(ans===10){
            if(e.target.classList.contains('5pe')){
                score++
            }
            ans++
            setTest(Unison)
        }else if(ans===11){
            if(e.target.classList.contains('uni')){
                score++
            }
            ans++
            setTest(_7thMajor)
        }else if(ans===12){
            if(e.target.classList.contains('7ma')){
                score++
            }
            ans++
            setTest(_3rdMajor)
        }else if(ans===13){
            if(e.target.classList.contains('3ma')){
                score++
            }
            ans++
            setTest(_5thAugmented)
        }else if(ans===14){
            if(e.target.classList.contains('5au')){
                score++
            }
            ans++
            setTest(_2ndMajor)
        }else if(ans===15){
            if(e.target.classList.contains('2ma')){
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
        feedback = 'Perfect! You made it amazing. You have completed all the units, do not forget to go through the session of "tutorials" to learn incredible songs.'
    }

    return (
        <div className='cont-test container'>
            <h1>Music Test</h1>
            <p>Select which is the interval represented in the keyboard image.</p>
            <img className='test' alt='' src={test}/>
            <div className='cont-answer'>
                <div onClick={handleAnswer} className='answer 2ma'>2 Maj</div>
                <div onClick={handleAnswer} className='answer 2mi'>2 Min</div>
                <div onClick={handleAnswer} className='answer 3ma'>3 Maj</div>
                <div onClick={handleAnswer} className='answer 3mi'>3 Min</div>
                <div onClick={handleAnswer} className='answer 4au'>4 Aug</div>
                <div onClick={handleAnswer} className='answer 4pe'>4 Per</div>
                <div onClick={handleAnswer} className='answer 5au'>5 Aug</div>
                <div onClick={handleAnswer} className='answer 5pe'>5 Per</div>
                <div onClick={handleAnswer} className='answer 6ma'>6 Maj</div>
                <div onClick={handleAnswer} className='answer 7ma'>7 Maj</div>
                <div onClick={handleAnswer} className='answer 7mi'>7 Min</div>
                <div onClick={handleAnswer} className='answer uni'>Unison</div>
                
            </div>
            <div className='score center'>
                <h3>Score: {score}</h3>
                <p className='fb hide'>{feedback}</p>
            </div>
        </div>
    )
}

export default HigherTest
