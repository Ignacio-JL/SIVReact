import {createContext} from 'react'
import {useState, useContext} from 'react'


export const CartContext = createContext([]);

export const useCartContext = _ =>{
    return useContext(CartContext);//Retornara CartContext sin tener que importar nuevamente useContext
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(item){
        let indice = cartList.findIndex(p => p.id ===item.id )
        indice > -1 ?
            cartList[indice].quantity += item.quantity 
            : setCartList([...cartList, item]);
    }
    function deleteCart(){
        setCartList([]);
    }
    function removeItem(id){
        setCartList(cartList.filter(p => p.id !== id));
    }
    function totalCart(){
        let total = 0;
        cartList.forEach(element => {
            total += (element.quantity * element.price * element.sizeTotal);
        });
        return total;
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart,
            removeItem,
            totalCart
        }}>
            {children}
        </CartContext.Provider>
    )
}