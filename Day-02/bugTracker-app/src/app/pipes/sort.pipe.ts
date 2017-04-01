import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {
	transform(value: any[], sortBy : string, isDescending : boolean = false): any[] {
		var comparer = getComparer(sortBy);
		if (isDescending){
			comparer = getDescendingComparerFor(comparer);
		}
		return value.sort(comparer);
	}
}

function getComparer(attrName){
	return function(item1 : any, item2 : any) : number {
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescendingComparerFor(comparer){
	return function(){
		return comparer.apply(this, arguments) * -1;
	}
}