const modal = document.querySelector('.modal')

const cards  = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener('click',function () 
    {   
        const videoID = card.getAttribute('id')

        window.location.href=`/video?id=${videoID}`

     /*    modal.classList.add('active') 
        modal.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}`    
        */
    })
}
/* document.querySelector('.close-modal').addEventListener('click',function () {
    modal.classList.remove('active')
    modal.querySelector('iframe').src = '';
    
}) */
