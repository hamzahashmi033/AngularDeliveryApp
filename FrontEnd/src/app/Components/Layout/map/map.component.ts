import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { icon, LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, map, Map, marker, Marker, tileLayer } from 'leaflet';
import { Order } from 'src/app/DataTypes/Models/Order';
import { LocationService } from 'src/app/Services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input()
  order!:Order;
  @ViewChild('map', { static: true })
  mapRef!: ElementRef
  map!: Map
  private readonly DEFAULT_LATLNG: LatLngTuple = [12, 13.6]
  private readonly MARKER_ZOOM_LEVEL = 16;
  private readonly MARKER_ICON = icon({
    iconUrl:
      'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });
  currentMarker!:Marker
  constructor(private locationService:LocationService){}
  ngOnInit() { 
    this.initializeMap() 
  }
  initializeMap() {
    if (this.map) return;
    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.on('click', (e:LeafletMouseEvent) => {
      this.setMarker(e.latlng);
    })
  }
  findMyLocation(){
    this.locationService.getMyLocation().subscribe((result)=>{
      this.setMarker(result)
      this.map.setView(result,this.MARKER_ZOOM_LEVEL)
    })  
  }
  setMarker(latLng:LatLngExpression){
    this.addressLatLng = latLng as LatLng;
    if(this.currentMarker){
      this.currentMarker.setLatLng(latLng)
      return
    }
    this.currentMarker = marker(latLng, {
      draggable: true,
      icon: this.MARKER_ICON
    }).addTo(this.map);
    this.currentMarker.on('dragend', () => {
      this.addressLatLng = this.currentMarker.getLatLng();
    })
  }
  set addressLatLng(latlng: LatLng){
    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatlng = latlng;
    console.log(this.order.addressLatlng);
    
  }
}


