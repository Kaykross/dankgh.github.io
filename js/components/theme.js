import {themes} from "../dom.sidebar.js";
const {whiteThemes,white_themes_classList,darkThemes,dark_themes_classList, storedTheme,body} = themes;


export default (()=>{
    console.log(storedTheme);
    const loadTheme =themes=>{
        if(storedTheme == "") localStorage.setItem('storedTheme',"sunny-theme");
        themes.forEach(theme=>{
            let condition = theme.parentNode.parentNode.dataset.theme == storedTheme;
            if(condition){
            body.classList.add(storedTheme);
            theme.checked = true;
            }
        });
    };

    document.addEventListener("DOMContentLoaded",()=>{ 
        loadTheme(whiteThemes);
        loadTheme(darkThemes);
    });

    if(performance.getEntriesByType("navigation")[0].type == 'reload'){
        loadTheme(whiteThemes);
        loadTheme(darkThemes);
    }

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
    



})();