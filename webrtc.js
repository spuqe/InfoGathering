
function webrtc() {
var hasWebRTC = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;

if (hasWebRTC) {
  alert('This browser is WebRTC-capable');
  }
}