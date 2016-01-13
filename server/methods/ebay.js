Meteor.methods({
  'getEbay': function getGists(user) {
      var ebay = Meteor.npmRequire('ebay-api');

/*
      var gists = Async.runSync(function(done) {
              github.gists.getFromUser({user: 'arunoda'}, function(err, data) {
                done(null, data);
              });
            });

      return gists.result;

            */


      var params = {
        keywords: ["Canon", "Powershot"],

        // add additional fields
        outputSelector: ['AspectHistogram'],

        paginationInput: {
          entriesPerPage: 10
        },

        itemFilter: [
          {name: 'FreeShippingOnly', value: true},
          {name: 'MaxPrice', value: '150'}
        ],

        domainFilter: [
          {name: 'domainName', value: 'Digital_Cameras'}
        ]
      };

      ebay.xmlRequest({
          serviceName: 'Finding',
          opType: 'findItemsByKeywords',
          appId: 'TUBerlin-eb91-4e47-8adb-1c7d444e8e33',      // FILL IN YOUR OWN APP KEY, GET ONE HERE: https://publisher.ebaypartnernetwork.com/PublisherToolsAPI
          params: params,
          parser: ebay.parseResponseJson    // (default)
        },
        // gets all the items together in a merged array
        function itemsCallback(error, itemsResponse) {
          if (error) throw error;

          var items = itemsResponse.searchResult.item;

          console.log('Found', items.length, 'items');

          for (var i = 0; i < items.length; i++) {
            console.log('- ' + items[i].title);
          }
        }
      );

      return "hallo";
    }
});
