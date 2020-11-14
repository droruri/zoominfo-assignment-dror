import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCodesToQuotes'
})
export class ReplaceCodesToQuotesPipe implements PipeTransform {

  transform(text: string): string {
    /*
      const decodedText = text
      .split('&quot;').join('"')
      .split('&#039;').join('\'');
    */
    let decodedText = text.split('&quot;').join('"');
    decodedText = decodedText.split('&#039;').join('\'');

    return decodedText;
  }

}
