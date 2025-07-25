


const itemDoMenu = document.querySelectorAll("#menuItem")

itemDoMenu.forEach((e)=>{e.addEventListener('click', ()=>{
        itemDoMenu.forEach((i) =>  i.querySelector('#submenu')?.classList.remove('hide'));
        e.querySelector('#submenu').classList.toggle('hide') }) })

