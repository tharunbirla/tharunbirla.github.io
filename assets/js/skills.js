const mySkills = [
    'javascript', 'python', 'java', 'php', 'ruby',
    'kotlin', 'react', 'bootstrap', 'css', 'html',
    'sass', 'bulma', 'tailwind', 'apachecordova', 'opencv',
    'tensorflow', 'mysql', 'mongodb', 'bash', 'firebase',
    'electron', 'laravel', 'puppeteer', 'selenium', 'git'
];

var tagCloud = TagCloud('.skillCloud', mySkills, {
    radius: 250,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true
});