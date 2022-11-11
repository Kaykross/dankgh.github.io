import { sidebarDom } from "../dom.sidebar.js";
const {navLinks} = sidebarDom;

export default (()=>{
    navLinks.forEach(navLink=>{
        navLink.onclick =e=>{
            navLinks.forEach(link=>link.classList.remove('active'));
            navLink.classList.add("active");   
        };
    });
})();

