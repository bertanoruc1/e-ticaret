import fs from 'fs'
import payments from '../../../fake_data/payments.json'

export default eventHandler((event) => {

    const id =parseInt(getRouterParam(event, "id"))

    const newPaymentList =payments.filter((paymentData) => paymentData.id !==id)

    const DATA_ADDR = 'server/fake_data/payments.json'

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newPaymentList, null, 2))

    return {ok: true}

})