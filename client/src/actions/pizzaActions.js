import axios from "axios";

export const getAllPizzas=()=>dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try{
        const response =axios.get('/api/pizzas/getpizzas')
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCESS',payload:respond.data})
    }catch (error){
        dispatch({type:'GET_PIZZAS_FAILD',payload:error})
    }
}