import { NgModule } from '@angular/core'

import { ElapsedPipe } from './pipes/elapsed.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
	declarations : [
		ElapsedPipe,
		TrimTextPipe,
		SortPipe
	],
	exports : [
		ElapsedPipe,
		TrimTextPipe,
		SortPipe
	]
})
export class UtilsModule{

}