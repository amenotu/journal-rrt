import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reducer } from '../reducers/index'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer, { entries: [{date: '12', text: 'Whatever goes in here'}, {date: '3894', text: 'Whatever goes in here and here and here'}]});
export const persistor = persistStore(store);
