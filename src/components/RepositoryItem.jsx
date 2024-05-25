import React from "react"
import { Text, View } from "react-native"

const RepositoryItem = (props) =>{
    return (
    <View key= {props.id} style={{padding:40, paddingBottom:5, paddingTop:10}}>
            <Text style={{fontWeight:'bold', marginButton:5}}>id: {props.id}</Text>
            <Text>name: {props.fullName}</Text>
            <Text>description: {props.description}</Text>
            <Text>{props.language}</Text>
            <Text>{props.forksCount}</Text>
            <Text>{props.ratingAverage}</Text>
            <Text>{props.reviewCount}</Text>
            <Text>{props.ownerAvatarUrl}</Text>
            </View>
)}
export default RepositoryItem