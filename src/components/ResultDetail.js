import React from 'react';
import {View ,Image, Text , StyleSheet} from 'react-native';

const ResultDetail=({result})=>{
    return(
        <View style={{marginLeft:10}}>
            <Image  source={{uri:result.image_url}}   style={{width:250,height:200, borderRadius:4, marginHorizontal:5}} />
            <Text style={{marginHorizontal:5, marginVertical:7 , fontSize:16, fontWeight:'bold'}}>
                {result.name} 
            </Text>
            <Text style={{ marginVertical:2,color:'#C2BCBA'}}>
               {result.rating} stars, {result.review_count} review
            </Text>
        </View>
    );
};

const style=StyleSheet.create({});

export default ResultDetail;