document.addEventListener("DOMContentLoaded", function()
{
    
})

$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});


AOS.init();

var e99=document.getElementById("e99-anim");
var text=new Blotter.Text(
    "e86",{
        family:"Lato",
        size:150,
        fill:"#f8d06b",
    });
var material=new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value=0.01;
material.uniforms.uPointRadius.value=0.7;
material.uniforms.uSpeed.value=3;

var blotter=new Blotter(material,{
    texts:text
});
var scope=blotter.forText(text);
scope.appendTo(e99);
