import { createSlice } from "@reduxjs/toolkit";
import {
    PENDING,
    INPROGRESS,
    REQUESTING,
    SUCCESS,
    ERROR,
} from "../../utilities/helper";
const name = "customers";

export const initialState = {
    list: {
        status: PENDING,
        customers: [],
        regions: [
            { id: 1, name: "Northeast" },
            { id: 2, name: "Southwest" },
            { id: 3, name: "West" },
            { id: 4, name: "Southeast" },
            { id: 5, name: "Midwest" },
        ],
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    error: {
        message: "",
    },
    form: {
        fields: {
            firstName: null,
            lastName: null,
            active: null,
            phoneNum: null,
            region: null,
        },
    },
};

const reducers = {
    resetFields: (state) => {
        state.form.fields = initialState.form.fields;
    },
    createCustomer: (state) => {
        state.create.status = REQUESTING;
    },
    createCustomerResult: (state, { payload }) => {
        state.create.status = SUCCESS;
        state.list.customers = payload;
        state.form.fields = initialState.form.fields;
        state.create = initialState.create;
    },
    createCustomerError: (state, { payload }) => {
        state.create.status = ERROR;
        state.error.message = payload;
        state.form.fields = initialState.form.fields;
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find((a) => (a.id = payload));

        if (customer) {
            state.form.fields = customer;
        } else {
            state.error.message = `could not find customer with id: ${payload}`;
        }
    },
    editCustomer: (state) => {
        state.edit.status = REQUESTING;
    },
    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS;
        state.list.customers = payload;
        state.form.fields = initialState.form.fields;
        state.edit = initialState.edit;
    },
    editCustomerError: (state) => {
        state.edit.status = ERROR;
        state.error.message = payload;
        state.form.fields = initialState.form.fields;
    },
    editCustomerStatus: (state, { payload }) => {
        state.edit = payload;
    },
    setFormField: (state, { payload }) => {
        const current = state.form.fields;
        const { field, value } = payload;

        const fields = {
            ...current,
            [field]: value,
        };

        state.form.fields = fields;
    },
    loadCustomers: (state) => {
        state.list.status = REQUESTING;
    },
    loadResult: (state, { payload }) => {
        state.list.customers = payload;
    },
};

const slice = createSlice({
    name,
    initialState,
    reducers,
});

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    setForm,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    editCustomerStatus,
    setFormField,
    loadResult,
    loadCustomers,
    resetFields,
} = slice.actions;

export default slice.reducer;
