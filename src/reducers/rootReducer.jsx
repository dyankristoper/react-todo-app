import todoReducer from "./todoReducer";
import combineReducers from 'react-combine-reducers';

const initialItems =  [
      { id: 1, name: "Wake up", status: "todo" },
      { id: 2, name: "Take a bath", status: "todo" },
      { id: 3, name: "Eat", status: "completed" },
    ];

const [ rootReducer, initialState ] = combineReducers({
    todo: [ todoReducer, initialItems ]
});

export default { rootReducer, initialState };