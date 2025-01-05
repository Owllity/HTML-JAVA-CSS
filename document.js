document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    
    eyes.forEach((eye, index) => {
        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenter = {
            x: eyeRect.left + eyeRect.width / 2,
            y: eyeRect.top + eyeRect.height / 2
        };
        
        const angle = Math.atan2(e.clientY - eyeCenter.y, e.clientX - eyeCenter.x);
        const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);
        
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
    });
});
