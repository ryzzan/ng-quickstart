import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  FormBuilder, Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  FormElementInterface,
  FormInterface
} from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formObject: FormInterface = {
    id: 'formGeneric',
    elements: [{}],
    actions: [{}]
  };
  
  formHeader: boolean = false;
  formActions: boolean = false;

  constructor(private formGenericBuilder: FormBuilder, private formGenericActivatedRoute: ActivatedRoute, private formGenericRouter: Router) {}

  ngOnInit () {
    this.setForm(this.formObject);
  }
  
  formGeneric = this.formGenericBuilder.group({});

  setForm = (formObject: FormInterface) => {
    if (formObject.title || formObject.subtitle) this.formHeader = true;
    formObject.elements.forEach(
      (element: FormElementInterface) => {        
        if (element.input) this.formGeneric.addControl(element.input.name, this.formGenericBuilder.control(element.input.value ? `'${element.input.value}'` : null));
        if (element.select) this.formGeneric.addControl(element.select.name, this.formGenericBuilder.control(/** element.select.value ? `'${element.select.value}'` :*/ null));
        // if (element.input?.validators) {
        //   element.input.validators.forEach(el => {
        //     this.formGeneric.controls[`"${element.input?.name}"`].setValidators(Validators[`'${el}'`]);
        //   });
        // }
      }
    )
  }
}