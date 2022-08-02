import { all } from "redux-saga/effects";
import customers from "../features/customer/sagas";

export default function* rootSaga() {
    yield all([customers()]);
}
