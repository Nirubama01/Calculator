import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  const [value, setValue] = useState('');

  const handleClick = (e) => {
  const val = e.target.value;

  if (val === "AC") {
    setValue("");
  } 
  else if (val === "DE") {
    setValue(value.slice(0, -1));
  } 
  else if (val === "=") {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  } 
  else {
    setValue(value + val);
  }
};

  return (
    <>
     <form className="container w-25 mt-5 p-3 bg-dark text-white rounded-3">
  <input type="text" value={value}readOnly className="form-control mb-3 text-dark" />

  <div className="row g-2">


    <div className="col-3"><input type="button" onClick={ handleClick} value="AC" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="DE" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="." className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="/" className="btn btn-light w-100 py-2" /></div>

    <div className="col-3"><input type="button" onClick={ handleClick} value="7" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="8" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="9" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="*" className="btn btn-light w-100 py-2" /></div>

    <div className="col-3"><input type="button" onClick={ handleClick} value="4" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="5" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="6" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="-" className="btn btn-light w-100 py-2" /></div>

  
    <div className="col-3"><input type="button" onClick={ handleClick} value="1" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="2" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="3" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="+" className="btn btn-light w-100 py-2" /></div>

    <div className="col-3"><input type="button" onClick={ handleClick} value="00" className="btn btn-light w-100 py-2" /></div>
    <div className="col-3"><input type="button" onClick={ handleClick} value="0" className="btn btn-light w-100 py-2" /></div>
    <div className="col-6">
      <input className="btn btn-light w-100 py-2" type="button" onClick={ handleClick} value="="  />
    </div>

  </div>
</form>

    </>
  )
}

export default App
