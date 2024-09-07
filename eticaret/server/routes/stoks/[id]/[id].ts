import stoks from "../../../fake_data/stoks.json";

export default eventHandler((event)=> {
    const id =getRouterParam(event , "id")

    const stok =stoks.find((stokData)=> stokData.id ===parseInt(id))

    if (stok){
        return stok
    }
    else{
        return createError({statusCode:404,message:'Stok Bulunamadı?'})
    }
})