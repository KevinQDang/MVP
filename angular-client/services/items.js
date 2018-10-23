angular.module('app')
  .service('itemsService', function ($http) {
    this.search = function (searchQuery) {
      return $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCJvLw2sXxAGtzSsyKtfLVBjKFXGVqVKc4',
          type: 'video',
          maxResults: '1',
          q: searchQuery,
          part: 'snippet',
        },
      }).then((data) => {
        console.log('1', data);
        return data;
      })
        .catch((err) => {
          console.log(err);
        });
    };
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
