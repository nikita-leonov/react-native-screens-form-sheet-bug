import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
      <Button
        title="Show Form Sheet"
        onPress={() => navigation.navigate('FormSheet')}
      />
  );
}

function FormSheetScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}></View>
  );
}

export default function App() {
  return (      
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />        
        <Stack.Screen
          name="FormSheet"
          component={FormSheetScreen}
          options={{
            presentation: 'formSheet',
            // @ts-ignore
            sheetAllowedDetents: [0, 1],
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}