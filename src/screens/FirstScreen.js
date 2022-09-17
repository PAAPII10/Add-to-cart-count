import {View, Text, Image, Button} from 'react-native';
import React from 'react';

const FirstScreen = props => {
  console.log(props.cardData, 'First');
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{}}>
        <Image
          source={require('../../assets/images/C-Channel.png')}
          resizeMode="cover"
          style={{height: '70%', width: '100%'}}
        />
      </View>
      <View>
        <Button
          title="Add to cart"
          onPress={() => {
            props.addToCartHandler({price: 1000, name: 'MILD STEEL'});
          }}
        />
        <View style={{paddingVertical: 20}}>
          <Button
            title="Remove from cart"
            onPress={() => {
              props.removeToCartHandler();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
