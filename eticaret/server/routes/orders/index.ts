import orders from '../../fake_data/orders.json'

export default eventHandler ((event)=>{
    console.log("Kaç Adet?", orders.length)
     
    return orders 
});