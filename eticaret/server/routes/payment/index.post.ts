import fs from 'fs'

export default eventHandler(async(event) => {
    const data = await readBody(event)

    const payments = JSON.parse(fs.readFileSync('server/fake_data/payments.json', 'utf-8'))

    payments.sort(function(a, b) {return a.id -b.id});


    const newPaymentData = {
        id: payments[payments.length-1].id + 1,
        ...data,
        created_at: Date.now()
    }

    const newPaymentList = [...payments, newPaymentData]



    fs.writeFileSync('server/fake_data/payments.json', JSON.stringify(newPaymentList, null, 2))

    setResponseStatus(event, 201)

    return newPaymentData
})