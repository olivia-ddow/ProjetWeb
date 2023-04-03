function getAllData(){
    return fetch("https://botw-compendium.herokuapp.com/api/v2/all")
    .then(res => res.json())
}

function getOneEntityData(route) {
    return fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${route}`)
    .then(res => res.json())
}


export {getAllData, getOneEntityData}