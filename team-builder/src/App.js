import React, { useState } from 'react';
import './App.css';
import Form from './Form';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
const [member, setMember] = useState([]);
const [formValues, setFormValues] = useState(initialFormValues);

const updateForm = (inputName, inputValue) => {
  setFormValues( { ...formValues, [inputName]: inputValue });
}

const submitForm = () => {
  const newMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
      </header>
    </div>
  );
}

export default App;
 