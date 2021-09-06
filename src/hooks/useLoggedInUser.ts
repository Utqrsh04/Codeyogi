import { useSelector } from "react-redux";
import { loggedInUserSelector } from "../selectors/user.selectors";

export const useMe = () => useSelector(loggedInUserSelector);