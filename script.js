const inputField = document.getElementById('terminal-input');
const outputContainer = document.getElementById('terminal-output');

const commands = {
    help: "Comandos disponibles: <strong>about</strong>, <strong>skills</strong>, <strong>projects</strong>, <strong>clear</strong>, <strong>contact</strong>",
    about: "Samuel -> Desarrollador de Software y Ingeniero de Datos con enfoque en arquitecturas robustas y rendimiento.",
    skills: "Stack principal: Java, Kotlin, Python, Scala, SQL Server, PostgreSQL, Docker, Azure Databricks.",
    projects: "Repos destacados: CalcUp (Android/Supabase), pipelines Big Data con PySpark, y sistemas distribuidos.",
    contact: "Email profesional / GitHub: Revisa los enlaces directos en el perfil superior."
};

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const query = inputField.value.trim().toLowerCase();
        
        // Mostrar comando introducido
        const userCommandP = document.createElement('p');
        userCommandP.innerHTML = `<span style="color: #00f0ff;">$</span> ${inputField.value}`;
        outputContainer.appendChild(userCommandP);

        if (query === 'clear') {
            outputContainer.innerHTML = '<p>Terminal reiniciada.</p>';
        } else if (commands[query]) {
            const responseP = document.createElement('p');
            responseP.innerHTML = commands[query];
            outputContainer.appendChild(responseP);
        } else if (query !== '') {
            const errorP = document.createElement('p');
            errorP.style.color = '#ff0055';
            errorP.innerHTML = `Comando no reconocido: '${query}'. Escribe <strong>'help'</strong>.`;
            outputContainer.appendChild(errorP);
        }

        inputField.value = '';
        outputContainer.scrollTop = outputContainer.scrollHeight;
    }
});