import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import RegionsScreen from "./screens/regions";
import CustomerDetailsScreen from "./screens/customers/details";
import CustomerCreateScreen from "./screens/customers/create";
import CustomerEditScreen from "./screens/customers/edit";
import ListCustomersScreen from "./screens/customers/list";

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Welcome"}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Regions" component={RegionsScreen} />
                <Stack.Screen
                    name="CustomerDetails"
                    component={CustomerDetailsScreen}
                />
                <Stack.Screen name="CustomerCreate" component={CustomerCreateScreen} />
                <Stack.Screen name="CustomerEdit" component={CustomerEditScreen} />
                <Stack.Screen name="ListCustomers" component={ListCustomersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
