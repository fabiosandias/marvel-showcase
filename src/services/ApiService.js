import axios from "axios";
import { API } from '../constants/constants';
import md5 from "js-md5";

const timestamp = Number(new Date())
const apiHash = md5.create();
apiHash.update(`${timestamp}${API.PRIVATE_KEY}${API.PUBLIC_KEY}`);

const getAllComics =  () => {
    return axios.get(`${API.URL}${API.METHOD.COMICS}?ts=${timestamp}&apikey=${API.PUBLIC_KEY}&hash=${apiHash.hex()}`)
}

const getAllComicsById =  (id) => {
    return axios.get(`${API.URL}${API.METHOD.COMICS}/${id}?ts=${timestamp}&apikey=${API.PUBLIC_KEY}&hash=${apiHash.hex()}`)
        .then(response => response.data)
}

export { getAllComics, getAllComicsById }