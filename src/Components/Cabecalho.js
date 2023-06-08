import React from "react"
import {StyleSheet, Text, View} from 'react-native';

export default function Cabecalho() {
    return(
      <View style={styles.cabecalho}>
         <Text style={styles.titulo}>MATERIAL PARA O FUTURO</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    cabecalho:{
       height: 68,
       paddingTop: 34,
       backgroundColor: '#00BFFF'
   },

   titulo:{
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight:'bold',
      top: -12,
  },
})



