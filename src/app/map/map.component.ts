import { Component, OnChanges, AfterViewInit } from '@angular/core';
import { GeocodesService } from '../geocodes.service'
import { MapHelperService } from './map-helper.service'
@Component({
  selector: 'map-cmp',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapHelperService]
})
export class MapComponent implements OnChanges, AfterViewInit {
  map;
  myCoordinates: any[];
  geoPoints: any[];
  feature = 'Feature 1'

  selectedFeatures: any = [];
  constructor(private geo: GeocodesService, private helper: MapHelperService) {

  }

  ngOnChanges(ch) {

  }

  ngAfterViewInit() {
    this.helper.initMap();

    var self = this;
    //self.myCoordinates.push({lat:"abc",lon:"no"});


    this.geo.getPositions().subscribe(geo => {
      this.geoPoints = geo.points;
      self.helper.setMarkers(geo);
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513580000000005,
                "lon": -0.09634000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 2000)
       setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'B',
                "lat": 51.513720000000006,
                "lon": -0.09638000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 3000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.5133,
                "lon": -0.09908,
                "data": {
                }
              }
            ]
          
          });

      }, 4000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09895000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 5000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09885000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 6000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09871,
                "data": {
                }
              }
            ]
          
          });

      }, 7000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09861,
                "data": {
                }
              }
            ]
          
          });

      }, 8000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.0985,
                "data": {
                }
              }
            ]
          
          });

      }, 9000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09838000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 10000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.51328,
                "lon": 0.09826000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 11000)
      setTimeout(function () {
        self.helper.setMarkers(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.51328,
                "lon": -0.09826000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 12000)
      
    })
    

  }



}
