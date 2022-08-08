import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBr'
})
export class DateBrPipe implements PipeTransform {

  /**
     * Aplica formatação para a data.
     * 
     * @param string dataEn
     * @return string data no formato dd/mm/yyyy
     */
	transform(dateEn: string): string {
    if (!dateEn) {
           return '';
       }
   
       const dateArr = dateEn.split('-');
   
       if (dateArr.length !== 3) {
           return dateEn;
       }
       
       return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
 }
}
