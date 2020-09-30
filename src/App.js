import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helloworld from './components/HelloWorld';
import Table from './components/Table';



function App() {
  return (
    <div className="App">
      <div className="back-color">
          <Helloworld className="back-color"></Helloworld>
      </div>
      <div>
         <div className="leftspace"> 
           <Table></Table>
         </div>
      </div>
    </div>
  );
} 

export default App;

