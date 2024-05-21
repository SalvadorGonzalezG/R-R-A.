import React from "react";
import {FlatList, View, Text } from "react-native";
import repositories from "../../data/repositories.js";

const RepositoryList = () => {
   return(
    <FlatList data={repositories}
        renderItem={({item: repo})=>
            <View key= {repo.id}>
            <Text>{repo.id}</Text>
            <Text>{repo.fullName}</Text>
            <Text>{repo.description}</Text>
            <Text>{repo.language}</Text>
            <Text>{repo.forksCount}</Text>
            <Text>{repo.ratingAverage}</Text>
            <Text>{repo.reviewCount}</Text>
            <Text>{repo.ownerAvatarUrl}</Text>
            </View>
        }
        >
    </FlatList>
   ) 
}
export default RepositoryList