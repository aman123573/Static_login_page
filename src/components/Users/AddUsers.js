import React , {useState} from 'react'
import classes from './AddUsers.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUsers = (props) => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        setEnteredUsername(event.target.value);

    };
    const addAgeHandler = (event) => {
        setEnteredAge(event.target.value);

    };

    const onsubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername,enteredAge);
        

    }

    

    return (
        <Card className={classes.input}>
            <form onSubmit={onsubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={addUserHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={addAgeHandler}/>
                <Button type="submit">Add user</Button>
            </form>

        </Card>
    )
}

export default AddUsers
