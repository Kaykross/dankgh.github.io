import { sidebarModals} from "../dom.sidebar.js";
const {sidebarFooterItems,sidebarModal,sidebarModalItems,btnCloseSidebarModal} = sidebarModals;

export default (()=>{
    //sidebar footer modals
    btnCloseSidebarModal.onclick=e=>sidebarModal.classList.remove("active");
    sidebarFooterItems.forEach((item,index)=>{
        item.onclick =e=>{
            sidebarModalItems.forEach(child=>child.classList.remove("active"));
            sidebarFooterItems.forEach(child=>child.classList.remove("active"));
            sidebarModal.classList.add("active");
            sidebarModalItems[index].classList.add("active");
            item.classList.add("active");
        };
    });
})();