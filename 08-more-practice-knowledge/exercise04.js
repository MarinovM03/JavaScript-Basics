function passwordGuess(input) {
    let pass = input[0];

    if (pass === "s3cr3t!p@ssw0rd") {
        console.log("Welcome");

    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!p@ssw0rd"]);