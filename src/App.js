import React, {useState, useEffect} from 'react';
import { Results } from './components'
import { retrieveAllBeers } from './logic'

function App() {
  const [view, setView] = useState('')
  const [results, setResults] = useState()

  useEffect(() => {
    handleAllBeers()
  }, [])

  async function handleAllBeers () {
    const results = await retrieveAllBeers()
    console.log(results)
    setResults(results)
    setView('results')
  } 
  return (
    <div className="App">
      <h1 className="App-title">Punk Beer! </h1>
      {view === 'results' && ( <Results results = {results}/>)}
    </div>
  );
}

export default App;
