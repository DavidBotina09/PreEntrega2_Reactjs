import { useState } from "react";

const MapComponent = () => {
    const [productos, setProductos] = useState([])

    setTimeout(() => {
        setProductos([
        {
            id: "1"
            ,nombre: "camisa"
            ,descripcion: "string"
            ,categoria: "overside"  
        }
        ,{
            id: "2"
            ,nombre: "pantalon"
            ,descripcion: "string"
            ,categoria: "botaCampana"  
        }
        , {
            id: "3"
            ,nombre: "zapatos"
            ,descripcion: "string"
            ,categoria: "deporte"  
        }])
    }, 2000);


    return (
        <>
        <h3>Productos</h3>
        <ul>
            {productos.map((products) => (
                <li key={products.nombre}>{products.nombre}</li>
                
            ))}
        </ul>
        </>
    )
        
    

}

export default MapComponent;
