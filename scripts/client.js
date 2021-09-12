$( document ).ready( onReady );

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem);
    $( '#employeeLogOut' ).on( 'click', '#deleteBtn', deleteBtn );
}

let inventory = [];

function addItem(){
    let newItem = {
        firstname: $( '#firstname' ).val(),
        lastname: $( '#lastname' ).val(),
        id: $( '#id' ).val(),
        title: $( '#title' ).val(),
        salary: $( '#anualsalary' ).val()
    }

    inventory.push( newItem );
    displayInfo( newItem );

    


}

function displayInfo(object){
    console.log('in displayInfo');
    let el = $( '#employeeLogOut' );

    el.append(
        `<tr>
        <td>${object.firstname}</td>
        <td>${object.lastname}</td>
        <td>${object.id}</td>
        <td>${object.title}</td>
        <td>${object.salary}</td>
        <td><button id="deleteBtn">Delete</button></td>
        </tr>`
        );
        
        let mCost =( '#monthlyTotal' )
        mCost.empty();
        mCost.append( `<ul>$${totalMonthly()}</ul>` )


}

function totalMonthly(){
    let monthlyC = 0;
    for (let i = 0; i < inventory.length; i++) {
        
        monthlyC += Number(inventory[i].salary)
    }
    if( monthlyC > 240000 ){
        $( '#monthlyTotal' ).css( 'background-color', 'red');
        return monthlyC /= 12;
    }
    else {
        return monthlyC /= 12;
    }
}

function deleteBtn(){
    console.log( 'in deleteBtn' );
    $(this).parent().parent().remove();
}


