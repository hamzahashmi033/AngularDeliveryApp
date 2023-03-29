import { Component,Input } from '@angular/core';
import { LoaderServiceService } from 'src/app/Services/loader-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
constructor(public loader:LoaderServiceService) {}
}
