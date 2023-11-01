# InfoGathering
Generates almost unique MD5 hash for each visitor based on PC information. Also has some other info gathering functions.
<img src="https://i.imgur.com/i3JKEnZ.png">

This is an quite simple script for fingerprinting. 
# How does it work?
It uses the following plugins to create MD5 hash.
* the user agent
* screen size
* color depth
* the timezone offset
* sessionStorage support
* localStorage support


# What information can you see?
*  Browser Fingerprint (md5): The script collects a browser fingerprint using the $.fingerprint() function.
  
*  IP Address: The script attempts to collect the user's IP address using the myIP() function.
  
*  User-Agent: The user's user-agent string is retrieved using navigator.userAgent.
  
*  Screen Resolution: The script attempts to display the user's screen resolution, but the code is missing variables w and h. You would need to define these variables to get accurate screen resolution information.
  
*  WebRTC Information: The user can click a button to check WebRTC-related information using the webrtc() function. This function would access WebRTC-related data like IP addresses, but it depends on the webrtc.js script for the specific implementation.
  
*  Timezone: The user's timezone is displayed using Intl.DateTimeFormat().resolvedOptions().timeZone.
  
*  Mouse Position: The script tracks the user's mouse position and displays it in real-time for both the X and Y coordinates.
  
*  Network Information: The script attempts to gather network information, such as connection type, effective network type, downlink speed, and save data mode, using the Network Information API.
  
*  Battery Status: The script attempts to collect the user's battery level and charging status using the Battery Status API.
  
*  Cookies: The script lists the cookies available on the current site.
  
*  Supported Video and Audio Codecs: The script checks for supported video and audio codecs using the Media Capabilities API.
  
*  Device Information: The script attempts to display information about the user's device, including device name, model, and operating system.
  
*  Available Fonts: The script lists the available fonts on the user's system, which can be used for font detection.
  
*  User Language and Locale: The script displays the user's preferred language and locale settings.
  
*  Camera Access and Constraints: The script checks if the user has granted access to the camera and displays camera constraints (if available) using the navigator.mediaDevices.getUserMedia method.
  
*  Clipboard Data: The script attempts to access the user's clipboard and display any available data using the navigator.clipboard API.