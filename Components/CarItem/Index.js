import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import styles from './Style';

const CarItem = (props) => {

const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.CarContainer}>

        <ImageBackground 
         source={image}
         style={styles.image}
        />

        <View style={styles.titles}>
         <Text style={styles.title}> {name} </Text>
          <Text style={styles.Subtitles}> {tagline} 
          {' '}
          <Text style={styles.SubCTA}> {taglineCTA}
          </Text>
          </Text>

        </View>

        <View style={styles.buttonsContainer}>
           <StyleButton type = "primary" 
           content={"Custom Order"} 
           onPress={() =>{
           console.warn("Custom Order was Pressed");
           }}
           />

          <StyleButton type = "secondary" 
           content={"Existing Inventory"} 
           onPress={() =>{
           console.warn("Existing Inventory was Pressed");
           }}
           />
        </View>
    </View>

  );
};

export default CarItem;

