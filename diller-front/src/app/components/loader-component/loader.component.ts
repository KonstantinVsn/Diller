import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }
  @Input() 
  hide: Boolean = false;
  ngOnInit() {
  }

}
