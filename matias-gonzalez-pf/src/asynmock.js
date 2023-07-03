const misProductos = [
    {
        id: "1",
        nombre: 'VODKA ABSOLUT',
        precio: 5500,
        img: '../src/assets/images/vodka.jpg',
        idCategoria: "1"
    },
    {
        id: "2",
        nombre: 'CHANDON DELICE',
        precio: 2200,
        img: '../src/assets/images/espumantes2.jpg',
        idCategoria: "2"
    },
    {
        id: "3",
        nombre: 'GIN BEEFEATER',
        precio: 5500,
        img: '../src/assets/images/gin.jpg',
        idCategoria: "3"
    },
    {
        id: "4",
        nombre: 'CERVEZAS',
        precio: 5500,
        img: '../src/assets/images/cerveza2.jpg',
        idCategoria: "4"
    },
    {
        id: "5",
        nombre: 'WHISKY',
        precio: 5500,
        img: '../src/assets/images/jack.jpeg',
        idCategoria: "5"
    },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
    
        }, 2000);
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.idCategoria === id)
            resolve(producto)
        }, 2000);
    })
}

export const getProductosPorCategoria = (idCat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(idCat)
            const productosDeLasCategorias = misProductos.filter(prod => prod.idCategoria === idCat);
            console.log(misProductos)
            console.log("------------------")
            console.log(productosDeLasCategorias)
            resolve(productosDeLasCategorias)
            console.log(productosDeLasCategorias)
        }, 1000);
    })
}
