import React from "react";
import {useState} from 'react';
import './Calculadora.css';

    
    function Calculadora() {
    
      const [num, setNum] = useState(0);
      const [num2, setNum2] = useState(0);
      const [soma, setSoma] = useState(0);
    
    
      const teste = () => {
        const res = parseInt(num) + parseInt(num2);
        setSoma(res);
      }
    
    
      return (
        <div className="App">
            <h1>Calculadora</h1>
            <form>
              <label>

                <input id="numero" type="number" value={num} onChange = {e => setNum(e.target.value)} />
              </label>
              <label>
                  
                <input id="numero" type="number" value={num2} onChange = {e => setNum2(e.target.value)} />
              </label>
    
    
            </form>
            <input id= "resultado"type="submit" value="+" onClick={teste} />
            <h1>{soma}</h1>
          
        </div>
      );
    }
    
    export default Calculadora;
