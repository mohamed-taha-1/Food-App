import {createStackNavigator} from 'react-navigation-stack';
// import React from 'react';
import SearchScreen from '../screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import ResultsShow from '../screens/ResultsShowScreen';


const screens={

  Home:{
    screen:SearchScreen,
    navigationOptions:{
      title:'Search Zone',
      // headerStyle:{
      //   backgroundColor:'dodgerblue'
      // }
    }
  },
  Results:{
    screen:ResultsShow,
    navigationOptions:{
      title:'results  Zone',
      // headerStyle:{
      //   backgroundColor:'dodgerblue'
      // }
    }
  },

}


const SearchStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor:'#444',  // text color 
    headerStyle:{
      backgroundColor:'rgb(250, 109, 55)',
      // 'rgb(324,123,5)',
      height:55
    },
    cardStyle: { backgroundColor: '#F77515' },
  },
  
   
});

export default createAppContainer(SearchStack);