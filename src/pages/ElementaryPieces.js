import React from 'react'
import SvgPieces from '../components/SvgPieces'
import CheckPieces from '../components/CheckPieces'

const ElementaryPieces = () => {
    return (
        <div className='cont-theory container'>
            <h1>Elementary Pieces</h1>
            <p>One of the objectives of the elementary grade is to learn this series of musical pieces.</p>
            <CheckPieces piece='BURGMULLER: Estudios Op.100'/>
            <CheckPieces piece='MOZART: Allegro'/>
            <CheckPieces piece='BEETHOVEN: Sonatina nº 5'/>
            <CheckPieces piece='STRAVINSKY: Los cinco dedos'/>
            <CheckPieces piece='ANTON: Cuadernos de Adriane Vol. I'/>
            <CheckPieces piece='FRANK: Las quejas de la muñeca'/>
            <SvgPieces/>
        </div>
    )
}

export default ElementaryPieces
