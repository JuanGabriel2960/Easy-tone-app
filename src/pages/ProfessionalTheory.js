import React from 'react'

const ProfessionalTheory = () => {
    return (
        <div className='cont-theory container'>
            <h1>The Chords</h1>
            <p>A chord is formed by playing three or more keys at the same time, but not any key, these must follow a certain pattern that we will learn next.</p>
            <p>There are two types of chords, the major chords and the minor chords, each has a sound that causes a different feel, the major chords sound sweet and happy, and the minor chords sound "sad."</p>
            <p className='note'>Note: A major chord is formed with three notes, the first note that in our case will always be the one that gives the name to the chord (ex: if we want to form the major C chord we will start the chord in the DO note), then we will add three keys , which will give us the second note, and then we will add two keys that will give us the third note.</p>
            <p>Chord of C Mayor</p>
            <p className='tt'>First pattern</p>
            <p>Between DO and MI there are three notes: C # (black key above C) - D and D # (black key above D). That is to say that there are three keys of distance between the first two notes of the chord, we already have the first pattern.</p>
            <p className='tt'>Second pattern</p>
            <p>Now between E and G we see that there are two notes: F and F # (black key above the F). That is, there are two distance keys (always counting black and white keys), here we already have the second pattern.</p>
        </div>
    )
}

export default ProfessionalTheory
