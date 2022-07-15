console.log("wella")

var MiBand = class {
    constructor(authKey) {
      if (!authKey.match(/^[a-zA-Z0-9]{32}$/)) {
        throw new Error("Invalid auth key, must be 32 hex characters such as '94359d5b8b092e1286a43cfb62ee7923'");
      }
      this.authKey = authKey;
      //this.services = {};
      //this.chars = {};
    }
}

var ADVERTISEMENT_SERVICE = 65248;
var UUIDS = {
    miband1: "0000fee0-0000-1000-8000-00805f9b34fb",
    miband2: "0000fee1-0000-1000-8000-00805f9b34fb",
    alert: "00001802-0000-1000-8000-00805f9b34fb",
    devinfo: "0000180a-0000-1000-8000-00805f9b34fb",
    heartrate: "0000180d-0000-1000-8000-00805f9b34fb",
    notifications: "00001811-0000-1000-8000-00805f9b34fb"
  };


var MiBand6 = class extends MiBand {
    constructor(authKey) {
      super(authKey);
      console.log("stiamo creand un mi band")
      /*this.handle = 0;
      this.reassembleBuffer = new Uint8Array(512);
      this.lastSequenceNumber = 0;
      this.reassembleBuffer_pointer = 0;
      this.reassembleBuffer_expectedBytes = 0;
      this.prv_buf = null;
      this.pub_buf = null;
      this.sec_buf = null;
      this.prv = null;
      this.pub = null;
      this.sec = null;*/
    }

    async init() {
        console.log("sono nell'init")
        const device = await navigator.bluetooth.requestDevice({
          filters: [
            {
              services: [ADVERTISEMENT_SERVICE]
            }
          ],
          optionalServices: [UUIDS.miband2, UUIDS.heartrate, UUIDS.miband1]
        });
    }
}

mb = new MiBand6("9259569329894bc8b677c0bb652f0fa7")
mb.init();
console.log("fino a qui tutto bene")