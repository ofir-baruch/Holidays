//פונקציה שפועלת בטעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {


  // פתיחת משתנה של ההתראה של הטוסט
  const toastTrigger = document.getElementById('success-download-btn')
  const toastLiveExample = document.getElementById('toast-download')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new bootstrap.Toast(toastLiveExample)
      toast.show()
    })
  }


  //פונקציית חיפוש חג מתוך הכרטיסיות
  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchFunc);
  }

});


function searchFunc() {
  // נמצא את תיבת הטקסט
  const searchWord = document.getElementById("search-box");
  // נמצא את כל הכותרות
  const titles = document.querySelectorAll(".card-wrapper h5");

  // לכל כותרת בודקים האם היא מכילה את הערך שנמצא בתיבת הטקסט
  for (i = 0; i < titles.length; i++) {
    if (titles[i].innerHTML.includes(searchWord.value)) {
      // אם כן - נוסיף מחלקה של צבע רקע צהוב ונוריד את מחלקת ההסתרה
      titles[i].classList.add("bg-warning");
      titles[i].closest(".card-wrapper").classList.remove("d-none");
    } else {
      // אם לא - נוריד את המחלקה עם צבע הרקע ונוסיף את מחלקת ההסתרה
      // מחלקת ההסתרה תתווסף לאלמנט האב הכי קרוב לכותרת שיש לו מחלקה מתאימה 
      titles[i].classList.remove("bg-warning");
      titles[i].closest(".card-wrapper").classList.add("d-none");
    }
  }
}