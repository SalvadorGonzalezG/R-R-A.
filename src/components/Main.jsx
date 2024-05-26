import React from "react";
import Constants from 'expo-constants'
import { View, Text, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";

// creando estilos.
styles = StyleSheet.create({
    container:{
        // el contenedort tendra un margen igual o superiora la altura de la barra de estado del dispositivo 
        marginTop: Constants.statusBarHeight,
        flexGrow:1, // el contenedor se expandira para llenar todo el espacio disponible en la pantalla.
    },
    strong:{
        fontSize:18,
        color: '#f740cd',
        fontWeight: 'bold',
        marginBottom:1,
        paddingTop:20

        
    }
})

const Main = () => {
    return (
        <View style={ styles.container}>
            <Text style={styles.strong}> Rate Repository Application.</Text>
            <RepositoryList/>
        </View>
    )
}

export default Main;