export const handleHorizontalScroll = () => {
    console.log("handleHorizontalScroll");
    let scrollAmount = 0;
    const fadeFactor = 0.9;
    let isAnimating = false;
  
    const horizontalScroll = document.getElementById("horizontal_scroll");
  
    function smoothScroll() {
      if (!horizontalScroll) return;
      const maxScrollLeft = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
  
      // Si près du début ou de la fin, ajustez la quantité de défilement
      if (horizontalScroll.scrollLeft <= 0 && scrollAmount < 0) {
        scrollAmount =
          Math.abs(horizontalScroll.scrollLeft - scrollAmount) < Math.abs(scrollAmount)
            ? horizontalScroll.scrollLeft
            : scrollAmount;
      } else if (horizontalScroll.scrollLeft >= maxScrollLeft && scrollAmount > 0) {
        const distanceToEnd = maxScrollLeft - horizontalScroll.scrollLeft;
        scrollAmount = Math.abs(distanceToEnd - scrollAmount) < Math.abs(scrollAmount) ? distanceToEnd : scrollAmount;
      }
  
      if (Math.abs(scrollAmount) > 0.5) {
        horizontalScroll.scrollLeft += scrollAmount;
        scrollAmount *= fadeFactor;
        requestAnimationFrame(smoothScroll);
      } else {
        isAnimating = false;
      }
    }
  
    if (horizontalScroll) {
      horizontalScroll.addEventListener("wheel", (e) => {
        e.preventDefault();
  
        if (!isAnimating) {
          scrollAmount += e.deltaY * 0.5;
          isAnimating = true;
          requestAnimationFrame(smoothScroll);
        }
      });
    }
  };