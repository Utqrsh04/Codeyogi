import { User } from "../models/User"
import { USER_FETCH_ONE, USER_FETCH_ONE_COMPLETED, USER_FETCH_ONE_ERROR } from "./action.constants"



export const fetchOneUser = (id: number) => ({ type: USER_FETCH_ONE, payload: id })

export const fetchOneUserCompleted = (user: User) => ({ type: USER_FETCH_ONE_COMPLETED, payload: user })

export const fetchOneUserError = (id: number, msg: string) => ({ type: USER_FETCH_ONE_ERROR, payload: { id, msg }, })

