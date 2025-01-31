import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { environment } from '../../../environments/environment.development';
import { BlogPost, ImageUploadRequest } from '../../models/photo-blog';
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

  public uploadImage(request: ImageUploadRequest): Observable<BlogPost> {
    return this.httpClient.post<BlogPost>(this.gateway_url + '/upload', request);
  }

  public generateTemporaryUrl(photoId: string): Observable<BlogPost> {
    return this.httpClient.put<BlogPost>(this.gateway_url + `/upload/${photoId}`, {});
  }

}
