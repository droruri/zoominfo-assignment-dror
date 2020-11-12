import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCodesToQuotes'
})
export class ReplaceCodesToQuotesPipe implements PipeTransform {

  transform(text: string): string {
    let decodedText = text.split('&quot;').join('"');
    decodedText = decodedText.split('&#039;').join('\'');

    return decodedText;
  }

}
