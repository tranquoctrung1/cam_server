Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "rtsp://admin:B_vitech@113.161.151.44:5541/Streaming/Channels/202",
  wsPort: 9998,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 60,
    "-bufsize": "128k", // options with required values specify the value after the key
  },
});

stream2 = new Stream({
  name: "name",
  streamUrl: "rtsp://admin:B_vitech@113.161.151.44:5541/Streaming/Channels/101",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 60,
    "-bufsize": "128k", // options with required values specify the value after the key
  },
});

stream3 = new Stream({
  name: "name",
  streamUrl: "rtsp://admin:B_vitech@113.161.151.44:5542/Streaming/Channels/101",
  wsPort: 9997,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 60,
    "-bufsize": "128k", // options with required values specify the value after the key
  },
});

stream4 = new Stream({
  name: "name",
  streamUrl: "rtsp://admin:B_vitech@113.161.151.44:5542/Streaming/channels/201",
  wsPort: 9996,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 60,
    "-bufsize": "128k", // options with required values specify the value after the key
  },
});
