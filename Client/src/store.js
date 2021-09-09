import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Redux/reducers/index";
const persistConfig = {
  key: "rootModal",
  storage,
  blacklist: ["FormUpdate"],
};
const persistedState = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
