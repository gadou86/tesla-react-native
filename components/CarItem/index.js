import React from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCog, faToolbox, faFan} from '@fortawesome/free-solid-svg-icons'


const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      {/* Header */}
        <ImageBackground 
          source={require("../../assets/background.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24} />
          </TouchableOpacity>
            <Text style={styles.headerTitle}>Gad's Tesla App</Text>
            <TouchableOpacity>
              <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={24}/>
            </TouchableOpacity>
        </View> 
        {/* Mileage */}

        <View style={styles.batterySection}>
          <Image 
            source={require("../../assets/battery.png")}
            style={styles.batteryImage}
          />
          <Text style={styles.batteryText}>150 km</Text>

        </View>

        <View style={styles.status}>
          <Text style={styles.statusText}>Parked</Text>
        </View>
        {/* Control Icons */}
        <View style={styles.controls}>
          <View style={styles.controlButtons}>
            <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24} />
          </View>
          <View style={styles.controlButtons}>
            <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24} />
          </View>
          <View style={styles.controlButtons}>
            <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24} />
          </View>
        </View>
    </View>
  )
}

export default CarItem
