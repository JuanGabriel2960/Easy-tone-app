import React from 'react'
import OptionCircle from '../components/OptionCircle'
import btnTheory from '../images/btnTheory.png'
import btnExercises from '../images/btnExercises.png'
import btnPieces from '../images/btnPieces.png'
import MessageCard from '../components/MessageCard'
import '../styles/Elementary.css'
import {Link} from 'react-router-dom'


const Professional = () => {
    return (
        <div className='cont-elementary container'>
            <h1>Professional Exercise</h1>

            <div className='cont-circles'>
                <div className='circle blue'>
                    <Link to='ProfessionalTheory'>
                        <OptionCircle imgCircle={btnTheory} color='blue'/>
                    </Link>
                    <h3>Theory</h3>
                </div>

                <div className='circle blue'>
                    <Link to='ProfessionalExercises'>
                        <OptionCircle imgCircle={btnExercises} color='blue'/>
                    </Link>
                    <h3>Exercises</h3>
                </div>

                <div className='circle blue'>
                    <Link to='ProfessionalPieces'>
                        <OptionCircle imgCircle={btnPieces} color='blue'/>
                    </Link>
                    <h3>Pieces</h3>
                </div>

                <div className='circle blue'>
                    <Link to='ProfessionalTest'>
                        <OptionCircle imgCircle={btnTheory} color='blue'/>
                    </Link>
                    <h3>Exam</h3>
                </div>
            </div>

            <MessageCard title='Did you know...' message='the Professional grade of the conservatory lasts around 6 years and the age, being the longest of the 3.'/>
            
            
            
        </div>
    )
}

export default Professional
