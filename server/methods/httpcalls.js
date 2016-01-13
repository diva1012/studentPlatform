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


    getEbayKleinAnzeigen: function(item, city) {

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
    },

    getRaitings: function(city, item) {

            var data = {
   "generated":{
      "timestamp":1448998539000,
      "human":"December 1st 2015, 8:35:39pm",
      "by":{
         "guid":"2ed25222-c31c-42c8-b853-2c15e84ae95b",
         "username":"user27537609",
         "email":"info@study-scope.com",
         "roles":[
            "USER"
         ],
         "orgGuid":"00000000-0000-0000-0000-000000000000"
      }
   },
   "columns":[
      {
         "id":"_input",
         "name":"Input",
         "special":true
      },
      {
         "id":"_num",
         "name":"Result Number",
         "special":true
      },
      {
         "id":"_widgetName",
         "name":"Widget",
         "special":true
      },
      {
         "id":"_source",
         "name":"Data Origin",
         "special":true
      },
      {
         "id":"_resultNumber",
         "name":"Result Row",
         "special":true
      },
      {
         "id":"_pageUrl",
         "name":"Source Page URL",
         "special":true
      },
      {
         "id":"pic",
         "name":"Pic",
         "special":false
      },
      {
         "id":"adress",
         "name":"Adress",
         "special":false
      },
      {
         "id":"quorter",
         "name":"Quorter",
         "special":false
      },
      {
         "id":"tel",
         "name":"Tel",
         "special":false
      },
      {
         "id":"link",
         "name":"Link",
         "special":false
      },
      {
         "id":"comment",
         "name":"Comment",
         "special":false
      },
      {
         "id":"categories",
         "name":"Categories",
         "special":false
      },
      {
         "id":"commentar",
         "name":"Commentar",
         "special":false
      },
      {
         "id":"commentar_pic",
         "name":"Commentar pic",
         "special":false
      }
   ],
   "data":[
      {
         "quorter":[
            "St.Pauli"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/r3MMsVBh5K26GpMWiuV1qQ/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=Rw9A_fQgqgG1W6EUMxXlpQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fhesburger-hamburg-3&request_id=57cf9ef7b083f9cb&signature=3132a0a4f75cc7cca8042b91832129477f250dcd7380e551bd1258f1781f19fa&slot=0&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/LpDGABgOTY8CNnNCNJg36Q/90s.jpg"
         ],
         "adress":[
            "Reeperbahn 29 20359 Hamburg"
         ],
         "pic/_alt":[
            "Hesburger"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/LpDGABgOTY8CNnNCNJg36Q/90s.jpg"
         ],
         "commentar":[
            "Ich finde die Hesburger immer wieder lecker. Und auch wenn ich hier nur hingehe wenn ich leiccht angetrunken bin schmeckt es mir doch einfach jedes Mal wieder gut. Ist zwar ein bischen teurer…"
         ],
         "commentar_pic/_alt":[
            "Simone C."
         ],
         "link/_text":[
            "Hesburger"
         ],
         "tel":[
            "040 32862682"
         ],
         "link/_source":[
            "/adredir?ad_business_id=Rw9A_fQgqgG1W6EUMxXlpQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fhesburger-hamburg-3&request_id=57cf9ef7b083f9cb&signature=3132a0a4f75cc7cca8042b91832129477f250dcd7380e551bd1258f1781f19fa&slot=0&click_origin=search_results"
         ],
         "comment":[
            "59 Beiträge"
         ],
         "categories":[
            "Burger"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/r3MMsVBh5K26GpMWiuV1qQ/30s.jpg"
         ],
         "_resultNumber":1,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":1
      },
      {
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/Wb5TvMBnhAUSL12XFXhsww/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=_l1-rOo1wd0-rZ34ODOsdQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fmon-petit-caf%25C3%25A9-stuttgart&request_id=b98a937fa7fd7fbe&signature=b5efbe4ffdfb7fdab24dbc32ff221c588a45d66ad4eea0e3613dd0a2177bf138&slot=0&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/zwemftGIJPZxKyjH7Mb95Q/90s.jpg"
         ],
         "adress":[
            "Küblergasse 3 70372 Stuttgart"
         ],
         "pic/_alt":[
            "Mon Petit Café"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/zwemftGIJPZxKyjH7Mb95Q/90s.jpg"
         ],
         "commentar":[
            "Hübsches kleines Café in der schönen Küblergasse der Cannstatter Altstadt. Hier sitzt man sowohl draußen als auch drinnen stilvoll, entweder vor historischer Altstadtkulisse oder drinnen im…"
         ],
         "commentar_pic/_alt":[
            "Maria P."
         ],
         "link/_text":[
            "Mon Petit Café"
         ],
         "tel":[
            "0711 50569270"
         ],
         "link/_source":[
            "/adredir?ad_business_id=_l1-rOo1wd0-rZ34ODOsdQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fmon-petit-caf%25C3%25A9-stuttgart&request_id=b98a937fa7fd7fbe&signature=b5efbe4ffdfb7fdab24dbc32ff221c588a45d66ad4eea0e3613dd0a2177bf138&slot=0&click_origin=search_results"
         ],
         "comment":[
            "13 Beiträge"
         ],
         "categories":[
            "Café"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/Wb5TvMBnhAUSL12XFXhsww/30s.jpg"
         ],
         "_resultNumber":1,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":27
      },
      {
         "quorter":[
            "Barmbek Nord"
         ],
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/7XYaVgZdmxIAAWrUoRlr-w/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=jW-dX8OZ9K8OuRkarl4erw&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fkomagene-hamburg&request_id=57cf9ef7b083f9cb&signature=9ee631403e46dd8985a60bebefcb73fd99acc7a278b5ba6a913d45f70a4fa584&slot=1&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/FrAt9wcXQP09Yf0XAgamcA/90s.jpg"
         ],
         "adress":[
            "Fuhlsbüttler Str. 176 22307 Hamburg"
         ],
         "pic/_alt":[
            "Komagene"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/FrAt9wcXQP09Yf0XAgamcA/90s.jpg"
         ],
         "commentar":[
            "yeah, guenstig, lecker und sogar vegan / vegetarisch kann man hier original tuerkische çiğ köfte essen. fuer mich als istanbul-liebhaber ein gefundenes fressen, um auch mein kulinarisches…"
         ],
         "commentar_pic/_alt":[
            "Wasabi K."
         ],
         "link/_text":[
            "Komagene"
         ],
         "tel":[
            "040 61188404"
         ],
         "link/_source":[
            "/adredir?ad_business_id=jW-dX8OZ9K8OuRkarl4erw&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fkomagene-hamburg&request_id=57cf9ef7b083f9cb&signature=9ee631403e46dd8985a60bebefcb73fd99acc7a278b5ba6a913d45f70a4fa584&slot=1&click_origin=search_results"
         ],
         "comment":[
            "3 Beiträge"
         ],
         "categories":[
            "Fast Food, Türkisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/7XYaVgZdmxIAAWrUoRlr-w/30s.jpg"
         ],
         "_resultNumber":2,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":2
      },
      {
         "commentar_pic/_source":[
            "//s3-media2.fl.yelpcdn.com/photo/w9To650uoULG3sKtftim7Q/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=5zkzgvfqkTeqADQ7ra7DrQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fgood-morning-saigon-stuttgart&request_id=b98a937fa7fd7fbe&signature=522c21a69721bda6619eead17fa26c8fda6dc6a3a104e4ab1e94049c0137343f&slot=1&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/Tc6f5y5jjgNRhpIzGZRB7w/90s.jpg"
         ],
         "adress":[
            "Neue Brücke 6 70173 Stuttgart"
         ],
         "pic/_alt":[
            "Good Morning Saigon"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/Tc6f5y5jjgNRhpIzGZRB7w/90s.jpg"
         ],
         "commentar":[
            "\"Good Morning Saigon\" ist eine kleine, von außen sehr unscheinbare Eatery, nur einen Block von der Königstraße etwas ruhiger gelegen. Es ist innen sehr ansprechend eingerichtet, mit drei…"
         ],
         "commentar_pic/_alt":[
            "Michael L."
         ],
         "link/_text":[
            "Good Morning Saigon"
         ],
         "tel":[
            "0711 30586978"
         ],
         "link/_source":[
            "/adredir?ad_business_id=5zkzgvfqkTeqADQ7ra7DrQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fgood-morning-saigon-stuttgart&request_id=b98a937fa7fd7fbe&signature=522c21a69721bda6619eead17fa26c8fda6dc6a3a104e4ab1e94049c0137343f&slot=1&click_origin=search_results"
         ],
         "comment":[
            "11 Beiträge"
         ],
         "categories":[
            "Vietnamesisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media2.fl.yelpcdn.com/photo/w9To650uoULG3sKtftim7Q/30s.jpg"
         ],
         "_resultNumber":2,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":28
      },
      {
         "quorter":[
            "Barmbek Süd"
         ],
         "commentar_pic/_source":[
            "//s3-media2.fl.yelpcdn.com/photo/9w9NHpbTKVCHSD6NKdm_WA/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/curry-pirates-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/Oz9LPR31_9aEKpVozKDlZQ/90s.jpg"
         ],
         "adress":[
            "Mozartstr. 23 22083 Hamburg"
         ],
         "pic/_alt":[
            "Curry Pirates"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/Oz9LPR31_9aEKpVozKDlZQ/90s.jpg"
         ],
         "commentar":[
            "wurstkreationen sind der Hammer. Diese Woche gab's rehbratwurst... :) Unumstritten beste Currywurst hamburgs,wenn nicht deutschlands !! Was hier abgeht ist eine andere Liga,zu den üblichen …"
         ],
         "commentar_pic/_alt":[
            "Benjamin O."
         ],
         "link/_text":[
            "Curry Pirates"
         ],
         "tel":[
            "040 28780661"
         ],
         "link/_source":[
            "/biz/curry-pirates-hamburg?search_key=24212"
         ],
         "comment":[
            "128 Beiträge"
         ],
         "categories":[
            "€€ Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media2.fl.yelpcdn.com/photo/9w9NHpbTKVCHSD6NKdm_WA/30s.jpg"
         ],
         "_resultNumber":3,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":3
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/xxl-stuttgart-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/n__fCEqhjwBZ3RECZsfUBw/90s.jpg"
         ],
         "adress":[
            "Steinstr. 9 70173 Stuttgart"
         ],
         "pic/_alt":[
            "XXL Stuttgart"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/n__fCEqhjwBZ3RECZsfUBw/90s.jpg"
         ],
         "commentar":[
            "Unter dem Namen XXL Hamburger haben wir uns was ganz anderes vorgestellt. Zugegebenermaßen sind auch einige Male daran vorbei gelaufen. Ein Mini-Lokal...eher eine Imbißbude…"
         ],
         "link/_text":[
            "XXL Stuttgart"
         ],
         "tel":[
            "0711 91252221"
         ],
         "link/_source":[
            "/biz/xxl-stuttgart-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "21 Beiträge"
         ],
         "categories":[
            "Burger, Imbissbude, Fast Food"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":3,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":29
      },
      {
         "quorter":[
            "St.Pauli"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/photo/m7r-ArfKkquzOi0yRJBl4A/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/kleine-pause-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/rauMBtrxwLvTB_1uKbUIBw/90s.jpg"
         ],
         "adress":[
            "Wohlwillstr. 37 20359 Hamburg"
         ],
         "pic/_alt":[
            "Kleine Pause"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/rauMBtrxwLvTB_1uKbUIBw/90s.jpg"
         ],
         "commentar":[
            "Auf meiner Suche nach der guten Currywurst in Hamburg, führte mich mein Weg auch in die Kleine Pause. Erster Eindruck: Was ist das nun? Ein Imbiss (vorne) oder eine Kneipe mit Dartautomat…"
         ],
         "commentar_pic/_alt":[
            "Nils L."
         ],
         "link/_text":[
            "Kleine Pause"
         ],
         "tel":[
            "040 4301403"
         ],
         "link/_source":[
            "/biz/kleine-pause-hamburg?search_key=24212"
         ],
         "comment":[
            "168 Beiträge"
         ],
         "categories":[
            "€ Fast Food, Currywurst, Burger"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/photo/m7r-ArfKkquzOi0yRJBl4A/30s.jpg"
         ],
         "_resultNumber":4,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":4
      },
      {
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/K-S8BpMEMR4-cSh5y1ZmOw/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/udo-snack-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/A3yLayil6UDqSLPbI2dyOw/90s.jpg"
         ],
         "adress":[
            "Calwer str. 23 70173 Stuttgart"
         ],
         "pic/_alt":[
            "Udo Snack"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/A3yLayil6UDqSLPbI2dyOw/90s.jpg"
         ],
         "commentar":[
            "Das UDO war bereits Kult (bei mir seit 1973..), als die meisten Deutschen Mc Donald`s noch für den schottischen Bruder der Duck-Familie gehalten haben... Der Hamburger ist so, wie man sich…"
         ],
         "link/_text":[
            "Udo Snack"
         ],
         "tel":[
            "0711 2269894"
         ],
         "link/_source":[
            "/biz/udo-snack-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "92 Beiträge"
         ],
         "categories":[
            "€€ Fast Food"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/K-S8BpMEMR4-cSh5y1ZmOw/30s.jpg"
         ],
         "_resultNumber":4,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":30
      },
      {
         "quorter":[
            "Rotherbaum"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/curry-grindel-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/190VD1cEfcgtHzZthf79nA/90s.jpg"
         ],
         "adress":[
            "Rentzelstr. 2 20146 Hamburg"
         ],
         "pic/_alt":[
            "Curry Grindel"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/190VD1cEfcgtHzZthf79nA/90s.jpg"
         ],
         "commentar":[
            "Gute Currywurst, aber geht besser. Besuche: etwa 10 über die Jahre ; Stand : 2/2014 (letztes Mal) Qualität: 4/5 Leckere Currywurst, gut Saucen; Dritten sind ganz gut. Alles jeweils gut…"
         ],
         "commentar_pic/_alt":[
            "Michael B."
         ],
         "link/_text":[
            "Curry Grindel"
         ],
         "tel":[
            "040 41338581"
         ],
         "link/_source":[
            "/biz/curry-grindel-hamburg?search_key=24212"
         ],
         "comment":[
            "130 Beiträge"
         ],
         "categories":[
            "€€ Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":5,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":5
      },
      {
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/2TRgoffS3vHEjDuGTcq2_g/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/the-burger-republic-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/5kjX2eQQhnrApv5UFpFwZA/90s.jpg"
         ],
         "adress":[
            "Marienstr. 22 70178 Stuttgart"
         ],
         "pic/_alt":[
            "The Burger Republic"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/5kjX2eQQhnrApv5UFpFwZA/90s.jpg"
         ],
         "commentar":[
            "As an American in Germany I often found it difficult to find good hamburgers. The Ladies Diner in Esslingen proved to be tasty, but it's far from Stuttgart-Mitte. When The Burger Republic…"
         ],
         "commentar_pic/_alt":[
            "Jeffrey P."
         ],
         "link/_text":[
            "The Burger Republic"
         ],
         "tel":[
            "0711 31538162"
         ],
         "link/_source":[
            "/biz/the-burger-republic-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "19 Beiträge"
         ],
         "categories":[
            "€€ Burger"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/2TRgoffS3vHEjDuGTcq2_g/30s.jpg"
         ],
         "_resultNumber":5,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":31
      },
      {
         "quorter":[
            "Neustadt"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/photo/UdCOR7EkF-vrUNTiBnm90A/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/edel-curry-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/ByEVN9fDyZf_om_hgnQyPA/90s.jpg"
         ],
         "adress":[
            "Große Bleichen 68 20354 Hamburg"
         ],
         "pic/_alt":[
            "Edel Curry"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/ByEVN9fDyZf_om_hgnQyPA/90s.jpg"
         ],
         "commentar":[
            "in Deutschland) vermuten lässt. Die Currywurst! Mitunter ein Streitobjekt zwischen Hamburg und Berlin (wer hatte die erste), zwischen Berlinern (mit oder ohne Darm) und natürlich zwischen…"
         ],
         "commentar_pic/_alt":[
            "Tian S."
         ],
         "link/_text":[
            "Edel Curry"
         ],
         "tel":[
            "040 35716262"
         ],
         "link/_source":[
            "/biz/edel-curry-hamburg?search_key=24212"
         ],
         "comment":[
            "145 Beiträge"
         ],
         "categories":[
            "€€ Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/photo/UdCOR7EkF-vrUNTiBnm90A/30s.jpg"
         ],
         "_resultNumber":6,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":6
      },
      {
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/l3SIDwWVfUoydpqMd1OiVQ/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/udo-snack-stuttgart-2?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/MeMvu2nhr9Y1lWu6Rl_OoA/90s.jpg"
         ],
         "adress":[
            "Schwarenbergstr. 40 70190 Stuttgart"
         ],
         "pic/_alt":[
            "Udo Snack"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/MeMvu2nhr9Y1lWu6Rl_OoA/90s.jpg"
         ],
         "commentar":[
            "Man sollte eigentlich außer bei diesem Udo-Snack garkeine Hamburger essen, so gut sind die. Bei den großen Ketten kann ich jedenfalls keine mehr essen, seit ich hier war. Tip: Udo-Spezial…"
         ],
         "commentar_pic/_alt":[
            "Karl F."
         ],
         "link/_text":[
            "Udo Snack"
         ],
         "tel":[
            "0711 2865658"
         ],
         "link/_source":[
            "/biz/udo-snack-stuttgart-2?osq=Hamburger"
         ],
         "comment":[
            "24 Beiträge"
         ],
         "categories":[
            "€ Bar, Internationales Restaurant, Amerikanisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/l3SIDwWVfUoydpqMd1OiVQ/30s.jpg"
         ],
         "_resultNumber":6,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":32
      },
      {
         "quorter":[
            "St.Pauli"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/ZnJJVjzOLzRiVvSDoSB06A/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/kiez-curry-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/S2JHAdMre-X9N1yttkCtHg/90s.jpg"
         ],
         "adress":[
            "Querstr. 2 20359 Hamburg"
         ],
         "pic/_alt":[
            "Kiez Curry"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/S2JHAdMre-X9N1yttkCtHg/90s.jpg"
         ],
         "commentar":[
            "Currywurst gegessen hat, dann riecht dies jeder denn die Klamotten riechen / stinken auch noch nach Stunden nach Fett. Currywurst war OK, denke aber nicht, dass es die beste aus Hamburg ist.…"
         ],
         "link/_text":[
            "Kiez Curry"
         ],
         "tel":[
            "01523 7820805"
         ],
         "link/_source":[
            "/biz/kiez-curry-hamburg?search_key=24212"
         ],
         "comment":[
            "51 Beiträge"
         ],
         "categories":[
            "€ Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/ZnJJVjzOLzRiVvSDoSB06A/30s.jpg"
         ],
         "_resultNumber":7,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":7
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/m-eatery-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/sKNJsT7bfWIWaZFJAQFTXA/90s.jpg"
         ],
         "adress":[
            "Kronprinzstr. 24 70173 Stuttgart"
         ],
         "pic/_alt":[
            "[m]eatery"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/sKNJsT7bfWIWaZFJAQFTXA/90s.jpg"
         ],
         "commentar":[
            "Allgemein Waren einfach neugierig, ob die Leistung in Stuttgart identisch zu Hamburg ist. Bedienung Bedienung ist unaufdringlich. Berät kompetent. ist verfügbar, wenn benötigt. Das Essen USA…"
         ],
         "link/_text":[
            "[m]eatery"
         ],
         "tel":[
            "0711 87039880"
         ],
         "link/_source":[
            "/biz/m-eatery-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "49 Beiträge"
         ],
         "categories":[
            "€€€ Steakhouse"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":7,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":33
      },
      {
         "quorter":[
            "Altstadt"
         ],
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/VUYgEIPVtfs_ytI46LTr7Q/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/m%C3%B6-grill-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/pihPL4MtM5e7UJLGhtSyKA/90s.jpg"
         ],
         "adress":[
            "Mönckebergstr. 11 20095 Hamburg"
         ],
         "pic/_alt":[
            "Mö-Grill"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/pihPL4MtM5e7UJLGhtSyKA/90s.jpg"
         ],
         "commentar":[
            "Mö-Grill Das Hamburg mit guter Currywurst leider nicht strotzen kann sollte bekannt sein; nach diversen Enttäuschungen lasse ich als gebürtiger Ruhrpott'ler von den meisten Angeboten…"
         ],
         "link/_text":[
            "Mö-Grill"
         ],
         "tel":[
            "040 335529"
         ],
         "link/_source":[
            "/biz/m%C3%B6-grill-hamburg?search_key=24212"
         ],
         "comment":[
            "187 Beiträge"
         ],
         "categories":[
            "€ Imbissbude, Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/VUYgEIPVtfs_ytI46LTr7Q/30s.jpg"
         ],
         "_resultNumber":8,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":8
      },
      {
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/OBw9PRwNsfknJkzGiZn1NQ/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/schr%C3%A4glage-meals-und-more-stuttgart-2?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/IdSkipq15EPgkoHXp80e9A/90s.jpg"
         ],
         "adress":[
            "Wilhelmsplatz 3 70182 Stuttgart"
         ],
         "pic/_alt":[
            "Schräglage Meals&More"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/IdSkipq15EPgkoHXp80e9A/90s.jpg"
         ],
         "commentar":[
            "Super Essen, tolles Ambiente und die Aktionen sind auch immer schön (Mittwochs kann man selbst einen Hamburger zusammenstellen). Preise sind etwas gehoben (dafür 1 Stern Abzug), aber noch…"
         ],
         "commentar_pic/_alt":[
            "Dominic F."
         ],
         "link/_text":[
            "Schräglage Meals&More"
         ],
         "tel":[
            "0711 23849076"
         ],
         "link/_source":[
            "/biz/schr%C3%A4glage-meals-und-more-stuttgart-2?osq=Hamburger"
         ],
         "comment":[
            "22 Beiträge"
         ],
         "categories":[
            "€€ Burger"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/OBw9PRwNsfknJkzGiZn1NQ/30s.jpg"
         ],
         "_resultNumber":8,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":34
      },
      {
         "quorter":[
            "Winterhude"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/u7M2dJ3J7Sjpmcy6jRuq2g/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/der-wurstmann-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/yAyolcRkP7AQEjK3k-cVFg/90s.jpg"
         ],
         "adress":[
            "Hudtwalckerstraße 28 22299 Hamburg"
         ],
         "pic/_alt":[
            "Der Wurstmann"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/yAyolcRkP7AQEjK3k-cVFg/90s.jpg"
         ],
         "commentar":[
            "Das Wichtigste vorneweg das Essen: Die Currywurst ist ok. Nicht Mehr, nicht weniger. Die Bezeichnung als beste Currywurst Hamburgs finde ich dann doch leicht übertrieben. Die Bedienungen…"
         ],
         "link/_text":[
            "Der Wurstmann"
         ],
         "tel":[
            "040 537997741"
         ],
         "link/_source":[
            "/biz/der-wurstmann-hamburg?search_key=24212"
         ],
         "comment":[
            "41 Beiträge"
         ],
         "categories":[
            "Bioladen, Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/u7M2dJ3J7Sjpmcy6jRuq2g/30s.jpg"
         ],
         "_resultNumber":9,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":9
      },
      {
         "link":[
            "http://www.yelp.de/biz/triple-b-beef-burger-brothers-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/qX3cLArO7MFKJCm3Ocegsw/90s.jpg"
         ],
         "link/_text":[
            "Triple B - Beef Burger Brothers"
         ],
         "adress":[
            "Bottwarstr. 1 70435 Stuttgart"
         ],
         "tel":[
            "0711 8701787"
         ],
         "link/_source":[
            "/biz/triple-b-beef-burger-brothers-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "40 Beiträge"
         ],
         "pic/_alt":[
            "Triple B - Beef Burger Brothers"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/qX3cLArO7MFKJCm3Ocegsw/90s.jpg"
         ],
         "categories":[
            "€€ Burger, Vegetarisches Restaurant, Amerikanisches Restaurant"
         ],
         "_resultNumber":9,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":35
      },
      {
         "quorter":[
            "St.Pauli"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/curryculttreff-st-pauli-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/iagbLm2FE8lzW-Jf1H1S6A/90s.jpg"
         ],
         "adress":[
            "Beim Grünen Jäger 11-13 20359 Hamburg"
         ],
         "pic/_alt":[
            "CurryCultTreff St.Pauli"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/iagbLm2FE8lzW-Jf1H1S6A/90s.jpg"
         ],
         "commentar":[
            "Ich kenne das als das \"Schmale Handtuch\". Currywurst, wie sie sein sollte!…"
         ],
         "link/_text":[
            "CurryCultTreff St.Pauli"
         ],
         "tel":[
            "040 89709647"
         ],
         "link/_source":[
            "/biz/curryculttreff-st-pauli-hamburg?search_key=24212"
         ],
         "comment":[
            "31 Beiträge"
         ],
         "categories":[
            "€€ Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":10,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":10
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/photo/PpUuljrOXqM83h8Gv69uhg/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/block-house-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/6TKwmnZMvc13MO_w0Po1ZA/90s.jpg"
         ],
         "adress":[
            "Eberhardstr. 10 70173 Stuttgart"
         ],
         "pic/_alt":[
            "Block House"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/6TKwmnZMvc13MO_w0Po1ZA/90s.jpg"
         ],
         "commentar":[
            "gut wie im Stammland Hamburg. Wenn man zu zweit hingeht, bekommt man immer nach maximal kurzer Wartezeit einen Platz, bei mehreren Personen sollten man wenigstens am Wochenende reservieren,…"
         ],
         "link/_text":[
            "Block House"
         ],
         "tel":[
            "0711 2369420"
         ],
         "link/_source":[
            "/biz/block-house-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "104 Beiträge"
         ],
         "categories":[
            "€€€ Steakhouse"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/photo/PpUuljrOXqM83h8Gv69uhg/30s.jpg"
         ],
         "_resultNumber":10,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":36
      },
      {
         "quorter":[
            "Altstadt"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/curry-queen-deli-hamburg?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/tfsVHJXuE7apACGFXTkwzA/90s.jpg"
         ],
         "adress":[
            "Zippelhaus 2 20457 Hamburg"
         ],
         "pic/_alt":[
            "Curry Queen Deli"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/tfsVHJXuE7apACGFXTkwzA/90s.jpg"
         ],
         "commentar":[
            "Für die Mittagspause super: Leckere Currywurst, sehr gute Pommes, ordentliche Auswahl an Saucen (Schärfegrade 1-7 mit verschiedenen Würzungen von süßlich, über Ingwer, Knobi bis \"mehr als sau…"
         ],
         "commentar_pic/_alt":[
            "Johannes Q."
         ],
         "link/_text":[
            "Curry Queen Deli"
         ],
         "tel":[
            "040 76757626"
         ],
         "link/_source":[
            "/biz/curry-queen-deli-hamburg?search_key=24212"
         ],
         "comment":[
            "36 Beiträge"
         ],
         "categories":[
            "€€ Imbissbude, Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":11,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":11
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/unser-imbi%C3%9F-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/jDBl69ADzkSAFcSyto2P3g/90s.jpg"
         ],
         "adress":[
            "Daimlerstr. 104 70372 Stuttgart"
         ],
         "pic/_alt":[
            "Unser Imbiß"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/jDBl69ADzkSAFcSyto2P3g/90s.jpg"
         ],
         "commentar":[
            "Wecken. Mehr brauchts nicht. Und falls Ihr mal die weltbesten Hamburger oder Käseburger essen wollt, sagts einfach den Leuten hinter dem Tresen, die machen Euch die. Unser Imbiss ist auch…"
         ],
         "link/_text":[
            "Unser Imbiß"
         ],
         "link/_source":[
            "/biz/unser-imbi%C3%9F-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "8 Beiträge"
         ],
         "categories":[
            "€€ Essen & Trinken, Fast Food"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":11,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":37
      },
      {
         "quorter":[
            "Eimsbüttel"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/photo/wg8uQc5sM6asletQBoviYA/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/oster-119-hamburg-2?search_key=24212"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/ANpSBtKCJb8NylOVgWkdsw/90s.jpg"
         ],
         "adress":[
            "Osterstr.119 20259 Hamburg"
         ],
         "pic/_alt":[
            "Oster 119"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/ANpSBtKCJb8NylOVgWkdsw/90s.jpg"
         ],
         "commentar":[
            "Bratfett gestunken hat. Das hat sich nun geändert und war für mich Anlass die Currywurst mal anzutesten. Gar nicht mal schlecht. Nicht so gut wie der Mö-Grill, aber ordentlich. Die Preise…"
         ],
         "link/_text":[
            "Oster 119"
         ],
         "tel":[
            "040 49010"
         ],
         "link/_source":[
            "/biz/oster-119-hamburg-2?search_key=24212"
         ],
         "comment":[
            "20 Beiträge"
         ],
         "categories":[
            "€€€ Currywurst, Imbissbude"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/photo/wg8uQc5sM6asletQBoviYA/30s.jpg"
         ],
         "_resultNumber":12,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":12
      },
      {
         "link":[
            "http://www.yelp.de/biz/hans-im-gl%C3%BCck-stuttgart-2?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/gJZp6zCaH8Ynw9vocD7MvQ/90s.jpg"
         ],
         "link/_text":[
            "Hans Im Glück"
         ],
         "adress":[
            "Tübinger Str. 41-43 70173 Stuttgart"
         ],
         "tel":[
            "04907 1187038617"
         ],
         "link/_source":[
            "/biz/hans-im-gl%C3%BCck-stuttgart-2?osq=Hamburger"
         ],
         "comment":[
            "22 Beiträge"
         ],
         "pic/_alt":[
            "Hans Im Glück"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/gJZp6zCaH8Ynw9vocD7MvQ/90s.jpg"
         ],
         "categories":[
            "€€ Burger, Cocktailbar"
         ],
         "_resultNumber":12,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":38
      },
      {
         "quorter":[
            "Winterhude"
         ],
         "commentar_pic/_source":[
            "//s3-media2.fl.yelpcdn.com/photo/PGAr0xt_g1TiAbD2CYX92A/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=w1UWfeIGNYz8lEu-C4HLNg&placement=below_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fmega-croque-hamburg&request_id=57cf9ef7b083f9cb&signature=588d35cf9b628e7d6a43026816f5f43dbc0a52cea1a9a7ee46cb57403c0fcb2d&slot=0&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/Wu3MC5Emb_ALfZZMZbYASA/90s.jpg"
         ],
         "adress":[
            "Poßmoorweg 11 22301 Hamburg"
         ],
         "pic/_alt":[
            "Mega Croque"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/Wu3MC5Emb_ALfZZMZbYASA/90s.jpg"
         ],
         "commentar":[
            "Auch wenn der Laden ein bisschen schmuddelig und nach 90er-Jahre-schick aussieht, die Croques sind lecker. Die Zutaten sind frisch, die Soßen sind lecker, die Bedienung ist freundlich. Im…"
         ],
         "commentar_pic/_alt":[
            "Frida G."
         ],
         "link/_text":[
            "Mega Croque"
         ],
         "tel":[
            "040 2705640"
         ],
         "link/_source":[
            "/adredir?ad_business_id=w1UWfeIGNYz8lEu-C4HLNg&placement=below_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fmega-croque-hamburg&request_id=57cf9ef7b083f9cb&signature=588d35cf9b628e7d6a43026816f5f43dbc0a52cea1a9a7ee46cb57403c0fcb2d&slot=0&click_origin=search_results"
         ],
         "comment":[
            "60 Beiträge"
         ],
         "categories":[
            "Fast Food, Sandwich"
         ],
         "commentar_pic":[
            "http://s3-media2.fl.yelpcdn.com/photo/PGAr0xt_g1TiAbD2CYX92A/30s.jpg"
         ],
         "_resultNumber":13,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&ns=1",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":13
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/block-house-stuttgart-2?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/9ozr34jI6wtAK1k-er6CJQ/90s.jpg"
         ],
         "adress":[
            "Arnulf-Klett-Platz 3 70173 Stuttgart"
         ],
         "pic/_alt":[
            "Block House"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/9ozr34jI6wtAK1k-er6CJQ/90s.jpg"
         ],
         "commentar":[
            "Als Hamburger geht man ins Block House, wenn man in der Fremde ein anständiges Steak essen will. So auch in Stuttgart und wie erwartet war das Steak saftig, knusprig auf den Punkt gegrillt…"
         ],
         "commentar_pic/_alt":[
            "Wolf L."
         ],
         "link/_text":[
            "Block House"
         ],
         "tel":[
            "0711 291770"
         ],
         "link/_source":[
            "/biz/block-house-stuttgart-2?osq=Hamburger"
         ],
         "comment":[
            "82 Beiträge"
         ],
         "categories":[
            "€€€ Steakhouse"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":13,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":39
      },
      {
         "quorter":[
            "St.Pauli"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/r3MMsVBh5K26GpMWiuV1qQ/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=Rw9A_fQgqgG1W6EUMxXlpQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fhesburger-hamburg-3&request_id=cfdd56d71fd81291&signature=230c0e50fe97c76434e6002e04f374d107342fe8bd7a808e33ab959d65b3575c&slot=0&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/LpDGABgOTY8CNnNCNJg36Q/90s.jpg"
         ],
         "adress":[
            "Reeperbahn 29 20359 Hamburg"
         ],
         "pic/_alt":[
            "Hesburger"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/LpDGABgOTY8CNnNCNJg36Q/90s.jpg"
         ],
         "commentar":[
            "Ich finde die Hesburger immer wieder lecker. Und auch wenn ich hier nur hingehe wenn ich leiccht angetrunken bin schmeckt es mir doch einfach jedes Mal wieder gut. Ist zwar ein bischen teurer…"
         ],
         "commentar_pic/_alt":[
            "Simone C."
         ],
         "link/_text":[
            "Hesburger"
         ],
         "tel":[
            "040 32862682"
         ],
         "link/_source":[
            "/adredir?ad_business_id=Rw9A_fQgqgG1W6EUMxXlpQ&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fhesburger-hamburg-3&request_id=cfdd56d71fd81291&signature=230c0e50fe97c76434e6002e04f374d107342fe8bd7a808e33ab959d65b3575c&slot=0&click_origin=search_results"
         ],
         "comment":[
            "59 Beiträge"
         ],
         "categories":[
            "Burger"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/r3MMsVBh5K26GpMWiuV1qQ/30s.jpg"
         ],
         "_resultNumber":14,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":14
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/gigi-burger-bar-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/doRp56Y8fpp4dIUIdsvvWQ/90s.jpg"
         ],
         "adress":[
            "Theodor-Heuss-Str. 34 70174 Stuttgart"
         ],
         "pic/_alt":[
            "GiGi Burger Bar"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/doRp56Y8fpp4dIUIdsvvWQ/90s.jpg"
         ],
         "commentar":[
            "oberster Stelle ein Currywurst Burger ins Auge. Ok, wo aber sind Cheeseburger & Hamburger? Achja, im Sitzbereich gibt es nur fancy Burger die möchtegern Haute Cuisine sein wollen. Wenn ich…"
         ],
         "commentar_pic/_alt":[
            "Matthias W."
         ],
         "link/_text":[
            "GiGi Burger Bar"
         ],
         "tel":[
            "0711 99787660"
         ],
         "link/_source":[
            "/biz/gigi-burger-bar-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "14 Beiträge"
         ],
         "categories":[
            "€€ Burger"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":14,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":40
      },
      {
         "quorter":[
            "Barmbek Nord"
         ],
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/7XYaVgZdmxIAAWrUoRlr-w/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=jW-dX8OZ9K8OuRkarl4erw&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fkomagene-hamburg&request_id=cfdd56d71fd81291&signature=d2b9d6358579f0627f1d8d65e3d1457a2e766b45693f821507a34ee6291d9896&slot=1&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/FrAt9wcXQP09Yf0XAgamcA/90s.jpg"
         ],
         "adress":[
            "Fuhlsbüttler Str. 176 22307 Hamburg"
         ],
         "pic/_alt":[
            "Komagene"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/FrAt9wcXQP09Yf0XAgamcA/90s.jpg"
         ],
         "commentar":[
            "yeah, guenstig, lecker und sogar vegan / vegetarisch kann man hier original tuerkische çiğ köfte essen. fuer mich als istanbul-liebhaber ein gefundenes fressen, um auch mein kulinarisches…"
         ],
         "commentar_pic/_alt":[
            "Wasabi K."
         ],
         "link/_text":[
            "Komagene"
         ],
         "tel":[
            "040 61188404"
         ],
         "link/_source":[
            "/adredir?ad_business_id=jW-dX8OZ9K8OuRkarl4erw&placement=above_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fkomagene-hamburg&request_id=cfdd56d71fd81291&signature=d2b9d6358579f0627f1d8d65e3d1457a2e766b45693f821507a34ee6291d9896&slot=1&click_origin=search_results"
         ],
         "comment":[
            "3 Beiträge"
         ],
         "categories":[
            "Fast Food, Türkisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/7XYaVgZdmxIAAWrUoRlr-w/30s.jpg"
         ],
         "_resultNumber":15,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":15
      },
      {
         "link":[
            "http://www.yelp.de/biz/running-mhhh-stuttgart-5?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/osEMM9XjFsnwfNGCMz-5dg/90s.jpg"
         ],
         "link/_text":[
            "Running Mhhh"
         ],
         "adress":[
            "Kronprinzstr. 24 70173 Stuttgart"
         ],
         "tel":[
            "0711 95861568"
         ],
         "link/_source":[
            "/biz/running-mhhh-stuttgart-5?osq=Hamburger"
         ],
         "comment":[
            "6 Beiträge"
         ],
         "pic/_alt":[
            "Running Mhhh"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/osEMM9XjFsnwfNGCMz-5dg/90s.jpg"
         ],
         "categories":[
            "€ Fast Food, Deutsches Restaurant, Burger"
         ],
         "_resultNumber":15,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":41
      },
      {
         "quorter":[
            "St.Pauli"
         ],
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/Qwkf-vc3VsUZok1Itqaiqg/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/imbiss-bei-schorsch-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/P6d0GXRr7OUpqYK2XB4xzg/90s.jpg"
         ],
         "adress":[
            "Beim Grünen Jäger 14 20359 Hamburg"
         ],
         "pic/_alt":[
            "Imbiss bei Schorsch"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/P6d0GXRr7OUpqYK2XB4xzg/90s.jpg"
         ],
         "commentar":[
            "Die Currywurst bei Schorsch ist einfach legendär! Currywurst, Schaschlik, Kartoffelsalat, Brot, mehr gibt's hier nicht (schon gar keine Pommes) - dafür ist das alles sehr gut. Natürlich…"
         ],
         "commentar_pic/_alt":[
            "Lars C."
         ],
         "link/_text":[
            "Imbiss bei Schorsch"
         ],
         "tel":[
            "040 43091925"
         ],
         "link/_source":[
            "/biz/imbiss-bei-schorsch-hamburg?search_key=50237"
         ],
         "comment":[
            "73 Beiträge"
         ],
         "categories":[
            "€ Imbissbude"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/Qwkf-vc3VsUZok1Itqaiqg/30s.jpg"
         ],
         "_resultNumber":16,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":16
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/woodys-gastst%C3%A4tte-stuttgart-2?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/ltqFOa8j_oDu3SPz6E9kCw/90s.jpg"
         ],
         "adress":[
            "Rosensteinstr. 22 70191 Stuttgart"
         ],
         "pic/_alt":[
            "Woody's Gaststätte"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/ltqFOa8j_oDu3SPz6E9kCw/90s.jpg"
         ],
         "commentar":[
            "in denen einem das Essen auf dem Teller auch ansprach, aber so hingeklatscht, wie gestern..... Ohne Worte. Mittlerweile waren die Pommes weich und kalt, die Hamburger, mussten wir uns selbst…"
         ],
         "link/_text":[
            "Woody’s Gaststätte"
         ],
         "tel":[
            "0711 2576212"
         ],
         "link/_source":[
            "/biz/woodys-gastst%C3%A4tte-stuttgart-2?osq=Hamburger"
         ],
         "comment":[
            "89 Beiträge"
         ],
         "categories":[
            "€€ Amerikanisches Restaurant, Cocktailbar"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":16,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":42
      },
      {
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/QGio1YWn-hKd24K0rpcYsw/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/m%C3%B6-grill-hamburg-3?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/_tqfRmgLeDojkCKjpvFKTQ/90s.jpg"
         ],
         "adress":[
            "Jungfernstieg 1 20095 Hamburg"
         ],
         "pic/_alt":[
            "Mö-Grill"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/_tqfRmgLeDojkCKjpvFKTQ/90s.jpg"
         ],
         "commentar":[
            "Hin und wieder gönne ich mir hier das Menü für 5,90€, das aus Currywurst, Pommes, Brötchen und Softdrink besteht. Noch nie hatte ich hier etwas zu meckern. Der Service war immer fix…"
         ],
         "commentar_pic/_alt":[
            "Iris E."
         ],
         "link/_text":[
            "Mö-Grill"
         ],
         "link/_source":[
            "/biz/m%C3%B6-grill-hamburg-3?search_key=50237"
         ],
         "comment":[
            "28 Beiträge"
         ],
         "categories":[
            "€ Currywurst, Fast Food"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/QGio1YWn-hKd24K0rpcYsw/30s.jpg"
         ],
         "_resultNumber":17,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":17
      },
      {
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/hQ9PXforSAA971815ATrwA/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/daily-burger-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/dNCxvRDjsRxfJDW3-8vFWA/90s.jpg"
         ],
         "adress":[
            "Robert-Koch-Str. 2 70563 Stuttgart"
         ],
         "pic/_alt":[
            "Daily Burger"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/dNCxvRDjsRxfJDW3-8vFWA/90s.jpg"
         ],
         "commentar":[
            "1.Mai-Feiertag! Schnell \"geyelped\", wo es Burger gibt nach dem anstrengenden, kräftezehrenden Flug von Hamburg nach Stuttgart!!! ZUUUUU- und YELP sagt AUUUUF!!!!!! Bewertung versprach einiges…"
         ],
         "commentar_pic/_alt":[
            "Jazzi J."
         ],
         "link/_text":[
            "Daily Burger"
         ],
         "link/_source":[
            "/biz/daily-burger-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "13 Beiträge"
         ],
         "categories":[
            "€€ Burger"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/hQ9PXforSAA971815ATrwA/30s.jpg"
         ],
         "_resultNumber":17,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":43
      },
      {
         "quorter":[
            "Ottensen"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/4aC48kpaAo_TQ8asakr0EA/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/floppi-imbiss-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/2ub7oz892-dTIIqi1AeJtQ/90s.jpg"
         ],
         "adress":[
            "Keplerstr. 18 22765 Hamburg"
         ],
         "pic/_alt":[
            "Floppi Imbiss"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/2ub7oz892-dTIIqi1AeJtQ/90s.jpg"
         ],
         "commentar":[
            "Schön, dass sie Currywurst hier immer noch genauso schmeckt wie vor dem Inhaberwechsel, ich wohne direkt gegenüber und mag nur hier die Pommes Frites, die Saucen, die Currywurst Das Team…"
         ],
         "commentar_pic/_alt":[
            "Jessica A."
         ],
         "link/_text":[
            "Floppi Imbiss"
         ],
         "tel":[
            "040 65911975"
         ],
         "link/_source":[
            "/biz/floppi-imbiss-hamburg?search_key=50237"
         ],
         "comment":[
            "14 Beiträge"
         ],
         "categories":[
            "€ Imbissbude"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/4aC48kpaAo_TQ8asakr0EA/30s.jpg"
         ],
         "_resultNumber":18,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":18
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/mcdonalds-stuttgart-4?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/4IZc5DXkOzvuXStsLvGjsw/90s.jpg"
         ],
         "adress":[
            "Arnulf-Klett-Platz 2 70173 Stuttgart"
         ],
         "pic/_alt":[
            "McDonald's"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/4IZc5DXkOzvuXStsLvGjsw/90s.jpg"
         ],
         "commentar":[
            "vollbringen, ist schon beachtlich. McDonald's Speisekarte variiert hin und wieder, und so finden sich neben den traditionellen Hamburgern und Pommes Frites auch Salat(e) und O-Saft. (Standort…"
         ],
         "link/_text":[
            "McDonald’s"
         ],
         "tel":[
            "0711 2265811"
         ],
         "link/_source":[
            "/biz/mcdonalds-stuttgart-4?osq=Hamburger"
         ],
         "comment":[
            "33 Beiträge"
         ],
         "categories":[
            "€€ Fast Food, Burger"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":18,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":44
      },
      {
         "quorter":[
            "Ottensen"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/z2kuQHCuHuBC9t_cBzKxXw/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/der-wurstmann-hamburg-3?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/QuDPibGhBngsaY_fy1N3Fg/90s.jpg"
         ],
         "adress":[
            "Bahrenfelderstr. 146 22765 Hamburg"
         ],
         "pic/_alt":[
            "Der Wurstmann"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/QuDPibGhBngsaY_fy1N3Fg/90s.jpg"
         ],
         "commentar":[
            "Hier kann man sich zum Beispiel eine richtig lecker Currywurst kaufen. Viel mehr hab ich hier noch nicht ausprobieren können. Der Preis war in Ordnung und das Personal war freundlich. Da…"
         ],
         "commentar_pic/_alt":[
            "Melanie W."
         ],
         "link/_text":[
            "Der Wurstmann"
         ],
         "tel":[
            "040 537997742"
         ],
         "link/_source":[
            "/biz/der-wurstmann-hamburg-3?search_key=50237"
         ],
         "comment":[
            "6 Beiträge"
         ],
         "categories":[
            "€ Currywurst, Imbissbude"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/z2kuQHCuHuBC9t_cBzKxXw/30s.jpg"
         ],
         "_resultNumber":19,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":19
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/wirtshaus-troll-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/9CQNBNRsQ9J_V105z4ZBTA/90s.jpg"
         ],
         "adress":[
            "Hasenbergstr. 37 70176 Stuttgart"
         ],
         "pic/_alt":[
            "Wirtshaus Troll"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/9CQNBNRsQ9J_V105z4ZBTA/90s.jpg"
         ],
         "commentar":[
            "Köstlichkeiten erwarten. Ist halt eine Kneipe dafür aber eine der besten in Stuttgart. Dart, Flipper, Hamburger, Meter Bier, riiieeesige Hamburger, manchmal Erdnüsse um Mitternacht . Weiter…"
         ],
         "link/_text":[
            "Wirtshaus Troll"
         ],
         "tel":[
            "0711 611761"
         ],
         "link/_source":[
            "/biz/wirtshaus-troll-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "21 Beiträge"
         ],
         "categories":[
            "€€ Deutsches Restaurant, Amerikanisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":19,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":45
      },
      {
         "quorter":[
            "Hoheluft West"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/AtDv8UrNpus00EkU4ePIJw/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/eppendorfer-grill-station-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media4.fl.yelpcdn.com/bphoto/8uCbh274LjzwF3AT-QKaPQ/90s.jpg"
         ],
         "adress":[
            "Eppendorfer Weg 172 20253 Hamburg"
         ],
         "pic/_alt":[
            "Eppendorfer Grill-Station"
         ],
         "pic":[
            "http://s3-media4.fl.yelpcdn.com/bphoto/8uCbh274LjzwF3AT-QKaPQ/90s.jpg"
         ],
         "commentar":[
            "sich manchmal einfach sehnt. Currywurst, halben Hahn, Burger und wechselnde Tagesgerichte. Schön, dass es solche Juwelen hier noch geben kann.…"
         ],
         "commentar_pic/_alt":[
            "Dennis U."
         ],
         "link/_text":[
            "Eppendorfer Grill-Station"
         ],
         "tel":[
            "040 42326809"
         ],
         "link/_source":[
            "/biz/eppendorfer-grill-station-hamburg?search_key=50237"
         ],
         "comment":[
            "69 Beiträge"
         ],
         "categories":[
            "€ Currywurst, Amerikanisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/AtDv8UrNpus00EkU4ePIJw/30s.jpg"
         ],
         "_resultNumber":20,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":20
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/photo/uuSxwtwQGU-ZeFMiIRPhxg/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/restaurant-hacienda-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/UPXRwpjhtLFXfISiJvky1g/90s.jpg"
         ],
         "adress":[
            "Tübinger Str. 8 70178 Stuttgart"
         ],
         "pic/_alt":[
            "Restaurant Hacienda"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/UPXRwpjhtLFXfISiJvky1g/90s.jpg"
         ],
         "commentar":[
            "schwungvoll auf einen stimmungsvollen abend eingestimmt. Die Speisekarte setzt sich hauptsächlich aus mexikanischem Essen und amerikanischem Essen (sprich: Hamburger und Pommes zusammen). Das…"
         ],
         "commentar_pic/_alt":[
            "Falk E."
         ],
         "link/_text":[
            "Restaurant Hacienda"
         ],
         "tel":[
            "0711 295949"
         ],
         "link/_source":[
            "/biz/restaurant-hacienda-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "65 Beiträge"
         ],
         "categories":[
            "€€ Mexikanisches Restaurant, Bar"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/photo/uuSxwtwQGU-ZeFMiIRPhxg/30s.jpg"
         ],
         "_resultNumber":20,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":46
      },
      {
         "quorter":[
            "Altstadt"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/currypapa-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/Fa0dQlEEVZ2cbadxcvGSTA/90s.jpg"
         ],
         "adress":[
            "Mönckebergstr. 20 20095 Hamburg"
         ],
         "pic/_alt":[
            "Currypapa"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/Fa0dQlEEVZ2cbadxcvGSTA/90s.jpg"
         ],
         "commentar":[
            "mich das Wichtigste an der Currywurst, sie Soße. Die Soße war mir zu wenig Curry zu viel Frucht und zu wenig scharf. Sie war lecker ging aber in die Richtung Fruchtketchup und nicht Currysoße…"
         ],
         "link/_text":[
            "Currypapa"
         ],
         "tel":[
            "040 58963345"
         ],
         "link/_source":[
            "/biz/currypapa-hamburg?search_key=50237"
         ],
         "comment":[
            "61 Beiträge"
         ],
         "categories":[
            "€€ Currywurst, Fast Food"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":21,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":21
      },
      {
         "link":[
            "http://www.yelp.de/biz/regenbogen-imbiss-stuttgart?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/K6Lb_VOlvBa0Wu2JWo7J2g/90s.jpg"
         ],
         "link/_text":[
            "Regenbogen Imbiss"
         ],
         "adress":[
            "Filderbahnstr. 47 70567 Stuttgart"
         ],
         "tel":[
            "0711 -711125"
         ],
         "link/_source":[
            "/biz/regenbogen-imbiss-stuttgart?osq=Hamburger"
         ],
         "comment":[
            "13 Beiträge"
         ],
         "pic/_alt":[
            "Regenbogen Imbiss"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/K6Lb_VOlvBa0Wu2JWo7J2g/90s.jpg"
         ],
         "categories":[
            "€€ Currywurst, Burger, Fast Food"
         ],
         "_resultNumber":21,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":47
      },
      {
         "quorter":[
            "Sternschanze"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/2nsiMlMqacuqQWLPw8uwAg/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/schmitt-foxy-food-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/UfyklzQOqd9uSfjW7mUtuQ/90s.jpg"
         ],
         "adress":[
            "Schulterblatt 70 20357 Hamburg"
         ],
         "pic/_alt":[
            "Schmitt Foxy Food"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/UfyklzQOqd9uSfjW7mUtuQ/90s.jpg"
         ],
         "commentar":[
            "Die beste Currywurst der Stadt findet man nicht. Auch nicht die größte. Aber wenn man in der Schanze unterwegs ist und plötzlich die Lust nach Currywurst und Pommes verspürt, gibt…"
         ],
         "commentar_pic/_alt":[
            "Katja M."
         ],
         "link/_text":[
            "Schmitt Foxy Food"
         ],
         "tel":[
            "040 78895330"
         ],
         "link/_source":[
            "/biz/schmitt-foxy-food-hamburg?search_key=50237"
         ],
         "comment":[
            "114 Beiträge"
         ],
         "categories":[
            "€€ Imbissbude"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/2nsiMlMqacuqQWLPw8uwAg/30s.jpg"
         ],
         "_resultNumber":22,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":22
      },
      {
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "link":[
            "http://www.yelp.de/biz/pier-51-stuttgart-2?osq=Hamburger"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/tI-W7DfqMPKaXGhIUxWfqA/90s.jpg"
         ],
         "adress":[
            "Löffelstr. 22 70597 Stuttgart"
         ],
         "pic/_alt":[
            "Pier 51"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/tI-W7DfqMPKaXGhIUxWfqA/90s.jpg"
         ],
         "commentar":[
            "eher durchschnittlich. Das P"
         ],
         "link/_text":[
            "Pier 51"
         ],
         "tel":[
            "0711 9769997"
         ],
         "link/_source":[
            "/biz/pier-51-stuttgart-2?osq=Hamburger"
         ],
         "comment":[
            "77 Beiträge"
         ],
         "categories":[
            "€€€ Cocktailbar, Fischrestaurant, Amerikanisches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_styleguide/0288f46ccbae/assets/img/default_avatars/user_30_square.png"
         ],
         "_resultNumber":22,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Hamburger&find_loc=Stuttgart&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Hamburger",
            "city":"Stuttgart"
         },
         "_num":48
      },
      {
         "quorter":[
            "Dulsberg"
         ],
         "commentar_pic/_source":[
            "//s3-media2.fl.yelpcdn.com/photo/Es9Os5NtUOlo1akSIWHtwg/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/dithmarscher-grill-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/XYbeR1p3fe3oIYhT9gG8mg/90s.jpg"
         ],
         "adress":[
            "Dithmarscher Str. 49 22049 Hamburg"
         ],
         "pic/_alt":[
            "Dithmarscher Grill"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/XYbeR1p3fe3oIYhT9gG8mg/90s.jpg"
         ],
         "commentar":[
            "sahen einfach schon in der Auslage so unglaublich lecker aus, dass ich äußerst skeptisch war, ob das dann noch die geschmacklichen Erwartungen erfüllen kann. Currywurst+Pommes: Geil! Also…"
         ],
         "link/_text":[
            "Dithmarscher Grill"
         ],
         "tel":[
            "040 67108456"
         ],
         "link/_source":[
            "/biz/dithmarscher-grill-hamburg?search_key=50237"
         ],
         "comment":[
            "40 Beiträge"
         ],
         "categories":[
            "€€ Currywurst, Imbissbude"
         ],
         "commentar_pic":[
            "http://s3-media2.fl.yelpcdn.com/photo/Es9Os5NtUOlo1akSIWHtwg/30s.jpg"
         ],
         "_resultNumber":23,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":23
      },
      {
         "quorter":[
            "Barmbek Süd"
         ],
         "commentar_pic/_source":[
            "//s3-media3.fl.yelpcdn.com/photo/3Ruuwo9PkXd1HKW_2dBWEQ/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/dehnhaide-grill-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media3.fl.yelpcdn.com/bphoto/gg1iWTmYb9DdKX6kfIlrZg/90s.jpg"
         ],
         "adress":[
            "Dehnhaide 12 22081 Hamburg"
         ],
         "pic/_alt":[
            "Dehnhaide Grill"
         ],
         "pic":[
            "http://s3-media3.fl.yelpcdn.com/bphoto/gg1iWTmYb9DdKX6kfIlrZg/90s.jpg"
         ],
         "commentar":[
            "hauptsächlich daran, dass man hier viel Futter für wirklich günstige Preise bekommt. Eine Currywurst mit Pommes Frites gibt es hier schon für insgesamt 4,20 EUR, was ich als günstig erachte…"
         ],
         "commentar_pic/_alt":[
            "Frank A."
         ],
         "link/_text":[
            "Dehnhaide Grill"
         ],
         "tel":[
            "040 29820994"
         ],
         "link/_source":[
            "/biz/dehnhaide-grill-hamburg?search_key=50237"
         ],
         "comment":[
            "28 Beiträge"
         ],
         "categories":[
            "€€ Currywurst"
         ],
         "commentar_pic":[
            "http://s3-media3.fl.yelpcdn.com/photo/3Ruuwo9PkXd1HKW_2dBWEQ/30s.jpg"
         ],
         "_resultNumber":24,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":24
      },
      {
         "quorter":[
            "Altstadt"
         ],
         "commentar_pic/_source":[
            "//s3-media4.fl.yelpcdn.com/photo/Dr1vtNdvGRhZC004eaGGAA/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/biz/k%C3%B6rri-hamburg?search_key=50237"
         ],
         "pic/_source":[
            "//s3-media1.fl.yelpcdn.com/bphoto/bxkgCYmi_WZzPgPr5sGBuQ/90s.jpg"
         ],
         "adress":[
            "Springeltwiete 2 20095 Hamburg"
         ],
         "pic/_alt":[
            "Körri"
         ],
         "pic":[
            "http://s3-media1.fl.yelpcdn.com/bphoto/bxkgCYmi_WZzPgPr5sGBuQ/90s.jpg"
         ],
         "commentar":[
            "Yo, heute da gewesen! Und ich muss sagen abgefahren und anders. Die Spezialität \"Körri\" also das Innere einer Currywurst nicht im Darm sondern als Steak gebraten ist schon schräg (habe es nur…"
         ],
         "commentar_pic/_alt":[
            "Hannes M."
         ],
         "link/_text":[
            "Körri"
         ],
         "tel":[
            "040 76755100"
         ],
         "link/_source":[
            "/biz/k%C3%B6rri-hamburg?search_key=50237"
         ],
         "comment":[
            "123 Beiträge"
         ],
         "categories":[
            "€€ Currywurst, Kleine Gerichte, Deutsches Restaurant"
         ],
         "commentar_pic":[
            "http://s3-media4.fl.yelpcdn.com/photo/Dr1vtNdvGRhZC004eaGGAA/30s.jpg"
         ],
         "_resultNumber":25,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":25
      },
      {
         "quorter":[
            "Winterhude"
         ],
         "commentar_pic/_source":[
            "//s3-media1.fl.yelpcdn.com/photo/IdelHhvZFjTY1y66p4U3XQ/30s.jpg"
         ],
         "link":[
            "http://www.yelp.de/adredir?ad_business_id=w1UWfeIGNYz8lEu-C4HLNg&placement=below_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fmega-croque-hamburg&request_id=cfdd56d71fd81291&signature=56af3ef0d621ac0aa0e66e10d2a0fe1c2b25a3b2a81fae76b8a1a30b04be8b62&slot=0&click_origin=search_results"
         ],
         "pic/_source":[
            "//s3-media2.fl.yelpcdn.com/bphoto/Wu3MC5Emb_ALfZZMZbYASA/90s.jpg"
         ],
         "adress":[
            "Poßmoorweg 11 22301 Hamburg"
         ],
         "pic/_alt":[
            "Mega Croque"
         ],
         "pic":[
            "http://s3-media2.fl.yelpcdn.com/bphoto/Wu3MC5Emb_ALfZZMZbYASA/90s.jpg"
         ],
         "commentar":[
            "Ich liebe diese Croques! Einfach sehr frische Zutaten, die besten Croque Soßen in Hamburg und super knuspriges Brot. Ich werde sicherlich bald wieder kommen denn hier wird man satt und hat…"
         ],
         "commentar_pic/_alt":[
            "Manuela B."
         ],
         "link/_text":[
            "Mega Croque"
         ],
         "tel":[
            "040 2705640"
         ],
         "link/_source":[
            "/adredir?ad_business_id=w1UWfeIGNYz8lEu-C4HLNg&placement=below_search&redirect_url=http%3A%2F%2Fwww.yelp.de%2Fbiz%2Fmega-croque-hamburg&request_id=cfdd56d71fd81291&signature=56af3ef0d621ac0aa0e66e10d2a0fe1c2b25a3b2a81fae76b8a1a30b04be8b62&slot=0&click_origin=search_results"
         ],
         "comment":[
            "60 Beiträge"
         ],
         "categories":[
            "Fast Food, Sandwich"
         ],
         "commentar_pic":[
            "http://s3-media1.fl.yelpcdn.com/photo/IdelHhvZFjTY1y66p4U3XQ/30s.jpg"
         ],
         "_resultNumber":26,
         "_widgetName":"yelp2",
         "_source":[
            "269fccbd-3f05-4c21-94ec-b38c51194ed4"
         ],
         "_pageUrl":"http://www.yelp.de/search?find_desc=Currywurst&find_loc=Hambug&start=10",
         "_outputTypes":{
            "pic":"IMAGE",
            "adress":"STRING",
            "quorter":"STRING",
            "tel":"STRING",
            "link":"URL",
            "comment":"STRING",
            "categories":"STRING",
            "commentar":"STRING",
            "commentar_pic":"IMAGE"
         },
         "_input":{
            "item":"Currywurst",
            "city":"Hambug"
         },
         "_num":26
      }
   ]
};

  var foursquare = HTTP.get("https://api.import.io/store/connector/24de617a-d2a0-4b8b-8018-2089b8e688dd/_query?input=item:"+ item +"&input=city:" + city +"&&_apikey=2ed25222c31c42c8b8532c15e84ae95b1606321018eef3ce728d92b47edb83a19ec2b0a118aaaf3f3031b9caca58b847ee4826207b657a53b7cae209479fee9124d923af62941781b97329e4749ab24a");

   // Foursquare hides the city so we have to add it manually
   for (i = 0; i < foursquare.data.results.length; i++) {
    foursquare.data.results[i].address = foursquare.data.results[i].address + ", " + city;
    }

    for (i = 0; i < data.data.length; i++) {
     foursquare.data.results.push(data.data[i]);
     }

    return foursquare;
          /*  return HTTP.get("https://api.import.io/store/data/269fccbd-3f05-4c21-94ec-b38c51194ed4/_query?input/" +
              "item=" + item +
              "&input/city=" + city +
              "&_user=2ed25222-c31c-42c8-b853-2c15e84ae95b&_apikey=2ed25222c31c42c8b8532c15e84ae95b1606321018eef3ce728d92b47edb83a19ec2b0a118aaaf3f3031b9caca58b847ee4826207b657a53b7cae209479fee9124d923af62941781b97329e4749ab24a")
          */
    },

    getBicycles: function(item) {

            return HTTP.get("https://api.import.io/store/connector/625c79cb-2d4a-480c-9ff6-baee76ad0730/_query?input="
              + "type:" + item +
              "&&_apikey=2ed25222c31c42c8b8532c15e84ae95b1606321018eef3ce728d92b47edb83a19ec2b0a118aaaf3f3031b9caca58b847ee4826207b657a53b7cae209479fee9124d923af62941781b97329e4749ab24a")
    }

});
