import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServerSocket } from './server-socket.service';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private socketSubscription: Subscription;
  private cpuUsage: String = '0';
  private cpuDown: Boolean = false;
  title = 'System Monitor';
  constructor(private socket: ServerSocket) {

  }

  ngOnInit() {
    this.socket.connect();
    this.socketSubscription = this.socket.messages
    .retryWhen(errors => {
      return errors.delay(1000).do(() => {
        this.cpuDown = true;
        this.cpuUsage = '0';
      });
    })
    .subscribe((message: any) => {
      console.log('received message from server: ', message);
      this.cpuDown = false;
      this.cpuUsage = message;
    }, err => console.log(err));
    // send message to server, if the socket is not connected it will be sent
    // as soon as the connection becomes available thanks to QueueingSubject
    this.socket.send({ type: 'helloServer' })
  }

}
