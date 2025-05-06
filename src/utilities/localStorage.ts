export const addToStorage = (value: any) => {
 const storage = getFromStorage();
 let newValue;
 if (storage) {
   newValue = [...storage, value];
 } else {
    newValue = value;
 }

 // Store the value in localStorage
 localStorage.setItem('cart', JSON.stringify(newValue));
};

export const getFromStorage = () => {
 const items = localStorage.getItem('cart');
 if (items) {
   return JSON.parse(items)
 } else {
   return null
 };
}
