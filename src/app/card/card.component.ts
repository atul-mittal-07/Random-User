import { Component, Input, OnInit } from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  user:any;
  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  constructor(private userservice: UserService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  handleOnReload(){
    this.userservice.getUser().subscribe((user:any)=>{
      this.user = user.results[0];
    },
    (err)=>{
      this.toastr.error(err.status, "Not possible to Reload");
    }
    );
  };
}
