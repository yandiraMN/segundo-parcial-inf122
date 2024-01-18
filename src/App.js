import './App.css';
import Meta from './components/Meta'
import Contadorpendiente from './components/Contadorpendientes';
import Tarea from './components/Tarea'
import { useState } from 'react';
import Contadorcompletadas from './components/Contadorcompletadas';
function App() {
  const[metasPendientes, setMetasPendientes]=useState([]);
  const handleMetaAgregar =(nuevaMeta)=>{
    setMetasPendientes((prevMetas) => [...prevMetas, nuevaMeta]);
  }
  return (
    <div className="App">
      <h1>Mis metas</h1>
      <div className='Agregarmeta'>
        <Meta onMetaAgregar={handleMetaAgregar}/>
      </div>
      <div className='contador'>
        <Contadorcompletadas metasPendientes={metasPendientes}/>   
        <div className='contador'>
        <Contadorpendiente Nuevameta={metasPendientes.length}/>
        </div>
      </div>
      <div className='mtarea'>
        <Tarea metas={metasPendientes}/>
        </div>
      </div>

  );
}
export default App;