function calculateAge() {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value) - 1;
    const birthDay = parseInt(document.getElementById("birthDay").value);

    const currentDate = new Date();
    const millisecondsDay = 86400000;

    let birthDate = new Date(birthYear, birthMonth, birthDay);

    let diff = currentDate - birthDate;
    const calculatedAge = Math.floor(diff / millisecondsDay);

    document.getElementById("result").textContent = `Você tem ${calculatedAge} dias... ufa!`;
}