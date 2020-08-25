import React from 'react'
import CheckPieces from '../components/CheckPieces'
import SvgPieces from '../components/SvgPieces'

const HigherPieces = () => {
    return (
        <div className='cont-theory container'>
            <h1>Higher Pieces</h1>
            <p>One of the objectives of the elementary grade is to learn this series of musical pieces.</p>
            <CheckPieces piece='SCHUBERT: Sonatas'/>
            <CheckPieces piece='GRIEG: Lyrical Pieces'/>
            <CheckPieces piece='TURINA: Fantastic Dances.'/>
            <CheckPieces piece='ALBENIZ: Spanish Suite. Iberia Suite'/>
            <CheckPieces piece='J. RODIGO: Four Andalusian prints'/>
            <CheckPieces piece='RAVEL: The valley of the bells.'/>
            <CheckPieces piece='MESSIAEN: Glances on the baby Jesus'/>
            <SvgPieces/>
        </div>
    )
}

export default HigherPieces
