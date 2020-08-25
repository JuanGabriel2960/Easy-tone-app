import React from 'react'
import OptionCircle from '../components/OptionCircle'
import btnTheory from '../images/btnTheory.png'
import btnExercises from '../images/btnExercises.png'
import btnPieces from '../images/btnPieces.png'
import MessageCard from '../components/MessageCard'
import {Link} from 'react-router-dom'
import '../styles/Elementary.css'


const Elementary = () => {
    return (
        <div className='cont-elementary container'>
            <h1>Elementary Exercise</h1>

            <div className='cont-circles'>
                <div className='circle'>
                    <Link to='ElementaryTheory'>
                        <OptionCircle imgCircle={btnTheory} color='red'/>
                    </Link>
                    <h3>Theory</h3>
                </div>

                <div className='circle'>
                    <Link to='ElementaryExercises'>
                        <OptionCircle imgCircle={btnExercises} color='red'/>
                    </Link>
                    <h3>Exercises</h3>
                </div>

                <div className='circle'>
                    <Link to='ElementaryPieces'>
                        <OptionCircle imgCircle={btnPieces} color='red'/>
                    </Link>
                    <h3>Pieces</h3>
                </div>

                <div className='circle'>
                    <Link to='ElementaryTest'>
                        <OptionCircle imgCircle={btnTheory} color='red'/>
                    </Link>
                    <h3>Exam</h3>
                </div>
            </div>

            <MessageCard title='Did you know...' message='the elementary grade of the conservatory lasts around 4 years and the age range to enter is between 8 and 12 years.'/>
            
            
            
        </div>
    )
}

export default Elementary
