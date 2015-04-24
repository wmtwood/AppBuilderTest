'use strict';
//create a reference for the data provider to be used throughout the app
(function() {
    app.data.myFriends = new Everlive({
        apiKey: 'GeX0N1wAmfAJ6ayQ',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });
}());