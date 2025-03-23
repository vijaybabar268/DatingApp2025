import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  private toastr = inject(ToastrService);
  // usersFromHomeComponent = input.required<any>();
  cancelRegister = output<boolean>();
  model: any = {};

  register() {
    this.accountService.register(this.model).subscribe({
      next: res => {
        console.log(res);
        this.cancel();
      },
      error: err => {
        this.toastr.error(err.error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
