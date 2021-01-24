import React,{useEffect, useState} from 'react';

import {View ,Text, StyleSheet , FlatList , Image} from 'react-native';
import yelp from '../api/yelp';
const ResultsShow=({navigation})=>{
    const id=navigation.getParam('id');

    const [result , setResult] =useState(null);
    const getResult=async (id)=>{
       const response =   await yelp.get(`/${id}`);
       setResult(response.data);
    };

    useEffect(()=>{
        getResult(id);
    },[]);
    
    if(!result ){
        return null ;
    }



    console.log(result);

    return(
        <View >
            <Text style={{marginHorizontal:10, marginVertical:10}}>
                {result.name}
            </Text>
            <FlatList 
            
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return (
                    <Image source={{uri:item}} style={{width:300, height:200, marginVertical:10, borderRadius:4, marginLeft:12}}/>
                );
            }}
            
            
            />
        </View>
    );
};

export default ResultsShow;