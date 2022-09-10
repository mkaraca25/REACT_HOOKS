export const reducer=(state,action) =>{
    switch(action.type) {
        case "FETCH_START":
            return {
                ...state,data:"",loading:true,error:""
            };
        case "FETCH_SUCCESS":
            return {
                ...state,data:action.payload,loading:false
            };
        case "FETCH_ERROR":
            return{
                ...state,loading:false,error:action.payload
            };
        default:
            return state;

    }
}