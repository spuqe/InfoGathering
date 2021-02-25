# InfoGathering
Generates almost unique MD5 hash for each visitor based on PC information. Also has some other info gathering functions.
This is an quite simple script for fingerprinting. 
<img src="https://i.imgur.com/i3JKEnZ.png">

# How does it work?
It uses the following plugins to create MD5 hash.
* the user agent
* screen size
* color depth
* the timezone offset
* sessionStorage support
* localStorage support

# IP checker
Just an simple function which sends request to an IP checker API and shows you the IP.
btw you really should get your own API and not use the one I'm using on the project as this API only allows about 100 requsts from the same IP.

# What for?
For fun.
