import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memory-create',
  templateUrl: './memory-create.component.html',
  styleUrls: ['./memory-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryCreateComponent implements OnInit {

  memory = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveMemory() {
    this.http.post('/memory', this.memory)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/memory-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}