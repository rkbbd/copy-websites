let toggleStatus = document.getElementById("toggleStatus");
let result_status = document.getElementById("r_status");

chrome.storage.sync.get(['r_status'], function (result) {
    toggleStatus.innerText = result.r_status ? "deactive" : "activate";
    result_status.innerHTML = result.r_status;
});

toggleStatus.addEventListener("click", async () => {
    //setStatus();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tab) {
        chrome.tabs.executeScript(
            tab[0].id,setStatus()
            );
    });

    
  
});

// current page
function setStatus() {
  chrome.storage.sync.get(['r_status'], function (result) {
    if (result) {
      chrome.storage.sync.set({ 'r_status': !result.r_status }, function () {
        chrome.storage.sync.get(['r_status'], function (res) {
            toggleStatus.innerText = res.r_status ? "deactive" : "activate";
            result_status.innerHTML = result.r_status;
            location.reload();
        })
      
      });
    }
  });

}