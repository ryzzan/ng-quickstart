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
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
}) export class AnimalFormComponent {
  id: string = this.animalFormRoute.snapshot.params['id'];
  isAddModule: boolean = !this.id;
  constructor(private animalFormFormBuilder: FormBuilder, private animalFormRoute: ActivatedRoute, private animalFormRouter: Router, ) {
    this.setForm();
  };
  animalGenderSelectObject = [{
    value: 'f',
    valueView: 'Feminino'
  }, {
    value: 'm',
    valueView: 'Masculino'
  }];
  furSelectObject = [{
    value: 'Pelagem 1',
    valueView: 'Pelagem 1'
  }, {
    value: 'Pelagem 2',
    valueView: 'Pelagem 2'
  }, {
    value: 'Pelagem 3',
    valueView: 'Pelagem 3'
  }, {
    value: 'Pelagem 4',
    valueView: 'Pelagem 4'
  }, {
    value: 'Pelagem 5',
    valueView: 'Pelagem 5'
  }];
  speciesSelectObject = [{
    value: 'Canina',
    valueView: 'Canina'
  }, {
    value: 'Felina',
    valueView: 'Felina'
  }, {
    value: 'Espécie 3',
    valueView: 'Espécie 3'
  }, {
    value: 'Espécie 4',
    valueView: 'Espécie 4'
  }, {
    value: 'Espécie 5',
    valueView: 'Espécie 5'
  }];
  raceSelectObject = [{
    value: 'Raça não definida',
    valueView: 'Raça não definida'
  }, {
    value: 'Raça 2',
    valueView: 'Raça 2'
  }, {
    value: 'Raça 3',
    valueView: 'Raça 3'
  }, {
    value: 'Raça 4',
    valueView: 'Raça 4'
  }, {
    value: 'Raça 5',
    valueView: 'Raça 5'
  }];
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
  animalFormForm = this.animalFormFormBuilder.group({
    animalUniqueId: [null, []],
    animalName: [null, [Validators.required]],
    animalBirthday: [null, [Validators.required]],
    animalGender: [null, []],
    fur: [null, []],
    species: [null, []],
    race: [null, []],
    vaccines: this.animalFormFormBuilder.array([]),
    vermifuge: this.animalFormFormBuilder.array([]),
    uniqueId: [null, [Validators.required]],
    name: [null, [Validators.required]],
    birthday: [null, [Validators.required]],
    gender: [null, []],
    contacts: this.animalFormFormBuilder.array([]),
    addresses: this.animalFormFormBuilder.array([]),
  });
  setForm = () => {
    if (!this.isAddModule) {
      console.log(29); /** TO-DO */ /** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/
    }
  }
  newVaccines(): FormGroup {
    return this.animalFormFormBuilder.group({
      vaccineType: [null, []],
      vaccineBrand: [null, [Validators.required, ]],
      vaccineDate: [null, [Validators.required, ]],
      veterinaryUniqueId: [null, [Validators.required, ]],
    })
  };
  newVermifuge(): FormGroup {
    return this.animalFormFormBuilder.group({
      vermifugeBrand: [null, [Validators.required, ]],
      vermifugeDate: [null, [Validators.required, ]],
      vermifugePersonUniqueId: [null, [Validators.required, ]],
    })
  };
  newContacts(): FormGroup {
    return this.animalFormFormBuilder.group({
      contactId: [null, [Validators.required, ]],
      contactType: [null, []],
      value: [null, [Validators.required, ]],
      contactComplement: [null, [Validators.required, ]],
    })
  };
  newAddresses(): FormGroup {
    return this.animalFormFormBuilder.group({
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
  addVaccines() {
    this.vaccines.push(this.newVaccines())
  }
  addVermifuge() {
    this.vermifuge.push(this.newVermifuge())
  }
  addContacts() {
    this.contacts.push(this.newContacts())
  }
  addAddresses() {
    this.addresses.push(this.newAddresses())
  }
  get vaccines(): FormArray {
    return this.animalFormForm.get('vaccines') as FormArray
  };
  get vermifuge(): FormArray {
    return this.animalFormForm.get('vermifuge') as FormArray
  };
  get contacts(): FormArray {
    return this.animalFormForm.get('contacts') as FormArray
  };
  get addresses(): FormArray {
    return this.animalFormForm.get('addresses') as FormArray
  };
  removeVaccines(i: number) {
    this.vaccines.removeAt(i)
  }
  removeVermifuge(i: number) {
    this.vermifuge.removeAt(i)
  }
  removeContacts(i: number) {
    this.contacts.removeAt(i)
  }
  removeAddresses(i: number) {
    this.addresses.removeAt(i)
  }
  animalFormSubmit = () => {
    fetch('$ENV$/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.animalFormForm.value),
    }).then((data) => {
      data.json().then((keys) => {})
    });
  }
}
