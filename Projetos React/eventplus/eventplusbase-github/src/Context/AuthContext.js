import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContext = createContext({})

export const userDecodeToken = token => {
    const decoded = jwtDecode(token)//aqui retorna o payload

    return {
        role: decoded.role,
        name: decoded.name,
        userId: decoded.jti,
        token: token
    }
}