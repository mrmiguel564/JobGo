import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router


@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.scss',

})

export class RegComponent implements OnInit {
  regForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    // VERIFICAR SI HAY QUE AGREGAR email:    ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private router: Router) { // Inyectar Router

    this.regForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email:    ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.regForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    console.log(this.regForm.value.username)
    console.log(this.regForm.value.password)
    
  }
}
