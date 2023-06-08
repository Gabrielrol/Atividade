import { StyleSheet, Text, View, TouchableOpacity, Feather} from 'react-native';


export function EmployeeListItem(props) {
    console.log(props.name)
  return(
   <View style={styles.container1}>

     <View style={styles.informations}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.role}>{props.role}</Text>
    </View>

    {/* <Text>gghuhuh</Text> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
     },
    //   informations: {
    //     justifyContent: 'center', 
    //   },
      image: {
         borderRadius: 50,
         backgroundColor: 'grey',
         height: 50,
         width: 50,
         marginRight: 15,
         justifyContent: 'center',
         alignItems: 'center',
         top: 14,
      },
       name: {
         fontSize: 15,
         fontWeight: 'bold',
         marginBottom: 3,
         color: 'white'
         
    },
      role:{
        fontSize: 14,
        color: 'white',
        padding: 12,
   },
   })


