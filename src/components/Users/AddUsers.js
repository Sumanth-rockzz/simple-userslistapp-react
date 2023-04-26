import Card from '../UI/Card'
import classes from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import { useState } from 'react';
const AddUser=(props)=>{
    const [username,setUserName]=useState('');
    const [age,setAge]=useState('');
    const [error,setError]=useState();
    const addUserHandler=(e)=>{
        e.preventDefault(); 
        if(username.trim().length===0||age.trim().length===0)
        {
            setError({
                title:'Invalid input',
                message:'Please enter a valid Name and age (non-empty values)'
            })
            return;
        }
        if(+age<1)
        {
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (>0)'
            })
            return;
        }
        props.onAddUser(username,age);
        setUserName('');
        setAge('');
    }
    const userNameChangeHandler=(e)=>{
        setUserName(e.target.value);
    }
    const ageChangeHandler=(e)=>{
        setAge(e.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" onChange={userNameChangeHandler} value={username} type="text"/>
            <label htmlFor="age">Age(in Years)</label>
            <input id="age" onChange={ageChangeHandler} value={age} type="number"/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
)}
export default AddUser;