import stoks from '../../fake_data/stoks.json'

export default eventHandler((event)=>{
    console.log("Kaç Adet Stok",stoks.length)
    
    return stoks
});