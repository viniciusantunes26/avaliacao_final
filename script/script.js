function writeTitle(){
    function activeWorld(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i);
        })
    }
    const title = document.querySelector('.digitando');
    activeWorld(title);
}
writeTitle();