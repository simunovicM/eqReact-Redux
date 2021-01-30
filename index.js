import { connect as reduxConnect } from 'react-redux';

var changeState = fnc => store.dispatch({ type: null, fnc: fnc });
const mapDispatchToProps = () => ({ changeState });

const mapStateToProps = mapFnc => state => mapFnc ? mapFnc(state) : state;

export const connect = (component, mapFnc) => reduxConnect(mapStateToProps(mapFnc), mapDispatchToProps, null, { pure: false })(component);
export const reducer = initialState => (state, action) => action.fnc ? action.fnc(state || initialState || {}) : state || initialState || {};

var store = null;
export const setStore = (s) => store = s;
export const getStore = () => store;
