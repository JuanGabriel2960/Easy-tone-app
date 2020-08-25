import React from 'react'
import Hero from './pages/Hero'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Elementary from './pages/Elementary'
import Professional from './pages/Professional'
import ElementaryTheory from './pages/ElementaryTheory'
import ElementaryExercises from './pages/ElementaryExercises'
import ElementaryPieces from './pages/ElementaryPieces'
import ElementaryTest from './pages/ElementaryTest'
import ProfessionalTheory from './pages/ProfessionalTheory'
import ProfessionalExercises from './pages/ProfessionalExercises'
import ProfessionalPieces from './pages/ProfessionalPieces'
import ProfessionalTest from './pages/ProfessionalTest'
import HigherTheory from './pages/HigherTheory'
import HigherExercises from './pages/HigherExercises'
import HigherPieces from './pages/HigherPieces'
import HigherTest from './pages/HigherTest'
import Higher from './pages/Higher'
import Songs from './pages/Songs'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Hero}/>
          <Route exact path='/main' component={Main}/>
          <Route exact path='/Elementary' component={Elementary}/>
          <Route exact path='/Professional' component={Professional}/>
          <Route exact path='/Higher' component={Higher}/>
          <Route exact path='/ElementaryTheory' component={ElementaryTheory}/>
          <Route exact path='/ElementaryExercises' component={ElementaryExercises}/>
          <Route exact path='/ElementaryPieces' component={ElementaryPieces}/>
          <Route exact path='/ElementaryTest' component={ElementaryTest}/>
          <Route exact path='/ProfessionalTheory' component={ProfessionalTheory}/>
          <Route exact path='/ProfessionalExercises' component={ProfessionalExercises}/>
          <Route exact path='/ProfessionalPieces' component={ProfessionalPieces}/>
          <Route exact path='/ProfessionalTest' component={ProfessionalTest}/>
          <Route exact path='/HigherTheory' component={HigherTheory}/>
          <Route exact path='/HigherExercises' component={HigherExercises}/>
          <Route exact path='/HigherPieces' component={HigherPieces}/>
          <Route exact path='/HigherTest' component={HigherTest}/>
          <Route exact path='/Songs' component={Songs}/>
          <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
