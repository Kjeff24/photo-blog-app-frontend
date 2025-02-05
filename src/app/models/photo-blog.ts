export interface BlogPost {
    photoId: string;
    owner: string;
    fullName: string;
    ImageUrl: string;
    temporaryImageUrl: string;
    uploadDate: string;
}

export interface ImageUploadRequest {
    imageBase64: string;
}

export interface PreSignedUrlResponse {
    url: string;
}

export interface MessageResponse {
    message: string;
}