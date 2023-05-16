import React, { useState } from 'react';
import './calc.css';
function Calculator(props) {

    const [calc,setCalc]=useState('')
    const [res, setRes]=useState('')
    const op=['+','-','*','/','.']

    const updateResult=(value)=>{
        //if first letter typed is an operator or last typed one is an operator we return
        if((op.includes(value)&&calc==='')||(op.includes(value)&&op.includes(calc.slice(-1))))
            return;
        setCalc(calc+value)

        if(!op.includes(value)){
            setRes(eval(calc+value).toString());
        }

    }
    const refreshResult=()=>{
        setCalc('')
        setRes('')
    }
    const finalResult=()=>{
        setCalc(eval(calc).toString())
    }

    //for number buttons
    const createNumbers=()=>{
        var num=[];
        for(let i=1;i<10;i++){
            num.push(<button onClick={()=>updateResult(i.toString())} key={i}>{i}</button>)
        }
        return num;
    }

    return (
        <div className='calculator'>
            <h5 className='heading_css' >Simple Calculator using react.js and javascript</h5><br/><br/>

            {/* res is in () calc is the final result */}
            Result is: {res?<span>({res})</span>:''}
            {calc||"0"}

            <div className='calc-keys'>
                <button onClick={()=>updateResult('+')}>+</button>
                <button onClick={()=>updateResult('-')}>-</button>
                <button onClick={()=>updateResult('/')}>/</button>
                <button onClick={()=>updateResult('*')}>*</button><br/><br/>
            </div>
            <div>
                <button className='all-clear' onClick={()=>refreshResult()}>AC</button>
                <button onClick={()=>updateResult('0')}>0</button>
                <button className='decimal' onClick={()=>updateResult('.')}>.</button><br/><br/>
            </div>
            <div>
                <button className='equal-sign' onClick={()=>finalResult()}>=</button><br/><br/>
            </div>

             <div className='calc-keys'>{createNumbers()}</div>
        </div>
    );
}

export default Calculator;