import fetch from 'node-fetch';
// import data from './db.json' assert {type:'json'};

async function fetchData() {
    let response = await fetch('https://my-json-server.typicode.com/jackxn/personAPI/results')
    let data = await response.json()
    console.log(data)
    
    
}


fetchData()