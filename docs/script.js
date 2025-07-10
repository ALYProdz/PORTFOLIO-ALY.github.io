const translations = {
  es: {
    inicio: "Inicio",
    sobre: "Sobre mí",
    habilidades: "Habilidades",
    proyectos: "Proyectos",
    certificaciones: "Certificaciones",
    contacto: "Contacto",
    bienvenida: "Bienvenido a mi portafolio",
    intro : "Mi nombre es WEDSON PETIT HOMME",
    aboutDesc: "Soy analista de datos , web desarrollador, y diseno grafico. Me apasiona convertir datos sin procesar en información clara y de gran impacto. Actualmente estoy cursando mi licenciatura en Informática en la Universidad del Pueblo. (UoPeoPle) and have been building my skills across programming, data analysis, and web development. Trabajo con confianza con herramientas como Python, SQL, R, Power BI, Excel, Java, HTML, CSS, JavaScript, Corel Draw y Adobe Photoshop, y cuento con certificaciones que incluyen Google Data Analytics. Google Data Analytics de Google, Analista de datos asociado de DataCamp , etcétera. Nacido en Puerto Príncipe, Haití, aporto una perspectiva global a todo lo que hago y me comunico con fluidez en cuatro idiomas: francés, criollo haitiano, inglés y español. Ya sea creando paneles interactivos, escribiendo código limpio o creando sitios web adaptables, siempre estoy motivado para aprender, mejorar y aportar valor.",
    languageBtn: "🌐 EN"
  },
  en: {
    inicio: "Home",
    sobre: "About Me",
    habilidades: "Skills",
    proyectos: "Projects",
    certificaciones: "Certifications",
    contacto: "Contact",
    bienvenida: "Welcome to my portfolio",
    intro : "My name is WEDSON PETIT HOMME",
    aboutDesc: "I'm a data analyst, web developer and graphic designer. I'm passionate about turning raw data into clear, impactful insights. I'm currently pursuing my BS in Computer Science at the University of the People (UoPeoPle) and have been building my skills across programming, data analysis, and web development. I work confidently with tools like Python, SQL, R, Power BI, Excel, Java, HTML, CSS, JavaScript, Corel Draw and Adobe Photoshop, and hold certifications including Google Data Analytics, DataCamp Associate Data Analyst, and more. Born in Port-au-Prince, Haiti, I bring a global perspective to everything I do and communicate fluently in four languages: French, Haitian Creole, English, and Spanish. Whether I'm creating interactive dashboards, writing clean code, or building responsive websites, I'm always motivated to learn, improve, and add value.",
    languageBtn: "🌐 ES"
  }
};

document.getElementById("language-toggle").addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "es" ? "en" : "es";
  const t = translations[newLang];
  document.documentElement.lang = newLang;

  // Navegador
  const navItems = document.querySelectorAll("nav a");
  navItems[0].textContent = t.inicio;
  navItems[1].textContent = t.sobre;
  navItems[2].textContent = t.habilidades;
  navItems[3].textContent = t.proyectos;
  navItems[4].textContent = t.certificaciones;
  navItems[5].textContent = t.contacto;

  // Secciones
  document.querySelector("#home h1").textContent = t.bienvenida;
  document.querySelector("#home h2").textContent = t.intro;
  document.getElementById("Sobremi").textContent = t.sobre
  document.querySelector("#about p").textContent = t.aboutDesc;
  
  // Botón
  document.getElementById("language-toggle").textContent = t.languageBtn;
});
