
export const addToStorage = (item: any) => {
 const storage = getFromStorage();
 if (storage && item) {
    if (!storage.some(original => original.item.productId === item.item.productId)) {
        storage.push(item);
        localStorage.setItem('cart', JSON.stringify(storage));
    };
 } else if (item) {
    const newStorage = [item];
    localStorage.setItem('cart', JSON.stringify(newStorage));
 }
};

export const getFromStorage = () => {
 const items = localStorage.getItem('cart');
 if (items) {
   return items ? JSON.parse(items) : [];
 } else {
   return null
 };
}

export const removeFromStorage = (id: string) => {
    const storage = getFromStorage();
    const newStorage = storage.filter((item: any) => item.productId !== id);

    localStorage.setItem('cart', JSON.stringify(newStorage));
}
