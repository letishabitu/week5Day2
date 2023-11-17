var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];



const mainEl = document.querySelector("main");
mainEl.style.backgroundColor= 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.style.textAlign = 'center'; 


mainEl.classList.add('flex-ctr'); 

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height= '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');




for(i=0; i < menuLinks.length; i++)
{
    const aEl = document.createElement('a');
    aEl.setAttribute('href', menuLinks[i].href);
    aEl.append(menuLinks[i].text);
    document.getElementById('top-menu').appendChild(aEl);
}
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
const topMenuLinks = topMenuEl.querySelector('a');
let showingSubMenu = false;

// const topMenuEvent = document.getElementById("top-elemtn");
topMenuEl.addEventListener("click", function(event){
    event.preventDefault(); 
    if(event.target.tagName !== 'a'){
      return;
     
    }
    if(event.target.classList.contains('active')){
      event.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;

    }

});



// const topMenuLinks = document.getElementsByTagName('a');





// mainEl.style.backgroundColor = 'var(--main-bg)'; 
// mainEl.innerHTML = "<h1>SEI Rocks</h1>"; 







