import { SafeAreaView, ScrollView } from "react-native";
import CustomerCreate from "../../../features/customer/Create";
const CustomerCreateScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomerCreate />
            </ScrollView>
        </SafeAreaView>
    );
};
export default CustomerCreateScreen;
