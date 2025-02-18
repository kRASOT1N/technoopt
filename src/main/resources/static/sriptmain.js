document.addEventListener("DOMContentLoaded", function() {
    const orbitItems = document.querySelectorAll(".orbit-item");
    let angle = 0;
    const radius = 150; // Радиус вращения – расстояние от центра (подберите по вкусу)
    const speed = 0.02; // Скорость вращения (измените при необходимости)

    function rotateLogos() {
        angle += speed;
        orbitItems.forEach((item, index) => {
            // Каждый элемент равномерно распределён по окружности
            const theta = angle + index * (2 * Math.PI / orbitItems.length);
            const x = Math.cos(theta) * radius;
            const y = Math.sin(theta) * radius;

            // Базовая позиция – центр (50%, 50%), затем смещение на (x, y)
            item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
        requestAnimationFrame(rotateLogos);
    }

    rotateLogos();
});
