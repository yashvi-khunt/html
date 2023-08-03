// function swipeLeft(){
//     cards = document.getElementsByClassName("card");
//     count = 1;
//     for(card of cards){
//         console.log(card.id)
//         display = window.getComputedStyle(card).display
        

//         // if(display != "none"){
//         //     card.style.display = "none";
//         // }
//         // else{
//         //     card.style.display = "flex";
//         // }

//         if(display != "none"){
//             if(count == 1) {
//                 card.style.display = "none";
//                 count = 0;
//             }
//         }
//         else{
//             if(count==0){
//                 card.style.display = "flex";
//                 count = 1;
//             }   
//         }
//         display = window.getComputedStyle(card).display
//         console.log(display)
//     }
// }

function swipeLeft(){
    let cards = document.getElementsByClassName("card")
   let lastId = cards[cards.length-1].id;
    // console.log(firstid)
    for(i=cards.length-1; i>0; i--){
       let newId = cards[i-1].id;
        console.log( i +" "+newId)
        document.getElementById(cards[i].id).id = newId
        console.log(document.getElementById(cards[i].id).id)
    }
    document.getElementById(cards[0].id).id = lastId

}

function swipeRight(){
    let cards = document.getElementsByClassName("card")
    let firstId = cards[0].id;

    for(j=0;j<cards.length-1;j++){
        let newId = cards[j+1].id;
        console.log( j +" "+newId)
        document.getElementById(cards[j].id).id = newId
        console.log(document.getElementById(cards[j].id).id)
    }
    document.getElementById(cards[5].id).id = firstId
}