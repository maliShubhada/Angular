import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <form>
      <h5>Email_id</h5>
      <input
        type="text"
        name="emailid"
        placeholder="Email Id"
        ngModel
        #emailid="ngModel"
        required
      />
      <br />
      <h5>User_Password</h5>
      <input
        type="password"
        name="passwd"
        placeholder="Password"
        ngModel
        #passwd="ngModel"
        required
      /><br />
      <br />
      <input type="submit" value="submit" />
    </form>
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
