import axios from "axios";

class SportActivities
{
    static groupsAll() {
        return axios({
            url: 'http://www.mocky.io/v2/5c8b7087360000f40a8f80ad',
            method: 'GET',
        });
    }

    static groupsGet(id) {
        return axios({
            url: 'http://www.mocky.io/v2/5c8b743a360000e30c8f80cc',
            method: 'GET',
        });
    }

    static eventsAll() {
        return axios({
            url: 'http://www.mocky.io/v2/5c8b72df3600002c198f80bf',
            method: 'GET',
        });
    }
}

export default SportActivities;