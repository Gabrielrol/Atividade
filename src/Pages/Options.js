import React from 'react';
import { StyleSheet, Alert, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EmployeeList } from '../Components/EmployeeList';

const data = [
  {key: 0, name: 'Amazon', role: 'A AMAZON uma empresa que consegue ser baseada em Seattle e que pode até integrar uma lista de empresas Fortune 500. '},
  {key: 1, name: 'Google', role: 'A GOOGLE é um empresa que é multinacional de serviços que são online e o software que é localizada nos estados unidos.'},
  {key: 2, name: 'Oracle', role: ' A ORACLE é uma empresa de tecnologia norte-americana que é especializada no desenvolvimento de produtos para as outras grandes empresas.'},
  {key: 3, name: 'Microsoft', role: 'A MICROSOFT é uma das maiores empresas de tecnologia do mundo que foi fundada no ano de 1975 e que também foi criada por Bill Gates e Paul Allen, e ela atua no suporte e desenvolvimento de cada software, nos dispositivos e serviços que são geralmente relacionados a cada computação pessoal.'},
  {key: 4, name: 'Github', role: 'O GITHUB é uma plataforma de desenvolvimento que muitas empresas pra poder colocar codigos de varios projetos feitos e pode escalar e também fornecer softwares que são totalmente seguros.'},
  {key: 5, name: 'Slideshare', role: 'A SLIDESHARE é uma rede social que algumas pessoas utilizam no seus dia a dia de trabalho que pode permitir fazer o compartilhamento e cada tipo de download de varios tipos de documentos e apresentação e que também conta até com quase 60 milhões de usuarios.'},
  {key: 6, name: 'Dropobox', role: 'O DROPOBOX é uma das empresas que foi fundada em 2007 e foi pelo Drew Houston e Arash Ferdowsi que foi extremamente sedida lá nós estados unidos me são francisco.'},
  {key: 7, name: 'Airbnb', role: 'A AIRBNB é uma das empreasa de desing que fica localizada na cidade de são francisco na califórnia nos ESTADOS UNIDOS.'},
  {key: 8, name:'Apple', role: ' A APPLE é uma das maiores empresas do mundo de tecnologia que foi fundada no dia 1 de abril 1976 por Steve Wozniak, Stev Jobs e também Ronald Wayne, também fizeram o IPHONE, varios modelos dos IPADS e do APPLE WATCH.'},
  {key: 9, name:'Meta Platforms', role: 'A META PLATAFORMS uma empresa de tecnologia que pode ser utilizada para que as pessoas possam se conectar com os amigos e seus familiares, ajudam a encontrar comunidades e também expandir os negócios.'},
  {key: 10,name:'Cisco Systems', role: 'A CISCO SYSTEMS é uma empresa de tem o foco na comunicação das redes, na fabricação e distribuição das soluções em equipamento de rede e ela foi fundada no ano de 1984 por Leonard Bosack e Sandra Lerner, ambos cientistas de computação da Stanford University, na época.'}
];

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.username}>   EMPRESAS  MUNDIAIS  </Text>

     <EmployeeList data={data} /> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A020F0',
    marginTop: +3,
  },
  icone1:{
    position:'relative',
    right: -286,
    top: -454,
   },
 
   icone2: {
    position:'relative',
    right: -286,
    top: -387,
   },
 
   icone3: {
     position:'relative',
     right: -286,
     top: -326,
   },
 
    icone4: {
      position:'relative',
      right: -286,
      top: -261,
    },
 
    icone5:{
     position:'relative',
     right: -336,
     top: -551,
    },
 
    icone6:{
     position:'relative',
     right: -336,
     top: -483,
    },
 
    icone7:{
     position:'relative',
     right: -336,
     top: -423,
    },
 
    icone8:{
     position:'relative',
     right: -329,
     top: -323,
    },
    
    username:{
     color: 'white',
     fontSize: 23,
     fontWeight: 'bold',
     color: 'white', 
     margin: 12,
     right: -33,
    },
 });

