import axios from "axios";

class Grinta
{
    static challengesAll() {
        return axios({
            url: 'http://www.mocky.io/v2/5c8b7087360000f40a8f80ad',
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'Accept': 'application/json'
            },
            resolveWithFullResponse: true,
            json: true,
        });
    }

    static teamsMine() {
        return axios({
            url: 'http://www.mocky.io/v2/5c8b75c8360000e30c8f80da',
            method: 'GET',
        });
    }

    static teamsGet(id) {
        return axios({
            url: 'http://www.mocky.io/v2/5c8b7f03360000cd198f8112',
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'Accept': 'application/json'
            },
            resolveWithFullResponse: true,
            json: true,
        });
    }

}

export default Grinta;