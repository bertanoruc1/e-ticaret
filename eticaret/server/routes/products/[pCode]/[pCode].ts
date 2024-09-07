import products from "../../../fake_data/products.json";

export default eventHandler((event)=>{
    /* const pcode = event.context.params.id */

    const pcode = getRouterParam(event, "pCode")
    

    console.log(products.find(pData => pData.productcode ===parseInt( pcode)))

    /* return products.find(pData => pData.productcode === pcode) */

    const product = products.find(pData => pData.productcode ===parseInt( pcode))

    if(product ){
        return product
    }
    else {
        return createError({statusCode:404,message:'Ürün Bulunamadı?'})
    }
})