import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware  from "redux-saga";
import { rootReducers } from "./mainReducer";
import { mainSaga } from "./mainSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducers,
    compose(applyMiddleware(...middlewares))
)

sagaMiddleware.run(mainSaga);

export { store }