import React, { useState } from 'react';
import classes from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {

   const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredAge, setEnteredAge] = useState('');
   const [error,setError] = useState();

   const addUserHandler = (event) => {
      setEnteredUsername(event.target.value);

   };
   const addAgeHandler = (event) => {
      setEnteredAge(event.target.value);

   };

   const onsubmitHandler = (event) => {
      event.preventDefault();
      if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
         setError({
            title:"Invalid input",
            message:"Please enter a valid username and age (non-empty) values"
         })
         return;
      }
      if (+enteredAge < 1) {
         setError({
            title:"Invalid age",
            message:"Please enter a valid age ( > 1)"
         })
         return;
      }

      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');

   }

   const errorHandler = () => {
      setError(null);
   };

   return (
      <div>
         {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
         <Card className={classes.input}>
            <form onSubmit={onsubmitHandler}>
               <label htmlFor="username">Username</label>
               <input id="username" type="text" onChange={addUserHandler} value={enteredUsername} />
               <label htmlFor="age">Age (Years)</label>
               <input id="age" type="number" onChange={addAgeHandler} value={enteredAge} />
               <Button type="submit">Add user</Button>
            </form>

         </Card>
      </div>
   )
}

export default AddUsers
