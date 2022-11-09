export default (function(){
    //utilities
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".content-item");
tabItems.forEach((tabItem,index)=>{
    tabItem.onclick =e=>{
        tabItems.forEach(tabItem=>tabItem.classList.remove("active"));
        tabContentItems.forEach(contentItem=>contentItem.classList.remove("active"));
        tabItem.classList.add('active');
        tabContentItems[index].classList.add("active");
    };
});})();



