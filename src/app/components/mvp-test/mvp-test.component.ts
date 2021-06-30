import {
  Component
} from '@angular/core';
import { FormButtonTypeEnum, FormInputTypeEnum, FormInterface } from '../form/form';
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
        label: 'Input label',
        placeholder: 'Input placeholder',
        name: 'inputName',
        type: FormInputTypeEnum.Text
      }
    }, {
      select: {
        label: 'Select label',
        name: 'selectName',
        options: [{
          label: 'Option 1',
          value: 'option1'
        }, {
          label: 'Option 2',
          value: 'option2'
        }, {
          label: 'Option 3',
          value: 'option3'
        }]
      }
    }, {
      select: {
        label: 'Select multiple label',
        name: 'selectMultipleName',
        options: [{
          label: 'Option multiple 1',
          value: 'optionMultiple1'
        }, {
          label: 'Option multiple 2',
          value: 'optionMultiple2'
        }, {
          label: 'Option multiple ',
          value: 'optionMultiple3'
        }],
        isMultiple: true
      }
    }, {
      button: {
        label: 'Button label',
        type: FormButtonTypeEnum.Button
      }
    }],
    actions: [{
      button: {
        type: FormButtonTypeEnum.Submit,
        label: 'Criar',
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
        type: FormInputTypeEnum.Text,
      }
    }],
    actions: [{
      button: {
        type: FormButtonTypeEnum.Submit,
        label: 'Criar',
      }
    }]
  }
}
