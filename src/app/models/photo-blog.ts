export interface BlogPost {
    pk: string;
    sk: string;
    fullName: string;
    imageUrl: string;
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

export interface MenuItem {
    label: string;
    icon: string;
    url: string;
}

export interface CardMenuItem {
    label: string;
    icon: string;
    notificationMessage: string;
}