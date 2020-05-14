import React, {useState, useEffect} from 'react';
import { Results, FilterABV, FilterIBU } from './components'
import { retrieveAllBeers, retrieveABV, retrieveIBU } from './logic'

function App() {
  const [view, setView] = useState('')
  const [results, setResults] = useState()

  useEffect(() => {
    handleAllBeers()
  }, [])

  async function handleAllBeers () {
    const results = await retrieveAllBeers()
    setResults(results)
    setView('results')
  } 

  async function handleFilterABV (ABV) {
    const resultsABV = await retrieveABV(ABV)
    setResults(resultsABV)
  }

  async function handleFilterIBU (IBU) {
    const resultsIBU = await retrieveIBU(IBU)
    setResults(resultsIBU)
  }
  return (
    <div className="App">
      <h1 className="App-title">Punk Beer! </h1>
      <FilterABV handleForm={handleFilterABV}/>
      <FilterIBU handleForm={handleFilterIBU}/>
      {view === 'results' && ( <Results results = {results}/>)}
    </div>
  );
}

export default App;
