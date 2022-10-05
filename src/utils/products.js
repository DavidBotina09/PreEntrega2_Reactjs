const ProductosMostrar = [
    {id: "1",title: "camisa overside negra",category:"camisas",descripcion: "string",price: 100 ,pictureUrl: "https://imgs.search.brave.com/Ywr7VMbqUu__plJNndGswgehTZ4JQ1MxILxmBV0jYGQ/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vaW5zZXJ0/ZGVzaWduLmVzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/L2ltcHJlc2lvbi1k/aXJlY3RhLTEucG5n/P2ZpdD0xMDI0JTJD/MTAyNCZzc2w9MQ",categoria: "overside"}
    ,{id: "2",title: "pantalon negro bota ancha",category:"pantalones",descripcion: "string",price: 100 ,pictureUrl: "https://imgs.search.brave.com/UhH-x48G6F2PsCXDMVYKjhADXbRuMAhwZRqJYwkpVlI/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMVc3TDBO/RlhYWFhja1hGWFhx/NnhYRlhYWEsvTnVl/dm8tQm9yZGFkby1k/ZS1MYS1NYW5lcmEt/U2thdGVyLUplYW5z/LVBhcmEtSG9tYnJl/LUJhZ2d5LUplYW5z/LVBhcmEtSG9tYnJl/LUhpcC1Ib3AtcGFu/dGFsb25lcy5qcGc",categoria: "botaCampana"}
    ,{id: "3",title: "Air Force One Blancos",category:"zapatos",descripcion: "string",price: 100 ,pictureUrl: "https://imgs.search.brave.com/2fkBXwcjlYQGahpgy0CejvMuxzN9QmV42gX1PE8ewEY/rs:fit:800:566:1/g:ce/aHR0cHM6Ly93d3cu/bWFuZWxzYW5jaGV6/LmZyL3VwbG9hZHMv/bWVkaWEvaW1hZ2Vz/L25pa2UtYWlyLWZv/cmNlLTEtc25vd2Zs/YWtlLWdzLWJsYW5j/by0xLmpwZw",categoria: "deporte"}
] 

export const getProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(ProductosMostrar)
        },2000);
    })
    return promise
}

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const resultado = ProductosMostrar.find((product) => product.id === id)
        setTimeout(() => {
            return resolve(resultado)
        },2000);
    })
    return promise
}

export const getProductByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const result = ProductosMostrar.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve(result)
        },2000);
    })
    return promise
}