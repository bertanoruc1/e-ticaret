import fs from 'fs'
import addresses from '../../../fake_data/addresses.json'


export default eventHandler((event) => {

    const adrid =parseInt(getRouterParam(event, "adrid"))

    const newAdrList =addresses.filter((adrData) => adrData.adrid !==adrid)

    const DATA_ADDR = 'server/fake_data/addresses.json'

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newAdrList, null, 2))

    return {ok: true}

})