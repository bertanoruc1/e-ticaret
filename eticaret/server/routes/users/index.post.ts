import fs from 'fs'

export default eventHandler(async(event) => {
    const data = await readBody(event)

    console.log(data)

    const users = JSON.parse(fs.readFileSync('server/fake_data/users.json', 'utf-8'))

    users.sort(function(a, b){return a.id -b.id});

    const newUserData = {
        id: users[users.length-1].id +1,
        ...data,
        created_at: Date.now()
    }

    const newUserList = [...users, newUserData]



    fs.writeFileSync('server/fake_data/users.json', JSON.stringify(newUserList, null, 2))

    setResponseStatus(event, 201)

    return newUserData
})