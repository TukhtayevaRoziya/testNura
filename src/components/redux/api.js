import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api/',
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export const createAction = (path, actionType, formData) => async (
  dispatch,
) => {
  try {
    const res = await api.post(path, formData)
    dispatch({
      type: actionType,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}
