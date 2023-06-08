
import React, {useState, useEffect} from "react"
import { FlatList , StyleSheet, View, Text } from 'react-native';
import Axios from "axios";
import Cabecalho from '../Components/Cabecalho';
import NovosItens from '../Components/NovosItens';
import AdicionarItem from '../Components/AdicionarItem';

export default function App() {

  const [lista, setLista] = useState([
      { texto: "  Tecnicos de ensino", key:'1'},
      { texto: "  Novas linguagens", key: '2'},
      { texto: "  Areas profissionais   ", key: '3'},
      { texto: "  Bons beneficios  ", key: '4'}
    ]);

  const deletarItem = (key) => {
    Axios.delete(`http://192.168.15.41:3001/item/${key}`,
    )
  }

  //READ 
  useEffect(() =>{
    Axios.get("http://192.168.15.41:3001/item").then(
        (response) => {
          setLista(response.data)
        }
    )
  }, [lista])

  //CREATE
  const submeterInformacao1 = (texto) => {
    Axios.post( "http://192.168.15.41:3001/item", {item: texto} )
  }


  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key !=key);
      }
    )
  }

  const submeterInformacao = (texto) => {
    setLista((prevLista) => { 
     return [
      { texto: texto, key: Math.random().toString() },
       ...prevLista
     ];
    })
  }

  return (
    <View style={styles.container}>

      <Cabecalho />
    
    <View style={styles.conteudo}>   
 
     <AdicionarItem funcao={submeterInformacao} />

       <View style={styles.estiloLista}> 
          <FlatList
            data={lista}
            renderItem={({ item })=> (
              <NovosItens props={item} funcao={apertarItem}/>
            )}
          />
  
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A020F0',
    marginTop: -2,
  },
    conteudo:{
     padding: 40,
  },
});

