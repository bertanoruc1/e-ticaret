
import categories from "../../../fake_data/categories.json";

export default eventHandler((event)=> {
     
    const cno = getRouterParam(event,"cNo")
    console.log(cno)

    console.log(categories.find(cData => cData.cateNo === Number(cno)))

    const category = categories.find(cData => cData.cateNo === Number(cno))

    if(!category)
        return createError({statusCode:404 , message:'Böyle Bir Kategori Bulanmadı'})


        return category
})
