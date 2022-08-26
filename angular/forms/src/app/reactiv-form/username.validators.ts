import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";

export function hasUpperCase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
        if (control.value.match(/[A-Z]/)) {
            return null; 
        }
        return {
            message: 'Il faut au moins une majuscule'
        };
  }   
}

export function isTaken(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise((resolve, reject) => {
        console.log('Plz, ils me regardent, c"est génant')
        setTimeout(() => {
        if (control.value === "Dramix") {
          resolve({isTaken: "Le pseudo est déjà pris"})
        }
        resolve(null);    
      }, 10000)
    });
}