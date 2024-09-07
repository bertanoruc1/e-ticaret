import fs from 'fs'

export default eventHandler(async(event)=> {
    const data =await readBody (event)

    const stoks = JSON.parse(fs.readFileSync('server/fake_data/stoks.json','utf-8'))

    stoks.sort(function(a, b){ return a.id -b.id});

    const newStokData ={
        id :stoks[stoks.lenght-1].id +1,
        ...data,
        creted_at: Date.now()
    }

    const newStokList = [...stoks, newStokData]

    fs.writeFileSync('server/fake_data/stoks.json', JSON.stringify(newStokList, null, 2))

    setResponseStatus(event, 201)

    return newStokData
})