import { SafeAreaView, ScrollView } from "react-native";
import CustomerDetails from "../../../features/customer/Details";
const CustomerDetailsScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomerDetails />
            </ScrollView>
        </SafeAreaView>
    );
};
export default CustomerDetailsScreen;
