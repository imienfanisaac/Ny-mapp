 
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
    

    enable()
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

function createORDER() {
   
    let signToken = () => {
        return Math.floor((Math.random() +1) * 0x3000)
    }
    let orderId = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    document.getElementById("updateMessage").innerHTML= `Update with order id ${orderId(1800, 1899)} is creating`;
    const card= document.querySelector("#newSec")
    let newSection = document.createElement("div");
    newSection.innerHTML= `
    <p> Create Order pending <br> <em>Sign above</em></p>
    
    <div class="token">
      <button>Klar</button>
      <p>Order nummer (Token): ${signToken()}</p>
    </div>
    `
    card.append(newSection);  
    document.getElementById("createOrder").style.display="none";
    document.getElementById("update").style.display="block";
}



  
function updateOrder() {
    document.getElementById("updateMessage").innerHTML=`Har updateras <i class="fa fa-check-circle"></i>`;
    document.getElementById("createOrder").style.display="inline-flex";
    document.getElementById("update").style.display="none";
    document.getElementById("newSec").style.display="none"
  
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
  // // And This event is for resetting the form
  // function resetInfo() {

  // };
    


