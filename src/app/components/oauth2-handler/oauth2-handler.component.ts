import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenResponse } from '../../models/token-response';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-oauth2-handler',
  imports: [],
  templateUrl: './oauth2-handler.component.html',
  styleUrl: './oauth2-handler.component.css',
})
export class Oauth2HandlerComponent {
  code = '';

  constructor(
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.code = data['code'];
      if (this.code) {
        this.getToken(this.code);
      } else if (!this.tokenService.isLoggedIn()) {
        this.tokenService.login();
      }
    });
  }

  getToken(code: string): void {
    this.tokenService.getToken(this.code).subscribe({
      next: (data: TokenResponse) => {
        this.tokenService.setTokens(data.id_token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
