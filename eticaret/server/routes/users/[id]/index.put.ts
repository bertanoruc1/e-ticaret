import fs from 'fs'
import users from "../../../fake_data/users.json";

export default eventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id'))
    const updateData = await readBody(event)

    const selectedUser = users.find((userData) => userData.id === id)

    if(!selectedUser){
        return createError({statusCode:404, message:'Nöyle Bir Kllanıcı Bulunamadı.'})
    }     

    const newUserData = {
        ...selectedUser,
        ...updateData
    }

    const DATA_ADDR = 'server/fake_data/users.json'

    const newUserList = users.map((userData) => {
        if(userData.id === id) {
            return newUserData
        }

        return userData
    })

    fs.writeFileSync(DATA_ADDR, JSON.stringify(newUserList, null, 2))

    return newUserData
})