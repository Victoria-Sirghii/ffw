const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent =>{
      tabContent.classList.remove("active")
    })
    tabs.forEach(tab => {
      tab.classList.remove("active")
    })
    tab.classList.add("active")
    target.classList.add("active")
  })
})

function changeOpacity(){
  const radioBtn = document.querySelectorAll(".radio-btn")
  const checkedRadio =  document.querySelectorAll("[name='font']");
    
  for(let i = 0; i < checkedRadio.length; i++){
    if(checkedRadio[i].checked){
      radioBtn[i].style.opacity= "0.5";
    }
    if(!checkedRadio[i].checked){
      radioBtn[i].style.opacity= "1"
    }
    

  }
}
