/**
 * UMB Demo - Damascus Edge - The Forge
 * https://github.com/justchad/geha_blueberry_demo
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Main from './Main';
import Currentstore from './Currentstore';
import Items from './Items';
import Receipt from './Receipt';
import Exit from './Exit';


class umbDemo extends Component {
  
  renderScene(route, navigator){
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Currentstore') {
        return <Currentstore navigator={navigator} />
    }
    if (route.name == 'Items') {
        return <Items navigator={navigator} />
    }
    if (route.name == 'Receipt') {
        return <Receipt navigator={navigator} />
    }
    if (route.name == 'Exit') {
        return <Exit navigator={navigator} />
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Main'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('umbDemo', () => umbDemo);
