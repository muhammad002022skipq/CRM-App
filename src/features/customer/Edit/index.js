import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../hooks";
import { useSelector } from "react-redux";
import Form from "../../../components/Form";

const CustomerEdit = () => {
    const route = useRoute();
    const selectedCustomer = route.params.selectedCustomer;
    const { onSubmit } = useEditCustomer(selectedCustomer.id);
    const status = useSelector((state) => state.customers.edit.status);

    return (
        <View>
            <Form customer={selectedCustomer} onSubmit={onSubmit} status={status} />
        </View>
    );
};

export default CustomerEdit;
