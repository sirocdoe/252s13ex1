function validation ()
{
    var street = document.fillintheblanks.sa.value;
    var street2 = document.fillintheblanks.sa2.value;
    var city = document.fillintheblanks.city.value;
    var state = document.fillintheblanks.st.value;
    var zip = document.fillintheblanks.zip.value;
    var phonenum = document.fillintheblanks.pn.value;
    var email = document.fillintheblanks.mail.value;
    if (street == "")
    {
        alert ("you left this blank! please insert address here.");
    }
    if (street2 == "")
    {
        alert ("you left this blank! please insert address2 here.");
    }
    if (city == "")
    {
        alert ("you left this blank! please insert your city here.");
    }
    if (state == "")
    {
        alert ("you left this blank! please insert your state here.");
    }
    if (zip == "")
    {
        alert ("you left this blank! please insert you zip code here.");
    }
    if (phonenum == "")
    {
        alert ("you left this blank! please insert your phone number here.");
    }
    if (email == "")
    {
        alert ("you left this blank! please insert your email here.");
    }
}