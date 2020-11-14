// Toggle
function toggle(active,element) {
    let x = document.getElementsByClassName(element);
      if (x.classList.contains(active)) {
        x.classList.remove(active);
      } else {
        x.classList.add(active);
      };
  };
  
  function changeState () {
    document.getElementsByClassName("sectionhead").addEventListener("click", () => {
      toggle("active","article");
    });
  };
  
  changeState ();