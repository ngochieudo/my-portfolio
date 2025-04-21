export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Pep Booking",
    des: "A full stack booking application with a focus on user experience and performance.",
    img: "/pepbooking.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nest.svg",],
    link: "https://github.com/ngochieudo/final-project",
  },
  {
    id: 2,
    title: "My portfolio",
    des: "A simple portfolio website showcasing my projects and skills using various UI libraries.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/mui.svg"],
    link: "https://github.com/ngochieudo/my-portfolio",
  },
];


export const timelineData = [
  {
    title: "Early 2025",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Finished the OJT training as developer intern at FPT Software.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          At FPT Software, I am working on how to build a web application using JavaScript language. 
          I am also learning how to use the latest technologies and frameworks to build modern web applications like Nest.js and Angular. 
        </p>
        <div className="">
          <img
            src="/FPT_Software_logo.svg"
            className="h-20 max-w-[400px] rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Graduated from University of Greenwich with a degree in Information Technology.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I have learned a lot of knowledge about basic programming like OOP, and programming languages like Java, C#, and Python.
          I also learned how to build web applications using HTML, CSS, and JavaScript to build a simple web application.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/University of Greenwich.svg"
            className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];