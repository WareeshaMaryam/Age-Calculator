function result() {
    let currentYear = new Date().getFullYear()
    let birthYear = parseInt(prompt(`Enter the birth year:`));
    let age = currentYear-birthYear;
    let age1 = age-1;

    if (isNaN(birthYear)) {
        error.textContent = `Please enter valid number for your birth year!`;
    } else {
        message.textContent = `You are either ${age} or ${age1} years old.`;
    }
}