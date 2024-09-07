import fs from 'fs'
import products from "../../../fake_data/products.json";

export default eventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id'))
    const updateData = await readBody(event)

    const selectedProd = products.find((prodData) => selectedProd.id === id)

    if(!selectedProd){
        return createError({statusCode:404,message:'Ürün  Bulunamadı.'})
    } 

    const newProdData = {
        ...selectedProd,
        ...updateData
    }

    const DATA_ADDR = 'server/fake_data/products.json'

    const newProdList = products.map((prodData) => {
        if(prodData.id === id) {
            return newProdData
        }
        return prodData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newProdList))

    return newProdData
})