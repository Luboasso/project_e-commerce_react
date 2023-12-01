import axios from "axios";

const API_URL = "http://localhost:8080/orders";

const createOrder =async(cart)=>{
    const token = JSON.parse(localStorage.getItem("token"))
    const productIds = cart.map(product => product._id)
    const order = await axios.post(API_URL,{productIds},{
        headers:{
            authorization:token
        }
    })
    return order
}

const orderService ={
    createOrder
}

export default orderService