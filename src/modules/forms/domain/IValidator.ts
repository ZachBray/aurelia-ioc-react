export abstract class IValidator {
  abstract validate({value: any, areSubFormsValid: boolean}): string;
}
