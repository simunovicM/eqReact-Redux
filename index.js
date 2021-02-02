const reduxConnect = require('react-redux').connect;

var changeState = fnc => store.dispatch({ type: null, fnc: fnc });
const mapDispatchToProps = () => ({ changeState });

const mapStateToProps = mapFnc => state => mapFnc ? mapFnc(state) : state;

exports.connect = (component, mapFnc) => reduxConnect(mapStateToProps(mapFnc), mapDispatchToProps, null, { pure: false })(component);
exports.reducer = initialState => (state, action) => {
    var obj = action.fnc ? action.fnc(state || initialState || {}) : state || initialState || {};
    return {
        ...(state || {}),
        ...obj
    };
};

var store = null;
exports.setStore = s => store = s;
exports.getStore = () => store;
