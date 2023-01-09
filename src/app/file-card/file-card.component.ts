import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FileModel } from '../FileModel';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.css']
})
export class FileCardComponent implements OnInit {

  enteredFileName: string = "";
  enteredFileType: string = "";
  enteredFileSize = 0;
  enteredcreatedDate?: Date;
  enteredauthor?: string;
  enteredisEncrypted?: boolean;
  @Output() fileCreated = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onAddFile(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const newFile: FileModel = {
      id: 0,
      fileName: this.enteredFileName,
      fileType: this.enteredFileType,
      fileSize: this.enteredFileSize,
      createdDate: this.enteredcreatedDate,
      author: this.enteredauthor,
      isEncrypted: this.enteredisEncrypted
    };

    this.fileCreated.emit(newFile);
  }
}
