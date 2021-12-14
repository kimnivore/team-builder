import React, { useState } from 'react';
import './App.css';
import Form from './Form';



const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
const [members, setMembers] = useState([]);
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
  setMembers(members.concat(newMember));
  setFormValues(initialFormValues);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <Form 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
        <div className='memberList'>
        {
          members.map((member, idx) => (
            <div key={idx}>
              `{member.name} - ({member.role}) -- Email: {member.email}`
            </div>
          ))
        }
        </div>
      </header>
    </div>
  );
}
export default App;
 