import React from 'react';
import { Button } from 'react-native';

const fetchClasses = props => {
  return (
    <Button title="Get Classes" onPress={props.onGetClasses} />
  );
};

export default fetchClasses;
