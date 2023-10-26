import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FooterItem = ({ iconName, text }) => {
  return (
    <TouchableOpacity style={styles.footerItem}>
      <View style={styles.footerIcon}>
        <MaterialIcons name={iconName} size={24} color="white" />
      </View>
      <Text style={styles.footerText}>{text}</Text>
    </TouchableOpacity>
    
  );
  
};

const styles = {
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    padding: 12,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
};

export { FooterItem };

