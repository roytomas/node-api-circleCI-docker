
const passSecret = '1@3$5^7*9';
const apiKey = ':{&^%$(link';

class appconfig {
    static get secretKey() {
        return passSecret;
    }

    static get apiSecretKey() {
        return apiKey;
    }

    static get api() {
        return { 
            host:'http://localhost:4000',
            endpoint:{
                banners:"/banners",
                bannerById:"/banner/",
                addBanner:"/banner/add",
                updateBanner:"/banner/update/",
                deleteBanner:"/banner/delete/"
            }
        }
    }

}

module.exports = appconfig;