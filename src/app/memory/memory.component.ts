import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

	memories: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/memory').subscribe(data => {
    	this.memories = data;
  	});
  }

}
