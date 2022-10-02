import fetch from 'node-fetch';

console.log(data)
async function fetchData() {
    let response = await fetch('./db.json')
    // let data = await response.json()
    // console.log(data)
    
}


fetchData()