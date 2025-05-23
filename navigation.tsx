import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from 'screens/CartScreen';
import HomeScreen from 'screens/HomeScreen';
import RestaurantScreen from 'screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}