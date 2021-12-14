class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }

      this.currentTime += 1;
    }, 1000);
  }

  // Interval auf eine Sekunde geschaltet, die Funktion beschreibt, dass nach jeder Sekunde '1' zur currentTime hinzugefuegt wird und  bei jedem Mal eine neue Id erstellt wird.

  // //
  // The Chronometer class needs to have a start method. When called, start will start keeping track of time, by running a function in a 1 second interval, which will increment the amount of seconds stored in the property currentTime by 1.

  // You should rely on the setInterval method to achieve this. The interval id that is returned by calling setInterval should be assigned to our intervalId property, so this way, we will be able to clear it later on when we need to stop the timer.

  // Additionally, the start method should accept a function as an argument. Let's name it callback. The callback argument is optional. If start is called and a callback is passed, said callback should be executed inside of the function you have passed to setInterval. If no callback is passed, it should be disregarded (hint: you should check whether if the callback was passed before attempting to run it).

  // should return Numbers
  getMinutes() {
    const currentMinutes = Math.floor(this.currentTime / 60);
    return currentMinutes;
  }

  getSeconds() {
    const currentSeconds = this.currentTime % 60;
    return currentSeconds;
  }

  // should receive a Number and String,
  // Return a String
  // Number )
  computeTwoDigitNumber(value) {
    let nuString = value.toString();
    if (nuString.length === 1) {
      nuString = '0' + nuString;
    }
    return nuString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  // returns a STRING
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ':' + seconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
