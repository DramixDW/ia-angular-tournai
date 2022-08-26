import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

export interface NewMovie {
  title: string;
  description: string;
  seen: boolean;
  rating: number;
}

export interface Movie extends NewMovie {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService  extends RequestService {
  constructor(http: HttpClient) {
    super(http, 'movies');
   }
}
