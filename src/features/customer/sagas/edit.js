import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { set } from "../../../utilities/asyncStorage";
import { CUSTOMERS_KEY } from "../../../utilities/helper";

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer({ payload }) {
    console.log("Starting fetch request to API -- EDIT");

    try {
        const fields = yield select((state) => state.customers.form.fields);
        const customers = yield select((state) => state.customers.list.customers);
        console.log("Customer ID : ", payload);

        const result = customers.map((customer) => {
            if (customer.id !== payload) return customer;
            return fields;
        });

        yield delay(500);

        yield set(CUSTOMERS_KEY, result);

        yield put(actions.editCustomerResult(result));
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()));
    }
}
