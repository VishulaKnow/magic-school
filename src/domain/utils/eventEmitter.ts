interface AnyObject {
    [key: string]: any;
}

export class EventEmitter<E = Record<string, AnyObject>> {
    private events: {
        [key in keyof E]?: ((args?: E[keyof E]) => void)[];
    } = {};

    subscribe<T extends keyof E>(code: T, listener: (args?: E[T]) => void) {
        if (!this.events[code]) this.events[code] = [];
        this.events[code]?.push(listener as (args?: E[keyof E]) => void);
        return () => this.unsubscribe(code, listener);
    }

    unsubscribe<T extends keyof E>(code: T, listener: (args: E[T]) => void) {
        this.events[code] = this.events[code]?.filter((cur) => cur != listener);
    }

    emit<T extends keyof E>(code: T, args?: E[T]) {
        const events: ((args?: E[keyof E]) => void)[] | undefined = this.events[code];
        (events || []).forEach((callback) => callback(args));
    }
}
