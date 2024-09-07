
import payments from "../../../fake_data/payments.json";

export default eventHandler((event)=>{
    const id = getRouterParam(event,"id")

    const payment =payments.find((paymentData)=> paymentData.id=== parseInt(id))

    if (payment){
        return payment

    }
    else {
       return  createError({statusCode:404,message:'Ödeme Bilgisi Bulunamadı?'})
    }

})