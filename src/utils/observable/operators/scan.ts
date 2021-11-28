import {Observable} from "../Observable";

function scan(callback, initial){
	return (o) => {
		let state = initial;
		return new Observable(({next}) => {
			o.subscribe({next: () => {
				state = callback(state)
				next(state)
				}})
			return {
				unsubscribe(){
					o.unsubscribe();
				}
			}
		})
	}
}

export { scan }
