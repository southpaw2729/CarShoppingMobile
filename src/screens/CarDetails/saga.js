import { put, takeLatest } from 'redux-saga/effects';
import { fetchCarDetails } from '../../api/cardetails';

function* getCarDetails(action) {
    try {
        const response = yield (fetchCarDetails(action.id));

        yield put({ type: "CAR_DETAILS_SUCCESS", response });
    } catch (error) {

        yield put({ type: "CAR_DETAILS_FAILURE", error: error.message });
    }
}

function* carDetailsSaga() {
    yield takeLatest("CAR_DETAILS_REQUEST", getCarDetails);
}
export default carDetailsSaga