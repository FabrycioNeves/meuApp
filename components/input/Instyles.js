import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Buttonn from "../Button/Button";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useExpoRouter } from "expo-router/build/global-state/router-store";

export default function InStyles({handleAddTask,Abrir,fechar,visible,setVisible}) {
    
    const [task, setTask] = useState('');
    const router=useExpoRouter();
 
    function sendTask(){
      if(task.trim()){
        handleAddTask(task)
        setTask('')
        setVisible(false)
    

    };
    }

    return (
       
      
           
                <View style={styles.container}>

                    {visible && (
                        <>
                            {/* Fundo escuro semitransparente */}
                           
                            
                            {/* Evita que o toque dentro do InputContainer feche o modal */}
                         
                                <View style={styles.InputContainer}>
                                    <TextInput
                                        style={styles.inputText}
                                      
                                        autoFocus={true}
                                        value={task}
                                        onChangeText={setTask}
                                        placeholder="Digite aqui"
                                        textAlignVertical="top"
                                        multiline={true}
                                        
                                    />
                                    <View style={styles.iconc}>
                                        <MaterialIcons name="notifications" size={35} color={'#50c878'} onPress={()=>router.push('/tarefas/notificacoes')} />
                                        <MaterialIcons name="schedule" size={35} color={'#50c878'} />
                                        <MaterialIcons name="timelapse" size={35} color={'#50c878'} />
                                        <MaterialIcons name="check" size={35} color={'#50c878'} onPress={sendTask} />
                                    </View>
                                </View>
                            
                        </>
                    )}

                    <Buttonn onPress={Abrir} />
                </View>
           
      
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position:'relative',
       
    },
   
    
    InputContainer: {
        height: 250,
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#f1f1f1',
        zIndex: 12,
        borderEndEndRadius:0,
        borderEndStartRadius:0,
   
    },
    inputText: {
        padding: 15,
        margin: 12,
        flex:1,
        textAlignVertical:'top',
        
    },
    iconc: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        height: 60,
        right: 0,
        left: 0,
        bottom: -10,
        paddingRight:10,
       
    }
});