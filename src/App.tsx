import { useEffect, useRef, useState } from 'react'
import './App.css'

import List from './components/List'
import Form from './components/Form'

import { Sub } from './types'

interface AppState {
  subs: Sub[],
  newsubsnumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [subsNumber, setSubsNumber] = useState<AppState['newsubsnumber']>(0)

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
  }, [])

  const handleNewSub = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className='App' ref={divRef}>
      <h1>Lista de subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
