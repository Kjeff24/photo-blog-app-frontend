import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TokenResponse } from '../../models/token-response';
import { Observable } from 'rxjs';

const ID_TOKEN = 'id_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient) {}

  login(): void {
    let currentHost = window.location.origin;
    let params = new HttpParams()
      .set('response_type', environment.response_type)
      .set('client_id', environment.client_id)
      .set('redirect_uri', `${currentHost}/oauth2/code`);

    location.href = environment.login_endpoint + '?' + params;
  }

  public getToken(code: string): Observable<TokenResponse> {
    let currentHost = window.location.origin;
    let body = new HttpParams()
      .set('grant_type', environment.grant_type)
      .set('client_id', environment.client_id)
      .set('redirect_uri', `${currentHost}/oauth2/code`)
      .set('code', code);
    const basic_auth =
      'Basic ' + btoa(`${environment.client_id}:${environment.client_secret}`);
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
      Authorization: basic_auth,
    });
    const httpOptions = { headers: headers_object };
    return this.httpClient.post<TokenResponse>(
      environment.token_endpoint,
      body,
      httpOptions
    );
  }

  setTokens(idToken: string): void {
    sessionStorage.removeItem(ID_TOKEN);
    sessionStorage.setItem(ID_TOKEN, idToken);
  }

  clear(): void {
    sessionStorage.removeItem(ID_TOKEN);
  }

  getIdToken(): string | null {
    return sessionStorage.getItem(ID_TOKEN);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(ID_TOKEN) != null;
  }

  getPayload() : {email: string, sub: string} | null {
    const token = this.getIdToken();
    if(token) {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      const values = JSON.parse(decodedPayload);
      return {
        email: values.email,
        sub: values.sub
      };
      
    } else {
      return null;
    }
  }


}
