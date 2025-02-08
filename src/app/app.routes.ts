import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPhotosComponent } from './pages/user-photos/user-photos.component';
import { RecycleBinComponent } from './pages/recycle-bin/recycle-bin.component';
import { ImageUploadComponent } from './pages/image-upload/image-upload.component';
import { loginGuard } from './auth/login.guard';
import { Oauth2HandlerComponent } from './components/oauth2-handler/oauth2-handler.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'PhotoBlog | Home',
        canActivate: [loginGuard]
    },
    {
        path: 'oauth2/code',
        component: Oauth2HandlerComponent,
        title: 'PhotoBlog | Authorzize'
    },
    {
        path: 'photos',
        component: UserPhotosComponent,
        title: 'PhotoBlog | Photos',
        canActivate: [loginGuard]
    },
    {
        path: 'upload',
        component: ImageUploadComponent,
        title: 'PhotoBlog | Upload',
        canActivate: [loginGuard]
    },
    {
        path: 'recycle-bin',
        component: RecycleBinComponent,
        title: 'PhotoBlog | Bin',
        canActivate: [loginGuard]
    },
];
