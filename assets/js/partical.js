tsParticles.load("tsparticles", {
    fpsLimit: 24,
    fullScreen: {
        enable: false
    },
    background: {
        color: "#111111"
    },
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#727272" },
        move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 50
        },
        opacity: {
            animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "max",
                count: 1,
                destroy: "min"
            },
            value: {
                min: 0,
                max: 0.5
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 5 }
        }
    }
});
