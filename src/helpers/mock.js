const productos =[
    {
        "id": "1",
        "name": "Short Camuflado",
        "material": "Rustico",
        "price": 349,
        "sizeMin": 6,
        "sizeMax": 16,
        "imgUrl": "/assets/ShortCamuf.png",
        "category": "Nene",
        "sizeTotal": 6
    },
    {
        "id": "2",
        "name": "Short Combinado",
        "material": "Rustico",
        "price": 299,
        "sizeMin": 6,
        "sizeMax": 16,
        "imgUrl": "/assets/ShortNiño.png",
        "category": "Nene",
        "sizeTotal": 6
    },
    {
        "id": "3",
        "name": "Remera Estampada",
        "material": "Jersey Estampado",
        "price": 309,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "/assets/Remera2.png",
        "category": "Nene",
        "sizeTotal": 7
    },
    {
        "id": "4",
        "name": "Buzo Niño",
        "material": "Rustico c/Lanilla",
        "price": 529,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "/assets/BuzoNiño.png",
        "category": "Nene",
        "sizeTotal": 7
    },
    {
        "id": "5",
        "name": "Campera Niño",
        "material": "Rustico c/Lanilla",
        "price": 589,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "/assets/CamperaNiño.png",
        "category": "Nene",
        "sizeTotal": 7
    },
    {
        "id": "6",
        "name": "Short Nena",
        "material": "Fibrana Poplin",
        "price": 269,
        "sizeMin": 4,
        "sizeMax": 16,
        "imgUrl": "/assets/ShortNena.png",
        "category": "Nena",
        "sizeTotal": 7
    },
    {
        "id": "7",
        "name": "Pantalon Nena",
        "material": "Fibrana Poplin",
        "price": 449,
        "sizeMin": 6,
        "sizeMax": 16,
        "imgUrl": "/assets/PantNena.png",
        "category": "Nena",
        "sizeTotal": 6
    },
    {
        "id": "8",
        "name": "Chomba Bebe",
        "material": "Jersey Algodon",
        "price": 299,
        "sizeMin": 1,
        "sizeMax": 5,
        "imgUrl": "/assets/ChombaBebe.png",
        "category": "Bebe",
        "sizeTotal": 5
    },
    {
        "id": "9",
        "name": "Short Bebe",
        "material": "Rustico",
        "price": 249,
        "sizeMin": 2,
        "sizeMax": 6,
        "imgUrl": "/assets/ShortNbb.png",
        "category": "Bebe",
        "sizeTotal": 5
    }
];


export const getProductos = new Promise( (resolve, rejected) => {
    let condicion = true;
    if(condicion){
        setTimeout(() =>{
            resolve(productos);
        }, 2000)
    }else{rejected('error')}
});

