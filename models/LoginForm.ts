export class LoginFormClass {
    private username: string;
    private password: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  
    login() {
      if (this.username === '' && this.password === '') {
        return "POGREŠNI KREDENCIJALI!";
      } else {
        return "Uspešno ste se ulogovali!";
      }
    }
  }