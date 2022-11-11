const select = e=>document.querySelector(e);
const selectAll =e=> document.querySelectorAll(e);

// document body
const body = document.body;


//sidebar
const sidebar = select('.sidebar');
const navLinks = selectAll('.nav-link');
const sidebarFooter = select(".sidebar-footer");
const sidebarModal = select(".sidebar .sidebar-modal");

//themeChexkboxes and themeList
const whiteThemes = selectAll(".light-content input");
const darkThemes = selectAll(".dark-content input");
const white_themes_classList = ['white-theme','gray-theme','sunny-theme'];
const dark_themes_classList = ["dark-theme","black-theme"];
const storedTheme =  localStorage.getItem("storedTheme");

//sidebar footer modals
const sidebarFooterItems = [...sidebarFooter.children];
const sidebarModalItems = selectAll(".sidebar-modal .modal-item");
const btnCloseSidebarModal = select(".sidebar-modal-btn-close");
//sidebar footer settings children
const s_cookie = select(".settings.modal-item #cookie");
const s_data_collection = select(".settings.modal-item #data-collection");
const s_data_protection = select(".settings.modal-item #data-protection");
const s_data_storage = select(".settings.modal-item #data-storage");
const s_privacy_policy = select(".settings.modal-item #privacy-policy");
const s_install_pwa = select(".settings.modal-item #install-pwa");

//header settings contact
const btn_toggle_sidebar = select('button.btn-toggle-sidebar');
const btn_Header_Contact_Us = select(".btn-header-contact-us");
const toolbar_2_menuItems = selectAll('.tootbar-2-menu-item a.menu-item');
const tootbar_2_mobile = select(".tootbar-2-mobile");

//content
const content = select('.content');
const bodyOverlay = select("body .body-overlay");
const topBarNavs = select(".top-bar-navs");

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
const s_terms_items = [
    {item: s_privacy_policy, nodes:[siteOverlay,sitePolicies,dataPolicies]},
    {item: s_cookie, nodes:[siteOverlay,sitePolicies,privacyNotices,cookieNotice]},
    {item: s_data_storage, nodes:[siteOverlay,sitePolicies,privacyNotices,storageNotice]},
    {item: s_data_collection, nodes:[siteOverlay,sitePolicies,privacyNotices,dataCollectionNotice]},
    {item: s_data_protection, nodes:[siteOverlay,sitePolicies,privacyNotices,dataProtectionNotice]},
];
const policyNoticesLink = {item: policyNoticesLinks, nodes:[siteOverlay,sitePolicies,privacyNotices,dataPolicies]};

let selectors = [select,selectAll];
let sidebarDom = {sidebar,navLinks,sidebarFooter,sidebarModal};
let sidebarModals = {sidebarFooterItems,sidebarModal,sidebarModalItems,btnCloseSidebarModal};
let themes = {whiteThemes,white_themes_classList,darkThemes,dark_themes_classList, storedTheme,body};
let cooky = [s_cookie,s_data_collection,s_data_protection,s_data_storage,s_privacy_policy,s_install_pwa];
let buttons = {btn_toggle_sidebar,btn_Header_Contact_Us,btnAllowPolicy,btnCancelPolicy,btnClosePolicy};
let contents = {content,toolbar_2_menuItems,bodyOverlay,tootbar_2_mobile,topBarNavs};
let terms = {
    siteOverlay,sitePolicies,privacyNotices,
    cookieNotice,dataCollectionNotice,storageNotice,
    dataProtectionNotice,dataPolicies,s_terms_items,policyNoticesLink
};

export {selectors,sidebarDom,sidebarModals,themes,contents,cooky,buttons,terms,settings_menus,policy_pages};
