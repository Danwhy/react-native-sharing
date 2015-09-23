/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
var ActivityView = require('react-native-activity-view');

var share = React.createClass({
  _pressHandler() {
    ActivityView.show({
      text: 'ActivityView for React Native',
      url: 'https://github.com/naoufal/react-native-activity-view',
      imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
    });
  },

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
          onPress={this._pressHandler}
        >
          <Text ref="share">
            Share with Activity View
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

AppRegistry.registerComponent('share', () => share);
