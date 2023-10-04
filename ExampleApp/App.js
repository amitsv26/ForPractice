
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, createDrawerNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import { navigationRef } from "./RootNavigation";





const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();


const LoginStack = () => {
    return (
      <Stack.Navigator
        
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
       
      </Stack.Navigator>
    );
  };


  const getNavigator = navigator => {
    navigationRef.current = navigator;
  };
export default function App() {
    
   
  return (<>
    <NavigationContainer ref={getNavigator}
>
    <Drawer.Navigator
                    initialRouteName={'LoginStack'}
                    >
                    <Drawer.Screen
                      options={{swipeEnabled: false, headerShown: false}}
                      name="LoginStack"
                      component={LoginStack}
                    />
                    
                    
                  </Drawer.Navigator>
    </NavigationContainer>
  </>
  );
}


