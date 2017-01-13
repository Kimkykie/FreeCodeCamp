const pomodstates = {
  WORK : 'work',
  REST : 'rest'
};

const states = {
  STARTED : 'started',
  STOPPED : 'stopped',
  PAUSED : 'paused'
};

var working_min = 25;
var resting_min = 5;

new Vue({
  el: '#app',
  data: {
    workminute: working_min,
    restminute: resting_min,
    second: 0,
    pomodoroState: pomodstates.WORK,
    state: states.STOPPED,
    timestamp: 0
  },
  computed:{
    title: function () {
      return this.pomodoroState === pomodstates.WORK ? 'Work' : 'Rest';
    },
    min: function () {
      if (this.workminute < 10) {
        return '0' + this.workminute;
      }
      return this.workminute;
    },
    sec: function () {
      if (this.second < 10) {
        return '0' + this.second;
      }
      return this.second;
    }
  },
  methods: {
    start: function () {
      this.state = states.STARTED;
      this._tick();
      this.interval = setInterval(this._tick,1000);
    },

    pause: function () {
      this.state = states.PAUSED;
      clearInterval(this.interval);
    },

    stop: function functionName() {
      this.state = states.STOPPED;
      clearInterval(this.interval);
      this.pomodoroState = pomodstates.WORK;
      this.workminute = working_min;
      this.second = 0;
    },
    _tick: function () {
      if (this.second !== 0) {
        this.second--;
        return;
      }

      if (this.workminute !== 0) {
        this.workminute--;
        this.second = 59;
        return;
      }
      //second is 0 and workminute is 0
      this.pomodoroState = this.pomodoroState === pomodstates.WORK ? pomodstates.REST : pomodstates.WORK;

      if (this.pomodoroState === pomodstates.WORK) {
        this.workminute = working_min;
      } else {
        this.workminute = this.restminute;
      }
    }
  }
});
