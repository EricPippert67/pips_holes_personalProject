const intitialState ={
    user:{}

}

const GET_USER = 'GET_USER';

export function getUser(userObj){
    return{
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer(state = intitialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {... state, user:payload};
        default:
            return state;    
    }
}