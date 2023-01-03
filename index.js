
//plus-btn-handler
document.getElementById('first-plus').addEventListener('click' , function(){
handleFirstTicket(true);
calculation();
});
  


// minus-btn-handler
document.getElementById('first-minus').addEventListener('click' , function(){
handleFirstTicket(false);
calculation();
} );

// first-class-ticket
function handleFirstTicket(isAdded) {
const firstInput = document.getElementById('first-input');
const firstTicket = parseInt(firstInput.value);


let newFirstTicket = firstTicket;
if(isAdded == true ){
   
    newFirstTicket = firstTicket +1 ;
}
if(isAdded == false && newFirstTicket>0){
    newFirstTicket = firstTicket - 1 ;

}
firstInput.value = newFirstTicket;
};

// economy 

document.getElementById('eco-plus').addEventListener('click' , function(){
    handleEcoTicket(true);
    calculation();
    
    });
      
    
    
    // minus-btn-handler
    document.getElementById('eco-minus').addEventListener('click' , function(){
    handleEcoTicket(false);
    calculation();
    } );
    
    // first-class-ticket
    function handleEcoTicket(isAdded) {
    const ecoInput = document.getElementById('eco-input');
    const ecoTicket = parseInt(ecoInput.value);
    
    let newEcoTicket = ecoTicket;
    if(isAdded == true ){
        
        newEcoTicket = ecoTicket +1 ;
    }
    if(isAdded == false && newEcoTicket>0){
        newEcoTicket = ecoTicket - 1 ;
    
    }
    ecoInput.value = newEcoTicket;
    };

    //calculation

    function calculation (){
    const newFirstInput = document.getElementById('first-input');
    const newFirstCount = parseInt(newFirstInput.value);

    const newEcoInput = document.getElementById('eco-input');
    const newEcoCount = parseInt(newEcoInput.value);

    const subTotal =  newFirstCount * 150 + newEcoCount * 100;
    document.getElementById('subTotal').innerText = '$' + subTotal;


    const tax = subTotal * 0.1 ;
    document.getElementById('tax').innerText = '$' + tax;

    const total = subTotal + tax ;
    document.getElementById('total').innerText = '$' + total;

    }
    // book now btn 

    
        const book = document.getElementById('book-btn');
    book.addEventListener('click' , function(){
        const wholeArea = document.getElementById('whole');
        wholeArea.style.display = "none";
        document.getElementById('thanks-area').style .display= "block";
        
        
    })

    

