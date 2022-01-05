const productos =[
    {
        "id": 1,
        "name": "Short Camuflado",
        "material": "Rustico",
        "price": 349,
        "sizeMin": 6,
        "sizeMax": 16,
        "imgUrl": "assets/ShortCamuf.png",
        "sizeTotal": 6
    },
    {
        "id": 2,
        "name": "Short Combinado",
        "material": "Rustico",
        "price": 299,
        "sizeMin": 6,
        "sizeMax": 16,
        "imgUrl": "assets/ShortNiño.png",
        "sizeTotal": 6
    },
    {
        "id": 3,
        "name": "Remera Estampada",
        "material": "Jersey Estampado",
        "price": 309,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "assets/Remera2.png",
        "sizeTotal": 7
    },
    {
        "id": 4,
        "name": "Buzo Niño",
        "material": "Rustico c/Lanilla",
        "price": 529,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "assets/BuzoNiño.png",
        "sizeTotal": 7
    },
    {
        "id": 5,
        "name": "Campera Niño",
        "material": "Rustico c/Lanilla",
        "price": 589,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "assets/CamperaNiño.png",
        "sizeTotal": 7
    },
    {
        "id": 6,
        "name": "Short Nena",
        "material": "Fibrana Poplin",
        "price": 269,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "assets/ShortNena.png",
        "sizeTotal": 7
    },
    {
        "id": 7,
        "name": "Short Camuflado",
        "material": "Fibrana Poplin",
        "price": 449,
        "sizeMin": 6,
        "sizeMax": 16,
        "imgUrl": "assets/PantNena.png",
        "sizeTotal": 6
    },
    {
        "id": 8,
        "name": "Chomba Bebe",
        "material": "Jersey Algodon",
        "price": 299,
        "sizeMin": 1,
        "sizeMax": 5,
        "imgUrl": "assets/ChombaBebe.png",
        "sizeTotal": 5
    },
    {
        "id": 9,
        "name": "Short Bebe",
        "material": "Rustico",
        "price": 249,
        "sizeMin": 2,
        "sizeMax": 6,
        "imgUrl": "assets/ShortNbb.png",
        "sizeTotal": 5
    }
];

export const getProductos = new Promise( (resolve, rejected) => {
    let condicion = true;
    if(condicion){
        setTimeout(() =>{
            resolve(productos);
        }, 2000)
    }else{console.log('error de promesa')}
})