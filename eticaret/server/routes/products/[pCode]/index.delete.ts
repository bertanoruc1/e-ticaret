import fs from 'fs'
import products from '../../../fake_data/products.json'

export default eventHandler((event) => {

    const pCode =parseInt(getRouterParam(event, "pCode"))

    const newProductList =products.filter((prodData) => prodData.id !==pCode)

    const DATA_ADDR = 'server/fake_data/products.json'

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newProductList, null, 2))

    return {ok: true}

})