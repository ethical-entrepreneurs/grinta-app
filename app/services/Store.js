import * as appSettings from "tns-core-modules/application-settings";

class Store
{
    static set(name, object) {
        appSettings.setString(name, JSON.stringify(object));
    }

    static get(name) {
        return JSON.parse(appSettings.getString(name));
    }
}

export default Store;