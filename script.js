const inputElements = document.querySelectorAll(".card__input");

const submitButton = document.querySelector(".card__button");
/*    set validation functions    */

const validDay = (day) => {
  if (day && day > 0 && day <= 31){
    return true;
  }
}
const validMonth = (month) => {
  if (month && month > 0 && month <= 12){
    return true;
  }
} 

const validYear = (year) => {
  const currentYear = new Date().getFullYear();
  if (year && year > 0  && year <= currentYear){
      return true;
  }
}

const isDateValid = (dayElement, monthElement, yearElement) => {
  let isValid = [false, false, false];

  if (!validDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  if (!validMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
  }

  if (!validYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};
/*    set calculation functions    */
 const  calculateAge = (year , month , day) => {
    const today = new Date();
    const birthday = new Date(year , month-1 , day)
    let age = today.getFullYear() - birthday.getFullYear() ;
    let monthDiff = (birthday.getMonth() - today.getMonth()) ;
    let dayDiff = (birthday.getDay() - today.getDay()) ;
    if ( monthDiff < 0 || ((monthDiff === 0) && (dayDiff < 0))){
      age--;
    }
    return age;
  }

const onClickHandler = () => {
    const dayElement = document.querySelector('.card__input[name="day"]');
    const monthElement = document.querySelector('.card__input[name="month"]');
    const yearElement = document.querySelector('.card__input[name="year"]');
    const resultElement = document.querySelector(".card__resultValue");
  
    if (!isDateValid(dayElement, monthElement, yearElement)) {
      resultElement.textContent = "--";
      return;
    }
  
    resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value).toString();
  };



inputElements.forEach( (item ) => {
  item.addEventListener( "keydown" , (event) => {
    event.key === "Enter" && onClickHandler()}
    )
});

submitButton.addEventListener("click", onClickHandler );