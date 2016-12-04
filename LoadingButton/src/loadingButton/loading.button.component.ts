import { 
  Component, 
  OnInit, 
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'loading-button',
  templateUrl: 'loading.button.component.html',
  animations: [
    trigger('loadingState', [
      state('false', style({
        width: '300px',
        borderRadius: '28px'
      })),
      state('true', style({
        width: '*',
        borderRadius: '100%'
      })),
      transition('0 => 1', animate('100ms ease-in')),
      transition('1 => 0', animate('100ms ease-in'))
    ]),

    trigger('splashState', [
      state('false', style({
        width: '*',
        height: '*',
        borderRadius: '*'
      })),
      state('true', style({
        width: '100%',
        height: '100%',
        borderRadius: 0
      })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-in'))
    ])
  ]
})
export class LoadingButton implements OnInit {
  @Input() loading: boolean;
  @Input() splash: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.loading, this.splash);
  }
}