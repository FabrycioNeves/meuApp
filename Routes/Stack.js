import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tab";
import Notificações from "../components/notificações/notificações";
import Home from "../pages/Home";

const stack=createStackNavigator();
export default function Stack(){
    return(
        
         <stack.Navigator>
           
         <stack.Screen name="home" component={Home} options={{tabBarHideOnKeyboard:true,headerShown:false}}/>

            <stack.Screen name="Notificações" component={Notificações}/>
            
         </stack.Navigator>
        
        
    )
}