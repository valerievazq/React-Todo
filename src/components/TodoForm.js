import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <TextField
          label="New To-Do"
          id="standard-size-normal"
          defaultValue="Normal"
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChange}
        />
        <Fab
          type="submit"
          color="primary"
          aria-label="add"
          style={{ marginLeft: "30px" }}
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}
export default TodoForm;
