import { authActions } from "../actions/auth.actions"
import { me as meApi } from "../api"

export const me = () => {
  
  meApi().then((u) => authActions.fetch(u));
}