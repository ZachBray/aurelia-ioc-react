export abstract class IFormController {
  view$: Rx.Observable<any>;
  value$: Rx.Observable<any>;
  isValid$: Rx.Observable<boolean>;
}
