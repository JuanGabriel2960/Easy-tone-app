import React from 'react'
import '../styles/Elementary.css'
import CheckCard from '../components/CheckCard'

const ElementaryExercises = () => {

    return (
        <div className='cont-exercises container'>
            <h1>Exercises Check</h1>
            <p className='infoE'>Do this series of daily exercises and you will notice an improvement with the instrument.</p>
            <CheckCard title='Study the notes one by one' does='Repeatedly look at your keyboard and make sure you know the name of each note just by looking at it.'/>
            <CheckCard title='Play the C major scale' does='This exercise consists of playing the white octave notes with both hands simultaneously, repeating several times for greater efficiency.'/>
            <CheckCard title='Repeat octaves' does='It consists of repeating the previous exercise, but this time playing the C major scale in all the available scales of your piano.'/>
        </div>
    )
}

export default ElementaryExercises
