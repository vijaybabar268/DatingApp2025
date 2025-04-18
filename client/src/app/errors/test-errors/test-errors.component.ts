import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  baseApi = environment.apiUrl;
  private http = inject(HttpClient);
  validationErrors: string[] = [];

  get400Error() {
    this.http.get(this.baseApi + 'buggy/bad-request').subscribe({
      next: res => { console.log(res) },
      error: err => { console.log(err) }
    })
  }

  get401Error() {
    this.http.get(this.baseApi + 'buggy/auth').subscribe({
      next: res => { console.log(res) },
      error: err => { console.log(err) }
    })
  }

  get404Error() {
    this.http.get(this.baseApi + 'buggy/not-found').subscribe({
      next: res => { console.log(res) },
      error: err => { console.log(err) }
    })
  }

  get500Error() {
    this.http.get(this.baseApi + 'buggy/server-error').subscribe({
      next: res => { console.log(res) },
      error: err => { console.log(err) }
    })
  }

  get400ValidationError() {
    this.http.post(this.baseApi + 'account/register', {}).subscribe({
      next: res => { console.log(res) },
      error: err => {
        console.log(err)
        this.validationErrors = err;
      }
    })
  }

}
