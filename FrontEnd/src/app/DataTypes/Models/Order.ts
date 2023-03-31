import { LatLng } from "leaflet";
import { CartItems } from "./CartItems"

export class Order{
    id!:number
    items!:CartItems[];
    totalPrice!:number;
    name!:string;
    address!:string;
    pamentId!:string;
    createdAt!:string;
    addressLatLng?:LatLng;
    status!:string;
}