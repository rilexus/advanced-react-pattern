type Observer = {next: (...args: any) => void; complete?: () => void; error?: (e: any) => void};

type Subscription = {unsubscribe: () => void}

function pipeFromArray(fns){
	if (fns.length === 0) {
		return (x: any) => x;
	}
	
	if (fns.length === 1) {
		return fns[0];
	}
	
	return function piped(input){
		return fns.reduce((prev: any, fn ) => fn(prev), input as any);
	};
}

class Observable {
	constructor(private worker: (observe: Observer) => Subscription) {}
	
	subscribe(observer: Observer){
		return this.worker(observer)
	}
	
	unsubscribe(){
		// @ts-ignore
		this.worker = null;
	}
	
	pipe(...operations){
		return pipeFromArray(operations)(this);
	}
}

function merge(...observables){
	return new Observable(({next}) => {
		const subscriptions = observables.map((observable) => observable.subscribe({next: next}))
		return {
			unsubscribe(){
				subscriptions.forEach(o => o.unsubscribe())
			}
		}
	})
}

const fromEvent = (element, type) => {
	return new Observable(({next, error}) => {
		const handle = (...args) => next(...args);
		element.addEventListener(type, handle)
		
		return {
			unsubscribe(){
				element.removeEventListener(type, handle);
			}
		}
	})
}

const NEVER = new Observable(({next}) => {
	return {
		unsubscribe(){}
	}
})

const interval = (time) => {
	let t = -1;
	return new Observable(({next}) => {
		const id = setInterval(() => {
			t++;
			next(t);
		}, time);
		return {
			unsubscribe: () => {
				t=-1;
				clearInterval(id);
			}
		}
	})
}

const fromFetch = (url, options?:any) => {
	return new Observable(({next, complete, error}) => {
		fetch(url, options).then(next).catch((e)=> error && error(e)).finally(() => complete && complete())
		return {
			unsubscribe(){
				//TODO: cancel promise
			}
		}
	})
}

function of(...values){
	return new Observable(({next, complete}) => {
		values.forEach(next);
		complete && complete();
		return {
			unsubscribe(){}
		}
	})
}

export { Observable, merge, fromEvent, NEVER, interval, fromFetch, of }
