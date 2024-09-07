import fs from 'fs'
import categories from '../../../fake_data/categories.json'

export default eventHandler((event) => {

    const cno =parseInt(getRouterParam(event, "cNo"))

    const newCategoryList =categories.filter((categoryData) => categoryData.cateNo !==cno)

    const DATA_ADDR = 'server/fake_data/categories.json'

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newCategoryList, null, 2))

    return {ok: true}

})