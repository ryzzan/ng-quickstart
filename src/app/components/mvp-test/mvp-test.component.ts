import {
  Component
} from '@angular/core';
import { FormInputTypeEnum, FormInterface } from '../form/form';
@Component({
  selector: 'app-mvp-test',
  templateUrl: './mvp-test.component.html',
  styleUrls: ['./mvp-test.component.css']
})
export class MvpTestComponent {
  formObject: FormInterface = {
    id: 'test',
    elements: [{
      input: {
        label: 'Daniel',
        placeholder: 'Explicando as coisas',
        name: 'daniel',
        type: FormInputTypeEnum.Text
      }
    }, {
      input: {
        label: 'Ryzzan',
        placeholder: 'Vai dar merda',
        name: 'ryzzan',
        type: FormInputTypeEnum.Text
      }
    }],
    title: 'Explicação',
    subtitle: 'Explicando montador de componente',
  }

  outroObjeto: FormInterface = {
    id: 'demo-daniel',
    title: 'Demonstrando título',
    elements: [{
      input: {
        label: 'Outro teste',
        name: 'outroTeste',
        placeholder: 'Qualquer coisa',
        type: FormInputTypeEnum.Text
      }
    }]
  }
}
