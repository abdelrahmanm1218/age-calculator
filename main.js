// input date
let day = document.getElementById("input-day"),
month = document.getElementById("input-month"),
year = document.getElementById("input-year");
// // result button
let btn = document.getElementById("btn");
// result duration
let resultYears = document.getElementById('result-year')
let resultMonths = document.getElementById("result-month");
let resultDays = document.getElementById("result-days");

btn.onclick =()=>{
    let date = new Date();
    let fullInputDate = new Date(year.value, month.value -1 , day.value);
    let yearsTest = date.getFullYear() - fullInputDate.getFullYear();
    let monthsTest = date.getMonth() - fullInputDate.getMonth();
    let daysTest = date.getDate() - fullInputDate.getDate();
    
    // Adjust if the days are negative
    if (daysTest < 0) {
      monthsTest -= 1;
      daysTest += new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }
     // Adjust if the months are negative
     if (monthsTest < 0) {
      yearsTest -= 1;
      monthsTest += 12;
    }
    resultYears.innerText = yearsTest ;
    resultMonths.innerText = monthsTest;
    resultDays.innerText = daysTest;
    
}

