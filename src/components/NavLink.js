import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, text2, routeName}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.text1}>
            {text}{' '}
            <Text style={{fontWeight: 'bold', color: '#fa8383'}}>{text2}</Text>
          </Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
  text1: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default withNavigation(NavLink);
