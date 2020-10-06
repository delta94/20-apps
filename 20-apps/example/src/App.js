import React from 'react';
import { MultiSelect } from './components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRunning, faSkating, faSnowboarding, faSwimmer, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';
library.add(faRunning, faSkating, faSnowboarding, faSwimmer, faTimes);

const data = [
  {
    id:1,
    sportType: faRunning,
    sportTitle: 'Running',
  },
  {
    id:2,
    sportType: faSkating,
    sportTitle: 'Skating',
  },
  {
    id:3,
    sportType: faSnowboarding,
    sportTitle: 'Snow boarding',
  },
  {
    id:4,
    sportType: faSwimmer,
    sportTitle: 'Swimming',
  }
];

function App() {
  return (
    <div className="App">
      <MultiSelect data={data} placeholder='Please select the sport' />
    </div>
  );
}

export default App;
