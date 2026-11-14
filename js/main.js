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
    'sobre': `<span class="text-cyber-cyan">SAMUEL // AI & Big Data Engineer & Master's student at Tajamar Tech.</span><br>
              Passionate about building scalable machine learning pipelines, distributed big data architectures, and robust multiplatform software.`,
    'skills': `<span class="text-cyber-cyan">CORE SKILLS MATRIX:</span><br>
               [Big Data]: Azure Databricks, Apache Spark, Scala, SQL, Data Warehousing<br>
               [AI & ML]: Python, TensorFlow, PyTorch, LLMs, Predictive Modeling<br>
               [Backend]: Java, Spring Boot, Supabase, PostgreSQL<br>
               [DevOps]: Docker, Git, GitHub Actions, Linux/Bash`,
    'projectos': `<span class="text-cyber-cyan">FEATURED REPOSITORIES:</span><br>
                 1. <strong class="text-emerald-400">CalcUp</strong> - Kotlin & Supabase Android Calculator & Cloud App<br>
                 2. <strong class="text-emerald-400">Distributed AI Pipeline</strong> - Azure Databricks & PySpark data lake<br>
                 3. <strong class="text-emerald-400">Neural Spring Boot API</strong> - Containerized microservices architecture`,
    'educacion': `<span class="text-cyber-cyan">ACADEMIC RECORDS:</span><br>
                  - Master in AI & Big Data @ Tajamar Tech (Madrid, 2025 - Present)<br>
                  - DAM (Desarrollo de Aplicaciones Multiplataforma) Graduate`,
    'contacto': `<span class="text-cyber-cyan">SECURE CHANNELS:</span><br>
                - Email: samuel@ai-engineer.dev<br>
                - GitHub: github.com/samuel-ai<br>
                - LinkedIn: linkedin.com/in/samuel-ai-data`,
    'sudo contratar': `<span class="text-cyber-emerald font-bold">&gt;&gt; ACCESS GRANTED: EXECUTING RECRUITMENT PROTOCOL.</span><br>
                  Samuel is currently available for AI Engineering, Big Data, and Full-Stack roles! Contact him directly via email or LinkedIn.`
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
    printToTerminal('<span class="text-cyber-dim">Terminal buffer cleared. Type <span class="text-cyber-cyan">help</span> for commands.</span>');
}

function submitContactForm(e) {
    e.preventDefault();
    printToTerminal('<span class="text-cyber-emerald">&gt;&gt; Transmission encrypted and sent successfully! Samuel will respond shortly.</span>', false);
    alert('Transmission sent successfully! Samuel will receive your message via encrypted channel.');
    e.target.reset();
}
