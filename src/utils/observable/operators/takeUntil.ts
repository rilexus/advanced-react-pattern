import {Observable} from "../Observable";

function takeUntil(obs){
	return (o) => {
		let fired = false;
		return new Observable(({next}) => {
			obs.subscribe({next: () => {
				fired = true;
			}})
			o.subscribe({next: (v) => {
				if (!fired){
					// return as long as "obs" did not fire
					next(v)
				}
				}})
			return {
				unsubscribe(){
					o.unsubscribe();
					obs.unsubscribe();
				}
			}
		})
	}
}

export { takeUntil }
