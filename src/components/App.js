import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PhotoSample from "./PhotoSample";
import VideoSample from "./VideoSample";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false,
      showPhoto: false
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {!this.state.showVideo &&
          !this.state.showPhoto &&
          <View style={styles.container}>
            <Text>Choose to see the photo or video sample </Text>
            <Button
              title="Photo"
              onPress={() => this.setState({ showPhoto: true })}
            />
            <Button
              title="Video"
              onPress={() => this.setState({ showVideo: true })}
            />
          </View>}

        {this.state.showPhoto && <PhotoSample />}
        {this.state.showVideo && <VideoSample />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;
