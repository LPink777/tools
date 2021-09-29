import isFunction from "./isFunction.js";
import requestIdleCallback from "./requestIdleCallback.js";

class DelayReport {
	constructor() {
		this.taskQueue = [];
		this.doLowPriorityReport = this.doLowPriorityReport.bind(this);
	}

	push(func) {
		if (isFunction(func)) {
			this.taskQueue.push(func);
			requestIdleCallback(this.doLowPriorityReport, { timeout: 2000 });
		}
	}

	doLowPriorityReport(IdleDeadline) {
		while (
			(IdleDeadline.timeRemaining() > 0 || IdleDeadline.didTimeout) &&
			this.taskQueue.length > 0
		) {
			this.taskQueue.shift()();
		}
		if (this.taskQueue.length > 0) requestIdleCallback(this.doLowPriorityReport);
	}
}

const delay = new DelayReport();

export default delay;
