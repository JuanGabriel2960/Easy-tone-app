import React from 'react'
import CheckCard from '../components/CheckCard'


const HigherExercises = () => {
    return (
        <div className='cont-exercises container'>
            <h1>Exercises Check</h1>
            <p className='infoE'>Do this series of daily exercises and you will notice an improvement with the instrument.</p>
            <CheckCard title='Second minors and majors' does='The exercise consists of memorizing and becoming familiar with the sound of the intervals of the second minor and major.'/>
            <CheckCard title='Ascending and descending' does='Oconsists of repeating the previous exercise, but with both the ascending and descending intervals.'/>
            <CheckCard title='Sing the intervals' does='Try to imitate with your voice the different types of intervals mentioned above, so you can memorize them faster.'/>
            <CheckCard title='Intervals in songs' does='Listen to a series of songs to your liking and identify your initial intervals, try to find at least one song for each one.'/>
        </div>
    )
}

export default HigherExercises
