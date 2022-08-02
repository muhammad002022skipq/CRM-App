import { View } from "react-native";
import React from "react";
import { useNewCustomer } from "../hooks";
import { useSelector } from "react-redux";
import Form from "../../../components/Form";

const CustomerCreate = () => {
    const { onSubmit } = useNewCustomer();
    const status = useSelector((state) => state.customers.create.status);

    return (
        <View>
            <Form customer={null} onSubmit={onSubmit} status={status} />
        </View>
    );
};

export default CustomerCreate;
