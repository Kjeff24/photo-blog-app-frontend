import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPhotosComponent } from './pages/user-photos/user-photos.component';
import { RecycleBinComponent } from './pages/recycle-bin/recycle-bin.component';
import { ImageUploadComponent } from './pages/image-upload/image-upload.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'PhotoBlog | Home',
    },
    {
        path: 'photos',
        component: UserPhotosComponent,
        title: 'PhotoBlog | Photos',
    },
    {
        path: 'upload',
        component: ImageUploadComponent,
        title: 'PhotoBlog | Upload',
    },
    {
        path: 'recycle-bin',
        component: RecycleBinComponent,
        title: 'PhotoBlog | Bin',
    },
];
