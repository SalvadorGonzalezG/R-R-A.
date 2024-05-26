import React from "react";
import {View } from 'react-native'
import StyledText from "./StyleText";

// f: para parsear los 1000 pasarlos y que aparesca cada 1000 como 1k.
const parseThousands = (value) =>{
    return value >= 1000
        ? `${Math.round(value/100)/10}k`
        : String(value)
}

const RepositoryStats = props => {
    return (
        /* Filas */
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <View>
                <StyledText align='center' fontWeight='bold'>Stars</StyledText >
                <StyledText align='center' >{parseThousands(props.stargazersCount)}</StyledText >
            </View>
            <View>
                <StyledText align='center'  fontWeight='bold'>forks</StyledText>
                <StyledText align='center' >{parseThousands(props.forksCount)}</StyledText>
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
export default RepositoryStats