export const addToStorage = (item: any) => {
 const storage: string[] = getFromStorage();
 if (storage && item) {
   storage.push(item);
   localStorage.setItem('cart', JSON.stringify(storage));
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
