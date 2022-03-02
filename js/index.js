displayNotes();


function allNote(){
  let allNotes = localStorage.getItem('notes');
  if(allNotes==null){
    note = [];
  }
  else{
    note = JSON.parse(allNotes);
  }
}

// function CheckBox(){
//   let favClick = document.querySelector('#favClick').checked;
//   if(favClick.checked ==true){
//     favClick.value = "Stared";
//   }
//   else{
//     favClick.value = "Unstared";
//   }
// }



function addNote(){
  let addTitle = document.querySelector('#addTitle');
  let addNote = document.querySelector('#addNote');
  let favClick = document.querySelector('#favClick');
  let noteObj = {
    Title : addTitle.value,
    Note :addNote.value,
    Favourite : favClick.value
  }

  allNote();

  if(addTitle.value == ""){
    addTitle.style.boxShadow = '0px 0px 10px red';
    addNote.style.boxShadow = '';
    addTitle.focus();
  }
  else if(addNote.value == ""){
    addNote.style.boxShadow = '0px 0px 10px red';
    addTitle.style.boxShadow = '';
    addNote.focus();
  }
  else{
    let favClickAgain = document.querySelector('#favClick').checked;
    if(favClickAgain === true){
      noteObj.Favourite = "Stared";

      note.push(noteObj);
      localStorage.setItem("notes",JSON.stringify(note));
      addTitle.value = "";
      addNote.value = "";
      favClick.checked = false;
      displayNotes();
      addTitle.style.boxShadow = '';
      addNote.style.boxShadow = '';

      // let stared = document.querySelector('#stared');
      // stared.style.color = 'red';
    }
    else{
      noteObj.Favourite = "UnStared";

      note.push(noteObj);
      localStorage.setItem("notes",JSON.stringify(note));
      addTitle.value = "";
      addNote.value = "";
      favClick.checked = false;
      displayNotes();
      addTitle.style.boxShadow = '';
      addNote.style.boxShadow = '';
    }
  }
}


let addTitle = document.querySelector('#addTitle');

addTitle.addEventListener('keyup', function(event){
  if(event.keyCode === 13){
    let saveBtn = document.getElementById('saveButton');
    event.preventDefault();
    saveBtn.click();
  }
});



function displayNotes(){
  allNote();

  let html = "";
  Array.from(note).forEach((element,index)=>{
    html+=`          <div class="cardBox">
    <div class="stared">
      <i class="fas fa-star ${element.Favourite}"></i>
      <span id= "indexNo">${index+1}</span>
    </div>
    <div class="mainNote">
      <div class="heading">
        <h2><b>${element.Title}</b></h2>
      </div>
      <div class="notes">
        <p><pre>${element.Note}</pre></p>
      </div>
    </div>
    <div class="deleteBtn">
      <button onclick="deleteNoteBox(${index});"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>`;
  })

  let content = document.getElementById('contentBody');
  let allNotes = localStorage.getItem('notes');
  if(allNotes != null){
    content.innerHTML=html;
  }
  else{
    content.innerHTML= `<b class="nothingNote">Nothing to show in note box !!!</b>`;
  }
  }


  function trash(){
    localStorage.clear();

    displayNotes();
  }


  function deleteNoteBox(index){
    allNote();
    note.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(note));
    displayNotes();
  }
  

  function refreshBtn(){
    window.location.reload();
  }
  //navigators Btns
  // function backBtn(){
  //   window.history.go(-1);
  // }
  // function forwardBtn(){
  //   window.history.go(1);
  // }


