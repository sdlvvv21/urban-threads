export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string, delay: number = 0) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, delay);
  };

  return { scrollToSection };
}; 