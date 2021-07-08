import {
  FormBuilder,
  FormArray,
  FormGroup
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Component
} from '@angular/core';
@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
}) export class ExampleFormComponent {
  constructor(private exampleFormBuilder: FormBuilder, private exampleFormRoute: ActivatedRoute, ) {}
  exampleFormId: string = this.exampleFormRoute.snapshot.params['id'];
  isAddModule: boolean = !this.exampleFormId;
  exampleFormForm = this.exampleFormBuilder.group({
    uniqueId: [null, []],
    name: [null, []],
    birthdate: [null, []],
    gender: [null, []],
    exampleContactArray: this.exampleFormBuilder.array([]),
  });
  genderSelectObject = [{
    "label": "Masculino",
    "value": "male"
  }, {
    "label": "Feminino",
    "value": "female"
  }];
  contactTypeSelectObject = [{
    "label": "Celular",
    "value": "mobile"
  }, {
    "label": "E-mail",
    "value": "email"
  }, {
    "label": "Facebook",
    "value": "facebook"
  }, {
    "label": "Linkedin",
    "value": "linkedin"
  }];
  addExampleContactArray() {
    console.log(this.isAddModule);
    this.exampleContactArray.push(this.newExampleContactArray())
  }
  get exampleContactArray(): FormArray {
    return this.exampleFormForm.get('exampleContactArray') as FormArray
  };
  newExampleContactArray(): FormGroup {
    return this.exampleFormBuilder.group({
      contactType: [null, []],
      value: [null, []],
      complement: [null, []],
    })
  };
  removeExampleContactArray(i: number) {
    this.exampleContactArray.removeAt(i)
  }
}
