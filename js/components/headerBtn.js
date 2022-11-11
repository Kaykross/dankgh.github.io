import { contents,sidebarDom,buttons } from "../dom.sidebar.js";
const {content,toolbar_2_menuItems,bodyOverlay,tootbar_2_mobile,topBarNavs} = contents;
const {sidebar} = sidebarDom;
const {btn_toggle_sidebar,btn_Header_Contact_Us} = buttons;

const breakpoints = [
    {min:"0px",max:"320px"},{min:"321px",max:"480px"},
    {min:"481px",max:"640px"},{min:"641px",max:"720px"},
];
const mediaQueries = breakpoints.map(breakpoint=>
    window.matchMedia(`(min-width:${breakpoint.min}) and (max-width:${breakpoint.max})`));

export default (()=>{
    //toggle sidebar
    btn_toggle_sidebar.onclick=e=>{
        sidebar.classList.toggle('toggle-sidebar-margin');
        content.classList.toggle('toggle-content-margin');
        mediaQueries.forEach(query=>{
            if(query.matches) {
                console.log(query);
                if(sidebar.classList.contains("toggle-sidebar-margin")){
                    bodyOverlay.classList.remove("active");
                }
                else bodyOverlay.classList.add("active");
                
            }
        });  
    };
    btn_toggle_sidebar.click();
    bodyOverlay.onclick =e=>{
        sidebar.classList.toggle('toggle-sidebar-margin');
        bodyOverlay.classList.remove("active");
    };

    //header settings contact
    btn_Header_Contact_Us.onclick =e=>btn_Header_Contact_Us.classList.toggle("active");

    //toolbar-2 menu items
    toolbar_2_menuItems.forEach(menu=>{
        menu.onclick=e=>{
            toolbar_2_menuItems.forEach(menu=> menu.classList.remove("active"));
            menu.classList.toggle("active");  
        };
    });

    //topbar navs
    tootbar_2_mobile.onclick =e=>{
        topBarNavs.classList.toggle("active");
    };
    console.log(topBarNavs.children);
    //active topbar menu
    [...topBarNavs.children].forEach(menu=>{
        menu.onclick=e=>{
            [...topBarNavs.children].forEach(menu=> menu.classList.remove("active"));
            menu.classList.toggle("active");  
        };
    });
})();