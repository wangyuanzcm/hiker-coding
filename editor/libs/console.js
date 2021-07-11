
import { writeOutput, formatOutput } from './console-utils';

let log = console.log;
let error = console.error;

console.error = function (t) {
    writeOutput(t);
    error.apply(console, arguments)
}

console.log = function () {
    for (var t = [], r = 0, i = arguments.length; r < i; r++) {
        var output = formatOutput(arguments[r]);
        t.push(output)
    }
    var a = t.join(" ");
    writeOutput(a);
    log.apply(console, arguments);
}