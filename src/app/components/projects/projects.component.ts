import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Injectable()

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    // private repos: any,
    ) {}


  ngOnInit() {
    this.http.get('https://api.github.com/users/fintse/repos').pipe(
      map((response) => {
        console.log(response);
        // this.repos = response;
        return response;
      })).subscribe(() => {});
  }
}