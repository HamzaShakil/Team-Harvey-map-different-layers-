import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import L from 'leaflet'
@Injectable()
export class MapHelperService {

  public map;
  //map:any;
  markers:{};
  

   initMap(){
  this.map = L.map('map', {
  'center': [24.867268, 67.075466],
  'zoom': 13,
  'layers': [
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    })
  ]
});
          
   } 



  setMarkers(data) {
   
  let self=this;
  data.points.forEach(function (obj) {
    if (!this.markers.hasOwnProperty(obj.id)) {
      this.markers[obj.id] = new L.Marker([obj.pos.lat, obj.pos.lon]).addTo(self.map);
      this.markers[obj.id].previousLatLngs = [];
    } else {
     this.markers[obj.id].previousLatLngs.push(this.markers[obj.id].getLatLng());
     this.markers[obj.id].setLatLng([obj.pos.lat, obj.pos.lon]);
    }
  });
}
   drawPoints(data){
      // points
    
  //   // let self=this;
  //   // data.Points.forEach(function (obj) {
    
  //   // if (!this.markers.hasOwnProperty(obj.id)) {
  //   //   this.markers[obj.id] = new L.Marker([obj.pos.lat, obj.pos.lon]).addTo(self.map);
  //   //   this.markers[obj.id].previousLatLngs = [];
  //   // } else {
  //   //   this.markers[obj.id].previousLatLngs.push(this.markers[obj.id].getLatLng());
  //   //   this.markers[obj.id].setLatLng([obj.pos.lat, obj.pos.lon]);
  //   // }
  // });
}
      // data.points.forEach(p=>
      // {
      //   this.addMarker(p.pos.lat, p.pos.lon);
      //   this.selectedFeatures.push({"lat":p.pos.lat,"lon":p.pos.lon});
       
      
        
       
        
      // },
      // this.addPolyline(this.selectedFeatures)
      // );
    
     
    
     
      // lines
      // data.lines.forEach(l=>{
      //   this.addMarker(l.pos.src.lat, l.pos.src.lon);
      //   // dest
      //   this.addMarker(l.pos.dest.lat, l.pos.dest.lon);
      //   // line       
      //   this.addLine(l.pos.src, l.pos.dest);   
      //   // if(l.type=="temp")
      //   // {
      //   //   console.log(l.type);
      //   //   this.addCircle(l.pos.src,l.pos.dest);
      //   //   this.addLine(l.pos.src, l.pos.dest);
      //   // }
      //   // else
      //   // {
      //   //    // src
      //   // this.addMarker(l.pos.src.lat, l.pos.src.lon);
      //   // // dest
      //   // this.addMarker(l.pos.dest.lat, l.pos.dest.lon);
      //   // // line       
      //   // this.addLine(l.pos.src, l.pos.dest);        

      //   // }
            
      // });
      
   

  //  cordinates(cordinates)
  //  {

  //  }
    addMarker(lat,lng){
    var x = lat
    var y=lng,
    toString = x.toString(),
    toString= y.toString(),
    toConcat = "Lat: "+x+" "+ "long: "+y;
    let m = L.marker([lat,lng]).addTo(this.map).bindPopup(toConcat);
   }
   addLine(src, dest) {
         let line = L.polyline(
                [
                    [src.lat, src.lon],
                    [dest.lat, dest.lon]
                ],
                {color: 'red'}
         ).addTo(this.map)
   }
   addCircle(src, dest) {
         let cricleSrc = L.circle(
                
                    [src.lat, src.lon],
                    {
                     radius: 500,
                     color: "red",
                     fillColor: "#f03",
                     fillOpacity: 0.5
                     
                    }
         ).addTo(this.map)
         let cricleDest = L.circle(
                
                    [dest.lat, dest.lon],
                    {
                     radius: 500,
                     color: "green",
                     fillColor: "#f03",
                     fillOpacity: 0.5
                     
                    }
         ).addTo(this.map)
   }

}