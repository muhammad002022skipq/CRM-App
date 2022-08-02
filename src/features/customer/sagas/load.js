import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { get } from "../../../utilities/asyncStorage";
import { CUSTOMERS_KEY } from "../../../utilities/helper";

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
    try {
        const customers = yield get(CUSTOMERS_KEY);

        yield delay(1500);

        if (customers === null) {
            customers = [];
        }

        yield put(actions.loadResult(customers));
    } catch (error) {
        yield put(actions.loadResult([]));
    }
}
