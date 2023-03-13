import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-notfoundcomponent',
  templateUrl: './notfoundcomponent.component.html',
  styleUrls: ['./notfoundcomponent.component.css']
})
export class NotfoundcomponentComponent {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found!";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";
}
