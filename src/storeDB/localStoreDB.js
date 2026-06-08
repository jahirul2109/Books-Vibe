const getItem = () => {
    const storedData = localStorage.getItem('readlist');

    if (!storedData) {
        return [];
    }

    return JSON.parse(storedData);
}

const addItem = (id) => {
    const getData = getItem();
    const exist = getData.find(bookId => bookId === id);
    if (!exist || exist === undefined) {
        const remaningId = [...getData, id];
        setId(remaningId)
        // const convertJson = JSON.stringify(remaningId);
        // localStorage.setItem('readlist', convertJson);
    } else {
        console.log("This is already exsit");
    }
}
const removDB = (id)=>{
    const getId = getItem();
    const reamingId = getId.filter(singleId=> singleId !== id);
    setId(reamingId)
}
const setId =(data)=> {
    const set = localStorage.setItem('readlist', JSON.stringify(data))
}
export{getItem , addItem , removDB }