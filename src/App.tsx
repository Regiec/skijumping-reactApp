import React, {useState} from 'react';
import './App.css';
import Start from './pages/start';
import Stats from './components/stats';
import Jumpers from './components/SkiJumpers';
import dataListSkiJumpers from './components/listSkiJumpers';



function App() {

  

  let firstTicketinApp = 1;
  let budgetinApp = 50000.12;
 
  const [count, setCount] = useState(0);
const result = dataListSkiJumpers.map(a=> 
  
    <tr key={a.idd}>
      <td >{a.idd}</td>
      <td>{a.name}</td>
      <td>{a.surname}</td>
      <td>{a.age}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => setCount(count +1)}>{a.power + count}</button></td>
    </tr>
)

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
