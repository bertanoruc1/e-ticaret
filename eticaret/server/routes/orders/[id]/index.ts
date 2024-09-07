import orders from '../../../fake_data/orders.json'

export default eventHandler((event)=>{
    const id = getRouterParam(event,"id")

    const order =orders.find ((orderData)=> orderData.id ===parseInt(id))

    if(order){
        return order
    }
    else{
        return createError({statusCode:404,message:'Sipariş Bulunamadı?'})
    }
})