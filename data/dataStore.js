const crypto = require('crypto');
const { utils } = require('../util/utils');

exports.DataStore = class DataStore {
    constructor() {
        this.data = new Map();
        this.loadData();
    }

    randomPost = [
        "Hi, I found a key, Kate", 
        "Anyone has a plan for the weekend? Thanks! Boby",
        "I lost my key in the park. If anyone find it, please let me know. Helen",
        "I found a set of keys in the park. Anyone missing please contact. Thanks! Billie",
        "Anyone has any extra ticket for Coldplay concert? Thanks! Sami",
        "I am going to join a BBQ party this evening. Who is isterested to join? Best! Charlie"];

    getRandomPost(){
        return (this.randomPost[Math.floor(Math.random() * 5)]);
    }

    loadData() {
        let index = 0;
        while ( index < 20 ){
            index++;
            this.data.set(crypto.randomUUID(), {
                "post": this.getRandomPost(),
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
