import {Component, Input, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {
    GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, Geolocation, GoogleMapsMarker,
    CameraPosition
} from 'ionic-native';

declare var plugin: any;


@Component({
    selector: 'map',
    templateUrl: 'map.html'
})
export class MapComponent {
    //public map: GoogleMap;
    public map: any;
    constructor(public navCtrl: NavController, private platform: Platform) {
        //debugger
        platform.ready().then(() => {
            console.log('plf : ready')
            //this.loadMap();
        });

    }
    onClick() {
        console.log('you clicked!');
        alert('thanks :)');
    }

/*
    ngAfterViewInit(){
        console.log('ngAfterViewInit');

//        var map = new GoogleMap('divmap');

        var div = document.getElementById("divmap");
        var map = plugin.google.maps.Map.getMap(div);
        /!*, {
         'controls': {
         'compass': false,
         'myLocationButton': true,
         'indoorPicker': false,
         'zoom': true
         },
         'gestures': {
         'scroll': true,
         'tilt': true,
         'rotate': true,
         'zoom': true
         },
         'camera': {
         'zoom': 6,
         'latLng': {
         'lat': 48.858165,
         'lng': 2.353622
         }
         }
         }*!/

        map.one(plugin.google.maps.event.MAP_READY, function() {
            console.log("--> map_canvas2 : ready.");
        });
    }
*/



    ngAfterViewInit() {
        debugger
        let location = new GoogleMapsLatLng(48.858165, 2.353622);;
        //console.log(this._row);

        this.map = new GoogleMap('divmap');
        //var map = window.plugin.google.maps.Map.getMap('divmap');

        let position: CameraPosition = {
            target: location,
            zoom: 18,
            tilt: 30
        };


        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('map ready');
            //this.map.setCenter(location);
            this.map.setCameraTarget(position);
            this.map.on(GoogleMapsEvent.CAMERA_CHANGE).subscribe(() => {
                console.log('map change');

            });
        });
    }
}