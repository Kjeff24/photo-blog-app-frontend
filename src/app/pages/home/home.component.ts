import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../models/photo-blog';
import { TokenResponse } from '../../models/token-response';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
      } else {
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
