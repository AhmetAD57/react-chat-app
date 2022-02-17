import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

//Giriş yapılarak gezme durumlarında kullanılır
const PublicRoute = ({ isAuthenticated, children }) => (
  isAuthenticated ? <Navigate to="/chat" /> : children 
)

const mapStateToProps = (state) => ({
    isAuthenticated: !! state.uId
});

export default connect(mapStateToProps)(PublicRoute);