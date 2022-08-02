import { ScrollView, SafeAreaView } from "react-native";
import CustomerEdit from "../../../features/customer/Edit";

const CustomerEditScreen = () => (
    <SafeAreaView>
        <ScrollView>
            <CustomerEdit />
        </ScrollView>
    </SafeAreaView>
);

export default CustomerEditScreen;
