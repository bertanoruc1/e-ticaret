import fs from 'fs'
import stoks from "../../../fake_data/stoks.json";

export default eventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id'))
    const updateData = await readBody(event)

    const selectedStok = stoks.find((stokData) => stokData.id === id)

    if(!selectedStok){
        return createError({statusCode:404, message:'Böyle bir stok bulunamadı.'})
    }

    const newStokData = {
        ...selectedStok,
        ...updateData
    }

    const DATA_ADDR = 'server/fake_data/stoks.json'

    const newStokList = stoks.map((stokData) => {
        if(stokData.id === id) {
            return newStokData
        }

        return stokData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newStokList))

    return newStokData
})