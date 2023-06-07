function openDialog(projectId) {
  const dialog = document.getElementById(projectId + '-dialog');
  dialog.showModal();
}

function closeDialog(projectId) {
  const dialog = document.getElementById(projectId + '-dialog');
  dialog.close();
}




let list = document.querySelectorAll('.sort-list');
let project = document.querySelectorAll('.project');

for(let i = 0; i<list.length;i++) {
  list[i].addEventListener('click', function() {
    for(let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');  

    let dataFilter = this.getAttribute('data-filter')
    for(let k = 0; k < project.length; k++) {
      project[k].classList.remove('active');
      project[k].classList.add('hide');
      if(project[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
        project[k].classList.remove('hide');
        project[k].classList.add('active');
      }
    }
  })
}