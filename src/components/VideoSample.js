import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert
} from "react-native";
import Camera from "react-native-camera";

class VideoSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCamera: false
    };
  }
  startRecord() {
    startVideo = setTimeout(this.recordVideo.bind(this), 50);
  }
  recordVideo() {
    this.camera
      .capture()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  endVideo() {
    this.camera.stopCapture();
    this.setState({ openCamera: false });
    Alert.alert("Video saved!");
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
              captureMode={Camera.constants.CaptureMode.video}
            >
              <TouchableOpacity
                onPressIn={this.startRecord.bind(this)}
                onPressOut={this.endVideo.bind(this)}
              >
                <Text style={styles.capture}>
                  [Press to Record]
                </Text>
              </TouchableOpacity>

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

export default VideoSample;
