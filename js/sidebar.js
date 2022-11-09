import "./utilities.js";

const select = e=>document.querySelector(e);
const selectAll =e=> document.querySelectorAll(e);

const btn = select('button.close');
const navLinks = selectAll('.nav-link');
const body = document.body;
const sidebar = select('.sidebar');
const sidebarFooter = select(".sidebar-footer");
const sidebarModal = select(".sidebar .sidebar-modal");
const whiteThemes = selectAll(".light-content input");
const darkThemes = selectAll(".dark-content input");
const white_themes_classList = ['white-theme','gray-theme','sunny-theme'];
const dark_themes_classList = ["dark-theme","black-theme"];
const storedTheme =  localStorage.getItem("storedTheme");

let sidebarWidth = sidebar.clientWidth + "px";
sidebarFooter.style.width = sidebarWidth;
sidebarModal.style.width = sidebarWidth;

window.onresize =e=>{
    sidebarWidth = sidebar.clientWidth + "px";
    sidebarFooter.style.width = sidebarWidth; 
    sidebarModal.style.width = sidebarWidth; 
};

if(storedTheme == "") localStorage.setItem('storedTheme',"sunny-theme");

document.addEventListener("DOMContentLoaded",()=>{
    console.info(storedTheme);
    whiteThemes.forEach(input=>{
       let condition = input.parentNode.parentNode.dataset.theme == storedTheme;
       if(condition){
        body.classList.add(storedTheme);
        input.checked = true;
       }
    });
});


const changeTheme = (theme_checkboxes,themes)=>{
    theme_checkboxes.forEach((input,index)=>{
        input.onchange=e=>{ 
            theme_checkboxes.forEach(checkbox=>checkbox != e.target? checkbox.checked = false : null);
            if(input.checked) {
                document.body.classList = '';
                document.body.classList.add(themes[index]);
                localStorage.setItem('storedTheme',themes[index]);
            } 
            else{
                document.body.classList.remove(themes[index]);
                localStorage.setItem('storedTheme','sunny-theme');
                body.classList.add('sunny-theme');
                theme_checkboxes[themes.indexOf('sunny-theme')].checked = true;

            }
        };
    });
};

changeTheme(whiteThemes,white_themes_classList);
changeTheme(darkThemes,dark_themes_classList);





const bgRadial =(theme,oldBgRadial,newBgRadial)=>{
    if(body.classList.contains(theme)){
        selectAll(`.${oldBgRadial}`).forEach(node=>{
            node.classList.add(oldBgRadial);
            node.classList.remove(newBgRadial);
        });
    }
};




if(body.classList.contains('dark-theme')){
    selectAll('.bg-white-radial').forEach(node=>{
        node.classList.add("bg-dark-radial");
        node.classList.remove("bg-white-radial");
    });
}

btn.onclick=e=>{
    select('.sidebar').classList.toggle('btn-toggle-sidebar');
    select('.content').classList.toggle('btn-toggle-content');
};
navLinks.forEach(navLink=>{
    navLink.onclick =e=>{
        navLinks.forEach(link=>link.classList.remove('active'));
        navLink.classList.add("active");
        // let cnd = navLink.nextElementSibling.classList.contains("nav-dropdown");
        // if(cnd) navLink.nextElementSibling.classList.toggle('active');
        
        // console.info();
    };
});

//sidebar footer modals
const sidebarFooterItems = [...sidebarFooter.children];
const sidebarModalItems = selectAll(".sidebar-modal .modal-item");
select(".sidebar-modal-btn-close").onclick=e=>sidebarModal.classList.remove("active");
sidebarFooterItems.forEach((item,index)=>{
    item.onclick =e=>{
        sidebarModalItems.forEach(child=>child.classList.remove("active"));
        sidebarFooterItems.forEach(child=>child.classList.remove("active"));
        sidebarModal.classList.add("active");
        sidebarModalItems[index].classList.add("active");
        item.classList.add("active");
    };
});


//header settings contact
const btn_Header_Contact_Us = select(".btn-header-contact-us");
btn_Header_Contact_Us.onclick =e=>btn_Header_Contact_Us.classList.toggle("active");





//sidebar footer themes children
// const light_themes = selectAll(".light-theme .switch input");
// const dark_themes = selectAll(".dark-theme .switch input");


//sidebar footer settings children
const s_cookie = select(".settings.modal-item #cookie");
const s_data_collection = select(".settings.modal-item #data-collection");
const s_data_protection = select(".settings.modal-item #data-protection");
const s_data_storage = select(".settings.modal-item #data-storage");
const s_privacy_policy = select(".settings.modal-item #privacy-policy");
const s_install_pwa = select(".settings.modal-item #install-pwa");

//content site policies selectors
const siteOverlay = select(".site-overlay");
const sitePolicies = select(".site-policies");
const privacyNotices = select(".site-policies .privacy-notices");
const cookieNotice = select(".site-policies .privacy-notices .cookie-notice");
const dataCollectionNotice = select(".site-policies .privacy-notices .data-collection-notice");
const storageNotice = select(".site-policies .privacy-notices .storage-notice");
const dataProtectionNotice = select(".site-policies .privacy-notices .data-protection-notice");
const dataPolicies = select(".site-policies .data-policies");
const policyNoticesLinks = selectAll(".site-policies .privacy-notices a");
const btnClosePolicy = select(".site-policies .btn-close-policy"); 
const btnCancelPolicy = selectAll(".site-policies .privacy-notices .cancel");
const btnAllowPolicy = selectAll(".site-policies .privacy-notices .allow");

let settings_menus = [s_cookie,s_data_collection,s_data_protection,s_data_storage,s_privacy_policy];
window.onload = e =>settings_menus.forEach(item=>item.checked = true);

let policy_pages =[
    siteOverlay,
    sitePolicies,
    privacyNotices,
    cookieNotice,
    dataCollectionNotice,
    storageNotice,
    dataProtectionNotice,
    dataPolicies
];


const showActive = (e,[...args])=>{
    e.preventDefault();
    policy_pages.forEach(arg=>arg.classList.remove("active"));
    args.forEach(arg=>arg.classList.add("active"));
};
const removeActive = (e,[...args])=>{
    e.preventDefault();
    args.forEach(arg=>arg.classList.remove("active"));
};


s_privacy_policy.onclick = e => showActive(e,[siteOverlay,sitePolicies,dataPolicies]);
s_cookie.onclick = e => showActive(e,[siteOverlay,sitePolicies,privacyNotices,cookieNotice]);
s_data_storage.onclick = e => showActive(e,[siteOverlay,sitePolicies,privacyNotices,storageNotice]);
s_data_collection.onclick =e=> showActive(e,[siteOverlay,sitePolicies,privacyNotices,dataCollectionNotice]);
s_data_protection.onclick = e => showActive(e,[siteOverlay,sitePolicies,privacyNotices,dataProtectionNotice]);
policyNoticesLinks.forEach(link=>link.onclick =e=>showActive(e,[siteOverlay,sitePolicies,privacyNotices,dataPolicies]));
btnClosePolicy.onclick=e=>removeActive(e,policy_pages);
btnCancelPolicy.forEach(button=>button.onclick=e=>{
    // removeActive(e,policy_pages);
    let dom_match = e.currentTarget.parentNode.parentNode.classList[0].toString();
    settings_menus.forEach(item=> dom_match == item.dataset.id ? item.checked = false : '');
});
btnAllowPolicy.forEach(button=>button.onclick=e=>{
    // removeActive(e,policy_pages);
    let dom_match = e.currentTarget.parentNode.parentNode.classList[0].toString();
    settings_menus.forEach(item=> dom_match == item.dataset.id ? item.checked = true : '');
});
