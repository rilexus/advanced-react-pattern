import {Observable} from "../Observable";

function mapTo(value) {
	return (obs) => {
		return new Observable(({ next }) => {
			obs.subscribe({
				next: () => {
					next(value);
				},
			});
			return {
				unsubscribe() {
					obs.unsubscribe();
				},
			};
		});
	};
}

export { mapTo }
