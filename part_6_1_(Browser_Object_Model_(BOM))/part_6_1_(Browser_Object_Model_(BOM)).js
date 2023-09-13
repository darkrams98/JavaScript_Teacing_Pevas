// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

// The Browser Object Model (BOM)

// def : 
// There are no official standards for the Browser Object Model (BOM).

// All global JavaScript objects, functions, and variables automatically become members of the window object.
// Global variables are properties of the window object.
// Global functions are methods of the window object.
// Even the document object (of the HTML DOM) is a property of the window object

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // BOM window object : 
// console.log(window)

// // DOM is property of BOM
// console.log(window.document)
// // same as 
// console.log(document)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Window Size 

// let w = window.innerWidth;
// let h = window.innerHeight;

// console.log(w)
// console.log(h)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // window.open() - open a new window

// newWindow = window.open("https://www.google.com", "windowName", "height=300,width=300");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // window.close() - close the current window

// window.close()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // window.resizeTo() - resize the current window

// window.open() - open a new window

// newWindow = window.open("https://www.google.com", "windowName", "height=300,width=300");

// function quarter() {
//     newWindow.resizeTo(
//       window.screen.availWidth ,
//       window.screen.availHeight 
//     );
//   }
// quarter()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // window.open() - open a new window

// newWindow = window.open("https://www.google.com", "windowName", "height=300,width=300");

// // window.moveTo() - move the current window

// newWindow.moveTo(100 , 100)

// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

// BOM ... screen property : 
// JavaScript Window Screen

// def : The window.screen object contains information about the user's screen.

// Properties:

// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth
// screen.pixelDepth

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(screen)

// console.log("screen Width : " + screen.width)
// console.log("screen Height : " + screen.height)

// console.log("screen availWidth : " + screen.availWidth)
// console.log("screen availHeight : " + screen.availHeight)

// // different : 
// // The screen.availWidth property returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Window Screen Color Depth

// The screen.colorDepth property returns the number of bits used to display one color.

// All modern computers use 24 bit or 32 bit hardware for color resolution:

// 24 bits =      16,777,216 different "True Colors"
// 32 bits = 4,294,967,296 different "Deep Colors"
// Older computers used 16 bits: 65,536 different "High Colors" resolution.

// Very old computers, and old cell phones used 8 bits: 256 different "VGA colors".

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // use : 
// console.log("color Depth : " + window.screen.colorDepth)
// // same as : 
// console.log("color Depth : " + screen.colorDepth)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Window Screen Pixel Depth
// // The screen.pixelDepth property returns the pixel depth of the screen.

// console.log("pixel Depth : " + screen.pixelDepth)

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

// JavaScript Window Location
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

// Some examples:

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Window Location Href
// // The window.location.href property returns the URL of the current page.

// console.log("Page location : " + window.location.href)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Window Location Hostname
// // The window.location.hostname property returns the name of the internet host (of the current page).

// console.log("Page hostname : " + window.location.hostname)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Window Location Pathname
// // The window.location.pathname property returns the pathname of the current page.

// console.log("Page path : " + window.location.pathname)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Window Location Protocol (file , http , https)
// // The window.location.protocol property returns the web protocol of the page.

// console.log("Page protocol : " + window.location.protocol)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Window Location Port
// // The window.location.port property returns the number of the internet host port (of the current page).

// // note : in port 80(http) and 443(https) is blank
// console.log("Port number : " + window.location.port)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Window Location Assign
// // The window.location.assign() method loads a new document.

// function openNewDoc() {
//     window.location.assign("https://www.bing.com")
// }
// openNewDoc()
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

// JavaScript Window History
// The window.history object contains the browsers history.

// Some methods:

// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // how to use ? 

// // Back :
// function goBack() {
//     window.history.back()
// }


// // Forward
// function goForward() {
//     window.history.forward()
// }

// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

// JavaScript Window Navigator
// The window.navigator object contains information about the visitor's browser.

// Some examples:

// navigator.cookieEnabled
// navigator.appCodeName
// navigator.platform

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Browser Cookies

// console.log(navigator.cookieEnabled)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Browser Application Name (deprecated)

// console.log(navigator.appCodeName)
// console.log(navigator.appName)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // The Browser Engine (deprecated)

// console.log(navigator.product)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // The Browser Version (deprecated)

// console.log(navigator.appVersion)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // The Browser Agent

// console.log(navigator.userAgent)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // The Browser Platform

// console.log(navigator.platform)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // The Browser Language

// console.log(navigator.language)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Is The Browser Online?

// console.log(navigator.onLine)

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Is Java Enabled? (deprecated) always false : 

// console.log(navigator.javaEnabled())
// // code will never be executed; the condition is always false

// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

// JavaScript Popup Boxes
    // 1 - Alert box 
    // 2 - Confirm box 
    // 3 - prompt box 

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// // Alert 

// function openAlert() {
//     alert("I'm Alerting something")
// }

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// var confirm_Control
// function openConfirm () {
//     if (confirm("If Ok, I'll return True \nIf cancel, I'll return Fulse")){
//         confirm_Control = "you pass OK"
//     } else {
//         confirm_Control = "you pass cancel"
//     }
//     alert(confirm_Control)
// }

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------


// function openPrompt () {
//     let prompt_Val = prompt("Enter your Age :" , "defabult Value")

//     if (prompt_Val == null || prompt_Val == "" || prompt_Val < 18) {
//         alert("you cant pass !")
//     } else {
//         alert("you pass... wait to redirect !")
//     }
//     console.log(prompt_Val)
// }

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------