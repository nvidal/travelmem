import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-memory-detail',
  templateUrl: './memory-detail.component.html',
  styleUrls: ['./memory-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryDetailComponent implements OnInit {

  memory = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getMemoryDetail(this.route.snapshot.params['id']);
  }

  getMemoryDetail(id) {
    this.http.get('/memory/'+id).subscribe(data => {
      this.memory = data;
    });
  }

  deleteMemory(id) {
    this.http.delete('/memory/'+id)
      .subscribe(res => {
          this.router.navigate(['/memories']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}