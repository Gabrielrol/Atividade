import React from "react"
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NovosItens({ props, funcao }) {
    return(
    <TouchableOpacity onPress={() => funcao(props.key)}>

    <View style={styles.caixa}>
        <View style={styles.icon}>
        <MaterialIcons name="delete" size={18} color={"#333"} />
        </View>
       <Text style={styles.itemtexto}>{props.texto}</Text>
       </View>
    </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   itemtexto: {
     padding: 17,
     marginTop: 17,
     borderColor: "#bbb",
     borderWidth: 1,
     borderStyle: 'dashed',
     backgroundColor: 'white',
     borderRadius: 10,
     flexDirection: 'row',
     
   },
   itemTexto:{
       marginLeft: 30,
   },
   icon:{
     top: 54,
   },
});




