import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export interface Entity {
  [key: string]: unknown, 
  id: number,
}

export abstract class RequestService {
  url: string;
  constructor(private http: HttpClient, entity: string) {
      this.url = `http://localhost:3000/${entity}`
   }
  get() {
    return this.http.get(this.url);
  }
  post(entity: Record<string, unknown>) {
    return this.http.post(this.url, entity);
  }

  patch(entity: Entity) {
    return this.http.patch(`${this.url}/${entity.id}`, entity); 
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
