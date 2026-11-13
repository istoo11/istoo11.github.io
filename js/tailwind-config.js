tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cyber: {
                    bg: '#030712',
                    card: '#0a0f1d',
                    border: '#1e293b',
                    cyan: '#00f0ff',
                    emerald: '#10b981',
                    purple: '#8b5cf6',
                    pink: '#f43f5e',
                    dim: '#94a3b8'
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                orbitron: ['"Orbitron"', 'sans-serif']
            },
            boxShadow: {
                'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.4)',
                'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.4)',
                'neon-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
                'hud': 'inset 0 0 15px rgba(0, 240, 255, 0.15)'
            }
        }
    }
}
