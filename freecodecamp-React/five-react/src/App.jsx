import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mrWhiskerson from './assets/mr-whiskerson.png'
import fluffyKins from './assets/fluffykins.png'
import felix from './assets/felix.png'
import pumpkin from './assets/pumpkin.png'
import mailIcon from './assets/mail-icon.png'
import phoneIcon from './assets/phone-icon.png'

import Card from './components/Card'



function App() {
  return (
      <div className="contacts">
        <Card 
        img={mrWhiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"

        />
        <Card 
        img={fluffyKins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
        />
        <Card 
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
        />
        <Card 
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
        />
      </div>
  )
}

export default App
