    import fs from 'fs'

export default eventHandler(async(event) =>{
    const data = await readBody(event)

    const categories = JSON.parse(fs.readFileSync('server/fake_data/categories.json','utf-8'))

    //return console.log(typeof categories)


    categories.sort(function(a, b) {return a.cateNo -b.cateNo});


    const newCategoriData = {
        cateNo: categories[categories.length-1].cateNo + 1,
        ...data,
        created_at : Date.now()
    }

    const newCategoriList = [...categories, newCategoriData]

    fs.writeFileSync('server/fake_data/categories.json', JSON.stringify(newCategoriList,null, 2))

    setResponseStatus(event, 201)

    return newCategoriData
})