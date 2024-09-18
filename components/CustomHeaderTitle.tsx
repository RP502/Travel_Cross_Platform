import React from 'react';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import an icon library like MaterialIcons


function CustomHeaderTitle() {
  return (
    <Text style={{ flexDirection: 'row', alignItems: 'center' }}>
      <MaterialIcons name="login" size={24} color="black" />  {/* Icon */}
      <Text style={{ marginLeft: 10 }}>Login</Text>  {/* Title */}
    </Text>
  );
}

export default CustomHeaderTitle;
