import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

	memories: any;
  sortedItems: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/memory').subscribe(data => {
    	this.memories = data;
      this.memories = this.memories.sort((a: any, b: any) =>
          new Date(b.when_date).getTime() - new Date(a.when_date).getTime()
      );
    });
  }

}
