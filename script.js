// TASK 1

function parse(){

    fetch("orders.json")
        .then(response => response.json())
        .then(data => {
            obj=JSON.parse(JSON.stringify(data))
            var i,j;
            let output=``
            var array = new Array();

            for( i=0; i<data.mvPurchaseOrders.length; i++){
                array.push(data.mvPurchaseOrders[i])
            }
                    
            for( j=0; j<array.length;j++){
                output +=` 
                    <section>
                        <a href="order_page.html" target="popup" onclick="open_window(${array[j].PurchaseOrderNo})"> ${array[j].PurchaseOrderTypeAbbreviation} - ${array[j].PurchaseOrderNo}<a><br><br>
                    </section>
                        `; 
            }

            document.getElementById('main_id').innerHTML = output
            new_array= JSON.stringify(array)
            localStorage.setItem("order_array", new_array);

        })
    }

    function open_window(order_no){
        window.open('order_page.html','name','width=900,height=600')   
        localStorage.setItem("order_no", order_no);
 
    }


// TASK 2
    function show_order(){
        array=JSON.parse(localStorage.getItem("order_array"));
        order_no= localStorage.getItem("order_no") 
        var i,j;
        let output=``
        console.log(array[0].PurchaseOrderDetails[0].PurchaseOrderRowProductSKU)
        for(i=0;i<array.length;i++){
                if(array[i].PurchaseOrderNo == order_no){
                    output +=`
                    <section> 
                        <label>PO Address:</label>  ${array[i].PurchaseOrderAddress}<br><br>
                        <label>PO Contact Person: </label>  ${array[i].PurchaseOrderContactPerson} <br><br>
                        <label>PO Status: </label> ${array[i].PurchaseOrderStatus}<br><br> 

                         <table>
                            <tr>
                                <th> Product SKU </th> 
                                <th> Quantity Ordered </th>
                                <th> Unit Price </th>
                                <th> Total Amount </th>
                            </tr>`

                for(j=0;j<array[i].PurchaseOrderDetails.length;j++){
                    output+=`
                        <tr>
                            <th>${array[i].PurchaseOrderDetails[j].PurchaseOrderRowProductSKU}</th>
                            <th>${array[i].PurchaseOrderDetails[j].PurchaseOrderRowQuantity}</th>
                            <th>${array[i].PurchaseOrderDetails[j].PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</th>
                            <th>${array[i].PurchaseOrderDetails[j].PurchaseOrderRowTotalAmount}</th>    
                        </tr>         
                    `
                }

                     output+=`    
                        </table> 
                    </section>
                    `
                }
                document.getElementById('order_main_id').innerHTML = output         
        } 
        
    }