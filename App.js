import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Pressable, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';
import AppLoading from 'expo-app-loading';

// Icon
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// End Icon

import * as Linking from 'expo-linking';


// Method

const soundCloudLink = () => {
  Linking.openURL('https://soundcloud.com/22times')
}

const trakTrainLink = () => {
  Linking.openURL('https://traktrain.com/2times')
}

const twitterLink = () => {
  Linking.openURL('https://twitter.com/DiceStLaurent')
}

const instGramLink = () => {
  Linking.openURL('https://www.instagram.com/baby.d.i.c.e.507hotline/')
}
const callLink = () => {
  Linking.openURL('tel:0652899903')
}


const Contact = () => {
  return (
    <View style={styles.content}>
      <Text> Page Contact </Text>
    </View>
  )
}

const audioStream = "https://radio.dekpo.com/stream.mp3"


// End Method



export default function App() {

  // Variables / Function D'Etat
  const callHome = () => {
    setPage('Home');
}

  const [sound, setSound] = useState(null);
  const [page, setPage] = useState('Home');

  const [fontLoading] = useFonts({Koulen_400Regular})
  if (!fontLoading) {
    return(
      <AppLoading/>
    )
  }

  // End Variables / Function D'Etat


  async function playSound() {
    if (sound === null) {

      const { sound } = await Audio.Sound.createAsync(
        { uri: audioStream }
      )
      setSound(sound)
      sound.playAsync()
    }
    else {
      setSound(null);
      sound.stopAsync()
    }
  }
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={soundCloudLink} >
          <MaterialCommunityIcons name="soundcloud" size={24} color="black" style={styles.soundCloud} />
        </TouchableOpacity>

        <Text style={styles.txtImportant} onPress={callHome} > Hotline Realease </Text>

        <TouchableOpacity onPress={instGramLink}>
          <Ionicons name="logo-instagram" size={24} color="black" />
        </TouchableOpacity>

      </View>

      {
        (() => {
          switch (page) {
            case 'Contact':
              return <Contact />

            case 'Home':
              return (
                <ImageBackground source={require("./assets/tv.jpg")} style={styles.content} >
                  <TouchableOpacity onPress={() => { playSound() }}>
                    <Ionicons name={sound === null ? "play-circle-sharp" : "pause-circle"} size={124} color="black" style={styles.playAndPause} />
                  </TouchableOpacity>
                </ImageBackground>
              )

          }
        })()
      }



      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { setPage("Contact") }} >

          <MaterialIcons name="call" size={24} color="black" />

        </TouchableOpacity>

        <TouchableOpacity onPress={twitterLink} >
          <Foundation name="social-twitter" size={24} color="black" style={styles.twitter} />

        </TouchableOpacity>

        <TouchableOpacity onPress={trakTrainLink} >
          <Ionicons name="ios-globe" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {

    height: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    flexDirection: 'row',
    backgroundColor: '#92fe9d',
    justifyContent: 'space-around',
    padding: 6,
    alignItems: 'center',

  },
  footer: {

    height: 100,
    borderTopColor: 'black',
    borderTopWidth: 3,
    flexDirection: 'row',
    backgroundColor: '#dddcd7',
    justifyContent: 'space-around',
    padding: 10


  },
  content: {
    backgroundColor: 'black',
    flex: 5,
    justifyContent: 'center'
  },
  txtImportant: {
    fontWeight: 'bold',
    fontFamily:"Koulen_400Regular"
    

  },
  soundCloud: {
    color: "orange"
  },
  twitter: {
    color: '#1DA1F2'
  },
  playAndPause: {
    textAlign: 'center',
    color: "red",
  },
  imgBack : {
    flex: 5,
    justifyContent: 'center'
  }


});


