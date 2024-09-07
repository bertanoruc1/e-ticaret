import users from '../../../fake_data/users.json'
 
export default eventHandler((event)=>{
    const id = getRouterParam(event, "id")

    const user =users.find((userData)=> userData.id === parseInt(id))

    if (user){
        return user

    }
    else {
       return  createError({statusCode:404,message:'Kullanıcı Bulunamadı?'})
    }
})