import React ,{useState,Fragment} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler=(name,age,collegeName)=>{
    setUsersList((prevdata)=>{
      return [...prevdata,{id:Math.random().toString(),name:name,age:age,collegeName:collegeName}];
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;