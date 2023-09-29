import AsyncStorage from '@react-native-async-storage/async-storage';




const HOST : string = "https://staging-api.laboga.com/app/v0_1/api/"; 
// const HOST : string = "https://api.laboga.com/app/v0_1/api/"; 
const USERNAME : string = "";
const PASSWORD : string = "";




export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
            if(token){
                return token;
            }
            return null
        } catch(e) {
    }
}


export const getHOST = () => {
    return HOST;
}

export const getHeaders = (url:string) => { 
    let headers = {
        'Content-Type':'application/json',
        'Accept-Language':'en',
        'crossDomain': 'true',
    };
    return headers;
}