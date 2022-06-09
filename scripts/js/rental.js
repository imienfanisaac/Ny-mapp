 
function addRow() {
    
    let table = document.getElementById("tableResponsive");
    let row2 = table.createTBody(-1);
    var cell2 = row2.insertRow(-1)
    cell2.innerHTML = `
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" class="BoxCheck" >
                                </td>
                                <td>
                                    <select name="brand" class="brands" id="brands">
                                        <option value="0">Please select</option>
                                        <option data-area="rental" value="11">BrÃ¶llopskostym</option>
                                        <option data-area="rental" value="9">BrÃ¶llopsvÃ¤st</option> 
                                        <option data-area="rental" value="60">BrÃ¶llopvÃ¤st Barn</option>
                                        <option data-area="rental" value="33">BrÃ¶stknappar Guld</option>
                                        <option data-area="rental" value="32">BrÃ¶stknappar Silver</option>
                                        <option data-area="rental" value="39">Fluga</option>
                                        <option data-area="rental" value="40">Fluga &amp; GÃ¶rdel</option>
                                        <option data-area="rental" value="63">Fodral</option>
                                        <option data-area="rental" value="18">Frack Barn</option>  
                                        <option data-area="rental" value="15">Frack Klassik</option>
                                        <option data-area="rental" value="7">Frack Slim</option>
                                        <option data-area="rental" value="38">Frackfluga</option>
                                        <option data-area="rental" value="23">Frackskjorta</option>
                                        <option data-area="rental" value="25">Frackskjorta Barn</option>
                                        <option data-area="rental" value="30">FrackvÃ¤st Barn</option>
                                        <option data-area="rental" value="29">FrackvÃ¤st Svart</option>
                                        <option data-area="rental" value="28">FrackvÃ¤st Vit</option>
                                        <option data-area="rental" value="12">Frockcoat</option>
                                        <option data-area="rental" value="31">Hatt</option>
                                        <option data-area="rental" value="46">HÃ¤ngslen Svart</option>
                                        <option data-area="rental" value="45">HÃ¤ngslen Vit</option>
                                        <option data-area="rental" value="21">Jaquette</option>
                                        <option data-area="rental" value="20">Jaquette Barn</option>
                                        <option data-area="rental" value="19">Kostym Barn</option>
                                        <option data-area="rental" value="16">Kostym Klassik</option>
                                        <option data-area="rental" value="8">Kostym Navy Slim</option>
                                        <option data-area="rental" value="5">Kostym Svart Slim</option>
                                        <option data-area="rental" value="43">Kravatt</option>                  
                                        <option data-area="rental" value="44">Kravatt &amp; NÃ¤sduk</option>                  
                                        <option data-area="rental" value="13">Lackskor</option>                  
                                        <option data-area="rental" value="35">Manschettknappar Guld</option>                  
                                        <option data-area="rental" value="34">Manschettknappar Silver</option>                  
                                        <option data-area="rental" value="42">NÃ¤sduk</option>                  
                                        <option data-area="rental" value="62">SkopÃ¥se</option>                 
                                        <option data-area="rental" value="37">Slips Svart </option>            
                                        <option data-area="rental" value="36">Slips Vit</option>         
                                        <option data-area="rental" value="17">Smoking Barn</option>                  
                                        <option data-area="rental" value="14">Smoking Klassik</option>                  
                                        <option data-area="rental" value="6">Smoking Slim</option>                  
                                        <option data-area="rental" value="10">Smokingkavaj Vit</option>                  
                                        <option data-area="rental" value="22">Smokingskjorta</option>                  
                                        <option data-area="rental" value="24">Smokingskjorta Barn</option>                  
                                        <option data-area="rental" value="26">Vanlig Skjorta</option>                  
                                        <option data-area="rental" value="27">Vanlig Skjorta Barn</option>
                                    </select>       
                                    
                                </td>
                                <td>                                        
                                    <select name="type" class="brandType" id="type" disabled>
                                        <option value="0">Please select</option>
                                        <option value="1">type 1</option>
                                        <option value="2">type 2</option>
                                        <option value="3">type 3</option>
                                        <option value="4">type 4</option>
                                    </select>

                                    
                                </td>
                                <td>                                        
                                    <select name="size" class="typeSize" id="size" disabled>
                                        <option value="0">Please select</option>
                                        <option value="1">type 1</option>
                                        <option value="2">type 2</option>
                                        <option value="3">type 3</option>
                                        <option value="4">type 4</option>
                                    </select>
                                    
                                </td>
                                <td>
                                    <textarea name="specification" id="specification"></textarea>
                                </td>
                                <td>
                                    <input name="price"  type="number" id="price">
                                </td>
                            </tr>
                        </tbody>`
 dynamicElements()
}
$(document).ready(function () {
    $("#remove").on("click", function () {
        $('table tr').has('input[type="checkbox"]:checked').remove()
    })
});
function enable() {
    document.getElementById("brands").onchange = function () {
        document.getElementById('type').setAttribute("disabled", "disabled");
        if (brands.value !== 'Please select')
            document.getElementById('type').removeAttribute("disabled");
        
        };
    document.querySelector(".brandType").onchange = function () {
        document.querySelector(".typeSize").setAttribute("disabled", "disabled");
        if (this.value !== 'Please select')
            document.querySelector(".typeSize").removeAttribute("disabled");
        };
}enable();
function dynamicElements() {
    const getSelect = document.querySelectorAll('select.brands');
    getSelect.forEach(getSingleSelect => {
      getSingleSelect.addEventListener('change', (e) => {
        if (e.target.value == 'Please select') {
          e.target.parentElement.nextElementSibling.childNodes[0].disabled = true;
        } else {
          e.target.parentElement.nextElementSibling.childNodes[0].disabled = false;
        }
      })
    })
    

    document.querySelector(".brands").onchange = function () {
        document.querySelector('.brandType').setAttribute("disabled", "disabled");
        if (brands.value !== 'Please select')
            document.querySelector('.brandType').removeAttribute("disabled");
        
        };
    document.querySelector(".brandType").onchange = function () {
        document.querySelector(".typeSize").setAttribute("disabled", "disabled");
        if (this.value !== 'Please select')
            document.querySelector(".typeSize").removeAttribute("disabled");
        };
    console.log("are you")
}


const radioButtons = document.querySelectorAll('input[name="insurance"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}        

function showSelected(e) {
    e.preventDefault();
    let newPrice = document.getElementById("price");
    console.log(e);
    if (this.checked) {
        document.getElementById('totalPrice').value = parseInt(this.value) + parseInt(newPrice.value);
        console.log(this.value)
    }
    else {
        document.getElementById("error").innerHTML
            = "*please select an insurance type";
    }
}

document.getElementById("advancePayment").oninput = () => {
    const input = document.getElementById('advancePayment');
    const output = document.getElementById('cancellationFee');
  
    output.value = input.value;
};
document.getElementById("remainingPayment").oninput = () => {
    const remainEl = document.getElementById('remainingPayment');
    const totalSEl = document.getElementById('totalSum');
    const advanceEl = document.getElementById('advancePayment')
    totalSEl.value= parseInt(remainEl.value) + parseInt(advanceEl.value);
};

function SkapaOrder() {
   
    let s4 = () => {
        return Math.floor((Math.random() +1) * 0x3000)
    }
    let s5 = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    document.getElementById("updateMessage").innerHTML= `Update with order id ${s5(1800, 1899)} is creating`;
    const card= document.querySelector("#newSec")
    let newSection = document.createElement("div");
    newSection.innerHTML= `
    <p> Create Order pending <br> <em>Sign above</em></p>
    
    <div class="token">
      <button>Klar</button>
      <p>Order nummer (Token): ${s4()}</p>
    </div>
    `
    card.append(newSection);  
    document.getElementById("createOrder").style.display="none";
    document.getElementById("update").style.display="block";
}

// function tabletMessage() {
//     const card= document.querySelector("#tabletMesg")
//     let newSection = document.createElement("div");
//     newSection.innerHTML= `
//     <h6>Please confirm your order</h6>
//     <p>Product brand   ${} <br> Type ${}<br> Size ${} <br> Price ${}</p>
//     <p> Advance payment ${} <br> Balance Pyment ${} <br> Total Sum ${}</p>
    
//     <div class="orderNumber">
      
//       <p>Write the order number here: <input type="number"></p>
//     </div>
//     <button id="cancel">Cancel</button><button id="next">Next</button>
//     `
//     card.append(newSection);
// }

  
function updateNow() {
    document.getElementById("updateMessage").innerHTML=`Har updateras <i class="fa fa-check-circle"></i>`;
    document.getElementById("createOrder").style.display="inline-flex";
    document.getElementById("update").style.display="none";
    document.getElementById("newSec").style.display="none"
  
}

// let remainingPaymentEl = document.getElementById("remainingPayment");
// let advancePaymentEl = document.getElementById("advancePayment");
// document.getElementById('totalSum').value = (remainingPaymentEl.value + advancePaymentEl.value);

/* function amountPro(){
    let priceEl = document.getElementById("price");
    let totalPriceEl = document.getElementById("totalPrice");
    let insuranceEL = document.getElementsByName('insurance');
    var amount=0;
    for (i=0; i<insuranceEL.length; i++) {
        if (insuranceEL[i].checked) {
           amount = insuranceEL[i].value;
            console.log(amount)
        }
    }
    if (priceEl && amount) {
        totalPriceEl.innerHTML=amount + priceEl;
    }
}amountPro() */
  
    // var amount = document.querySelector('input[name = insurance]:checked').value;
    // console.log(amount);

    // let form = document.getElementById("orderForm");
    // Function to check that the input field is not empty while submitting

    // Event listener that listens for submit event
    // orderForm.addEventListener("submit", function(e){
    //     e.preventDefault();
    // // retrieve values
    // let sellerEl = document.getElementById("seller").value;
    // let brandEl = document.querySelector("brands").value;
    // let typeEl = document.querySelector("type").value;
    // let sizeEl = document.querySelector("size").value;
    // let specEl = document.createElement("specification").value;
    // let priceEl = document.querySelector("price").value;
    // let insuranceEl = document.querySelector("insurance").value;
    // let talpriceEl = document.querySelector("totalPrice").value;
    // let advanceEl = document.querySelector("advancePayment").value;
    // let remainingEl = document.querySelector("remaining.Payment").value;
    // let sistadagEl = document.querySelector("lastDayPayable").value;
    // let totalsumEl = document.querySelector("totalSum").value;
    // let retrieveEl = document.querySelector("retrievedDate").value;
    // let returnEl = document.querySelector("returnDate").value;
    // let cancelfeeEl = document.querySelector("cancellationFee").value;
    
    // // validate username and password fields
    // if( sellerEl=='' || brandEl==''){
    //         alert("Please Fill all required fields");
    //     }
    
    // if( typeEl=='' || sizeEl==''){
    //     alert("Please Fill all required fields");
    // }
    // if( specEl=='' || priceEl==''){
    //     alert("Please Fill all required fields");
    // }

    // if( insuranceEl=='' || brandEl==''){
    //     alert("Please Fill all required fields");
    // }
    // else{
    //     alert("Form submission successful");
    // }
    // if( sellerEl=='' || brandEl==''){
    //     alert("Please Fill all required fields");
    // }
    // else{
    //     alert("Form submission successful");
    // }

    // })
    

//   let fnameEl = document.querySelector("fname");
//   let lnameEl = document.querySelector("lname");
//   let emailEl = document.querySelector("email");
//   let phoneEl = document.querySelector("phone");
//   let addressEl = document.querySelector("address");
//   let zipcodeEl = document.querySelector("zipcode");
//   let cityEl = document.querySelector("city");



  
  // //This function is to submit questions. 
  // const submitQuestion = (question, answers, points) => {
  //   let ordernum = s5()
  //   INSERT INTO `order` (`seller`, `isInsurance`, `totalProductAmount`, `totalAmount`,`advancePaid`, `remainsPaid`, `finalPayDate`, `retrivedDate`, `returnsDate`, `cancellationFee`, `waistSize`, `pantySize`, `sleevesSize`)
  //   VALUES(ordernum, custid, ordertype, sellerid, seller, insurance, totalprice, totalsum, cancellation, advancepayment, remainingpayment, sistadag, retrieved,)
  //   let submitTime = new Date()
  //    // Added a new document in collection "quiz"
  //   db.collection("quiz")
  //     .add({
  //       question: question,
  //       answers: answers,
  //       points: points,
  //       date: submitTime, 
  //     })
  //     .then((docref) => {
  //       console.log("Document successfully written with id!", docref.id);
  //       getData()
  //     })
  //     .catch((error) => {
  //       console.error("Error writing document: ", error);
  //     });
  // };
  
  
  
  //   let insurance = document.getElementById(
  //     "ques-point fa fa-star star checked"
  //   ).value;
  
  //   // Function to send the new question and answers to db, not active yet
  //    submitQuestion(question, allAnswers, points);
  // };
  
  // // And This event is for resetting the form
  // function resetInfo() {
  //   questionEl.innerText = "";
  //   answerOneEl.innerText = "";
  //   answerTwoEl.innerText = "";
  //   answerThreeEl.innerText = "";
  //   pointsEl.innerText = "";
  // };
   // let brandField = document.getElementById("brands");
    // let priceField = document.getElementById("price"); 
    // let advanceField = document.getElementById("advancePayment");
    // let remainField = document.getElementById("remainingPayment");
    // let lastDayPayableField = document.getElementById("lastdaypayable");
    // let retrievedDateField = document.getElementById("retrievedDate");
    // let returnsField = document.getElementById("returnDate");
    

    // if (brandField.value==="Please select") {
    // let ErrorEl = document.getElementById("brandError");
    // ErrorEl.innerHTML="Please fill out this field";
    // }


