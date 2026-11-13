const inputField = document.getElementById('terminal-input');
const outputContainer = document.getElementById('terminal-output');

const commands = {
    help: "Comandos disponibles: <br>&nbsp;&nbsp;<strong>about</strong> - Información profesional<br>&nbsp;&nbsp;<strong>skills</strong> - Stack tecnológico principal<br>&nbsp;&nbsp;<strong>projects</strong> - Proyectos destacados (CalcUp, Big Data)<br>&nbsp;&nbsp;<strong>contact</strong> - Enlaces y contacto<br>&nbsp;&nbsp;<strong>clear</strong> - Limpia la terminal",
    about: "Samuel -> Desarrollador de Software e Ingeniero de Datos enfocado en alto rendimiento, arquitecturas escalables y entornos Cloud.",
    skills: "Stack: Java / Spring Boot, Kotlin (Android), Python / PySpark, Scala / Databricks, SQL Server / PostgreSQL, Docker, Azure.",
    projects: "1. CalcUp (App Android TFG con Kotlin y Supabase).<br>2. Pipelines Big Data con PySpark y Azure Databricks.<br>3. Portfolio Cyberpunk interactivo con GitHub Pages.",
    contact: "GitHub: github.com/tu-usuario | LinkedIn disponible en el perfil superior."
};

if (inputField) {
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = inputField.value.trim().toLowerCase();
            
            const userP = document.createElement('p');
            userP.innerHTML = `<span style="color: var(--neon-cyan);">$</span> ${inputField.value}`;
            outputContainer.appendChild(userP);

            if (query === 'clear') {
                outputContainer.innerHTML = '<p>Terminal reiniciada.</p>';
            } else if (commands[query]) {
                const resP = document.createElement('p');
                resP.innerHTML = commands[query];
                outputContainer.appendChild(resP);
            } else if (query !== '') {
                const errP = document.createElement('p');
                errP.style.color = 'var(--neon-pink)';
                errP.innerHTML = `Comando erróneo: '${query}'. Escribe <strong>'help'</strong> para ver la lista de comandos.`;
                outputContainer.appendChild(errP);
            }

            inputField.value = '';
            outputContainer.scrollTop = outputContainer.scrollHeight;
        }
    });
}