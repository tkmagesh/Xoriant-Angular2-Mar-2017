import { IBug } from '../models/IBug';

export class BugOperations{
	createNew(id : number, bugName : string) : IBug{
		return {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
	}
	toggle(bug : IBug) : IBug{
		return Object.assign({}, bug, {isClosed : !bug.isClosed});
	}
}