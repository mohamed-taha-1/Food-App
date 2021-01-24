import React from 'react';
import { View, Text, StyleSheet ,FlatList , TouchableOpacity} from 'react-native';
import ResultDetail from '../components/ResultDetail';
import {withNavigation} from 'react-navigation';
const ResultsList=({title ,result,navigation})=>{

    if(!result.length){
        return null;
    }
    return(
        <View style={{marginBottom:10}}>
            <Text  style={style.title}>
                {title} 
            </Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(res)=>res.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('Results',{id:item.id})}>
                    <ResultDetail  result={item} />
                </TouchableOpacity>
                
                
                );
            }}
            
            
            />
        </View>
    );
};


const style=StyleSheet.create({

    title:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:4 ,
        marginLeft:12,
        marginBottom:13,
        color:'#EAE3E1'

    }

});

export default  withNavigation(ResultsList);