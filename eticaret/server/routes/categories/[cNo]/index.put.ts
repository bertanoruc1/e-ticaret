import fs from 'fs'
import categories from '../../../fake_data/categories.json'

export default eventHandler(async (event) => {
    const cno = parseInt(getRouterParam(event,'cNo'))
    const updateData = await readBody(event)

    const selectedCategory = categories.find((categoryData)=> categoryData.cateNo === cno)

    if(!selectedCategory){
        return createError({statusCode:404,message:'Kategori Bulunamadı.'})
    }    

    const newCategoriData ={
        ...selectedCategory,
        ...updateData
    }

    const DATA_ADDR ='server/fake_data/categories.json'

    const newCategoryList = categories.map((categoryData)=>{
        if(categoryData.cateNo === cno){
            return newCategoriData
        }
            return categoryData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newCategoryList, null, 2))

    return newCategoriData
})