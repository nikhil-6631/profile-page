import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
        </View>

        <View style={{alignSelf:"center"}}>
          <View style={styles.profileImage}>
            <Image source={require("./assets/img3.jpg")} style={styles.image} resizeMode="center"></Image>
          </View>
        </View>

        <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
        </View>

        <View style={styles.active}>
        </View>

        <View style={styles.add}>
          <Ionicons name="ios-add" size={40} color="pink"></Ionicons>
        </View>

        <View style={styles.infoContainer}> 
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>Karan Bajaj</Text>
          {/* <Text style={[styles.text, {  color: "#AEB5", fontSize: 36}]}>Vrushali</Text> */}
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={[styles.text, {fontSize: 24}]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.text, {fontSize: 24}]}>44,345</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.text, {fontSize: 24}]}>603</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>
        <View style={{marginTop: 32}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              <View style={styles.mediaImageContainer}>
                  <Image source={require("./assets/img1.jpg")} style={styles.image} resizeMode="cover"></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                  <Image source={require("./assets/img2.jpg")} style={styles.image} resizeMode="cover"></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                  <Image source={require("./assets/img4.jpg")} style={styles.image} resizeMode="cover"></Image>
              </View>
            </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text:{
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  subText:{
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined
  },
  titleBar:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
    marginHorizontal: 20
  },
  profileImage:{
    width: 200,
    height:200,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#eee"
  },
  dm:{
    backgroundColor: "#414448",
    position: "absolute",
    top: 80,
    left: 80,
    width: 40,
    height:40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active:{
    backgroundColor: "#34FF89",
    position: "absolute",
    bottom: 320,
    left: 90,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add:{
    backgroundColor: "#414448",
    position: "absolute",
    bottom: 295,
    right:80,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer:{
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer:{
    flexDirection: "row",
    alignSelf: "center",
    marginTop: -6
  },
  statBox:{
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer:{
    width: 150,
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  }
});
