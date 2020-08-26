import React, { useReducer } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import carReducer,{ ADD_FEATURE, REMOVE_FEATURE, initialState } from './reducers/carReducer';
import { removeFeature, addFeature } from './actions/carActions'

const App = (props) => {
  // const [state, dispatch] = useReducer(carReducer, initialState);

  // const removeFeature = feature => {
  //   dispatch({ type: REMOVE_FEATURE, payload: feature })
  // };

  // const addFeature = feature => {
  //   dispatch({ type: ADD_FEATURE, payload: feature })
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={props.addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return state
}

const mapDispatchToProps = {
  removeFeature,
  addFeature
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
