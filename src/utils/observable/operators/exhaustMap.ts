import {Observable} from "../Observable";

function exhaustMap(project){
	return (outerObs) => {
		let projectedObs = null;
		let projectedSub = null;
		let completed = false;
		return new Observable(({next}) => {
			projectedSub = outerObs.subscribe({next: (outerV) => {
				if (!projectedObs || completed){
					projectedObs = project(outerV)
					completed = false;
					//@ts-ignore
					projectedSub = projectedObs.subscribe({
						next: (v) => {
							next(v)
						},
						complete: () => {
							completed = true
						}
					})
				}
				
			}})
			
			return {
				unsubscribe(){
					//@ts-ignore
					projectedSub.unsubscribe()
				}
			}
		})
	}
}

export { exhaustMap }
