import React from 'react';
import { View, Text } from '@tarojs/components';

const Child = props => {
  const { object } = props;
  return (
    <View>
      <Text>{object.name}</Text>
    </View>
  );
};

export default Child;
