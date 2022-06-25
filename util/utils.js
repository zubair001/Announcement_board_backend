exports.utils = {

    getRandomDate(start, end, startHour, endHour) {
        var date = new Date(+ start + Math.random() * (end - start));
        var hour = startHour + Math.random() * (endHour - startHour) | 0;
        date.setHours(hour);
        return date;
    },

    dateSorter(post1, post2) {
        return new Date(post2.date).getTime() - new Date(post1.date).getTime();
    }

};
