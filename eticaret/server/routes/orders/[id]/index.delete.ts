import fs from 'fs'
import orders from '../../../fake_data/orders.json'

export default eventHandler((event) => {

    const id =parseInt(getRouterParam(event, "id"))

    const newOrderList =orders.filter((orderData) => orderData.id !==id)

    const DATA_ADDR = 'server/fake_data/orders.json'

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newOrderList, null, 2))

    return {ok: true}

})