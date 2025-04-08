import React, { useState } from 'react'
import {View,StyleSheet,TextInput,Text} from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from'./styles'

export default function Notificações(){
    const[notiPadrao,setnotiPadrao]=useState(false)
    const supostaTask='Estudar React Native'
    return(
        <SafeAreaView> 
        <View style={styles.conatainer}>
        <View style={styles.padrao}>
        <Text style={styles.text}>Notificação padrão:{supostaTask.length<=10?supostaTask:'sua'}</Text>
        <Switch  style={styles.swt}value={notiPadrao}
        onValueChange={(valorselecionado)=> setnotiPadrao(valorselecionado)}
        trackColor={{false:'#121212',true:'00ff00'}}/>
        </View>
        <View style={styles.holders}>
        <Text  style={styles.textoNoti}>notificação 1:</Text>
        <View style={styles.contInput}>
        <TextInput style={styles.inputText} placeholder='crie sua notificação'/>
        </View>
          <Text style={styles.textoNoti}>notificação 02</Text>    
          <View style={styles.contInput}>
        <TextInput style={styles.inputText}  placeholder='crie sua notificação'/>
        </View>
        </View>
        <Text style={styles.overlayText}>Notificações personalizadas</Text>
        <View style={styles.alarme}>
        <Text style={styles.text}>ativar alarme</Text>
        <Switch  style={styles.swt}value={notiPadrao}
        onValueChange={(valorselecionado)=> setnotiPadrao(valorselecionado)}
        trackColor={{false:'#121212',true:'00ff00'}}/>
        </View>
        </View>
         </SafeAreaView>
    )
}
