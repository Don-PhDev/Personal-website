particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 9,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 175,
        color: "#ffffff",
        opacity: 0.3,
        width: 4,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 2,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

// hover navbar links - not used
const links = document.querySelector(".menu_links").querySelectorAll("a");

links.forEach((element) => {
  element.addEventListener("click", () => {
    links.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
  });
});

// fixed navbar with background color
const navBar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
};

// toggle menu_hamburger
const menuHamburger = document
  .querySelector(".menu_hamburger")
  .querySelector("i");
const menuLinks = document.querySelector(".menu_links");

menuHamburger.addEventListener("click", () => {
  if (menuLinks.classList.contains("active")) {
    menuLinks.classList.remove("active");
    menuHamburger.classList.remove("active");
  } else {
    menuLinks.classList.add("active");
    menuHamburger.classList.add("active");
  }
});
