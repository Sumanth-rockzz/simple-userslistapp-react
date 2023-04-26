import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef=useRef();

 
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();

    //for reading value Refs are better and its of less Code and using Ref is uncontrolled Components

    const enteredUsername=nameInputRef.current.value;
     const enteredAge=ageInputRef.current.value;
     const enteredCollegeName=collegeNameInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ||enteredCollegeName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Name ,Age and CollegeName (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUsername,enteredAge,enteredCollegeName);
   nameInputRef.current.value='';
   ageInputRef.current.value='';
   collegeNameInputRef.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(in Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <label htmlFor="collegename">Enter Your College Name</label>
          <input
            id="collegename"
            type="text"
            ref={collegeNameInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
