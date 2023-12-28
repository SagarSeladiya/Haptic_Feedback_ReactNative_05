
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageSourcePropType,
  Pressable
} from 'react-native';

import { trigger } from "react-native-haptic-feedback";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DiceOne from './../assets/One.png'
import DiceTwo from './../assets/Two.png'
import DiceThree from './../assets/Three.png'
import DiceFour from './../assets/Four.png'
import DiceFive from './../assets/Five.png'
import DiceSix from './../assets/Six.png'

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}></Image>
    </View>
  )
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTop = () => {
    const randomNumbers = Math.floor(Math.random() * 6) + 1
    
    trigger("impactHeavy", options);

    switch (randomNumbers) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={[backgroundStyle, {height: '100%'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.backgroundStyle}>
          <Dice imageUrl={diceImage}/>
          
          <Pressable style={styles.pressButton} onPress={rollDiceOnTop}>
            <Text style={styles.textColor}>Press Me</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    padding: 50,
    justifyContent: 'center',
    display: "flex",
    alignItems: 'center'
  },
  diceImage: {},
  pressButton: {backgroundColor: '#000', borderRadius:5, color: '#fff', marginVertical: 15},
  textColor: {color: '#fff', paddingHorizontal: 20, paddingVertical: 15, },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
