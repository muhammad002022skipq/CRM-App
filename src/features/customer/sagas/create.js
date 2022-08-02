import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { set } from "../../../utilities/asyncStorage";
import { CUSTOMERS_KEY } from "../../../utilities/helper";

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
    console.log("Starting fetch request to API");
    try {
        const fields = yield select((state) => state.customers.form.fields);
        const customers = yield select((state) => state.customers.list.customers);

        const customer = {
            id: customers.length + 1,
            ...fields,
        };

        yield delay(500);

        const result = [customer, ...customers];

        yield set(CUSTOMERS_KEY, result);

        yield put(actions.createCustomerResult(result));
    } catch (error) {
        yield put(actions.createCustomerError(error.toString()));
    }
}
