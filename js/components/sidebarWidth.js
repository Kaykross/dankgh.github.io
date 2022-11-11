import {sidebarDom} from "../dom.sidebar.js";
const {sidebar,sidebarFooter,sidebarModal} = sidebarDom;

export default (()=>{
    const sidebarSize = ()=>{
        const sidebarWidth = sidebar.clientWidth + "px";
        sidebarFooter.style.width = sidebarWidth; 
        sidebarModal.style.width = sidebarWidth;   
    };
    window.onload = ()=>sidebarSize();
    window.onresize =e=>sidebarSize();
})();