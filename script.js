function navigate(obj)
{
    if(obj.className=="sidebar_submenu_title")
    {
        if(obj.parentNode.children[1].getAttribute("style")=="max-height:500px;") 
            obj.parentNode.children[1].setAttribute("style","max-height:0px;");
        else obj.parentNode.children[1].setAttribute("style","max-height:500px;");
    }
    else
    {
        active_element = document.getElementsByClassName("sidebar_menu_active")[0];
        active_element.setAttribute("class", active_element.className.substring(0, active_element.className.indexOf(" ")));

        obj.setAttribute("class", obj.className+" sidebar_menu_active");
        document.getElementById("content_source").setAttribute("src",obj.innerHTML+".html");
    }
}

function expand_menu()
{
    var menu = document.getElementsByClassName("sidebar")[0];
    var menu_title = document.getElementsByClassName("sidebar_title")[0];
    //var content = document.getElementById("content_source");
    if(menu.getAttribute("style")=="max-width: 0px;")
    { 
        menu_title.setAttribute("style", "opacity: 1;");
        menu.setAttribute("style", "max-width: 240px;");
        //content.setAttribute("style", "width: calc(100vw - 250px);");
    }
    else
    { 
        menu_title.setAttribute("style", "opacity: 0;");
        menu.setAttribute("style", "max-width: 0px;");
        //content.setAttribute("style", "width: 100vw;");
    }
}