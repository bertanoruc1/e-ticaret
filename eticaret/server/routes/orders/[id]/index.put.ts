import fs from 'fs'
import path from 'path'
import orders from "../../../fake_data/orders.json";

export default eventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id'))
    const updateData = await readBody(event)

    const selectedOrder = orders.find((orderData) => orderData.id === id)

    if(!selectedOrder){
        return createError({statusCode:404,message:'Sipariş Bulunamadı.'})
    }    

    const newOrderData = {
        ...selectedOrder,
        ...updateData
    }

    const DATA_ADDR = 'server/fake_data/orders.json'

    const newOrderList = orders.map((orderData) => {
        if(orderData.id === id) {
            return newOrderData
        }

        return orderData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newOrderList))

    return newOrderData
})