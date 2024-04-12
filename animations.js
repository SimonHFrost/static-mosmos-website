

document.addEventListener('DOMContentLoaded', function() {

    gsap.registerPlugin(TextPlugin);

    gsap.to('.the-text', {
        duration: 1,
        text: {
          value: "Your new text",
          newClass: "class2",
          delimiter: " ",
        },
      });
});