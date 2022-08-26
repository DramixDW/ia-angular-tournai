import { AbstractControl, ValidationErrors } from "@angular/forms";

export function doesContains(checked: string) {
    return (control: AbstractControl) => {
        if (!control.value.includes(checked)) {
            return { notIncluded: `La valeur ${checked} n'est pas présente`}
        }
        return null;
    } 
}

export function passwordStrength(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        const level = ['faible', 'moyen', 'fort'];
        let strengthCounters: number = 0;
        if (control.value.match(/[A-Z]/)) {
            strengthCounters++
        }
        if (control.value.match(/[1-9]/)) {
            strengthCounters++
        }
        level[strengthCounters] === 'fort' ? resolve(null) : resolve ({
            level: `Votre mot de passe est ${level[strengthCounters]} . Il faut une majuscule et un chiffre au moins`
        })
    })
}