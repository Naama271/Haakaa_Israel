import axios from "axios";
let origin;
if (process.env.NODE_ENV === "development") {
	origin = "http://localhost:5000/api/";
}
if (process.env.NODE_ENV === "production") {
	origin = "https://haakaaisreal.herokuapp.com/api/";
}

const api = axios.create({
	baseURL: origin,
});

export default api;