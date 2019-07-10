import React, { Component } from "react";
import Main from "./Main";
import ShuffleButton from "../../components/ShuffleButton";
import Loader from "../../components/Loader";
import { List, View, Button } from "react-native";
import styles from "./styles";

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

  _shuffle() {
    const dataSource = this.state.dataSource.sort(() => Math.random() - 0.5);
    this.setState({ dataSource });
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <View>
        <Main dataSource={this.state.dataSource.slice(0, 100)} />
        <Button
          onPress={() => {
            this._shuffle();
          }}
          type="outline"
          style={styles.button}
          title="Shuffle Images"
          color="#d5bdbd"
        />
      </View>
    );
  }
}

export default MainContainer;
