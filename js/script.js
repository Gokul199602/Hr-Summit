//I declared toggle so that the side nav bar can appear and dissapear
var toggle = false;

$(document).ready(function()
{
    //This function is to bring the login screen
    $('.login').click(function(){
        $('.bodycontainer').css('display','none');
        $('.loginContainer').css('display','inline');
    });

    //This is to toggle the side navbar

    $('.block').click(function(){
        if(toggle==false)
        {
            $('.sidenavbar').css('display','inline');
            toggle=true;
        }
        else
        {
            $('.sidenavbar').css('display','none'); 
            toggle=false
        }
    });
});