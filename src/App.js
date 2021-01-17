import React, { Component } from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
//import injectTapEventPlugin from "react-tap-event-plugin";
//import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";

//injectTapEventPlugin();

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Table
            data={this.state.data}
            header={[
              {
                name: "Name",
                prop: "name"
              },
              {
                name: "Sunday",
                prop: "sunday"
              },
              {
                name: "Monday",
                prop: "monday"
              },
              {
                name: "Tuesday",
                prop: "tuesday"
              },
              {
                name: "Wednesday",
                prop: "wednesday"
              },
              {
                name: "Thursday",
                prop: "thursday"
              },
              {
                name: "Friday",
                prop: "friday"
              },
              {
                name: "Saturday",
                prop: "saturday"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
