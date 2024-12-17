import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import ProductListScreen from './src/screens/ProductListScreen';
import AddProductScreen from './src/screens/AddProductScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [products, setProducts] = useState([]);

  const handleProductAdded = () => {
    console.log('Produto adicionado com sucesso!');
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName =
              route.name === 'Lista de Produtos' ? ('list' as const) : ('plus-circle' as const);

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Lista de Produtos" component={ProductListScreen} />
        <Tab.Screen
          name="Adicionar Produto"
          children={() => <AddProductScreen onProductAdded={handleProductAdded} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;