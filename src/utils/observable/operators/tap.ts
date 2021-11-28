import {Observable} from "../Observable";

function tap(callback){
	return (o) => {
		return new Observable(({next}) => {
			o.subscribe({next: (v) => {
				callback(v)
					next(v);
				}})
			return {
				unsubscribe(){
					o.unsubscribe()
				}
			}
		})
	}
}

export { tap }
