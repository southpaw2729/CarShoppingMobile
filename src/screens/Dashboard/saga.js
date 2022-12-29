import { put, takeLatest } from 'redux-saga/effects';
import { fetchCars } from '../../api/dashboard';

function* getCars() {
    try {
        const response = yield (fetchCars());

        yield put({ type: "CARS_SUCCESS", response });
    } catch (error) {

        yield put({ type: "CARS_FAILURE", error: error.message });
    }
}

function* dashboardSaga() {
    yield takeLatest("CARS_REQUEST", getCars);
}
export default dashboardSaga