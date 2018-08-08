import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Message, TreeNode } from 'primeng/primeng';

declare var $:any;

@Component({
  selector: 'app-org-uno',
  templateUrl: './org-uno.component.html',
  styleUrls: ['./org-uno.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrgUnoComponent implements OnInit {
  
  data: TreeNode[];  
  selectedNode: TreeNode;
  messages: Message[];
  i = 30;
  informacionCasilla:string;

  constructor() { }

  ngOnInit() {
    this.data = [{
        label: 'Interacciones medicamentosas',
        styleClass: 'department-cfo',
        data: '',
        expanded: true,
        children: [{
            label: 'Ver más',
            styleClass: 'department-cfo',
            expanded: true,
            data: '',
            children:[{
                label: 'La interaccion se produce cuando la presencia de uno o más fármacos son modificados por la presencia de otro.',
                styleClass: 'department-cfo',
                data: ''
            },
            {
                label: 'Pueden ser tanto beneficas como negativas.',
                styleClass: 'department-cfo',
                data: ''
            },
            {
                label: 'Ocurren principalmente en el tubo digestivo.',
                styleClass: 'department-cfo',
                data: ''
            },
            {
                label: 'La interacción se puede dar a nivel farmacodinámico, farmacocinético o con alimentos.',
                styleClass: 'department-cfo',
                data: ''
            }],
          },
          {
              label: 'Ver más',
              styleClass: 'department-coo',
              expanded: true,
              data: '',
              children:[{
                  label: 'Interacciones Farmacocinéticas (LADME)',
                  styleClass: 'department-coo',
                  expanded: true,
                  data: '',
                  children:[{
                    label: 'Absorción',
                    styleClass: 'department-coo',
                    expanded: true,
                    data: '',
                    children:[{
                        label: 'Quelación: Modificación del fármaco por unión con metal.',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'PH gastrointestinal: Sustancia básica se absorbe más en medio acido y viceversa.',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'Cambio en penstaltismo: ↑ Peristaltismo ↑ Velocidad ↓ Absorción del fármaco',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'Flora bacteriana: ↓ Flora ↓ Absorción y viceversa.',
                        styleClass: 'department-coo',
                        data: ''
                    }]
                  },
                  {
                    label: 'Distribucción',
                    styleClass: 'department-coo',
                    expanded: true,
                    data: '',
                    children:[{
                        label: 'Torrente sanguineo.',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'Si se modifican proteínas plasmáticas, el fármaco no llega al órgano...',
                        styleClass: 'department-coo',
                        data: ''
                    }]
                  }]
              },
              {
                label: 'Interacciones Farmacodinámicas',
                styleClass: 'department-coo',
                expanded: true,
                data: '',
                children:[{
                    label: 'El fármaco puede ↑ ó ↓ su efecto en presencia de otro.',
                    styleClass: 'department-coo',
                    expanded: true,
                    data: '',
                    children:[{
                        label: 'Aditivos o sinérgicas',
                        styleClass: 'department-coo',
                        expanded: true,
                        data: '',
                        children:[{
                            label: 'Anticolinérgico + anticolinérgico: golpe de calor.',
                            type: 'textTablaDeCuatro',
                            styleClass: 'ui-text',
                            data: {name1:'Antihipertensivo + vasodilatador: hipotensión por fármacos.', 
                                    name2: 'Alcohol + antihistamínico: Depresión del SNC.', 
                                    name3: 'Asociación de fármacos nefrotóxicos: ↑ Nefrotoxicidad.'}
                        }]
                    },
                    {
                        label: 'Antagonicas u opuestas: Fármaco actua en contra de otro.',
                        styleClass: 'department-coo',
                        expanded: true,
                        data: '',
                        children:[{
                            label: 'Vitamina k + anticoagulante: ↓ k, elimina efecto.',
                            type: 'textTablaDeDos',
                            styleClass: 'ui-text',
                            data: {name1: 'hipoglucemiante + glucocorticorde:'}
                        }]
                    }]
                }]
              },
              {
                label: 'Interacciones con alimentos',
                styleClass: 'department-coo',
                expanded: true,
                data: '',
                children:[{
                    label: 'Cambios en el vaciamiento gástrico comidas calientes y grasosas cambian la absorción.',
                    styleClass: 'department-coo',
                    expanded: true,
                    data: '',
                    children:[{
                        label: 'No suministrar con alimentos amoxicilina, captophl, isoniazida. Suministrar con alimentos espironolactona, ibuprofeno, tromodol.',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'Alimentos ricos en tiamina (B1) antidepresivos IMAO, conservar. aguacate. yogurt, higado, vino.',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'Dieta hiperprotéica: ↑ metabolismo oxidativo, inducción enzimática + dosis del fármaco.',
                        styleClass: 'department-coo',
                        data: ''
                    },
                    {
                        label: 'Dieta hipoprotéica: ↓ aclaramiento de la creatinina y por lo tanto del fármaco.',
                        styleClass: 'department-coo',
                        data: ''
                    }]
                }]
              },
              {
                label: 'Interacciones por firoterapia y otras sustancias',
                styleClass: 'department-coo',
                expanded: true,
                data: '',
                children:[{
                    label: 'Hierba de San Juan: Depresión ↓ efecto warfurina y anticoceptivos.',
                    styleClass: 'department-coo',
                    data: ''
                },
                {
                    label: 'Alcohol y tabaco modifican el metabolismo.',
                    styleClass: 'department-coo',
                    data: ''
                },
                {
                    label: 'Tabaco: Nicotina e hidrocarbono armática son inductores enzimaticos del crp450 ↑ EPP ↓ [F]. Nicotina: ↑ Presión arterial.',
                    styleClass: 'department-coo',
                    data: ''
                }]
            }]
            },
            {
                label: 'Ver más',
                styleClass: 'department-cto',
                expanded: true,
                data: '',
                children:[{
                    label: 'Farmacodinámica',
                    styleClass: 'department-cto',
                    data: ''
                },
                {
                    label: 'Farmacocinética',
                    styleClass: 'department-cto',
                    data: ''
                },
                {
                    label: 'Farmacología por sistemas',
                    styleClass: 'department-cto',
                    data: ''
                }]
            }]
        }];
  }

  onNodeSelect(event) {
      if(event.node.data.length != 0){
        this.messages = [{detail: event.node.label},{detail:event.node.data.name1},{detail:event.node.data.name2},{detail:event.node.data.name3}];
        this.informacionCasilla = event.node.label + event.node.data.name1 + (event.node.data.name2 != null ? event.node.data.name2 : '')
                                 + (event.node.data.name3 != null ? event.node.data.name3 : '');
        $('#myModal').modal('show');
      }
      else{
        this.informacionCasilla = event.node.label;
        $('#myModal').modal('show');
      }
  }

  ampliar(){
    this.i = this.i+3;
  }

  reducir(){
    this.i = this.i-3;
  }
}
