import fs from 'fs'
import users from "../../../fake_data/users.json";

export default eventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id'))

    const newUserList = users.filter((userData) => userData.id !== id)

    const DATA_ADDR = 'server/fake_data/users.json'


    fs.writeFileSync(DATA_ADDR, JSON.stringify(newUserList, null, 2))

    setResponseStatus(event, 200)

    return {
        ok: true
    }
})