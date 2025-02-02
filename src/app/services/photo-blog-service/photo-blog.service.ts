import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { environment } from '../../../environments/environment.development';
import { BlogPost, ImageUploadRequest, PreSignedUrlResponse } from '../../models/photo-blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoBlogService {
  gateway_url = environment.api_gateway + '/blog';

  constructor(
    private httpClient: HttpClient
  ) {}

  public getAllBlogPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(this.gateway_url);
  }

  public getAllBlogPostsByUser(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(this.gateway_url + '/user');
  }

  public getRecycleBlogPostByUser(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(this.gateway_url + '/user/recycle');
  }

  public uploadImage(request: ImageUploadRequest): Observable<BlogPost> {
    return this.httpClient.post<BlogPost>(this.gateway_url + '/upload', request);
  }

  public generateTemporaryUrl(photoId: string): Observable<PreSignedUrlResponse> {
    return this.httpClient.patch<PreSignedUrlResponse>(this.gateway_url + `/generate-url/${photoId}`, {});
  }

  public deletBogPost(photoId: string): Observable<void> {
    return this.httpClient.delete<void>(this.gateway_url + `/delete/${photoId}`);
  }

  public moveToRecycleBin(photoId: string): Observable<void> {
    return this.httpClient.delete<void>(this.gateway_url + `/recycle/${photoId}`);
  }

  public restoreFromRecycleBin(photoId: string): Observable<void> {
    return this.httpClient.patch<void>(this.gateway_url + `/recycle/restore/${photoId}`, {});
  }

}
