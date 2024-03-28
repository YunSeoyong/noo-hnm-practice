import React from 'react'
import { Navigate } from 'react-router-dom';

import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({
    authenticate,
    setChoiceProducts,
    choiceProducts,
}) => {
  return authenticate ? <ProductDetail setChoiceProducts={setChoiceProducts} choiceProducts={choiceProducts} /> : <Navigate to="/login" />
}

export default PrivateRoute;