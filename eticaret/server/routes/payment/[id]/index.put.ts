import fs from 'fs'
import path from 'path'
import payments from "../../../fake_data/payments.json";

export default eventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id'))
    const updateData = await readBody(event)

    const selectedPayment = payments.find((paymentData) => paymentData.id === id)

    if(!selectedPayment){
        return createError({statusCode:404,message:'Ödeme Bilgisi Bulunamadı.'})
    }    

    const newPaymentData = {
        ...selectedPayment,
        ...updateData
    }

    const DATA_ADDR = 'server/fake_data/payments.json'

    const newPaymentList = payments.map((paymentData) => {
        if(paymentData.id === id) {
            return newPaymentData
        }

        return paymentData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newPaymentList))

    return newPaymentData
})