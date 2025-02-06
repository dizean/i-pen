import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Video, ResizeMode, VideoFullscreenUpdate } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import { useRoute } from "@react-navigation/native";
import { TextBold } from "@/context/FontContent";
interface RouteParams {
  topic?: string;
}
const VideoPlayer: React.FC = () => {
  const route = useRoute()
  const { topic } = route.params as RouteParams || {};
  const videoRef = useRef<Video>(null);

  const handleFullscreenUpdate = async (event: { fullscreenUpdate: VideoFullscreenUpdate }) => {
    if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_WILL_PRESENT) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    } else if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_WILL_DISMISS) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  };
  const [video] = useState(() => {
    switch (topic) {
      case 'Addition':
        return require("../../../assets/videos/Addition.mp4");
      case 'Subtraction':
        return require("../../../assets/videos/Subtraction.mp4");
      case 'Multiplication':
        return require("../../../assets/videos/Multiplication.mp4");
      default:
        return null; 
    }
  });
  
  return (
    <View style={styles.container}>
      <TextBold style={styles.subtitle}>Watch and Sing the {topic} Song</TextBold>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={video}
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
  subtitle: {
    fontSize: 40,
    paddingVertical: 40
  },
});

export default VideoPlayer;
