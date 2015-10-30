Template.Car.helpers({

  cars: function() {
    // server async
    var results = {
       "offset":0,
       "results":[
          {
             "start":"Berlin, Deutschland",
             "article_name":"Morgen - 06:00 Uhr",
             "free_slots/_source":"1",
             "pic":"https://d1ovtcjitiy70m.cloudfront.net/vi-1/images/avatar/driver-male-72.png",
             "price/_source":"12 €",
             "free_slots":1.0,
             "price/_currency":"EUR",
             "route":"Berlin → Dortmund",
             "price":12.0,
             "name":"Sebastian S",
             "end":"Dortmund, Deutschland",
             "age":"30"
          },
          {
             "start":"Berlin Hauptbahnhof, Europaplatz, Berlin",
             "article_name":"Morgen - 06:00 Uhr",
             "free_slots/_source":"3",
             "pic":"https://d2kwny77wxvuie.cloudfront.net/user/wb-dIPBfT36yR7yATrMz0Q/thumbnail_72x72.jpeg",
             "price/_source":"25 €",
             "free_slots":3.0,
             "price/_currency":"EUR",
             "route":"Berlin → Dortmund → Gelsenkirchen",
             "car":"LEXUS LS",
             "price":25.0,
             "name":"Robert K",
             "end":"Ankunft: Dortmund (Bitte sprechen Sie die Details mit dem Fahrer/der Fahrerin ab.)",
             "age":"46"
          },
          {
             "start":"Steglitz, Berlin, Deutschland",
             "article_name":"Morgen - 08:00 Uhr",
             "free_slots/_source":"2",
             "pic":"https://d2kwny77wxvuie.cloudfront.net/user/JlKj03GITVK9VkZP4vT6fA/thumbnail_72x72.jpeg",
             "price/_source":"20 €",
             "free_slots":2.0,
             "price/_currency":"EUR",
             "route":"Berlin → Iserlohn",
             "car":"FIAT 500X",
             "price":20.0,
             "name":"Viktor E",
             "end":"Iserlohn, Deutschland",
             "age":"24"
          },
          {
             "start":"Messe Nord / ICC (Witzleben), Berlin",
             "article_name":"Morgen - 09:00 Uhr",
             "free_slots/_source":"3",
             "pic":"https://d1ovtcjitiy70m.cloudfront.net/vi-1/images/avatar/driver-female-72.png",
             "price/_source":"24 €",
             "free_slots":3.0,
             "price/_currency":"EUR",
             "route":"Berlin → Dortmund → Essen",
             "price":24.0,
             "name":"Michaela G",
             "end":"Ankunft: Dortmund Hbf, Dortmund (Bitte sprechen Sie die Details mit dem Fahrer/der Fahrerin ab.)",
             "age":"45"
          },
          {
             "start":"Berlin Alexanderplatz",
             "article_name":"Morgen - 09:00 Uhr",
             "free_slots/_source":"1",
             "pic":"https://d1ovtcjitiy70m.cloudfront.net/vi-1/images/avatar/driver-male-72.png",
             "price/_source":"24 €",
             "free_slots":1.0,
             "price/_currency":"EUR",
             "route":"Berlin → Dortmund → Luxembourg",
             "price":24.0,
             "name":"Gregor K",
             "end":"Ankunft: Dortmund (Bitte sprechen Sie die Details mit dem Fahrer/der Fahrerin ab.)",
             "age":"38"
          },
          {
             "start":"Ostbahnhof, Erich-Steinfurth-Str., Berlin",
             "article_name":"Morgen - 09:30 Uhr",
             "free_slots/_source":"1",
             "pic":"https://d1ovtcjitiy70m.cloudfront.net/vi-1/images/avatar/driver-male-72.png",
             "price/_source":"20 €",
             "free_slots":1.0,
             "price/_currency":"EUR",
             "route":"Berlin → Hamm",
             "car":"HYUNDAI TUCSON",
             "price":20.0,
             "name":"Stefan K",
             "end":"Hamm(Westf), Hamm Hbf.",
             "age":"41"
          },
          {
             "start":"Rathaus Steglitz, Berlin",
             "article_name":"Morgen - 09:30 Uhr",
             "free_slots/_source":"2",
             "pic":"https://d2kwny77wxvuie.cloudfront.net/user/qlgWyuVPQPiZn8QMUehEBw/thumbnail_72x72.jpeg",
             "price/_source":"23 €",
             "free_slots":2.0,
             "price/_currency":"EUR",
             "score":"4.9",
             "route":"Berlin → Dortmund → Witten",
             "car":"HYUNDAI i30",
             "price":23.0,
             "name":"Guido M",
             "end":"Ankunft: Dortmund (Bitte sprechen Sie die Details mit dem Fahrer/der Fahrerin ab.)",
             "age":"45"
          },
          {
             "start":"Berlin Hauptbahnhof, Europaplatz, Berlin",
             "article_name":"Morgen - 09:40 Uhr",
             "pic":"https://d1ovtcjitiy70m.cloudfront.net/vi-1/images/avatar/driver-female-72.png",
             "price/_source":"20 €",
             "free_slots":0,
             "price/_currency":"EUR",
             "score":"5.0",
             "route":"Berlin → Hagen → Köln",
             "price":20.0,
             "name":"Henrike G",
             "end":"Ankunft: Hagen (Bitte sprechen Sie die Details mit dem Fahrer/der Fahrerin ab.)",
             "age":"19"
          },
          {
             "start":"berlin motel one city",
             "article_name":"Morgen - 10:00 Uhr",
             "free_slots/_source":"1",
             "pic":"https://d1ovtcjitiy70m.cloudfront.net/vi-1/images/avatar/driver-male-72.png",
             "price/_source":"24 €",
             "free_slots":1.0,
             "price/_currency":"EUR",
             "route":"Berlin → Dortmund",
             "price":24.0,
             "name":"Philipp P",
             "end":"Westfalenhalle, Dortmund",
             "age":"34"
          },
          {
             "start":"Berlin-Karow, 13125 Berlin, Deutschland",
             "article_name":"Morgen - 10:00 Uhr",
             "free_slots/_source":"3",
             "pic":"https://d2kwny77wxvuie.cloudfront.net/user/M09Oo8IuR4aCeRPnd_jy5w/thumbnail_72x72.jpeg",
             "price/_source":"25 €",
             "free_slots":3.0,
             "price/_currency":"EUR",
             "route":"Berlin → Hattingen",
             "car":"SEAT EXEO",
             "price":25.0,
             "name":"Jan D",
             "end":"Essener Str., 45529 Hattingen, Deutschland",
             "age":"43"
          }
       ],
       "totalResults":246,
       "cookies":[

       ],
       "connectorVersionGuid":"ce155cbe-29bf-4a99-8db6-0792056d9534",
       "connectorGuid":"05b4997a-dd2a-4d51-a3c0-d0a252eadd1f",
       "pageUrl":"https://www.blablacar.de/mitfahren/berlin/dortmund/#?fn=Berlin&fc=52.5200066%7C13.404954&fcc=DE&tn=Dortmund&tc=51.5135872%7C7.4652981&tcc=DE&db=03.11.2015&sort=trip_date&order=asc&limit=10&page=1",
       "outputProperties":[
          {
             "name":"name",
             "type":"STRING"
          },
          {
             "name":"age",
             "type":"STRING"
          },
          {
             "name":"pic",
             "type":"IMAGE"
          },
          {
             "name":"article_name",
             "type":"STRING"
          },
          {
             "name":"route",
             "type":"STRING"
          },
          {
             "name":"score",
             "type":"STRING"
          },
          {
             "name":"price",
             "type":"CURRENCY"
          },
          {
             "name":"free_slots",
             "type":"DOUBLE"
          },
          {
             "name":"start",
             "type":"STRING"
          },
          {
             "name":"end",
             "type":"STRING"
          },
          {
             "name":"car",
             "type":"STRING"
          }
       ]
    }

    return results.results;
  }

})
