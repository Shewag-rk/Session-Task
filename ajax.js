const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

xhr.onload = ()=>{
    if(xhr.status === 200){
        let response = JSON.parse(xhr.response);
        console.log(response);
        for(let i=0; i<response.length; i++){
            var tableTr = document.createElement('tr');

            var tableTd = document.createElement('td');
            tableTd.innerText = response[i].userId;

            var tableTd1 = document.createElement('td');
            tableTd1.innerText = response[i].id;

            var tableTd2 = document.createElement('td');
            tableTd2.innerText = response[i].title;
            
            var tableTd3 = document.createElement('td');
            tableTd3.innerText = response[i].completed;


            var details = document.createElement("td");
            var detailButton = document.createElement('button')
            detailButton.classList = "details-btn";
            detailButton.textContent = "More";

            

            tableTr.append(tableTd);
            tableTr.append(tableTd1);
            tableTr.append(tableTd2);
            tableTr.append(tableTd3);
            tableTr.append(details);
            details.append(detailButton)
            userDetalisLists.append(tableTr);
        }
    }
    console.log(xhr);
}

xhr.onerror = () =>{
    console.log(xhr);
}
xhr.send();