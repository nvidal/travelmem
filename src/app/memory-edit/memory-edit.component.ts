import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memory-edit',
  templateUrl: './memory-edit.component.html',
  styleUrls: ['./memory-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryEditComponent implements OnInit {

  memory = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMemory(this.route.snapshot.params['id']);
  }

  getMemory(id) {
    this.http.get('/memory/'+id).subscribe(data => {
      this.memory = data;
    });
  }

  updateMemory(id, data) {
    this.http.put('/memory/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/memory-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}