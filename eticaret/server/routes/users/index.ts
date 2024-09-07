import users from '../../fake_data/users.json'

export default eventHandler((event) => {
    // console.log("geliyor mu?", users)

    console.log("KAÇ ADET?", users.length)

    return users
  });
  