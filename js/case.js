function updateCaseNumber(isIncrease) {
    const caseIputField = document.getElementById('case-number-field');
    const caeInputFieldString = caseIputField.value;
    const caeInputFieldNumber = parseInt(caeInputFieldString);
    let newCaseNumberField;
    if (isIncrease === true) {
        newCaseNumberField = caeInputFieldNumber + 1;
    }
    else {
        newCaseNumberField = caeInputFieldNumber - 1;
    }
    if (newCaseNumberField >= 0) {
        caseIputField.value = newCaseNumberField;
    }
    
    return newCaseNumberField;
}



document.getElementById('btn-case-price').addEventListener('click', function () {
    const newCaseNumberField = updateCaseNumber(true);
    // caseIputField.value = newCaseNumberField;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumberField = updateCaseNumber(false);
    // caseIputField.value = newCaseNumberField;
    
})