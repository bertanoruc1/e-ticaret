import fs from 'fs'
import stoks from '../../../fake_data/stoks.json'

export default eventHandler((event) =>{

    const id = parseInt(getRouterParam(event, "id"))

    const newStokList =stoks.filter((stokData)=> stokData.id !==id)

    const DATA_ADDR ='server/fake_data/stoks.json'

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newStokList, null, 2))

    return {ok: true}
})