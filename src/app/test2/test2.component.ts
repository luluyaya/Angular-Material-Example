import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.sass']
})
export class Test2Component implements OnInit {
  form = new FormGroup({});
  model = {  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: '請輸入E-mail',
        placeholder: 'test@mail.com',
        required: true,
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: '',
        placeholder: '請輸入姓名',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: '',
        placeholder: '請輸入密碼',
        required: true,
      }
    }
  ];


  
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.model);
  }

}
