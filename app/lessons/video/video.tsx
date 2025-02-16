import React, { useRef, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { Video, ResizeMode, VideoFullscreenUpdate } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import { useRoute } from "@react-navigation/native";
import { Text } from "@/context/FontContent";
import { RFPercentage } from "react-native-responsive-fontsize";
interface RouteParams {
  topic?: string;
}
const VideoPlayer: React.FC = () => {
  const route = useRoute()
  const { topic } = route.params as RouteParams || {};
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
  const togglePlayPause = async () => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      if (status?.isLoaded) {
        if (status.isPlaying) {
          await videoRef.current.pauseAsync();
          setIsPlaying(false);
        } else {
          await videoRef.current.playAsync();
          setIsPlaying(true);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch and Sing the {topic} Song</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={togglePlayPause}
      >
        <Text style={styles.buttonText}>{isPlaying ? "Pause Video" : "Play Video"}</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: RFPercentage(9),
    marginBottom: 20,
    textAlign: 'center',
    color: '#38bfe7',
    textShadowColor: 'rgb(250, 250, 250)',
    textShadowOffset: {width: 7, height: 7},
    textShadowRadius: 5
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
  button: {
    width: "100%",
    borderRadius: 20,
    marginTop: '2%',
    padding: "4%",
    backgroundColor: "#FDDA0D",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 0,
  },buttonText: {
    fontSize: RFPercentage(5),
    textAlign: 'center',
    fontFamily: 'Font',
    fontWeight: '100',
    color: "#fff",
    textShadowColor: '#38bfe7',
    textShadowOffset: {width:4, height:4},
    textShadowRadius: 5
  },
});

export default VideoPlayer;
