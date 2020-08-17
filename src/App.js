import React, { Component , lazy , Suspense } from 'react'
import Kau from './Kau';
// import Complete from './components/Complete'
const Complete = lazy ( () => import('./components/Complete'));

class App extends Component {
  render() {
    return (
     <Suspense fallback={<div><Kau /></div>}>
        <div>
            <Complete />
        </div>
     </Suspense>
    )
  }
}

export default App
