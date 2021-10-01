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
                    <label> ${array[j].PurchaseOrderTypeAbbreviation}<label> -
                    <label> ${array[j].PurchaseOrderNo}<label>
                </section>
                    `; 
            }
                document.getElementById('main_id').innerHTML = output
        })