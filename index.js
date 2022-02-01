// function to remove show-active class & add to clicked
function setNewActive(el) {
  // select all content body
  const contentBodies = document.getElementsByClassName('content-body');
  // remove .show-active
  for (let contentBody of contentBodies) {
    contentBody.classList.remove('show-active');
  }
  // add .show-active (back) to clicked
  document.getElementById(el.textContent.trim()).classList.add('show-active');
  const tabs = document.getElementsByClassName('tab');
  for (let tab of tabs) {
    tab.classList.remove('tab-active');
  }
  el.classList.add('tab-active');
}
// select .tab class, and loop through 
  // add click listener to each tab

const tabs = document.getElementsByClassName('tab');
for (let tab of tabs) {
  tab.addEventListener('click', (e) => {
    setNewActive(e.currentTarget)
  })
}