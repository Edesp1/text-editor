const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    
    installPrompt = event;
    installButton.removeAttribnute("hidden")
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt) { //checks if installprompt is available if not it exits out
        return;
      }
      //awaits till the user installs the app then logs the outcome if was installed or not
      const result = await installPrompt.prompt();
      console.log(`Install prompt was: ${result.outcome}`);
      installPrompt = null;
      installButton.setAttribute("hidden", "");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("Thank you for installing our app!"); //logs the message if the app was installed
});