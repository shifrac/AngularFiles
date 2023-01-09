import { Component } from '@angular/core';
import { FileModel } from './FileModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Justice-Gov-Files';
  storeFiles: FileModel[] = [];

  onFileAdded(file: FileModel){ 
    this.storeFiles.push(file);  
  }  
}
