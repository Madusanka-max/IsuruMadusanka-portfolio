// Terminal typing animation
export async function initializeTerminal() {
    const terminalLines = [
        { prompt: '> whoami', output: '👨‍💻 Isuru Madusanka Rodrigo' },
        { prompt: '> passion', output: '🌐 Web Development, Open Source, Blockchain, IoT' },
        { prompt: '> mission', output: '🚀 Build secure, scalable tech that matters.' }
    ];
    
    const terminal = document.getElementById('terminal-text');
    const typeDelay = 50; // Delay between each character
    const lineDelay = 500; // Delay between lines
    const loopDelay = 3000; // Delay before starting the next loop

    async function typeTerminal() {
        // Clear previous content
        terminal.innerHTML = '';
        
        for (const line of terminalLines) {
            // Create and add prompt line
            const promptDiv = document.createElement('div');
            promptDiv.className = 'terminal-line';
            promptDiv.innerHTML = `<span class="terminal-prompt">${line.prompt}</span>`;
            terminal.appendChild(promptDiv);
            
            // Animate prompt appearing
            await new Promise(resolve => setTimeout(resolve, 100));
            promptDiv.classList.add('visible');
            
            await new Promise(resolve => setTimeout(resolve, lineDelay));
            
            // Create and add output line
            const outputDiv = document.createElement('div');
            outputDiv.className = 'terminal-line terminal-output';
            terminal.appendChild(outputDiv);
            
            // Type out each character of the output
            for (let i = 0; i < line.output.length; i++) {
                outputDiv.textContent = line.output.slice(0, i + 1);
                await new Promise(resolve => setTimeout(resolve, typeDelay));
            }
            
            outputDiv.classList.add('visible');
            await new Promise(resolve => setTimeout(resolve, lineDelay));
        }

        // Wait before starting the next loop
        await new Promise(resolve => setTimeout(resolve, loopDelay));

        // Fade out existing content
        const lines = terminal.querySelectorAll('.terminal-line');
        lines.forEach(line => {
            line.style.transition = 'opacity 0.5s';
            line.style.opacity = '0';
        });

        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Start the loop again
        typeTerminal();
    }

    // Start the initial loop
    typeTerminal();
}