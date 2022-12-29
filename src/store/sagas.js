import { all } from 'redux-saga/effects'
import dashboardSaga from '../screens/Dashboard/saga'
import carDetailsSaga from '../screens/CarDetails/saga'

function* rootSaga() {
  yield all([
    dashboardSaga(), carDetailsSaga()
  ])
}

export default rootSaga;