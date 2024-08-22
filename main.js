let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:#6F4674;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#6F4674;">Soy estudiante de Relaciones Internacionales y estoy en un curso sobre Desarrollo Front-end junior.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
