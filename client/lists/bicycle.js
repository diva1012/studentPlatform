Template.Bicycle.helpers({

  bicycles: function() {
    // server async
    var results = {
       "offset":0,
       "results":[
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/6/9/100896_00_c.jpg",
                "1x":"i/p/6/9/100896_00_b.jpg"
             },
             "price":999.0,
             "name":"Scott SPEEDSTER 10 Ultegra Rennrad 2015",
             "pic/_source":"i/p/6/9/100896_00_b.jpg",
             "description":"Außergewöhnliche Performance! Der leichte und aerodynamisch verbesserte Alu-Rahmen kommt mit Shimano Ultegra Komponenten und solidem Laufradsatz.",
             "pic/_alt":"Produktbild von Scott SPEEDSTER 10 Ultegra Rennrad 2015",
             "pic":"http://www.bike24.de/i/p/6/9/100896_00_b.jpg",
             "price/_source":"999,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/6/3/138436_00_c.jpg",
                "1x":"i/p/6/3/138436_00_b.jpg"
             },
             "price":2399.0,
             "name":"FOCUS CAYO Ultegra Rennrad 2016 - carbon/white",
             "pic/_source":"i/p/6/3/138436_00_b.jpg",
             "description":"Performance Carbon Rennrad mit Shimano Ultegra Ausstattung, Concept Anbauteilen und Fulcrum Laufradsatz.",
             "pic/_alt":"Produktbild von FOCUS CAYO Ultegra Rennrad 2016 - carbon/white",
             "pic":"http://www.bike24.de/i/p/6/3/138436_00_b.jpg",
             "price/_source":"2.399,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/8/7/100878_00_c.jpg",
                "1x":"i/p/8/7/100878_00_b.jpg"
             },
             "price":1899.0,
             "name":"Scott ADDICT 30 105 Carbon Rennrad 2015",
             "pic/_source":"i/p/8/7/100878_00_b.jpg",
             "description":"Absolutes Leichtgewicht! Dieser voll wettkampftaugliche HMF-Rahmen kommt mit 105 11-fach Gruppe und Shimano WH RS11 Laufradsatz.",
             "pic/_alt":"Produktbild von Scott ADDICT 30 105 Carbon Rennrad 2015",
             "pic":"http://www.bike24.de/i/p/8/7/100878_00_b.jpg",
             "price/_source":"1.899,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/9/6/146569_00_c.jpg",
                "1x":"i/p/9/6/146569_00_b.jpg"
             },
             "price":5099.0,
             "name":"Simplon PAVO GRANFONDO Dura Ace Rennrad 2016",
             "pic/_source":"i/p/9/6/146569_00_b.jpg",
             "description":"Ausdauerathlet! Leichter, bequemer Carbon-Renner mit Dura Ace Gruppe und Mavic KSYRIUM ELITE Laufrädern.",
             "pic/_alt":"Produktbild von Simplon PAVO GRANFONDO Dura Ace Rennrad 2016",
             "pic":"http://www.bike24.de/i/p/9/6/146569_00_b.jpg",
             "price/_source":"5.099,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/5/1/146415_00_c.jpg",
                "1x":"i/p/5/1/146415_00_b.jpg"
             },
             "price":6949.0,
             "name":"Simplon NEXIO Dura Ace Di2 Rennrad 2016",
             "pic/_source":"i/p/5/1/146415_00_b.jpg",
             "description":"Profimaschine! UCI-konformes Carbon-Aero-Rennrad mit Dura Ace Di2 Gruppe und Mavic Ksyrium Elite Laufrädern.RoadBiKE 3/13 Urteil: Überragend! (Rahmen-Gabel-Set), Tour 02/13: Note: 1,9",
             "pic/_alt":"Produktbild von Simplon NEXIO Dura Ace Di2 Rennrad 2016",
             "pic":"http://www.bike24.de/i/p/5/1/146415_00_b.jpg",
             "price/_source":"6.949,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/2/5/128052_00_c.jpg",
                "1x":"i/p/2/5/128052_00_b.jpg"
             },
             "price":3999.0,
             "name":"Cervélo R3 Ultegra Rennrad 2016 - black/white",
             "pic/_source":"i/p/2/5/128052_00_b.jpg",
             "description":"Ultraleichtes, komfortables Rennrad! Mit Shimano Ultegra Kompakt-Gruppe, Mavic Laufradsatz und Rotor Kurbel.",
             "pic/_alt":"Produktbild von Cervélo R3 Ultegra Rennrad 2016 - black/white",
             "pic":"http://www.bike24.de/i/p/2/5/128052_00_b.jpg",
             "price/_source":"3.999,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/3/3/67933_00_c.jpg",
                "1x":"i/p/3/3/67933_00_b.jpg"
             },
             "price":1699.0,
             "name":"Look 566 Ultegra Carbon Rennrad 2014 - weiß",
             "pic/_source":"i/p/3/3/67933_00_b.jpg",
             "description":"Komfort und Effizienz! Vielseitiger Carbonracer mit Shimano Ultegra 11-fach Schaltgruppe, Ritchey Pro Teilen und Mavic Aksium Laufradsatz.",
             "pic/_alt":"Produktbild von Look 566 Ultegra Carbon Rennrad 2014 - weiß",
             "pic":"http://www.bike24.de/i/p/3/3/67933_00_b.jpg",
             "price/_source":"1.699,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/7/6/40967_00_c.jpg",
                "1x":"i/p/7/6/40967_00_b.jpg"
             },
             "price":1799.0,
             "name":"Scott FOIL 40 105 Carbon Rennrad 2013",
             "pic/_source":"i/p/7/6/40967_00_b.jpg",
             "description":"Scott Innovation! Aerodynamischer F01-HMF-Carbonrahmen, funktionale Shimano 105 Gruppe und Shimano WH R501 Laufradsatz.",
             "pic/_alt":"Produktbild von Scott FOIL 40 105 Carbon Rennrad 2013",
             "pic":"http://www.bike24.de/i/p/7/6/40967_00_b.jpg",
             "price/_source":"1.799,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/5/5/100855_00_c.jpg",
                "1x":"i/p/5/5/100855_00_b.jpg"
             },
             "price":2549.0,
             "name":"Scott FOIL 10 Ultegra Carbon Rennrad 2015",
             "pic/_source":"i/p/5/5/100855_00_b.jpg",
             "description":"Scott Innovation! Aerodynamischer F01-HMF-Carbonrahmen, High-End Ultegra 11-fach Gruppe und Syncros RR 2.0 Laufradsatz.",
             "pic/_alt":"Produktbild von Scott FOIL 10 Ultegra Carbon Rennrad 2015",
             "pic":"http://www.bike24.de/i/p/5/5/100855_00_b.jpg",
             "price/_source":"2.549,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/6/5/100856_00_c.jpg",
                "1x":"i/p/6/5/100856_00_b.jpg"
             },
             "price":2449.0,
             "name":"Scott ADDICT 20 Ultegra Carbon Rennrad 2015",
             "pic/_source":"i/p/6/5/100856_00_b.jpg",
             "description":"Absolutes Leichtgewicht! Dieser voll wettkampftaugliche HMF-Rahmen kommt mit High-End Ultegra 11-fach Gruppe und Syncros RP 2.0 Laufradsatz.",
             "pic/_alt":"Produktbild von Scott ADDICT 20 Ultegra Carbon Rennrad 2015",
             "pic":"http://www.bike24.de/i/p/6/5/100856_00_b.jpg",
             "price/_source":"2.449,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/8/1/140418_00_c.jpg",
                "1x":"i/p/8/1/140418_00_b.jpg"
             },
             "price":4999.0,
             "name":"Cannondale CAAD12 BLACK INC. Rennrad 2016",
             "pic/_source":"i/p/8/1/140418_00_b.jpg",
             "description":"Feinste Alu-Rennmaschine! Hochwertig ausgestattet mit Shimano Dura Ace Komponenten, Hi-Mod Gabel, Mavic Ksyrium Pro Laufradsatz und HollowGram SiSL2 Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 BLACK INC. Rennrad 2016",
             "pic":"http://www.bike24.de/i/p/8/1/140418_00_b.jpg",
             "price/_source":"4.999,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/0/6/140360_00_c.jpg",
                "1x":"i/p/0/6/140360_00_b.jpg"
             },
             "price":2299.0,
             "name":"Cannondale CAAD12 DISC Ultegra Rennrad 2016 - PRM",
             "pic/_source":"i/p/0/6/140360_00_b.jpg",
             "description":"Die feinste Alu-Rennmaschine mit Scheibenbremsen! Hochwertig ausgestattet mit Shimano Ultegra Komponenten, Mavic Aksium Disc Laufradsatz und HollowGram Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 DISC Ultegra Rennrad 2016 - PRM",
             "pic":"http://www.bike24.de/i/p/0/6/140360_00_b.jpg",
             "price/_source":"2.299,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/2/1/140412_00_c.jpg",
                "1x":"i/p/2/1/140412_00_b.jpg"
             },
             "price":1699.0,
             "name":"Cannondale CAAD12 DISC 105 Rennrad 2016 - BLU",
             "pic/_source":"i/p/2/1/140412_00_b.jpg",
             "description":"Die feinste Alu-Rennmaschine mit Scheibenbremsen! Ausgestattet mit Shimano 105 Komponenten, Maddux Disc Laufradsatz und Cannondale Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 DISC 105 Rennrad 2016 - BLU",
             "pic":"http://www.bike24.de/i/p/2/1/140412_00_b.jpg",
             "price/_source":"1.699,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/6/2/140426_00_c.jpg",
                "1x":"i/p/6/2/140426_00_b.jpg"
             },
             "price":1999.0,
             "name":"Cannondale CAAD12 Ultegra Rennrad 2016 - BLA",
             "pic/_source":"i/p/6/2/140426_00_b.jpg",
             "description":"Feinste Alu-Rennmaschine! Hochwertig ausgestattet mit Shimano Ultegra Komponenten, Mavic Aksium Elite Laufradsatz und HollowGram Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 Ultegra Rennrad 2016 - BLA",
             "pic":"http://www.bike24.de/i/p/6/2/140426_00_b.jpg",
             "price/_source":"1.999,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/2/3/140432_00_c.jpg",
                "1x":"i/p/2/3/140432_00_b.jpg"
             },
             "price":1999.0,
             "name":"Cannondale CAAD12 Ultegra Rennrad 2016 - RED",
             "pic/_source":"i/p/2/3/140432_00_b.jpg",
             "description":"Feinste Alu-Rennmaschine! Hochwertig ausgestattet mit Shimano Ultegra Komponenten, Mavic Aksium Elite Laufradsatz und HollowGram Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 Ultegra Rennrad 2016 - RED",
             "pic":"http://www.bike24.de/i/p/2/3/140432_00_b.jpg",
             "price/_source":"1.999,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/7/4/140447_00_c.jpg",
                "1x":"i/p/7/4/140447_00_b.jpg"
             },
             "price":1499.0,
             "name":"Cannondale CAAD12 105 Rennrad 2016 - PRM",
             "pic/_source":"i/p/7/4/140447_00_b.jpg",
             "description":"Feinste Alu-Rennmaschine! Hochwertig ausgestattet mit Shimano 105 Komponenten, Mavic Aksium Laufradsatz und Cannondel Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 105 Rennrad 2016 - PRM",
             "pic":"http://www.bike24.de/i/p/7/4/140447_00_b.jpg",
             "price/_source":"1.499,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/4/5/140454_00_c.jpg",
                "1x":"i/p/4/5/140454_00_b.jpg"
             },
             "price":1499.0,
             "name":"Cannondale CAAD12 105 Rennrad 2016 - REP",
             "pic/_source":"i/p/4/5/140454_00_b.jpg",
             "description":"Feinste Alu-Rennmaschine! Hochwertig ausgestattet mit Shimano 105 Komponenten, Mavic Aksium Laufradsatz und Cannondel Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale CAAD12 105 Rennrad 2016 - REP",
             "pic":"http://www.bike24.de/i/p/4/5/140454_00_b.jpg",
             "price/_source":"1.499,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/4/5/140254_00_c.jpg",
                "1x":"i/p/4/5/140254_00_b.jpg"
             },
             "price":2199.0,
             "name":"Cannondale SYNAPSE CARBON 105 Rennrad 2016 - RED",
             "pic/_source":"i/p/4/5/140254_00_b.jpg",
             "description":"Stärke trifft auf Komfort! Federleichtes SAVE PLUS Carbon-Rennrad mit Shimano 105 Schaltgruppe, Mavic Aksium Laufradsatz und Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale SYNAPSE CARBON 105 Rennrad 2016 - RED",
             "pic":"http://www.bike24.de/i/p/4/5/140254_00_b.jpg",
             "price/_source":"2.199,00 €"
          },
          {
             "price/_currency":"EUR",
             "pic/_srcset":{
                "2x":"i/p/8/5/140258_00_c.jpg",
                "1x":"i/p/8/5/140258_00_b.jpg"
             },
             "price":2199.0,
             "name":"Cannondale SYNAPSE CARBON 105 Rennrad 2016 - BLK",
             "pic/_source":"i/p/8/5/140258_00_b.jpg",
             "description":"Stärke trifft auf Komfort! Federleichtes SAVE PLUS Carbon-Rennrad mit Shimano 105 Schaltgruppe, Mavic Aksium Laufradsatz und Si Kurbel.",
             "pic/_alt":"Produktbild von Cannondale SYNAPSE CARBON 105 Rennrad 2016 - BLK",
             "pic":"http://www.bike24.de/i/p/8/5/140258_00_b.jpg",
             "price/_source":"2.199,00 €"
          }
       ],
       "totalResults":398,
       "cookies":[
          "ID=\"4135549b5485183641734316ae2e10e4\";Path=\"/\";Domain=\"www.bike24.de\";Port=\"80\"",
          "PARM=\"A1445087417\";Path=\"/\";Domain=\"www.bike24.de\";Port=\"80\""
       ],
       "connectorVersionGuid":"f6578786-8748-4b4b-859c-ecd80a7168b3",
       "connectorGuid":"5ecce53f-9852-4e36-89e0-960a65cc355b",
       "pageUrl":"http://www.bike24.de/1.php?content=13&search=rennrad",
       "outputProperties":[
          {
             "name":"name",
             "type":"STRING"
          },
          {
             "name":"pic",
             "type":"IMAGE"
          },
          {
             "name":"price",
             "type":"CURRENCY"
          },
          {
             "name":"description",
             "type":"STRING"
          }
       ]
    }

    return results.results;
  }

});
