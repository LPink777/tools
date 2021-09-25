export default window.requestIdleCallback ||
    function (handler) {
        const startTime = new Date().getTime();
        return setTimeout(function () {
            handler({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(
                        0,
                        50.0 - (new Date().getTime() - startTime)
                    );
                },
            });
        }, 1);
    };
