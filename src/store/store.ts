import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const configStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
    return store;
}
export default configStore;