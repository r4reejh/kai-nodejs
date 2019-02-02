import { EventEmitter } from "events";

export default class KaiEventEmitter extends EventEmitter {
	ongesture(handler: any) {
        this.addListener('gestureData',handler);
    }

    onauthentication(handler: any) {
        this.addListener('authentication', handler);
    }

    onconnect(handler: any) {
        this.addListener('connected',handler);
    }
}