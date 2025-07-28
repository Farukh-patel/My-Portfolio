module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        orbit1: { '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' } },
        orbit2: { '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' } },
        orbit3: { '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' } },
        orbit4: { '0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' } },
        orbit5: { '0%': { transform: 'rotate(0deg) translateX(160px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(160px) rotate(-360deg)' } },
        orbit6: { '0%': { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' } },
        orbit7: { '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' } },
        orbit8: { '0%': { transform: 'rotate(0deg) translateX(220px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(220px) rotate(-360deg)' } },
        orbit9: { '0%': { transform: 'rotate(0deg) translateX(240px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(240px) rotate(-360deg)' } },
        orbit10: { '0%': { transform: 'rotate(0deg) translateX(260px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(260px) rotate(-360deg)' } },
      },
      animation: {
        'orbit-1': 'orbit1 6s linear infinite',
        'orbit-2': 'orbit2 8s linear infinite',
        'orbit-3': 'orbit3 10s linear infinite',
        'orbit-4': 'orbit4 12s linear infinite',
        'orbit-5': 'orbit5 14s linear infinite',
        'orbit-6': 'orbit6 16s linear infinite',
        'orbit-7': 'orbit7 18s linear infinite',
        'orbit-8': 'orbit8 20s linear infinite',
        'orbit-9': 'orbit9 22s linear infinite',
        'orbit-10': 'orbit10 24s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
};
