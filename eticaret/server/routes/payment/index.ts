import payments from '../../fake_data/payments.json'

export default eventHandler ((event)=>{

    console.log("Kaç Tane",payments.length)

    return payments
});