import React from 'react';

export default function Form(props) {
const { values, update, submit } = props;

const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    update(name, value);
}
const onSubmit = event => {
    event.preventDefault();
    submit();
}

return (
    <form onSubmit={onSubmit}>
        <label>Name
            <input 
                name='name'
                type='text'
                placeholder='Type your name here'
                maxLength='30'
                value={values.name}
                onChange={onChange}
            />
        </label>

        <label>Email
            <input 
                name='email'
                type='email'
                placeholder='email'
                value={values.email}
                onChange={onChange}
            />
        </label>

        <label>Role
            <select name='role' value={values.role} onChange={onChange}>
                <option value="">---Select a Role---</option>
                <option value="Front-End">Front End Engineer</option>
                <option value="Back-End">Back End Engineer</option>
                <option value="Designer">Designer</option>
                <option value="Big Boss">Big Boss</option>
                <option value="Baby Boss">Baby Boss</option>
            </select>
        </label>
        
       <div classname='submit'>
            <button>Submit</button>
       </div>
    </form>


)






}