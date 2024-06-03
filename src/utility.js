import {createContext} from "react";

const baseUrl="http://localhost:8000/"
const TokenContext=createContext(undefined)
const RefreshListContext=createContext(undefined)
export {baseUrl,TokenContext,RefreshListContext}