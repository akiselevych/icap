export const scrollToSection = (id: string) => {
    const targetSection = document.getElementById(id);
    console.log('ww')
    console.log(targetSection)
    if (targetSection) {
        const offset = window.innerWidth > 500 ? 115 : 40; // учтите смещение, если у вас есть фиксированная
        // навигационная
        // панель
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = targetSection.getBoundingClientRect().top;
        const targetPosition = targetRect - bodyRect - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }
};
