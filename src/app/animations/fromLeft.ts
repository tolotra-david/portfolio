import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';
const fromLeft = [
    trigger('FromLeft', [
        state('open', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        state('*', style({
            transform: 'translateX(-100vh)',
            opacity: 0
        })),
        transition('* => open', [
            animate('1s ease-in')
        ]),
    ])
];

export default fromLeft