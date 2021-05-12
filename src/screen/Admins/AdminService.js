import Axios from "axios";

export const getAllUserData = () => Axios.get(`http://103.123.45.74:9419/get/1`);