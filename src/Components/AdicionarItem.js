import React, {useState} from "react"
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AdcionarItem({ funcao }) {

    const [texto, setTexto] = useState('') ;

    const pegarMudanca = (val) => {
         setTexto(val);
  }

  return (
    <View style={styles.cabecalho}>
        
        <TextInput
          style={styles.input}
          placeholder= "Novos tipos de linguagens e empresas..."
          onChangeText={pegarMudanca}
        />


        <Button style={styles.buttom}
           onPress={() => funcao(texto)}
           title="Colocar material"
           color="#00BFFF"
        />

    </View>
  )
}
 
const styles = StyleSheet.create({

   input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderButtomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    right: 4,
    top: -12,
   },
});

