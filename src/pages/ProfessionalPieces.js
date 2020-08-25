import React from 'react'
import CheckPieces from '../components/CheckPieces'
import SvgPieces from '../components/SvgPieces'

const ProfessionalPieces = () => {
    return (
        <div className='cont-theory container'>
            <h1>Professional Pieces</h1>
            <p>One of the objectives of the elementary grade is to learn this series of musical pieces.</p>
            <CheckPieces piece='CZERNY: Op 299 (1º y 2º)'/>
            <CheckPieces piece='JENSEN: Op. 32.'/>
            <CheckPieces piece='MOSZKOWSKY: Op. 91.'/>
            <CheckPieces piece='BERTINI: Op. 32.'/>
            <CheckPieces piece='J. S. Bach: Inventions with two voices'/>
            <CheckPieces piece='KUHLAU: Sonatinas Op 20 , Op. 59'/>
            <CheckPieces piece='MOZART: Sonatas; Variations'/>
            <CheckPieces piece='HAYDN: Sonatas Hob XVI; Hob.XVII'/>
            <SvgPieces/>
        </div>
    )
}

export default ProfessionalPieces
