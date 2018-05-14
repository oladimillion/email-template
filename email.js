

function toggleModalSize(){
  const modalWrapper = document.getElementById("modal-wrapper");
  const expandIcon = document.getElementById("expand-icon");
  const compressIcon = document.getElementById("compress-icon");
  if(modalWrapper.classList.contains("modal-expand")){
    modalWrapper.classList.remove("modal-expand");
    modalWrapper.classList.add("modal-compress");
    expandIcon.classList.remove("_hide");
    compressIcon.classList.add("_hide");
  } else {
    modalWrapper.classList.remove("modal-compress");
    modalWrapper.classList.add("modal-expand");
    expandIcon.classList.add("_hide");
    compressIcon.classList.remove("_hide");
  }
}

function minOrMaxModal(){
  const modalWrapper = document.getElementById("modal-wrapper");
  if(modalWrapper.classList.contains("min-modal")){
    modalWrapper.classList.remove("min-modal");
    modalWrapper.classList.add("max-modal");
  } else {
    modalWrapper.classList.add("min-modal");
    modalWrapper.classList.remove("max-modal");
  }
}


function closeModal(){
  const modalWrapper = document.getElementById("modal-wrapper");
  if(modalWrapper.classList.contains("_hide")){
    modalWrapper.classList.remove("_hide");
  } else {
    modalWrapper.classList.add("_hide");
  }
}

function getEditorContent(){
  var markupStr = $('#summernote').summernote('code');
  console.log(markupStr);
}

window.addEventListener("load", function(){
  $('#summernote').summernote({
    height: 168, 
    minHeight: null,
    maxHeight: null,
    focus: true   
  });
})



