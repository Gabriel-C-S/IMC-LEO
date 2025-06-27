import React from "react";
import IMC from "@/components/IMC";
import Perfil from "@/components/perfil";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Home(){
    const Tab = createBottomTabNavigator();

    return(
            <Tab.Navigator>
                <Tab.Screen name="IMC" component={IMC}/>
                <Tab.Screen name="Perfil" component={Perfil}/>
            </Tab.Navigator>
    );
}