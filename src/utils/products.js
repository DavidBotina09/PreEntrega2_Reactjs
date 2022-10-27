import { doc, getFirestore, collection, getDocs,getDoc, query, where } from 'firebase/firestore';
export const getProducts = () => {
    const database = getFirestore();
    const colletionReference = collection(database, 'items');
    return getDocs(colletionReference)
        .then((snapshot) => {
          const list = snapshot 
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          return list;
        }) 
        .catch(error => console.warn(error))
}

export const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items',id);
    return getDoc(itemReference)
    .then((snapshot) => {
     if(snapshot.exists()){
        const item = {
            id: snapshot.id,
            ...snapshot.data()
        };
        return item
        }
      })
      .catch(error => console.warn(error))
}

export const getProductByCategory = (categoryId) => {
    const database = getFirestore();
    const colletionReference = collection(database, 'items');
    const colletionQuery = query(colletionReference, where('category','==',categoryId))
    return getDocs(colletionQuery)
        .then((snapshot) => {
          const list = snapshot 
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          return list;
        }) 
        .catch(error => console.warn(error))
}
/*const ProductosMostrar = [
  {title: "pantalon negro bota ancha",category:"pantalones",descripcion: "string",price: 200 ,pictureUrl: "https://imgs.search.brave.com/UhH-x48G6F2PsCXDMVYKjhADXbRuMAhwZRqJYwkpVlI/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMVc3TDBO/RlhYWFhja1hGWFhx/NnhYRlhYWEsvTnVl/dm8tQm9yZGFkby1k/ZS1MYS1NYW5lcmEt/U2thdGVyLUplYW5z/LVBhcmEtSG9tYnJl/LUJhZ2d5LUplYW5z/LVBhcmEtSG9tYnJl/LUhpcC1Ib3AtcGFu/dGFsb25lcy5qcGc",stock: "10"}
  ,{title: "Air Force One Blancos",category:"zapatos",descripcion: "string",price: 500 ,pictureUrl: "https://imgs.search.brave.com/2fkBXwcjlYQGahpgy0CejvMuxzN9QmV42gX1PE8ewEY/rs:fit:800:566:1/g:ce/aHR0cHM6Ly93d3cu/bWFuZWxzYW5jaGV6/LmZyL3VwbG9hZHMv/bWVkaWEvaW1hZ2Vz/L25pa2UtYWlyLWZv/cmNlLTEtc25vd2Zs/YWtlLWdzLWJsYW5j/by0xLmpwZw",stock: "10"}
]

export const createAllProducts = async () => {
  try{
    const database = getFirestore();
    const collectionReference = collection(database, "items");

    for (let i = 0; i < ProductosMostrar.length; i++ ) {
      const snapshot = await addDoc(collectionReference, ProductosMostrar[i]);
    }

  } catch (error){
    console.warn(error);
  }
}*/