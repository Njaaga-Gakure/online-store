import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './contexts/products_context.jsx'
import { FilterProductsProvider } from './contexts/filter_products_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProductsProvider>
        <App />
      </FilterProductsProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
