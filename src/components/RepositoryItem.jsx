import React from "react"
import {Image, Text, View, StyleSheet } from "react-native"
import StyledText from "./StyleText"
import RepositoryStats from '../components/RepositoryStats'
import theme from "../theme"


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
            <StyledText fontSize='subheading' fontWeight='bold'>name: {props.fullName}</StyledText>
            <StyledText color='primary'>description: {props.description}</StyledText>
            <StyledText style={styles.language}> lenguage: {props.language}</StyledText>
            <RepositoryStats {...props} />
        </View>
    )
}

// Creando estilos de la vista de forma correcta.
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 10
    },
    language:{
        padding:4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        borderRadius: 6,
        overflow: 'hidden'
    },
    image: {
        width:48,
        height: 48,
        borderRadius:8,
        alignSelf: 'flex-end'
    }
})
export default RepositoryItem