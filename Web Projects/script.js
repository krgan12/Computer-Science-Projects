/* Function to update the number of seats the user chooses (refer to index.html) */ 
function travlselect() {
    var user = document.getElementById('drpdwn_size');
    var displaytext = user.options[user.selectedIndex].text;
    document.getElementById('txtvalue').value = displaytext;
}

var getvalue = document.getElementsByID('ffrom');
getvalue.addEventListener()
// Function to check if the user has properly filled out the details (refer to index.html)
function validate() {
    const departure = document.getElementById('ffrom');
    const destination = document.getElementById('to');
    const depart_date = document.getElementById('ddate');
    const return_date = document.getElementById('rdate');

    
    if (departure.value == '' && destination.value == '' && depart_date.value == '' && return_date.value == '')
    {
        alert("Please fill out the information below to book your flight.");
        
    }//For the departure airport (from) is empty
    else if (departure.value == '' && destination.value != '' && depart_date.value != '' && return_date.value != '') 
    {
        alert("Please fill out the departing airport below to book your flight.");
    }//For the destination airport (to) is empty
    else if (departure.value != '' && destination.value == '' && depart_date.value != '' && return_date.value != '') 
    {
        alert("Please fill out the destination airport below to book your flight.");
    }//For the depature date is empty
    else if (departure.value != '' && destination.value != '' && depart_date.value == '' && return_date.value != '') 
    {
        alert("Please fill out the departing date below to book your flight.");
    }//For the return date is empty
    else if (departure.value != '' && destination.value != '' && depart_date.value != '' && return_date.value == '')
    {
        alert("Please fill out the returning date below to book your flight.");
    }//If the destination input is wrong
    else if ((departure.value != '' && destination.value != '' && depart_date.value != '' && return_date.value != '') && (destination.value != 'Orlando (MCO)'))
    {
        alert("Invalid destination location. Please try again.");
    }//Redirects the user to the second page if all the inputs are correct
    else if (departure.value != '' && destination.value != '' && depart_date.value != '' && return_date.value != '')
    {
        window.location.href = 'mainform.html';
    }
};
// Changes the background colour of the second page (mainform.html)
function changeBackground() {
    document.getElementById('main').style.backgroundColor = 'white';
}
// Checks if the second page form is filled out properly (applied to the SUBMIT button; refer to mainform.html)
function submitsuccessful() {
    // Getting all elements to compare if the user input is right
    const first_name = document.getElementById('firstname').value;
    const middle_name = document.getElementById('middlename').value;
    const last_name = document.getElementById('lastname').value;
    const sufix = document.getElementById('suffix');
    const phoneNum = document.getElementById('phonenum').value;
    // Validating the phone number using Regex
    const phoneNumValidity = /^\d{3}-\d{3}-\d{4}$/.test(phoneNum);
    const month = document.getElementById('monthob').value;
    const date = document.getElementById('dateob').value;
    const year = document.getElementById('yearob').value;
    const email = document.getElementById('email').value;
    const mailValidity = /^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    //Checks of the entire form is empty 😎
    //&& sufix.value == 'wrongoption' && phoneNumValidity == false && email.match(mailValidity) == false && month == 'notanoption' && date == 'notanoption' && year == 'notanoption'
    if (first_name == '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity == false && email.match(mailValidity) == null && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out the information so we can deliver your tickets");
        document.getElementById("firstname").style.border = "red";
    }//Checks if the first name is empty 
    else if (first_name == '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        alert("Please provide your first name.");
    }//Checks if the middle name is empty 
    else if (first_name != '' && middle_name == '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption') 
    {
        alert("Please provide your middle name.");
    }//Checks if the last name is empty 
    else if (first_name != '' && middle_name != '' && last_name == '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        alert("Please provide your last name.");
    }//Checks if the suffix name is empty 
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value == 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        alert("Please select your suffix.");
    }//Checks if the phone number is empty 
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        alert("Please enter a valid phone number.");
    }//Checks if the e-mail is empty 
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == false) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        alert("please enter a valid email.");
    }//Checks if the month is empty 
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month == 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        alert("Please enter a mont.h");
    }//Checks if the date is empty 
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date == 'notanoption' && year != 'notanoption')
    {
        alert("Please enter a date.");
    }//Checks if the year is empty 
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year == 'notanoption')
    {
        alert("Please enter a year.");
    }//Checks if the user only inputs there name, but not other parameters.
    else if (first_name != '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the middle name is the only one filled in
    else if (first_name == '' && middle_name != '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the last name is the only one filled in
    else if (first_name == '' && middle_name == '' && last_name != '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the suffix value is the only one selected
    else if (first_name == '' && middle_name == '' && last_name == '' && sufix.value != 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the phone is the only one filled in
    else if (first_name == '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the email is the only one filled in
    else if (first_name == '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == true) && month == 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the month is the only one selected
    else if (first_name == '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month != 'notanoption' && date == 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the date is the only one selected
    else if (first_name == '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date != 'notanoption' && year == 'notanoption')
    {
        alert("Please fill out all your details.");
    }//Checks if the year is the only one selected
    else if (first_name == '' && middle_name == '' && last_name == '' && sufix.value == 'wrongoption' && phoneNumValidity != true && (email.match(mailValidity) != null == false) && month == 'notanoption' && date == 'notanoption' && year != 'notanoption')
    {
        alert("Please fill out all your details.");
    }//If everthing is filled out properly
    else if (first_name != '' && middle_name != '' && last_name != '' && sufix.value != 'wrongoption' && phoneNumValidity == true && (email.match(mailValidity) != null == true) && month != 'notanoption' && date != 'notanoption' && year != 'notanoption')
    {
        window.open('popup.html',"thanks",'width=800, height=600, scrollbar=yes');
        window.location.href = 'thankyou.html';
    }

};