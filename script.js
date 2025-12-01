const buttons= document.querySelectorAll(".btn");

for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener("click", function(){
        const color= buttons[i].id;
        document.body.style.backgroundColor=color;
        
    })
}