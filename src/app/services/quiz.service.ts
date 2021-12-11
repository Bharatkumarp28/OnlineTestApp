import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/Java.json', name: 'Java Quiz' },
      { id: 'data/Fruit.json', name: 'Fruit Quiz' },
      { id: 'data/Maths.json', name: 'Maths Quiz' },
    ];
  }

}
