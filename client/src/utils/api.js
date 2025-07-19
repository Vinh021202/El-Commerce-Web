import axios  from "axios";
import Cookies from "js-cookie";
import { fromJSON } from "postcss";

const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;

export const postData = async (url , formData) => {
    try {
        const respone = await fetch (apiUrl + url, {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${Cookies.get('accessToken')}`,
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData)
        });
        if(respone.ok){
            const data = await respone.json();
            return data;
        }else{
            const errorData  = await respone.json();
            return errorData;
        } 

    }catch(error) {
        console.error("Error", error);
    }

}

export const fetchDataFromApi = async (url) => {
    try {
        const params= {
            headers: {
                'Authorization' : `Bearer ${Cookies.get('accessToken')}`,
                'Content-Type' : 'application/json',
            },
        };
        const {data} = await axios.get(apiUrl + url, params)
        return data;

    }catch(error) {
        console.log(error);
        return error;
    }

}

export const uploadImage = async (url, updatedData) => {
        const params= {
            headers: {
                'Authorization' : `Bearer ${Cookies.get('accessToken')}`,
                'Content-Type' : 'application/json',
            },
        };
        var respone;
        await axios.put(apiUrl + url, updatedData, params).then((res) => {
            respone=res;
        })
        return respone;


}

export const editData = async (url, updatedData) => {
        const params= {
            headers: {
                'Authorization' : `Bearer ${Cookies.get('accessToken')}`,
                'Content-Type' : 'application/json',
            },
        };
        var respone;
        await axios.put(apiUrl + url, updatedData, params).then((res) => {
            respone=res;
        })
        return respone;


}

export const daleteData = async (url) => {
        const params= {
            headers: {
                'Authorization' : `Bearer ${Cookies.get('accessToken')}`,
                'Content-Type' : 'application/json',
            },
        };
        const {res} = await axios.delete(apiUrl + url,params)
        return res;


}
