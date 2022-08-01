function ggupdate() {
    console.log("Updating List");
      tl = document.getElementById("title").value;
      dsc = document.getElementById("description").value;
      if(localStorage.getItem("itemsjson")==null){
        itemjsonarray = [];
        itemjsonarray.push([tl, dsc]);
        localStorage.setItem("itemsjson", JSON.stringify(itemjsonarray))
      }
      else{
        itemjsonarraystr = localStorage.getItem("itemsjson")
        itemjsonarray = JSON.parse(itemjsonarraystr);
        itemjsonarray.push([tl, dsc]);
        localStorage.setItem("itemsjson", JSON.stringify(itemjsonarray))
      }
      update();
  }
  function update(){
    if(localStorage.getItem("itemsjson")==null){
        itemjsonarray = [];
        localStorage.setItem("itemsjson", JSON.stringify(itemjsonarray))
      }
    else{
        itemjsonarraystr = localStorage.getItem("itemsjson")
        itemjsonarray = JSON.parse(itemjsonarraystr);
      }

      //Table
      let tablebody = document.getElementById("tablebody");
      let str = "";
      itemjsonarray.forEach((element, index) => {
        str +=`
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})" >Delete</button></td>
        </tr>`;
      });
      tablebody.innerHTML = str;

  }
    submitbtn = document.getElementById("submitbtn");
    submitbtn.addEventListener("click", ggupdate);
    update();

    function deleted(itemIndex){
      console.log("Delete",itemIndex);
      itemjsonarraystr = localStorage.getItem("itemsjson")
      itemjsonarray = JSON.parse(itemjsonarraystr);
      //Delete And Save Item
      itemjsonarray.splice(itemIndex, 1);
      localStorage.setItem("itemsjson", JSON.stringify(itemjsonarray));
      update();
    }
    // Clear Full List
    function clearstorage(){
      if(confirm("All the list items will be deleted")){
      console.log("Clearing");
      localStorage.clear();
      update()
      }
    }