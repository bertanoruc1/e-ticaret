import addresses from "../../../fake_data/addresses.json"

export default eventHandler ((event)=> {

    const adr =getRouterParam(event, "adrid")

    console.log (addresses.find (aData=> aData.adrid === parseInt(adr)))

    const address = addresses.find(aData => aData.adrid === parseInt(adr))

    if(address){
        return address
    }

    else{
        return createError({statusCode :404 , message:'Böyle Bir Adress Bulunamadı!'})
    }
})