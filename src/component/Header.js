import {View, Text, Image} from 'react-native';
import React from 'react';

const Header = props => {
  console.log(props.cardData, 'Header');
  return (
    <View style={{backgroundColor: 'green', padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text>Header</Text>
        <View>
          <Image
            source={require('../../assets/images/shopping-cart.png')}
            style={{height: 30, width: 30}}
            resizeMode="contain"
          />
          <View
            style={{
              position: 'absolute',
              borderRadius: 400,
              padding: 5,
              //   backgroundColor: 'red',
              left: 10,
              bottom: 14,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {props.cardData.length}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
