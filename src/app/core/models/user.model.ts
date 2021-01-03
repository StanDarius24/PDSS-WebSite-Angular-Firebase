export class User {
  uid: string;
  email: string;
  displayName?: string;
  role = 'normal';

  constructor(user) {
      this.uid = user.uid;
      this.email = user.email;
      this.displayName = user.displayName;
   }
}
