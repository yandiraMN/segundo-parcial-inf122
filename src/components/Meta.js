import React, { useState } from 'react';
import '../style/Meta.css'
    function Meta({onMetaAgregar}){
  const [nuevaMeta, setNuevaMeta] = useState('');
  const agregarMeta=()=>{
    onMetaAgregar(nuevaMeta);
    console.log('metaagregasda');
  }
  return (
    <div>
    <label>
      Nueva meta...
      <input type="text" value={nuevaMeta} onChange={(e) => setNuevaMeta(e.target.value)} />
    </label>
    <div>
    <button className='v' onClick={agregarMeta}>Agregar</button>
    </div>
    </div>
  );
}
export default Meta;