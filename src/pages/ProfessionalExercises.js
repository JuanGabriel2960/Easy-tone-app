import React from 'react'
import CheckCard from '../components/CheckCard'

const ProfessionalExercises = () => {
    return (
        <div className='cont-exercises container'>
            <h1>Exercises Check</h1>
            <p className='infoE'>Do this series of daily exercises and you will notice an improvement with the instrument.</p>
            <CheckCard title='Study all the base chords' does='Try to learn the 7 basic chords, in their fundamental position of memory in major and minor key.'/>
            <CheckCard title='Learn chord inversions' does='Once the 7 chords are learned based on major and minor key, proceed to learn them in other positions.'/>
            <CheckCard title='Harmonic circle' does='Find a song to your liking and play its harmonic circle repeatedly, try to sing if you want, and do not forget to keep up.'/>
            <CheckCard title='Sustained chords' does='Learn and play the sustained variations of previously learned chords, and try playing a song in a sustained key.'/>
        </div>
    )
}

export default ProfessionalExercises
