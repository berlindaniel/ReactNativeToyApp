import React from 'react';
import { Button } from 'react-native';

const fetchHome = props => {
  return (
    <Button title="Return Home" onPress={props.onGetHome} />
  );
};

export default fetchHome;
