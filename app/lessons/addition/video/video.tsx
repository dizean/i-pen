import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus, VideoFullscreenUpdate } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<Video>(null);

  const handleFullscreenUpdate = async (event: { fullscreenUpdate: VideoFullscreenUpdate }) => {
    if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_WILL_PRESENT) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    } else if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_WILL_DISMISS) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require("../../../../assets/videos/Addition.mp4")}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls={true}
          onFullscreenUpdate={handleFullscreenUpdate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "black",
  },
  video: {
    flex: 1,
  },
});

export default VideoPlayer;
