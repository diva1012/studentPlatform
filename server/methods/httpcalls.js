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
    }
  });