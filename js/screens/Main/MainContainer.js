import React, { Component } from "react";
import Main from "./Main";
// import Loader from "../../components/Loader";
// import { List, ListItem } from "react-native";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <Main dataSource={this.state.dataSource} />;
  }
}

export default MainContainer;
