import {settings_menus,terms,buttons,policy_pages} from "../dom.sidebar.js";
const {s_terms_items,policyNoticesLink}= terms;
const {btnCancelPolicy,btnAllowPolicy,btnClosePolicy}= buttons;

const showActive = (e,[...args])=>{
    e.preventDefault();
    policy_pages.forEach(arg=>arg.classList.remove("active"));
    args.forEach(arg=>arg.classList.add("active"));
};
const removeActive = (e,[...args])=>{
    e.preventDefault();
    args.forEach(arg=>arg.classList.remove("active"));
};

const handlePolicyBtns =(policyBtns,boolean)=>{
    policyBtns.forEach(button=>button.onclick=e=>{
        // removeActive(e,policy_pages);
        let dom_match = e.currentTarget.parentNode.parentNode.classList[0].toString();
        settings_menus.forEach(item=> dom_match == item.dataset.id ? item.checked = boolean : '');
    });
};

export default (()=>{
    window.onload = e =>settings_menus.forEach(item=>item.checked = true);
    s_terms_items.forEach(item=>item.item.onclick=e=>showActive(e,item.nodes));
    handlePolicyBtns(btnCancelPolicy,false);
    handlePolicyBtns(btnAllowPolicy,true);
    policyNoticesLink.item.forEach(link=>link.onclick =e=>showActive(e,policyNoticesLink.nodes));
    btnClosePolicy.onclick=e=>removeActive(e,policy_pages);  
})();