Meteor.methods({
    getTransport: function(start, end, date) {


            return HTTP.get("https://api.import.io/store/data/02b306b5-d3bb-450d-971f-4e1dbb63a3e4/_query?" +
              "input/start=" + start +
              "&input/end=" + end +
              "&input/date=" + date +
              "&_user=8ea267f0-db20-416c-9ca3-7cf0a6683055&_apikey=8ea267f0db20416c9ca37cf0a668305541e166546fc642d0280964b9626501b4129226503cc604420f86649767ae67cf10cf3751bcaa594e1afe37f90b2cce308763d760c2e674cd679ca545bc8cad74")
            /*

      return HTTP.get("https://api.import.io/store/data/02b306b5-d3bb-450d-971f-4e1dbb63a3e4/_query?input/start=Berlin&input/end=Dortmund&input/date=22.10.2015&_user=8ea267f0-db20-416c-9ca3-7cf0a6683055&_apikey=8ea267f0db20416c9ca37cf0a668305541e166546fc642d0280964b9626501b4129226503cc604420f86649767ae67cf10cf3751bcaa594e1afe37f90b2cce308763d760c2e674cd679ca545bc8cad74",

        function(error, result){
          if(error){
            console.log("error", error);
            return [];
          }
          if(result){
            var results = result.data.results;
            return results;
          }
        });

        */
    },

    getEbay: function(item, city) {

            return HTTP.get("https://api.import.io/store/data/c696fcaa-bfbf-47b5-8687-42f660c97fe7/_query?input/" +
              "item=" + item +
              "&input/location="+ city +
              "&_user=2ed25222-c31c-42c8-b853-2c15e84ae95b&_apikey=2ed25222c31c42c8b8532c15e84ae95b1606321018eef3ce728d92b47edb83a19ec2b0a118aaaf3f3031b9caca58b847ee4826207b657a53b7cae209479fee9124d923af62941781b97329e4749ab24a")

    },

    getWGGesucht: function(city, minSize, maxRent) {

            return HTTP.get("https://api.import.io/store/data/99aec30f-4127-4c81-8b63-c485fcf9e5d2/_query?input/" +

              "stadtmanuel=" + city +
              "&input/min_groesse=" + minSize +
              "&input/max_miete=" + maxRent +
              "&_user=2ed25222-c31c-42c8-b853-2c15e84ae95b&_apikey=2ed25222c31c42c8b8532c15e84ae95b1606321018eef3ce728d92b47edb83a19ec2b0a118aaaf3f3031b9caca58b847ee4826207b657a53b7cae209479fee9124d923af62941781b97329e4749ab24a")
    }


});
