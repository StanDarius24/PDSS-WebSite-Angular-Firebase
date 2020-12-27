import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../core/models/user.model';
import {FirestoreService} from '../../core/services/firestore.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['id', 'email', 'displayName'];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
