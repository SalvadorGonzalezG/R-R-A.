import React from "react"
import { Text, View, StyleSheet } from "react-native"
import StyledText from "./StyleText"

const RepositoryStats = props => {
    return (
        /* Filas */
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <View>
                <StyledText align='center' fontWeight='bold'>Stars</StyledText >
                <StyledText align='center' >{props.stargazersCount}</StyledText >
            </View>
            <View>
                <StyledText align='center'  fontWeight='bold'>forks</StyledText>
                <StyledText align='center' >{props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'> Rating</StyledText>
                <StyledText align='center'>{props.ratingAverage}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Review</StyledText>
                <StyledText align='center' >{props.reviewCount}</StyledText>
            </View>

        </View>
    )
}

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Text style={{ fontWeight: 'bold', marginButton: 5 }}>id: {props.id}</Text>
            <StyledText fontSize='subheading' fontWeight='bold'>name: {props.fullName}</StyledText>
            <StyledText color='primary'>description: {props.description}</StyledText>

            <StyledText>url: {props.ownerAvatarUrl}</StyledText>
            <RepositoryStats {...props} />
        </View>
    )
}

// Creando estilos de la vista de forma correcta.
const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingBottom: 5,
        paddingTop: 10
    }
})
export default RepositoryItem