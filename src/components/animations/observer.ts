const getObserver = (showClassName: string) => {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showClassName);
      }
    });
  });
};

export default getObserver;
