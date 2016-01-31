Meteor.methods({
  'getEbay': function getGists(keyWords) {

      var ebay = Meteor.npmRequire('ebay-api');
      var params = {
        keywords: keyWords, //["Canon", "Powershot"],

        // add additional fields
        outputSelector: ['AspectHistogram'],

        paginationInput: {
          entriesPerPage: 30
        },

        itemFilter: [
          {name: "TopRatedSellerOnly", value: true},
          {name: 'AvailableTo', value: "DE"},
          {name: 'globalId', value: "EBAY-DE"},


          //{name: 'FreeShippingOnly', value: true},
          //{name: 'MaxPrice', value: '150'}
        ],

        //'global-id': 'EBAY-DE',
        //"X-EBAY-SOA-GLOBAL-ID": 'EBAY-DE',
        //AvailableTo: "DE",
        //buyerPostalCode: "14033",

        //'global-id': 'EBAY-DE'
        /*
        domainFilter: [
          {name: 'domainName', value: 'Digital_Cameras'}
        ] */
      };

      var result = Async.runSync(
        function(done) {

          ebay.xmlRequest({
            'serviceName': 'Finding',
              opType: 'findItemsByKeywords',
              //'global-id': 'EBAY-DE',
              //"X-EBAY-SOA-GLOBAL-ID": 'EBAY-DE',
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

                if(items){
                  console.log('Found', items.length, 'items');
                } else {
                  console.log("Nothing found")
                }

                done(null, items);
              }
            }
          );
        }
      );

      return result;
    }
});
