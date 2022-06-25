const crypto = require('crypto');
const { utils } = require('../util/utils');

exports.DataStore = class DataStore {
    constructor() {
        this.data = new Map();
        this.loadData();
    }

    loadData() {
        let index = 0;
        while ( index < 20 ){
            index++;
            this.data.set(crypto.randomUUID(), {
                "post": "Random announcement generated",
                "date": utils.getRandomDate(new Date(2022, 4, 15), new Date(), 0, 24)
            });
        }
        
    }    

    storeData(postObject) {
        let postId = crypto.randomUUID();
        this.data.set(postId, postObject);
        return postId;
    }

    deleteData(id) {
        this.data.delete(id);
    }
};
