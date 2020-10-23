import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Validator from './src/Validator/Validator';

export default function App() {
  return <Validator />;
}

const Tab = createBottomTabNavigator();
