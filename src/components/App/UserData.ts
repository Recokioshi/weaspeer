export interface IUserInfo {
  creationDate: Date;
  firstName: String;
  lastName: String;
  username: String;
}

export interface IUSerData {
  chatList: string[];
  rsaKey: String;
  userInfo: IUserInfo;
}

export class UserInfo implements IUserInfo {
  creationDate: Date;
  firstName: String;
  lastName: String;
  username: String;
  constructor(firstName: String, lastName: String, username: String) {
    this.creationDate = new Date();
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }
}

export class UserData implements IUSerData {
  chatList: string[];
  rsaKey: String;
  userInfo: UserInfo;
  constructor(
    firstName: String = '',
    lastName: String = '',
    username: String = '',
    rsaKey: String = '',
    chatList: string[] = [],
  ) {
    this.chatList = chatList;
    this.rsaKey = rsaKey;
    this.userInfo = new UserInfo(firstName, lastName, username);
  }
}
