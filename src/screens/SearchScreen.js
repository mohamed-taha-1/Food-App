import React, { useState } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hook/useResults';
import ResultsList from '../components/ResultsLIst';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const  [searchApi, results, errorMessage]  = useResults();



  const filterResultsByPrice=(price)=>{
    // price ===  $ || $$ ||  $$$
    return(
      results.filter(result=>{
        return(result.price=== price);
      })
    );
  };
  
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    >
      <SearchBar term={term} onTermChange={setTerm}      onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList    result={filterResultsByPrice('$')}    title="Cost Effective "/>
      <ResultsList      result={filterResultsByPrice('$$')}   title="Bit Pricer "/>
      <ResultsList        result={filterResultsByPrice('$$$')}    title="Big Spinder"/>
      </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;