import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.completed} ? 'completed' : ''} `}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <Grid item xs={12}>
        <Paper>
          <p>{props.item.name}</p>
        </Paper>
      </Grid>
    </div>
  );
};

export default Todo;
