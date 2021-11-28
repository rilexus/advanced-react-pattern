import {Observable} from "../Observable";

function map(callback) {
	//@ts-ignore
	return (a) => {
		return new Observable(({ next }) => {
			a.subscribe({
				next: (v) => {
					next(callback(v));
				},
			});
			return {
				unsubscribe() {
					a.unsubscribe();
				},
			};
		});
	};
}
export { map };
