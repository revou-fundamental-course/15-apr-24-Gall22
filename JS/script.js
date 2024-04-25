function celsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('inputPengguna').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('result').innerText = fahrenheit;
        const hasilKalkulasi = document.querySelector('section.a #hasilKalkulasi').innerText = celsius + '\u00B0C ' + '* (9/5) + 32 = ' + fahrenheit + '\u00B0F';
    } else {
        const hasilKalkulasi = document.querySelector('section.a #hasilKalkulasi')
        document.getElementById('result').innerText = 'Mohon Masukkan Angka Yang Valid';
        hasilKalkulasi.innerText = 'Angka Tidak Valid';
    };
};
document.getElementById('convert').addEventListener('click', function () { celsiusToFahrenheit() });

function fahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.querySelector('section.b #inputPengguna').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.querySelector('section.b #result').innerText = celsius;
        const hasilKalkulasi = document.querySelector('section.b #hasilKalkulasi').innerText = '(' + fahrenheit + '\u00B0C ' + '* - 32) 9/5 = ' + celsius + '\u00B0F';
    } else {
        const hasilKalkulasi = document.querySelector('section.b #hasilKalkulasi')
        document.querySelector('section.b #result').innerText = 'Mohon Masukkan Angka Yang Valid';
        hasilKalkulasi.innerText = 'Angka Tidak Valid';
    };
};
document.querySelector('section.b #convert').addEventListener('click', function () { fahrenheitToCelsius() });



function resetSectionA() {
    document.getElementById('inputPengguna').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('hasilKalkulasi').innerText = '';
};
document.getElementById('reset').addEventListener('click', function () { resetSectionA() });


function resetSectionB() {
    document.querySelector('section.b #inputPengguna').value = '';
    document.querySelector('section.b #result').innerText = '';
    document.querySelector('section.b #hasilKalkulasi').innerText = '';
};
document.querySelector('section.b #reset').addEventListener('click', function () { resetSectionB() });


function reverseSectionA() {
    const input = document.getElementById('inputPengguna').value;
    const result = document.getElementById('result').value;
    document.getElementById('inputPengguna').value = result;
    document.getElementById('result').innerText = input;
    document.getElementById('hasilKalkulasi').innerText = '';
};
document.getElementById('reverse').addEventListener('click', function () { reverseSectionA() });


function reverseSectionB() {
    const input = document.querySelector('section.b #inputPengguna').value;
    const result = document.querySelector('section.b #result').value;
    document.querySelector('section.b #inputPengguna').value = result;
    document.querySelector('section.b #result').innerText = input;
    document.querySelector(' section.b #hasilKalkulasi').innerText = '';
};
document.querySelector('section.b #reverse').addEventListener('click', function () { reverseSectionB() });



document.getElementById('suhu').addEventListener('change', () => toggleSections());
function toggleSections() {
    const selectedOption = document.getElementById('suhu').value;
    if (selectedOption === "#cToF") {
        showSectionA();
        hideSectionB();
    } else if (selectedOption === "#fToC") {
        showSectionB();
        hideSectionA();
    };
};

function hideSectionB() {
    const sectionB = document.querySelector('section.b');
    sectionB.classList.add('hidden');
};

function showSectionB() {
    const sectionB = document.querySelector('section.b');
    sectionB.classList.remove('hidden');
    document.querySelector('section.b #inputPengguna').value = '';
    document.querySelector('section.b #result').innerText = '';
    document.querySelector('section.b #hasilKalkulasi').innerText = '';
};

function hideSectionA() {
    const sectionA = document.querySelector('section.a');
    sectionA.classList.add('hidden');
};

function showSectionA() {
    const sectionA = document.querySelector('section.a');
    sectionA.classList.remove('hidden');
    document.querySelector('section.a #inputPengguna').value = '';
    document.querySelector('section.a #result').innerText = '';
    document.querySelector('section.a #hasilKalkulasi').innerText = '';
};

