import axios from 'axios';

const Api_url = 'http://localhost/w/api.php';

export const WeatherService = {
    GetByWoeid(woeid) {
        return axios.get(Api_url+'?command=location&woeid='+woeid);
    },
    SearchLocations(keyword) {
        return axios.get(Api_url+'?command=search&keyword='+keyword);
    }
};