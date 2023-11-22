const con=document.querySelector(".model_wrappper");
const z=document.querySelector(".overlay");
const follow=document.querySelector(".model_wrappper1")
const openmodel=()=>{
    console.log("model is open");
    con.classList.add("active");
    z.classList.add("overlayactive");
    
};
const openmodel1=()=>
{
    follow.classList.add("active");
    z.classList.add("overlayactive");
};
const closemodel=()=>
{
    console.log("model is close");
    con.classList.remove("active");
    z.classList.remove("overlayactive");

};
const closemodel1=()=>
{
    follow.classList.remove("active");
    z.classList.remove("overlayactive");
};