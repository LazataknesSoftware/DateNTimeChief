const rlUI = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const {
    log
} = console;

function addMinutesToTime_Runtime([ time, minutes ]) {
    let svard;
    if (time === "$T") {
        svard = new Date() * 1 + 3 * 3600 * 1e3;
    } else {
        svard = new Date().setUTCHours(parseInt(time.split(":")[0]));
        svard = new Date(new Date(svard).setUTCMinutes(parseInt(time.split(":")[1])));
    }
    svard = new Date(svard * 1 + minutes * 60 * 1e3);
    log(`=> ${svard.getUTCHours()} hours and ${svard.getUTCMinutes()} minutes`);
}

function addDaysToDate_Runtime([ date, days ]) {
    let datedata, day, month, year;
    if (date === "$T") {
        datedata = new Date();
        [ day, month, year ] = [ datedata.getUTCDate(), datedata.getUTCMonth() + 1, datedata.getFullYear() ];
    } else {
        [ day, month, year ] = date.split(".");
    }
    dat = new Date(new Date(`${year}-${month.toString().length < 2 ? "0" + month.toString() : month}-${day}`) * 1 + days * 864e5);
    log(`${dat.getUTCDate()}.${dat.getUTCMonth() + 1}.${dat.getUTCFullYear()}`);
}

function betweeninfyTimesRuntime([ time1, time2 ]) {
    let hour1, hour2, datedata, minute1, minute2;
    if (time1 === "$T") {
        datedata = new Date();
        [ hour1, minute1 ] = [ datedata.getHours(), datedata.getMinutes() ];
    } else {
        [ hour1, minute1 ] = time1.split(":");
    }
    if (time2 === "$T") {
        datedata = new Date();
        [ hour2, minute2 ] = [ datedata.getHours(), datedata.getMinutes() ];
    } else {
        [ hour2, minute2 ] = time2.split(":");
    }
    let date1 = new Date();
    date1 = new Date(date1.setUTCHours(hour1));
    date1 = new Date(date1.setUTCMinutes(minute1));
    let date2 = new Date();
    date2 = new Date(date2.setUTCHours(hour2));
    date2 = new Date(date2.setUTCMinutes(minute2));
    debugger;
    log(`${date2.getUTCMinutes() - date1.getUTCMinutes() < 0 ? date2.getUTCHours() - date1.getUTCHours() - 1 : date2.getUTCHours() - date1.getUTCHours()} hours and ${date2.getUTCMinutes() - date1.getUTCMinutes() < 0 ? 60 + (date2.getUTCMinutes() - date1.getUTCMinutes()) : date2.getUTCMinutes() - date1.getUTCMinutes()} minutes`);
}

function betweeninfyDatesRuntime([ date1, date2 ]) {
    let day1, month1, year1, day2, month2, year2, datedata;
    if (date1 === "$T") {
        datedata = new Date();
        [ day1, month1, year1 ] = [ datedata.getDate(), datedata.getUTCMonth() + 1, datedata.getFullYear() ];
    } else {
        [ day1, month1, year1 ] = date1.split(".");
    }
    if (date2 === "$T") {
        datedata = new Date();
        [ day2, month2, year2 ] = [ datedata.getDate(), datedata.getUTCMonth() + 1, datedata.getFullYear() ];
    } else {
        [ day2, month2, year2 ] = date2.split(".");
    }
    let totaltime = new Date(new Date(`${year2}-${month2.toString().length < 2 ? "0" + month2.toString() : month2}-${day2}`).getTime() - new Date(`${year1}-${month1.toString().length < 2 ? "0" + month1.toString() : month1}-${day1}`).getTime());
    log(`${totaltime.getUTCFullYear() - 1970} years, ${totaltime.getUTCMonth()} months and ${totaltime.getDate() - 1} days`);
}

function help([ cmd ]) {
    switch (cmd) {
      case "mt":
        log(`
Add MINUTES TO ADD minutes to HOUR:MINUTE or $T (stands for now).
mt <HOUR:MINUTE | $T> <MINUTES TO ADD>
mt 10:29 10
			`);
        break;

      case "dd":
        log(`
Add DAYS to DAY.MONTH.YEAR or $T (stands for now).
dd <DAY.MONTH.YEAR> <DAYS>
dd 14.01.2015 2
			`);
        break;

      case "bt":
        log(`
Calculate difference between or $T (stands for now) and or $T (stands for now).
bt <TIME> <TIME2>
bt 20:10 21:20
			`);
        break;

      case "bd":
        log(`
Calculate difference between or $T (stands for today) and or $T (stands for today).
bd <DATE1> <DATE2>
bd 10.02.2012 21.06.2021
			`);
        break;

      case "help":
        log(`
This help.
help
help
			`);
        break;

      case "q":
        log(`
Exit program.
q
q
			`);
        break;

      default:
        log(`
All commands: mt dd bt bd q help
Type help <COMMAND> to get help about <COMMAND>.
`);
    }
}

log('Type "help" to get help.');
commandWasCalledWithoutArguments = false;
rlUI.setPrompt("> ");

rlUI.on("line", action => {
    let runtime_options = action.split(" ");
    [ cmd, ...args ] = runtime_options;
    if (args.length === 0) {
        help([cmd]);
        commandWasCalledWithoutArguments = true;
    }
    if (!commandWasCalledWithoutArguments) {
        if (cmd === "mt") {
            addMinutesToTime_Runtime(args);
        } else if (cmd === "dd") {
            addDaysToDate_Runtime(args);
        } else if (cmd === "bt") {
            betweeninfyTimesRuntime(args);
        } else if (cmd === "bd") {
            betweeninfyDatesRuntime(args);
        } else if (cmd === "q") {
            process.exit();
        } else if (cmd === "help") {
            help(args);
        } else {
            log("Unknown command: " + action);
        }
    } else {
        commandWasCalledWithoutArguments = false;
    }
    rlUI.prompt();
});
