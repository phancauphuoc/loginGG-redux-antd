import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user']
}
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(logger, thunk)));




export const persistor = persistStore(store);