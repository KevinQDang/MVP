angular.module('app')
  .service('itemsService', function ($http) {
    this.search = function (callback) {
      return $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCJvLw2sXxAGtzSsyKtfLVBjKFXGVqVKc4',
          type: 'video',
          maxResults: '5',
          q: 'hello',
          part: 'snippet',
        },
      }).then((data) => {
        console.log('1', data);
        callback(data);
      })
        .catch((err) => {
          console.log(err);
        });
    };
    this.quote = function (callback) {
      return $http.get('https://www.boredapi.com/api/activity/', {
        // type: 'text',
        // maxResults: '1',
        // q: 'world',
        // part: 'snippet',
      }).then((quotes) => {
        console.log('1', quotes.data);
        callback(quotes.data);
      })
        .catch((err) => {
          console.log(err);
        });
    };
    // this.quote = function (callback) {
    //   return $http.get('/database.js', {
    //     type: 'text',
    //     maxResults: '1',
    //     q: 'world',
    //     part: 'snippet',
    //   }).then((message) => {
    //     console.log(message);
    //     callback(message);
    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // };
    // console.log($http);
    // this.getAll = (callback) => {
    //   $http.get('/items')
    //     .then(({ data }) => {
    //       console.log('1', data);
    //       if (callback) {
    //         callback(data);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  });
