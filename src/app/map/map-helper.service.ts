import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import L from 'leaflet'
@Injectable()
export class MapHelperService {

  public map;
  myCoordinates:any[];
  feature = 'Feature 1'

  selectedFeatures: any = [];

   initMap(){
     this.map = new L.Map("map");
     this.map.setView(new L.LatLng(24.863833, 67.069553), 15);
     L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
             maxZoom: 20,
             
             

          }).addTo(this.map);
          
   } 

  
    
   drawPoints(data){
      // points
     let self=this;
    
      data.points.forEach(p=>
      {
        this.addMarker(p.pos.lat, p.pos.lon);
        this.selectedFeatures.push({"lat":p.pos.lat,"lon":p.pos.lon});
       
      
        
       
        
      },
      this.addPolyline(this.selectedFeatures)
      );
    
     
    
     
      // lines
      data.lines.forEach(l=>{
        this.addMarker(l.pos.src.lat, l.pos.src.lon);
        // dest
        this.addMarker(l.pos.dest.lat, l.pos.dest.lon);
        // line       
        this.addLine(l.pos.src, l.pos.dest);   
        // if(l.type=="temp")
        // {
        //   console.log(l.type);
        //   this.addCircle(l.pos.src,l.pos.dest);
        //   this.addLine(l.pos.src, l.pos.dest);
        // }
        // else
        // {
        //    // src
        // this.addMarker(l.pos.src.lat, l.pos.src.lon);
        // // dest
        // this.addMarker(l.pos.dest.lat, l.pos.dest.lon);
        // // line       
        // this.addLine(l.pos.src, l.pos.dest);        

        // }
            
      });
      console.log(this.selectedFeatures)
   }

  //  cordinates(cordinates)
  //  {

  //  }
  addPolyline(selectedFeatures)
  {
    

  }
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