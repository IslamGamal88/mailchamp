import { apiCall } from "../../api";

export const fetchUser = () => async dispatch => {
  const res = await apiCall("get", "/api/current_user");
  dispatch({ type: "FETCH_USER", payload: res });
};
