import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var markers = {};
var polyline = [];
var latlngs = [];
import L from 'leaflet'
@Injectable()
export class MapHelperService {

  public map;
  //map:any;



  initMap() {
    this.map = L.map('map', {
      'center': [51.512802, -0.091324],//[24.867268, 67.075466],
      'zoom': 13,
      'layers': [
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        })
      ]
    });

  }




  drawPolylines() {
    let self=this;
    
  }
// latlngs = [
//     [51.51324, -0.09909000000000001],
//     [51.513580000000005, -0.09634000000000001],
//     [51.513720000000006, -0.09638000000000001]
// ];
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(self.map);
// // zoom the map to the polyline
// self.map.fitBounds(polyline.getBounds());}

  setMarkers(data) {

    let self = this;
    let i = 0;
    data.Points.forEach(function (obj) {

      if (!markers.hasOwnProperty(obj.id)) {
        markers[obj.id] = new L.Marker([obj.lat, obj.lon]).addTo(self.map);
        markers[obj.id].previousLatLngs = [];

      } else {
        markers[obj.id].previousLatLngs.push(markers[obj.id].getLatLng());
        markers[obj.id].setLatLng([obj.lat, obj.lon]);
        polyline.push(obj.lat, obj.lon);
        var myPolyline = L.polyline([
	      [51.51324, -0.09909000000000001],[51.51478, -0.08078]]).addTo(self.map).bindPopup("popup").openPopup();
        
        myPolyline.addLatLng(markers[obj.id].getLatLng());
        // let setpolyline=L.polyline(polyline, {color: 'red'}).addTo(self.map)
        console.log(polyline)
        self.drawPolylines();
        //this.polylines();
      }
    });
  }



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
  addMarker(lat, lng) {
    var x = lat
    var y = lng,
      toString = x.toString(),
      toString = y.toString(),
      toConcat = "Lat: " + x + " " + "long: " + y;
    let m = L.marker([lat, lng]).addTo(this.map).bindPopup(toConcat);
  }
  addLine(src, dest) {
    let line = L.polyline(
      [
        [src.lat, src.lon],
        [dest.lat, dest.lon]
      ],
      { color: 'red' }
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