import {
  Component
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
}) export class ProfileComponent {
  id: string = this.profileRoute.snapshot.params['id'];
  isAddModule: boolean = !this.id;
  constructor(private profileFormBuilder: FormBuilder, private profileRoute: ActivatedRoute, private profileRouter: Router, ) {
    this.setForm();
  };
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
  profileForm = this.profileFormBuilder.group({
    uniqueId: [null, [Validators.required]],
    name: [null, [Validators.required]],
    birthday: [null, [Validators.required]],
    gender: [null, []],
    contacts: this.profileFormBuilder.array([]),
    addresses: this.profileFormBuilder.array([]),
  });
  setForm = () => {
    if (!this.isAddModule) {
      console.log(29); /** TO-DO */ /** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/
    }
  }
  newContacts(): FormGroup {
    return this.profileFormBuilder.group({
      contactId: [null, [Validators.required, ]],
      contactType: [null, []],
      value: [null, [Validators.required, ]],
      contactComplement: [null, [Validators.required, ]],
    })
  };
  newAddresses(): FormGroup {
    return this.profileFormBuilder.group({
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
    return this.profileForm.get('contacts') as FormArray
  };
  get addresses(): FormArray {
    return this.profileForm.get('addresses') as FormArray
  };
  removeContacts(i: number) {
    this.contacts.removeAt(i)
  }
  removeAddresses(i: number) {
    this.addresses.removeAt(i)
  }
  profileSubmit = () => {
    fetch('$ENV$/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.profileForm.value),
    }).then((data) => {
      data.json().then((keys) => {})
    });
  }
}
