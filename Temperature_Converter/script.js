let celciusInput = document.querySelector('.temperature-options .celcius > input');
let fahrenheitInput = document.querySelector('.temperature-options .fahrenheit > input');
let KelvinInput = document.querySelector('.temperature-options .Kelvin > input');

let btn = document.querySelector('.button button');

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

celciusInput.addEventListener('input', function () {
  let cTemp = parseFloat(celciusInput.value);
  let fTemp = (cTemp * 9 / 5) + 32;
  let kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNumber(fTemp);
  KelvinInput.value = roundNumber(kTemp);
});

KelvinInput.addEventListener('input', function () {
  let kTemp = parseFloat(KelvinInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * 9 / 5 + 32;

  celciusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);
});

fahrenheitInput.addEventListener('input', function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * 5 / 9;
  let kTemp = (fTemp - 32) * 5 / 9 + 273.15;

  celciusInput.value = roundNumber(cTemp);
  KelvinInput.value = roundNumber(kTemp);
});

btn.addEventListener('click', () => {
  celciusInput.value = '';
  fahrenheitInput.value = '';
  KelvinInput.value = '';
});
