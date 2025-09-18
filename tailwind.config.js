module.exports = {
    theme: {
        extend: {
            keyframes: {
                pulseStroke: {
                    "0%, 100%": { strokeOpacity: 0.6 },
                    "50%": { strokeOpacity: 1 },
                },
            },
            animation: {
                pulseStroke: "pulseStroke 6s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
