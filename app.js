Stream = require("node-rtsp-stream");
// stream = new Stream({
//   name: "name",
//   streamUrl: "rtsp:admin:B_vitech@222.255.192.124:554/Streaming/channels/301",
//   wsPort: 9999,
//   ffmpegOptions: {
//     // options ffmpeg flags
//     "-stats": "", // an option with no neccessary value uses a blank string
//     "-r": 60,
//     "-bufsize": "128k", // options with required values specify the value after the key
//   },
// });

stream2 = new Stream({
  name: "name",
  streamUrl: "rtsp://admin:B_vitech@113.161.151.44:5541/Streaming/channels/101",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 60,
    "-bufsize": "128k", // options with required values specify the value after the key
  },
});
