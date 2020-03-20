import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class GeocodesService {

  getPositions():Observable<any>{
      return Observable.of({
        points:[
            {
                  "type": "person",
                  "pos": {
                      "id":'A',
                      "lat": 24.867268, 
                      "lon":  67.075466
                  },
                  "data": {
                  }
            },
            // {
            //       "type": "person",
            //       "pos": {
            //           "lat": 35.1490215,
            //           "lon": -90.0516285
            //       },
            //       "data": {}
            // },
            // {
            //       "type": "person",
            //       "pos": {
            //           "lat": 34.1083449,
            //           "lon": -117.2897652
            //       },
            //       "data": {}
            // },
            // {
            //       "type": "person",
            //       "pos": {
            //           "lat": 41.8755546,
            //           "lon": -87.6244212
            //       },
            //       "data": {} 
                  
            // }
        ],
        lines:[
          {
            "type": "flight",
            "pos": {
                "src": {
                      "lat": 24.867268, 
                      "lon":  67.075466
                },
                "dest": {
                      "lat": 24.867406,
                      "lon": 67.077427
                }
            },
            "data": {
            }
          },
          // {
          //   "type": "temp",
          //   "pos": {
          //       "src": {
          //             "lat": 24.862539,
          //             "lon": 67.069709
          //       },
          //       "dest": {
          //             "lat": 24.863668,
          //             "lon": 67.075470
          //       }
          //   },
          //   "data": { }
          
          // }
        ]
      }).delay(1000);
   }

}