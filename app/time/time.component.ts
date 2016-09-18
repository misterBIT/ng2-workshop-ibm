import {Component, OnInit, OnDestroy} from '@angular/core'

@Component({
    selector: 'curr-time',
    template: `<div id="curr-time">{{currTime}}</div>`

})

export class TimeComponent implements OnInit, OnDestroy{

    private clockInterval : any;
    public currTime : Date = new Date();

    constructor(){
      this.startClock();
    }

    ngOnInit(){

    }

    startClock(){

        console.log('Clock Started');

        this.clockInterval = setInterval(()=>{
            this.currTime = new Date();
            //console.log('CurrTime: ', this.currTime);
        }, 1000);
    }

    ngOnDestroy(){
        clearInterval(this.clockInterval);
        console.log('Clock Stopped');
    }

}
