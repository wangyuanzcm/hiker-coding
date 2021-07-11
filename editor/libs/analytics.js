
export const trackEvent= function(t) {
    "use strict";
    window.parent.postMessage(t, "*")
}
export const trackCSSExampleSelection= function() {
    "use strict";
    this.trackEvent({
        category: "Interactive Example - CSS",
        action: "New CSS example selected",
        label: "Interaction Events",
    })
}
export const trackRunClicks= function() {
    "use strict";
    this.trackEvent({
        category: "Interactive Example - JS",
        action: "Clicked run",
        label: "Interaction Events",
    })
}