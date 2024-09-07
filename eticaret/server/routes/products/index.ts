import products from '../../fake_data/products.json'

export default defineEventHandler(event => {
  //  const productscode = getRouterParam(event, 'productcode')
   
    return products
  });