

document.addEventListener('DOMContentLoaded', function() {

    gsap.registerPlugin(SplitText);

    let split = SplitText.create(".the-text", {type: "chars,words"});
    
    gsap.to(split.chars, {
      y: "-50%",
      duration: 0.1,
      ease: "sine.inOut",
      stagger: {
        each: 0.02,
        repeat: 1,
        yoyo: true
      }
    });
});



