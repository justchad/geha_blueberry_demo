/**
 * UMB Demo - Damascus Edge - The Forge
 * https://github.com/justchad/geha_blueberry_demo
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');

class Main extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
    <View style={styles.container}>
        
        <View style={styles.headerwrapper}>
            <View style={styles.headernavigation}>
            
            </View>
        </View>
      
        <View style={styles.contentwrapper}>
      
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                <Text style={styles.welocome}>Home</Text>
            </TouchableHighlight>
        
        </View>

        <View style={styles.footerwrapper}>
            <View style={styles.footernavigation}>
            
            </View>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF5F7',
    width: width,
  },
  headernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 25,
    width: width
  },
  contentwrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -27,
  },
  footernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main
