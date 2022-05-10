import { LOGIN, SETUSER, GETUSER } from "./constants";
import jwt_decode from "jwt-decode";

const initState = {
  userId: "",
  userName: "",
  avatar: "",
  fullName: "",
  firstName: "",
  lastName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      const info = jwt_decode(action.payload);

      console.log(info.id.email, action.payload);
      localStorage.setItem("userid", info.id.userId);
      return {
        ...state,
        userId: info.id.userId,
        firstName: info.id.firstName,
        lastName: info.id.lastName,
        fullName: info.id.lastName + " " + info.id.firstName,
        avatar: info.id.image
      }
    case SETUSER:
      return {
        ...state,
        userId: action.payload.id,
      };
      
  }
}

export { initState };
export default reducer;
