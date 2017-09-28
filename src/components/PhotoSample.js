import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import Camera from "react-native-camera";

class PhotoSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCamera: false
    };
  }
  takePicture() {
    const options = {};
    this.camera
      .capture({ metadata: options })
      .then(data => {
        console.log(data);
        this.setState({ openCamera: false });
        Alert.alert("Photo saved!");
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.openCamera
          ? <Camera
              ref={cam => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
            >
              <Text
                style={styles.capture}
                onPress={this.takePicture.bind(this)}
              >
                [Take Photo]
              </Text>
            </Camera>
          : <Button
              title="Open Camera"
              onPress={() => this.setState({ openCamera: true })}
            />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});

export default PhotoSample;
