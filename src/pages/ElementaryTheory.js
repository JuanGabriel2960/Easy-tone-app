import React from 'react'
import keyboard from '../images/keyboard.png'
import '../styles/Elementary.css'

const ElementaryTheory = () => {
    return (
        <div className='cont-theory container'>
            <h1>Musical Notes</h1>
            <p>If you have a piano you will surely see 88 keys (there are some with more and others with less), distributed in 36 black and 52 white. Instead if you have a standard keyboard you will see 61 keys.</p>
            <p>Each white key represents a note, and each black key is an alteration of the note that sounds on the white key below. Easy no?.</p>
            <p className='note'>Note: Each key represents a note, but calm, there are only 7 notes (plus the alterations) that are grouped into a block called an octave that repeats along the keyboard with a different height or register.</p>
            <p>There are seven musical notes that you probably already know: DO/C - RE/D - MI/E - FA/F - SOL/G - LA/A - SI/B.</p>
            <img alt='' src={keyboard}/>
            <p className='tt'>The white keys</p>
            <p>Each of the seven notes has more than one white key on the piano, and this is because the same note can be played in different registers, that is, from lowest to highest.</p>
            <p className='tt'>The black keys</p>
            <p>They represent alterations of the white keys, that is to say that when playing a black key, we are playing the same note as the white key below, but with a noticeably different sound.</p>     
        </div>
    )
}

export default ElementaryTheory
