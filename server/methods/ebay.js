Meteor.methods({
  'getEbay': function getGists(keyWords) {

      console.log(keyWords);

      if (keyWords.length == 0){
        keyWords.push("Furniture");
      }

      console.log(keyWords);

      var ebay = Meteor.npmRequire('ebay-api');
      var params = {
        keywords: keyWords, //["Canon", "Powershot"],

        // add additional fields
        outputSelector: ['AspectHistogram'],

        paginationInput: {
          entriesPerPage: 30
        },

        itemFilter: [
          {name: 'FreeShippingOnly', value: true},
          {name: 'MaxPrice', value: '150'}
        ],
        /*
        domainFilter: [
          {name: 'domainName', value: 'Digital_Cameras'}
        ] */
      };

      var result = Async.runSync(
        function(done) {

          ebay.xmlRequest({
              serviceName: 'Finding',
              opType: 'findItemsByKeywords',
              appId: 'TUBerlin-eb91-4e47-8adb-1c7d444e8e33',      // FILL IN YOUR OWN APP KEY, GET ONE HERE: https://publisher.ebaypartnernetwork.com/PublisherToolsAPI
              params: params,
              parser: ebay.parseResponseJson    // (default)
            },
            // gets all the items together in a merged array


            function itemsCallback(error, itemsResponse) {
              if (error) {
                console.log("No Results");
                done(null, []);
              } else {
                var items = itemsResponse.searchResult.item;
                console.log('Found', items.length, 'items');

                done(null, items);
              }
            }
          );
        }
      );

      return result;
    }
});
