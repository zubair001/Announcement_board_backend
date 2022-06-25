const { DataStore} = require('../data/dataStore');
const { utils } = require('../util/utils');

exports.Posts = class Posts{
    constructor() {
        this.dataStore = new DataStore();
    }

    create(post) {
        return this.dataStore.storeData(post);
    }

    delete(id) {
        this.dataStore.deleteData(id);
    }

    get() {
        return this.jsonData();
    }

    jsonData() {
        const dataArray= [];
        this.dataStore.data.forEach((value, key)=>{
             const post = Object.create(value);
             dataArray.push({
                 "id" : key,
                 "post" : post.post,
                 "date" : post.date
             });
        });

        return dataArray.sort(utils.dateSorter);
    }

    getPostsBetweenDates(fromDate, toDate) {
        const filterDataArray = [];
        const fromTime = new Date(fromDate).getTime();
        const toTime = new Date(toDate).getTime();
        
        this.dataStore.data.forEach((value, key)=>{
            const post = Object.create(value);
            const postTime = new Date(post.date).getTime();
            if ( fromTime <= postTime && toTime >= postTime ) {
                filterDataArray.push({
                    "id" : key,
                    "post" : post.post,
                    "date" : post.date
                });
            }
       });
       return filterDataArray.sort(utils.dateSorter);
    }
}