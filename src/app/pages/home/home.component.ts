import { Component } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoBlogService } from '../../services/photo-blog-service/photo-blog.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private photoBlogService: PhotoBlogService,
    private router: Router
  ) {}
}
