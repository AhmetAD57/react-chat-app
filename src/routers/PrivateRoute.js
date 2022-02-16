import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

//Giriş yapılarak gezme durumlarında kullanılır
const PrivateRoute = ({ isAuthenticated, children }) => (
  isAuthenticated ? children : <Navigate to="/" />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !! state.uId
});

export default connect(mapStateToProps)(PrivateRoute);