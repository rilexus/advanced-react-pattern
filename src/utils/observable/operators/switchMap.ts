import {Observable} from "../Observable";

function switchMap(project) {
	return (obs) => {
		return new Observable(({ next }) => {
			let currentObs = null;
			let currSubscription = null;
			// TODO: implement promise subscription
			obs.subscribe({next: (v) => {
				if (currentObs === null){
					currentObs = project(v)
					//@ts-ignore
					currSubscription = currentObs.subscribe({next: (v) => {
						next(v);
					}})
				} else {
					const temp = project(v);
					if (currentObs !== temp){
						//@ts-ignore
						currSubscription.unsubscribe();
						currentObs = temp;
						//@ts-ignore
						currSubscription = currentObs.subscribe({next: (v) => {
								next(v);
						}})
					}
				}
				
			}})
			
			return {
				unsubscribe(){
					if (currentObs){
						//@ts-ignore
						currSubscription.unsubscribe();
					}
					obs.unsubscribe();
				}
			}
		})
	}
}
export { switchMap }
