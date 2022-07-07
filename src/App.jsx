import { useState } from 'react'
import './assets/styles/App.css'
import ButtonUi from './components/UI/Button'

function App() {
   const [click, setClick] = useState(false)

   console.log(click)

   return (
      <div className="App">
         <h1>Hello world</h1>
         <ButtonUi onClick={() => setClick(!click)} variant="contained">
            Click
         </ButtonUi>
         <ButtonUi variant="outalined">Click</ButtonUi>
         <ButtonUi variant="contained">Click</ButtonUi>
      </div>
   )
}

export default App
