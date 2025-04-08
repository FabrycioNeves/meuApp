import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export  default function Lista({ tasks}) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks} 
        keyExtractor={(item) => item.id} 
        keyboardShouldPersistTaps='always'
        renderItem={({ item }) => {
          console.log("Item atual:", item); // Ver o que tem dentro de cada item
          
          return (
            <View style={styles.Tas}>

              <Text>{item.text}</Text>
            </View>
          );
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
flex:1,
marginTop:70,
alignItems:'center',
   
  },
  Tas: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    zIndex:1,
    marginTop:30,
    width:300,


  },
});