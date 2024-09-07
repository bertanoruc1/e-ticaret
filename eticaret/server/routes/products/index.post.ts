import fs from 'fs'
import products from '../../fake_data/products.json'

export default eventHandler(async(event) => {
    const data = await readBody(event)

    const product = JSON.parse(fs.readFileSync('server/fake_data/products.json', 'utf-8'))

    products.sort(function(a, b){return a.id -b.id})

    const newProductData = {
        id: products[products.length-1].id + 1,
        ...data,
        created_at: Date.now()
    }

    const newproductList = [...products, newProductData]



    fs.writeFileSync('server/fake_data/products.json', JSON.stringify(newproductList, null, 2))

    setResponseStatus(event, 201)

    return newProductData
})