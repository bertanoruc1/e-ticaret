import fs from 'fs'
import path from 'path'
import addresses from "../../../fake_data/addresses.json";

export default eventHandler(async (event) => {
    const adrid= parseInt(getRouterParam(event, 'adrid'))
    const updateData = await readBody(event)

    const selectedAdr = addresses.find((adrData) => adrData.adrid===adrid)

    if(!selectedAdr){
        return createError({statusCode:404,message:'Adres Bulunamadı.'})
    }    

    const newAdrData = {
        ...selectedAdr,
        ...updateData
    }

    const DATA_ADDR = 'server/fake_data/addresses.json'

    const newAdrList = addresses.map((adrData) => {
        if(adrData.adrid) {
            return newAdrData
        }

        return adrData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newAdrList))

    setResponseStatus(event, 204)
    return newAdrData
})