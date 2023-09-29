import axios from "axios";
import { getHOST, getHeaders, getToken } from "./apiConfig";
import { showErrorMessage } from "./alerts";

let headers={};

const axiosInstance = axios.create({
    baseURL: getHOST(),
    headers
});

axiosInstance.interceptors.request.use(
    async (config:any) => {
        const token = await getToken();
        config.headers=getHeaders(config.url);
        config.headers.Token=token || "";
        return config;
    },
    (error) => {
        Promise.reject(error)
    }
);

axiosInstance.interceptors.response.use(
	async (config) => {
		return config
	},
	async (error) => {
		if (error) {
            console.log('error in api ::--', )
            showErrorMessage('Error in api ')
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
