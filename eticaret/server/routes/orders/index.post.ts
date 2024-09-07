import fs from 'fs'
import orders from '../../fake_data/orders.json'

export default eventHandler(async(event)=> {
    const data =await readBody (event)

    const orders = JSON.parse(fs.readFileSync('server/fake_data/orders.json','utf-8'))

    orders.sort(function(a, b){return a.id -b.id});


    const newOrderData ={
        id :orders[orders.length-1].id +1,
        ...data,
        creted_at: Date.now()
    }

    const newOrderList = [...orders, newOrderData]

    fs.writeFileSync('server/fake_data/orders.json', JSON.stringify(newOrderList, null, 2))

    setResponseStatus(event, 201)

    return newOrderData
})