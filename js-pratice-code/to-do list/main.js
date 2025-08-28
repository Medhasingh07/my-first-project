function add(){
            let name=document.getElementById("name").value.trim();
            let age=document.getElementById("age").value.trim();
            let marks=document.getElementById("marks").value.trim();


            let table=document.getElementById("tbody");
           
            let row=document.createElement("tr");


            row.innerHTML=`
            <td>${name}</td>
            <td>${age}</td>
            <td>${marks}</td>
            <td><button onclick="deleteRow(this)">delete</button></td>`
            
            table.appendChild(row);

        }
    

        function deleteRow(a){
            a.parentElement.parentElement.remove();
        }

       