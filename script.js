function calculateIMC() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convertimos a metros
    const weight = parseFloat(document.getElementById("weight").value);

    // Validación de campos vacíos o valores no válidos
    if (isNaN(age) || isNaN(height) || isNaN(weight) || height === 0 || age <= 0 || weight <= 0) {
        document.getElementById("result").innerText = "Por favor, completa todos los campos correctamente.";
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);

    let classification;
    if (imc < 18.5) {
        classification = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classification = "Sobrepeso";
    } else {
        classification = "Obesidad";
    }

    let resultMessage = `Tu IMC es ${imc} (${classification}).`;
    
    document.getElementById("result").innerText = resultMessage;
}

// Cambia el tema de la pagina
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

// Cambia el tema al hacer clic en el botón
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent = "Light Mode";  
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    }
});