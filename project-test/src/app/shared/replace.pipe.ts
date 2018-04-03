import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})
export class Replace implements PipeTransform {
    transform(value: string, characterBefore: string, characterAfter: string) {
            return value.replace(characterBefore, characterAfter);

    }
}
