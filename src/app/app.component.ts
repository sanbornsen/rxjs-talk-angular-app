import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServerSocket } from './server-socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private socketSubscription: Subscription;
  title = 'app works!';
  constructor(private socket: ServerSocket) {

  }

  ngOnInit() {
    this.socket.connect();
    this.socketSubscription = this.socket.messages.subscribe((message: any) => {
      console.log('received message from server: ', message);
      this.title = message;
    });
    // send message to server, if the socket is not connected it will be sent
    // as soon as the connection becomes available thanks to QueueingSubject
    this.socket.send({ type: 'helloServer' })
  }

}
