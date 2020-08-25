import React from 'react'
import CardSong from '../components/CardSong'
import song1 from '../images/song1.jpg'
import song2 from '../images/song2.jpg'
import song3 from '../images/song3.jpg'
import song4 from '../images/song4.jpg'
import song5 from '../images/song5.jpg'
import song6 from '../images/song6.jpg'
import song7 from '../images/song7.jpg'
import song8 from '../images/song8.jpg'
import song9 from '../images/song9.jpg'
import song10 from '../images/song10.jpg'

const Songs = () => {
    return (
        <div className='cont-elementary container'>
            <h1>Piano Tutorial</h1>
            <div className='cont-songs'>
                <CardSong
                song='Prelude No. 1 in C'
                author='Johann Sebastian Bach'
                img={song1}
                link='https://flowkeycdn.com/mp4/medium/resources/mp4HqOutput/N7t6gbjg8BZsGHojG/bach-prelude-no_2020-01-08_15-01-45-1578494046472/1578494486483.mp4'/>
                <CardSong
                song='Ode to Joy'
                author='Ludwig van Beethoven'
                img={song2}
                link='https://flowkeycdn.com/mp4/medium/resources/mp4HqOutput/Rvq3eyzqhe5FgmK3J/ode-to-joy-l1_2020-03-27_13-03-52-1585312474333/1585312627109.mp4'/>
                <CardSong
                song="Brahms' Lullaby"
                author='LJohannes Brahms'
                img={song3}
                link='https://flowkeycdn.com/mp4/medium/resources/mp4HqOutput/hefruwvfiGkhd4aLC/lullaby-5-lieder-op_2020-04-01_13-04-35-1585740340201/1585740390735.mp4'/>
                <CardSong
                song='Für Elise'
                author='Ludwig van Beethoven'
                img={song4}
                link='https://flowkeycdn.com/mp4/medium/resources/ludwig-van-beethoven-lettre-a-elise-intermediate_2019-05-09_19-05-50/1557423933178.mp4'/>
                <CardSong
                song='Perfect'
                author='Ed Sheeran'
                img={song5}
                link='https://flowkeycdn.com/mp4/medium/resources/mp4HqOutput/TrvwZy4ucjzFqMdEF/perfect-l1_2019-11-26_18-11-91-1574791428746/1574791496450.mp4'/>
                <CardSong
                song='Hallelujah'
                author='Leonard Cohen'
                img={song6}
                link='https://flowkeycdn.com/mp4/medium/resources/hallelujah-1_2018-08-13_09-08-04/1534145087081.mp4'/>
                <CardSong
                song='Bella Ciao'
                author='Italian Traditional'
                img={song7}
                link='https://flowkeycdn.com/mp4/medium/resources/mp4HqOutput/yF3cRsDdp4Tgdsjgt/bella-ciao-l3_2020-03-26_19-03-24-1585248913923/1585249490337.mp4'/>
                <CardSong
                song='Clair de Lune'
                author='Claude Debussy'
                img={song8}
                link='https://flowkeycdn.com/mp4/medium/resources/cluade-debussy-clair-de-lune-l1_2018-01-31_19-01-43/1517424540251.mp4'/>
                <CardSong
                song='Swan Lake'
                author='Pyotr Tchaikovsky'
                img={song9}
                link='https://flowkeycdn.com/mp4/medium/resources/swan-lake-l1_2018-03-26_21-03-62/1522092797422.mp4'/>
                <CardSong
                song='Happy Birthday'
                author='Mildred J. Hill'
                img={song10}
                link='https://flowkeycdn.com/mp4/medium/resources/happy-birthday_2019-05-03_11-05-66/1556876592448.mp4'/>
            </div>
            
        </div>
    )
}

export default Songs
