import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING } from "../../utilities/helper";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.customers.edit.status);
    const fields = useSelector((state) => state.customers.form.fields);

    useEffect(() => {
        if (customerID === null) {
            dispatch(actions.resetFields());
        }
        if (customerID && status === PENDING) {
            dispatch(actions.setForm(customerID));
        }
    }, [customerID, status]);

    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`);
            dispatch(actions.setFormField({ field, value }));
        },
    };
};
export const useNewCustomer = () => {
    const dispatch = useDispatch();

    return {
        onSubmit: () => {
            console.log("Dispatching CreateCustomer action");
            dispatch(actions.createCustomer());
        },
    };
};

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch();

    return {
        onSubmit: () => {
            console.log("Dispatching editCustomer action");
            dispatch(actions.editCustomer(customerID));
        },
    };
};

export const useListCustomer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadCustomers());
    }, [dispatch]);
};
