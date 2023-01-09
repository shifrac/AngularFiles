import { Component, OnInit, Input } from '@angular/core';
import { FileModel } from '../FileModel';


@Component({
  selector: 'app-files-panel',
  templateUrl: './files-panel.component.html',
  styleUrls: ['./files-panel.component.css']
})
export class FilesPanelComponent implements OnInit {

  @Input() filesList : FileModel[] = [] ;  

  constructor() { }

  ngOnInit(): void { 
  }
}
