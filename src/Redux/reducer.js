import axios from "axios";

const initialState = {
   user: {
      username: ""

   },
   // credentials: {
   //    username:"",
   //    password:"",
   //    verPassword:""
   // }
}

const REGISTER_USER = "REGISTER_USER",
            LOGIN_USER = "LOGIN_USER",
            LOGOUT_USER = "LOGOUT_USER",
            GET_CURRENT_USER = "GET_CURRENT_USER";


// export function getUser (userObj) {
//    return {
//       type: GET_USER,
//       payload:userObj
//    }
// }
export function registerUser(email, password){
   let user = axios.post("/auth/register", {email, password})
      .then(({data}) => {
         console.log(data);
         return data
      }).catch(err => console.log(err));
   return {
      type: REGISTER_USER,
      payload: user
   }
}

export function loginUser(email, password){
   // const {email, password} = user;
   let user = axios.post("/auth/login", {email, password})
      .then(res => {
         console.log(res.data);
         return res.data
      }).catch(err => console.log(err));
   console.log(user)
   return {
      type: LOGIN_USER,
      payload: user
   }
};

export function logoutUser(){
 axios.post("/api/auth/logout").then(res => {
    res.sendStatus(200)
   console.log(res.data);
 })
};

export function getCurrentUser(){
   let user = axios.get("/api/auth/user")
      .then(res => {
         console.log(res.data);
         return res.data
      }).catch(err => console.log(err));
   console.log(user)
   return {
      type: GET_CURRENT_USER,
      payload: user
   }
}
// export  function getUserInfo() {
//    let user =  axios.get("http://localhost:4400/api/auth/me")
//    .then (res => { 
//       console.log(res.data);
//       return res.data[0] 
//    });
//    console.log(user)
//    return {
//       type: GET_USER_INFO,
//       payload: user
//    };
// };


export default function reducer (state = initialState, action) {
   const {type, payload} = action;
   switch(type){
      case REGISTER_USER + "_FULFILLED": 
      console.log(payload)
      return {...state, user:payload};

      case LOGIN_USER + "_FULFILLED": 
      return {...state, user:payload};

      case GET_CURRENT_USER + "_FULFILLED": 
      return {...state, user:payload};

    
      // case GET_USER_INFO + "_REJECTED":
      //    console.log("REJECTED ", payload)
      //    return {...state, user: payload};

      // case GET_USER_INFO + "_PENDING":
      //    console.log("PENDING ", payload)
      //    return {...state, user: payload};

      // case GET_USER_INFO + "_FULFILLED":
      //    console.log("FULFILLED ", payload)
      //    return {...state, user: payload};

      default:
         return state;
   };
};
