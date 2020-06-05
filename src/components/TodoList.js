import React from "react";
import Todo from "./Todo";
import Button from '@material-ui/core/Button';
const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

      <Button onClick={props.clearCompleted} variant="contained">Clear Completed Tasks</Button>
     
    </div>
  );
};

export default TodoList; 