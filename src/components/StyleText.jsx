import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: { // primary del text
        color: theme.colors.textPrimary
    },
    colorSecundary:{
        color: theme.colors.textSecundary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    textAlignCenter:{
        textAlign: 'center'
    },
    subheading:{
        fontSize: theme.fontSizes.subheading,
    
}})

// poibilidades de la funcion ' componente del uI
export default function StyledText ({children, align, color, fontSize,
    fontWeight, style, ...restOfProps}) {
    // componente reusable para estilar los textos.
    const textStyles=[
        styles.text, // estilo base
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.color,
        color === 'secundary' && styles.secundary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold

    ]

    return(
        /*obtenemos props que no controlemos en styledTEXT */
        <Text style={textStyles} {...restOfProps}
        >
            {children}
        </Text>
    )
}