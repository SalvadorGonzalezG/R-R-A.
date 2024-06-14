import React from "react"
import { Image, Text, View, StyleSheet } from "react-native"
import StyledText from "./StyleText"
import RepositoryStats from '../components/RepositoryStats'
import theme from "../theme"

// funcion que renderiza el contenido, se crea cada una de las cards donde se manda llamar el contenido.
const RepositoryItemHeader = ({ownerAvatarUrl,fullName,description,language}
) => {
    return(
    <View style={{flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{paddingRight: 10}}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{ flexGrow: 1}}>
        <StyledText fontSize='subheading' fontWeight='bold'>name: {fullName}</StyledText>
        <StyledText color='primary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
    );
};

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
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
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 6,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 8,
        
    }
})
export default RepositoryItem