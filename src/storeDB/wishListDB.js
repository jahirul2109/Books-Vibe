const getItemWish = () => {
    const storedData = localStorage.getItem('wishList');

    if (!storedData) {
        return [];
    }

    return JSON.parse(storedData);
}

const addItemWish = (id) => {
    const getData = getItemWish();
    const exist = getData.find(bookId => bookId === id);
    if (!exist || exist === undefined) {
        const remaningId = [...getData, id];
        setId(remaningId)
    } else {
        console.log("This is already exsit");
    }
}
const removDBWish = (id)=>{
    const getId = getItemWish();
    const reamingId = getId.filter(singleId=> singleId !== id);
    setId(reamingId)
}
const setId =(data)=> {
    const set = localStorage.setItem('wishList', JSON.stringify(data))
}
export{getItemWish  , addItemWish , removDBWish }