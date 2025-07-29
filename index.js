const button = document.getElementById('submit');

button.addEventListener('click', () => {
    const agevalue = document.getElementById("age").value;
    if (agevalue === '') {
        alert("Enter your age");
        return;
    }

    const gender = document.getElementsByClassName('Gender');
    let selectedGender = '';

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
            break;
        }
    }

    if (selectedGender === '') {
        alert("Please select your gender");
        return;
    }

    const height = document.getElementById('height').value;
    if (height === '') {
        alert("Enter your height");
        return;
    }

    const weight = document.getElementById('weight').value;
    if (weight === '') {
        alert("Enter your weight");
        return;
    }

    // Optional: Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

document.getElementById('result').innerHTML=bmiRounded

});
const clearbutton =document.getElementById('clear')
clearbutton.addEventListener('click',()=>{
    const abc=confirm("Do you want to clear?")
    if(abc){
        document.getElementById('age').value=' ';
        document.getElementById('height').value=' ';
        document.getElementById('weight').value=' ';
         const genderRadios = document.getElementsByClassName('Gender');
        for (let i = 0; i < genderRadios.length; i++) {
            genderRadios[i].checked = false;
        }

        console.log("Form cleared.");
    } else {
        console.log("Clear cancelled.");
    }
    
})
