import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filteredProducts: products} = useFilterContext()
  console.log(products);
  return <GridView products={products}>Products list</GridView>
}

export default ProductList
