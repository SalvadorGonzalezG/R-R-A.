import React from "react";
import {FlatList, Text } from "react-native";
import repositories from "../../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
   return(
    /* FlatList permitira hacer scroll y renderizar la lista de elementos en la pantalla, tambien podriamos usar scrollView */
    <FlatList 
        data={repositories}
    /*Separar cada uno de los items */
        ItemSeparatorComponent={()=> <Text> </Text>}
    /*Como renderizar cada item */
        renderItem={({item: repo})=> (
            <RepositoryItem {...repo} />
   )}
        >
    </FlatList>
   ) 
}
export default RepositoryList