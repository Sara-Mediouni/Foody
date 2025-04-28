import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";


export const StoreContext= createContext(null)

const StoreCntextProvider=(props)=>{
const [cartItems, setcartItems] = useState({});
const url="http://localhost:4000"
const [token, setToken] = useState("");
const [food_list, setFoodList]=useState([]);



const addToCart=async (itemId)=>{
if(!cartItems[itemId]){
    setcartItems((prev)=>({...prev, [itemId]:1}))
}
else{
    setcartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
}if (token){
    await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
}

}

const removeFromCart=async(itemId)=>{
    
        setcartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if (token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
const loadCartData=async(token)=>{
    const response =await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setcartItems(response.data.cartData);


}
const fetchFoodList=async()=>{
    const response=await axios.get(url+"/api/food/getfood");
    setFoodList(response.data.data)
    console.log(response.data.data)
}
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems)
    {   if (cartItems[item]>0){
        let itemInfo=food_list.find((product)=>
        product._id===item
    );
    totalAmount+=itemInfo.price*cartItems[item];
    }
    }
    return totalAmount;
        
}
useEffect(()=>{
    if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));

    }
    async function loadData(){
        await fetchFoodList();
        if (localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }

    }loadData();
},[])

const contextValue={
    food_list,
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
}
return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)

}

export default StoreCntextProvider;