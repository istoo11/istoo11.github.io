
// Real-time clock update
function updateClock() {
    const now = new Date();
    const timeString = now.toUTCString().split(' ')[4] + ' UTC';
    const clockEl = document.getElementById('system-clock');
    if (clockEl) clockEl.textContent = timeString;

    const cpuEl = document.getElementById('cpu-load');
    if (cpuEl) {
        const randomLoad = Math.floor(Math.random() * 15) + 10;
        cpuEl.textContent = randomLoad + '%';
    }
}
setInterval(updateClock, 1000);
updateClock();


// Terminal logic
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

const systemResponses = {
    'ayuda': `<span class="text-cyber-cyan font-bold">COMANDOS DISPONIBLES:</span><br>
                - <strong class="text-cyber-emerald">sobre</strong>: Conoce mi perfil como desarrollador<br>
                - <strong class="text-cyber-emerald">skills</strong>: Tecnologías y habilidades técnicas<br>
                - <strong class="text-cyber-emerald">proyectos</strong>: Proyectos personales y repositorios GitHub<br>
                - <strong class="text-cyber-emerald">educacion</strong>: Formación académica y certificaciones<br>
                - <strong class="text-cyber-emerald">experiencia</strong>: Experiencia profesional<br>
                - <strong class="text-cyber-emerald">contacto</strong>: Enlaces para contactar conmigo<br>
                - <strong class="text-cyber-emerald">sudo contratar</strong>: ¿Buscas desarrollador? ¡Hablemos!<br>
                - <strong class="text-cyber-emerald">clear</strong>: Limpiar la terminal`,

    'sobre': `<span class="text-cyber-cyan">SAMUEL // Estudiante del master de AI & Big Data Engineer en Tajamar Tech</span><br>
              Apasionado por el desarrollo de software, la ingeniería de datos y la inteligencia artificial, con especial interés en el desarrollo backend, las bases de datos y la creación de soluciones tecnológicas eficientes y escalables.`,

    'skills': `<span class="text-cyber-cyan">HABILIDADES TÉCNICAS:</span><br>
                [Desarrollo Backend]: Java, Spring Boot, Python, Programación Orientada a Objetos, APIs REST<br>
                [Bases de Datos]: SQL, SQL Server, Azure SQL, PostgreSQL, MySQL, Supabase<br>
                [Datos e IA]: Python, Búsqueda Vectorial, Embeddings, Ollama, SQL Server Vector Search<br>
                [Desarrollo Web]: HTML, CSS, JavaScript, Angular<br>
                [Cloud y DevOps]: Microsoft Azure, Git, GitHub, Git Flow, Docker<br>
                [Metodologías]: Scrum, Programación Modular, Patrones de Diseño, Trabajo en Equipo`,

    'proyectos': `<span class="text-cyber-cyan">PROYECTOS DESTACADOS:</span><br>
                1. <strong class="text-emerald-400">CalcUp</strong> - Aplicación Android desarrollada con Kotlin y Supabase, con gestión de usuarios, ejercicios y clasificación de puntuaciones.<br>
                2. <strong class="text-emerald-400">Proyecto DP-800</strong> - Aplicación web con Python, FastAPI y SQL Server, centrada en la búsqueda semántica mediante embeddings.`,

    'educacion': `<span class="text-cyber-cyan">FORMACIÓN ACADÉMICA:</span><br>
                - <strong class="text-emerald-400">Máster en IA & Big Data</strong> - Tajamar Tech (Madrid)<br>
                - <strong class="text-emerald-400">Técnico Superior DAM</strong> - IES Europa (Rivas-Vaciamadrid)<br>
                - <strong class="text-emerald-400">Bachillerato</strong> - IES Europa (Rivas-Vaciamadrid)`,

    'contacto': `<span class="text-cyber-cyan">MÉTODOS DE CONTACTO:</span><br>
                - Email: <a href="mailto:Romansami40@gmail.com" class="text-emerald-400 hover:underline">Romansami40@gmail.com</a><br>
                - GitHub: <a href="https://github.com/istoo11" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">github.com/istoo11</a><br>
                - LinkedIn: <a href="https://es.linkedin.com/in/samuel-roman-carrasco-656a29238" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">LinkedIn Samuel Roman</a>`,

    'sudo contratar': `<span class="text-cyber-emerald font-bold">&gt;&gt; PROTOCOLO DE CONTRATACIÓN ACTIVADO.</span><br>
                    Samuel está abierto a nuevas oportunidades profesionales en desarrollo de software, backend, bases de datos e ingeniería de datos. Si buscas un perfil con ganas de aprender, crecer y aportar a un equipo tecnológico, puedes contactar con él a través de su correo electrónico o LinkedIn.`,
};


function printToTerminal(html, isCommand = false) {
    const div = document.createElement('div');

    if (isCommand) {
        div.innerHTML = `<span class="text-cyber-cyan font-bold">samuel@portfolio:~$</span> ${html}`;
    } else {
        div.innerHTML = html;
    }

    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


function handleCommand(e) {
    e.preventDefault();

    const cmd = terminalInput.value.trim().toLowerCase();
    if (!cmd) return;

    printToTerminal(cmd, true);
    terminalInput.value = '';

    if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
        printToTerminal('<span class="text-cyber-dim">Terminal buffer cleared. Type <span class="text-cyber-cyan">help</span> for commands.</span>');
        return;
    }

    if (systemResponses[cmd]) {
        printToTerminal(systemResponses[cmd]);
    } else {
        printToTerminal(`<span class="text-red-400">Command not recognized: "${cmd}". Type <span class="text-cyber-cyan">help</span> for valid commands.</span>`);
    }
}


function runCommand(cmdText) {
    terminalInput.value = cmdText;
    const fakeEvent = { preventDefault: () => {} };
    handleCommand(fakeEvent);
}


function clearTerminal() {
    terminalOutput.innerHTML = '';
    printToTerminal('<span class="text-cyber-dim">Buffer de terminal limpiado. Escribe <span class="text-cyber-cyan">ayuda</span> para ver los comandos disponibles.</span>');
}

// Contact form - WhatsApp integration
function submitContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Construir el mensaje de WhatsApp
    const whatsappMessage =
        `¡Hola Samuel! He contactado contigo desde tu portfolio.\n\n` +
        `👤 Nombre: ${name}\n` +
        `📧 Email: ${email}\n\n` +
        `💬 Mensaje:\n${message}`;

    const phone = "652093039";

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

    printToTerminal(
        '<span class="text-cyber-emerald">&gt;&gt; WhatsApp transmission initialized successfully!</span>',
        false
    );
    
    e.target.reset();
}
