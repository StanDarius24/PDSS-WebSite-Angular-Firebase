import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../core/models/user.model';
import {FirestoreUserService} from '../../core/services/firestore-user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    '../style/style.scss',
    './admin.component.css']
})
export class AdminComponent implements OnInit {
  userForm: FormGroup;
  users: User[];
  displayedColumns: string[] = ['id', 'email', 'displayName', 'edit', 'delete'];

  constructor(
    private firestoreService: FirestoreUserService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.firestoreService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.userForm = this.formBuilder.group({
      uid: '',
      displayName: '',
      role: ''
    });
  }

  onEdit(selectedUser) {
    this.userForm.patchValue(Object.assign({}, selectedUser));
  }

  async onUpdate() {
    await this.firestoreService.updateUserData(this.userForm.value);
    this.userForm.reset();
  }

  async onDelete(selectedUser) {
    await this.firestoreService.deleteUser(selectedUser);
  }
}
