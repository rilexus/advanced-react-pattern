import {Observable} from "../Observable";

function skipUntil(observable){
	return (o) => {
		let fired = false;
		return new Observable(({next}) => {
			
			o.subscribe({next: (v) => {
					if (fired){
						// pass value along only if the "observable" submitted once.
						next(v);
					}
				}})
			
			observable.subscribe({next: () => {
					if (!fired){
						fired = true
					}
				}})
			
			return {
				unsubscribe(){
					o.unsubscribe();
					observable.unsubscribe();
				}
			}
		})
	}
}

export { skipUntil }
