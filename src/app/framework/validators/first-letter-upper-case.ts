import { AbstractControl, ValidatorFn } from '@angular/forms';

export function FirstLetterUppercaseValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        const value = <string>control.value;
        if (!value) return null;
        if (value.length === 0) return null;

        const firstLetter = value[0];
        if (firstLetter !== firstLetter.toUpperCase()){
            return {
              FirstLetterUppercaseValidator: {
                    message: 'first letter should be upper case'
                }
            };
        }

        return null;
    }
}
