class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0;

    
  }

  startClick(callback) {
    // ... your code goes here
   this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (callback != undefined) {
        callback()
      }
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60
    if (this.currentTime <= 0) {
      return 0

    } else if (this.currentTime === 60) {
      return 1
    } else {
      return minutes
    }
  }

  getSeconds() {
    // ... your code goes here
    let secondsRemaining
    secondsRemaining = this.currentTime % 60
    return secondsRemaining
  }
  twoDigitsNumber() {
   if (value < 10) {
      return value = `0` + value
    } else if (value >= 10) {
      return value.toString()
    }
  }
   

  getMiliseconds() {
    return this.currentTime / 1000
  }

  twoDigitsNumber(functionResult) {
    if (this.currentTime < 10) {
      return `0`+  functionResult.toString();
    } else {
      return this.currentTime
    }

  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    console.log(this.currentTime)
    return this.currentTime
  }

  resetClick() {
    // ... your code goes here
    return this.currentTime = 0
  }

  splitClick() {
    // ... your code goes here
    const minutes = this.twoDigitsNumber(this.getMinutes())
    const seconds = this.twoDigitsNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
