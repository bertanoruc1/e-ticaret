import fs from 'fs'
import addresses from '../../fake_data/addresses.json'

export default eventHandler(async(event) => {
    const data = await readBody(event)

    const users = JSON.parse(fs.readFileSync('server/fake_data/addresses.json', 'utf-8'))

    addresses.sort(function(a, b) {return a.adrid -b.adrid});

    const newAdrData = {
        id: addresses[addresses.length+1].adrid+ 1,
        ...data,
        created_at: Date.now()
    }

    const newAdrList = [ newAdrData]



    fs.writeFileSync('server/fake_data/addresses.json', JSON.stringify(newAdrList, null, 2))

    setResponseStatus(event, 201)

    return newAdrData
})