import {Observable} from "../Observable";

function mergeMap(project){
	return (outerObs) => {
		return new Observable(({next, complete, error,}) => {
			let projObs = null
			let projectSub = null;
			const outerSub = outerObs.subscribe({next: (outerV) => {
				projObs = project(outerV);
				// @ts-ignore
				if (typeof projObs.then === "function"){
					//@ts-ignore
					projObs.then((v) => {
						next(v);
					})
					.catch((e) => {
						error && error(e)
					})
					.finally(() => {
						complete && complete()
					});
				}
				// @ts-ignore
				if (typeof projObs.subscribe === "function"){
					// @ts-ignore
					projectSub =  projObs.subscribe({
						next: (innerV) => {
							next(innerV);
						},
						complete:complete
					})
				}
			}})
			
			return {
				unsubscribe(){
					outerSub.unsubscribe()
					//@ts-ignore
					if (typeof projectSub.unsubscribe === "function"){
						//@ts-ignore
						projectSub.unsubscribe();
					}
				}
			}
		})
	}
}
export { mergeMap }
