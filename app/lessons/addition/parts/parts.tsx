import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Parts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADDITION of Numbers</Text>
      <Text style={styles.subtitle}>Parts of Addition</Text>
      <Text style={styles.subtitle}>Addends</Text>
      <View style={styles.highlightwrap}>
        <Text style={styles.highlight}>1</Text>
        <Text> + </Text>
        <Text style={styles.highlight}>1</Text>
        <Text> = </Text>
        <Text> ? </Text>
      </View>
      <Text style={styles.text}>The numbers that are added are known as the addends.</Text>
      <Text style={styles.subtitle}>Addition Symbol</Text>
      <View style={styles.highlightwrap}>
        <Text>1</Text>
        <Text style={styles.highlight}> + </Text>
        <Text>1</Text>
        <Text> = </Text>
        <Text> ? </Text>
      </View>
      <Text style={styles.text}>
        There is the addition symbol (+) which is placed in between the addends.
      </Text>
      <Text style={styles.subtitle}>Sum</Text>
      <View style={styles.highlightwrap}>
        <Text>1</Text>
        <Text> + </Text>
        <Text>1</Text>
        <Text style={styles.highlight}> = </Text>
        <Text> ? </Text>
      </View>
      <Text style={styles.text}>
        The final result obtained after adding the addends is known as the sum.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  text: { fontSize: 16, marginTop: 5 },
  highlightwrap: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  highlight: { fontWeight: 'bold', fontSize: 16 },
});

export default Parts;
