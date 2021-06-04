import React from 'react';
import './App.css';
import Start from './pages/start';
import Stats from './components/stats';
import Jumpers from './components/SkiJumpers';
import dataListSkiJumpers from './components/listSkiJumpers';

function App() {
  let firstTicketinApp = 1;
  let budgetinApp = 50000.12;
const result = dataListSkiJumpers.map(a=> <><li key={a.idd}>{a.name} {a.surname},lat: {a.age} </li>
</>)
  return (
    <div >


      <header>
        <Stats firstTicket={firstTicketinApp} budget={budgetinApp}/>
        <menu></menu>
      </header>
      <Start />
      <Jumpers dataListSkiJumpers={result}/>
    </div>
  );
}

export default App;
