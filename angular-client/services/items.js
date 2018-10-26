angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.search = function search(message) {
      return $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCJvLw2sXxAGtzSsyKtfLVBjKFXGVqVKc4',
          type: 'video',
          maxResults: '1',
          q: message,
          part: 'snippet',
        },
      }).then(({ data }) => {
        return data.items[0].id.videoId;
      });
    };
    this.quote = function quote() {
      return $http.get('https://www.boredapi.com/api/activity/', {
        // type: 'text',
        // maxResults: '1',
        // q: 'world',
        // part: 'snippet',
      }).then(({ data }) => {
        return data.activity;
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
    // this.video = '';
    // this.quote = function quote(callback) {
    //   return $http.get('https://www.boredapi.com/api/activity/')
    //     .then((quotes) => {
    //       console.log('1', quotes.data.activity);
    //       this.video = quotes.data.activity;
    //       console.log(this.video, 'video');
    //       callback(quotes.data.activity);
    //     }).then(() => {
    //       console.log(this.video, 'idk');
    //       $http.get('https://www.googleapis.com/youtube/v3/search', {
    //         params: {
    //           key: 'AIzaSyCJvLw2sXxAGtzSsyKtfLVBjKFXGVqVKc4',
    //           type: 'video',
    //           maxResults: '1',
    //           q: this.video,
    //           part: 'snippet',
    //         },
    //       }).then((data) => {
    //         console.log('12', data);
    //         callback(data);
    //       })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  });
