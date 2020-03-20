import { Component, OnChanges, AfterViewInit } from '@angular/core';
import {GeocodesService}  from '../geocodes.service'
import {MapHelperService} from './map-helper.service'
@Component({
  selector: 'map-cmp',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ],
  providers:[MapHelperService]
})
export class MapComponent implements OnChanges, AfterViewInit {
  map;
  myCoordinates:any[];
  geoPoints:any[];
  feature = 'Feature 1'

  selectedFeatures: any = [];
  constructor(private geo:GeocodesService, private helper:MapHelperService){

  }

  ngOnChanges(ch) {
    
  }

  ngAfterViewInit() {
this.helper.initMap();

var self = this;
//self.myCoordinates.push({lat:"abc",lon:"no"});


this.geo.getPositions().subscribe(geo=>{
this.geoPoints = geo.points;

// geo.lines.forEach(l=>{
//   let x=l.pos.dest
//   console.log(l.pos.dest)
// });
//console.log(geo.points)
//this.myCoordinates.push();

self.helper.drawPoints(geo);


setTimeout(function(){
  geo.lines.forEach(l=>{
  let x=l.pos.dest
  
});
  self.geoPoints.push({
            
                  "type": "person",
                  "pos": {
                      "lat": 24.863668,
                      "lon": 67.07547
                  },
                  "data": {
                  }
          // "type": "flight",
          // "pos": {
          //   "src": {
          //     "lat": 24.867406, 
          //     "lon": 67.077427
          //   },
          //   "dest": {
          //     "lat":24.860257 ,
          //     "lon": 67.069174
          //   }
          // },
          // "data": {
          // }
        })
        
         self.helper.drawPoints(geo);
        
         
        },2000)
     
setTimeout(function(){self.geoPoints.push({
  
          "type": "person",
                  "pos": {
                      "lat": 24.862539,
                      "lon": 67.069709
                  },
                  "data": {
                  }
        })
        
        
        self.helper.drawPoints(geo);
      
         }, 4000);
         setTimeout(function(){self.geoPoints.push({
  
          "type": "person",
                  "pos": {
                      "lat": 24.859164,
                      "lon": 67.069747
                  },
                  "data": {
                  }
        })
        
        
        self.helper.drawPoints(geo);
       
       // this.Coordinates.push(self.geoLines);
         }, 6000);
         
  
  setTimeout(function(){self.geoPoints.push({
  
          "type": "person",
                  "pos": {
                      "lat": 24.874806,
                      "lon": 67.068062
                  },
                  "data": {
                  }
        })
        
        
        self.helper.drawPoints(geo);
       
     

         }, 8000);
         
    })

// geo.points.forEach(l=>{
        
            
//       });

// self.selectedFeatures.push(self.geo);
// console.log(self.selectedFeatures)
  //self.myCoordinates.push(self.geoLines);
  //console.log(self.geoLines+"yes")
  
  }
  


}

  


  

  
//   }

// }
