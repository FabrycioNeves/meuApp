import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Taskmanager from "../components/input/TaskManager";
import Notificações from "../components/notificações/notificações";
import { KeyboardAvoidingView,Platform } from "react-native";
import Stack from "./Stack";

const Tab=createBottomTabNavigator();

export default function Tabs(){
    return(
         
    <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard:false,
     
        headerShown:false,
        tabBarStyle:{backgroundColor:'#fae7c9'},
        tabBarActiveTintColor:'#6a0dad'
    }}>

    <Tab.Screen name="tarefas" component={Stack}
    options={{
        tabBarIcon:({color,size})=>(
            <MaterialIcons name='home'size={size} color={color} />

        ),
    }}/>
    
   
  


    </Tab.Navigator>
    
    )

}