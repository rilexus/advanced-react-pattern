import {Observable} from "../Observable";

function retry(count) {
	return (outerObs) => {
		let tries = 0;
		let outerSub = null;
		return new Observable(({next, error}) => {
			const sub = () => {
				tries++;
				outerSub = outerObs.subscribe({
					next: (outerV) => {
						next(outerV)
					},
					error: (e) => {
						//@ts-ignore
						outerSub.unsubscribe();
						if (tries <= count){
							//@ts-ignore
							sub();
						} else {
							error && error(e)
						}
					},
				})
			}
			
			sub();
			
			return {
				unsubscribe(){
					//@ts-ignore
					outerSub.unsubscribe();
				}
			}
		})
	}
}

export { retry }

