export interface  FileModel {
    id: number;
    fileName: string;
    fileType: string;
    fileSize: number;
    createdDate?: Date;
    author?: string; 
    isEncrypted?: boolean;
  }