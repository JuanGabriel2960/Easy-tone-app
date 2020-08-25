import React from 'react'
import OptionCircle from '../components/OptionCircle'
import btnTheory from '../images/btnTheory.png'
import btnExercises from '../images/btnExercises.png'
import btnPieces from '../images/btnPieces.png'
import MessageCard from '../components/MessageCard'
import '../styles/Elementary.css'
import {Link} from 'react-router-dom'


const Higher = () => {
    return (
        <div className='cont-elementary container'>
            <h1>Higher Exercise</h1>

            <div className='cont-circles'>
                <div className='circle'>
                    <Link to='HigherTheory'>
                        <OptionCircle imgCircle={btnTheory} color='purple'/>
                    </Link>
                    <h3>Theory</h3>
                </div>

                <div className='circle'>
                    <Link to='HigherExercises'>
                        <OptionCircle imgCircle={btnExercises} color='purple'/>
                    </Link>
                    <h3>Exercises</h3>
                </div>

                <div className='circle'>
                    <Link to='HigherPieces'>
                        <OptionCircle imgCircle={btnPieces} color='purple'/>
                    </Link>
                    <h3>Pieces</h3>
                </div>

                <div className='circle'>
                    <Link to='HigherTest'>
                        <OptionCircle imgCircle={btnTheory} color='purple'/>
                    </Link>
                    <h3>Exam</h3>
                </div>
            </div>

            <MessageCard title='Did you know...' message='the higher grade of the conservatory lasts around 4 years and with this title you can wirk as a techaer or as a composer.'/>
            
            
            
        </div>
    )
}

export default Higher
