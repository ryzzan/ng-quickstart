import {
  Component
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-mvp-test',
  templateUrl: './mvp-test.component.html',
  styleUrls: ['./mvp-test.component.css']
})
export class MvpTestComponent {
  constructor(private personFormBuilder: FormBuilder, ) {};
  genderSelectObject = [{
    value: 'f',
    valueView: 'Feminino'
  }, {
    value: 'm',
    valueView: 'Masculino'
  }];
  contactTypeSelectObject = [{
    value: 'mobile',
    valueView: 'Celular'
  }, {
    value: 'email',
    valueView: 'E-mail'
  }, {
    value: 'phone',
    valueView: 'Telefone convencional'
  }, {
    value: 'socialMedia',
    valueView: 'Rede social'
  }];
  personForm = this.personFormBuilder.group({
    uniqueId: [null, [Validators.required]],
    name: [null, [Validators.required]],
    birthday: [null, [Validators.required]],
    gender: [null, []],
    contacts: this.personFormBuilder.array([]),
    addresses: this.personFormBuilder.array([]),
  });
  newContacts(): FormGroup {
    return this.personFormBuilder.group({
      contactId: [null, [Validators.required, ]],
      contactType: [null, []],
      value: [null, [Validators.required, ]],
      contactComplement: [null, [Validators.required, ]],
    })
  };
  newAddresses(): FormGroup {
    return this.personFormBuilder.group({
      postalCode: [null, [Validators.required, ]],
      addressId: [null, [Validators.required, ]],
      address: [null, [Validators.required, ]],
      number: [null, [Validators.required, ]],
      district: [null, [Validators.required, ]],
      addressComplement: [null, []],
      country: [null, []],
      state: [null, []],
      city: [null, []],
    })
  };
  addContacts() {
    this.contacts.push(this.newContacts())
  }
  addAddresses() {
    this.addresses.push(this.newAddresses())
  }
  get contacts(): FormArray {
    return this.personForm.get('contacts') as FormArray
  };
  get addresses(): FormArray {
    return this.personForm.get('addresses') as FormArray
  };
  removeContacts(i: number) {
    this.contacts.removeAt(i)
  }
  removeAddresses(i: number) {
    this.addresses.removeAt(i)
  }
  personSubmit = () => {
    fetch('$ENV$/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.personForm.value),
    }).then((data) => {
      data.json().then((keys) => {})
    });
  }
}
