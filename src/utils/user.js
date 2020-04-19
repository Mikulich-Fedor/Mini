class User {
    constructor(options) {
      (this.name = options.name),
        (this.mail = options.mail),
        (this.password = options.password);
    }
  }
  
  let user = new User({
    name: names.value,
    mail: mails.value,
    password: passwords.value,
  });
  
  function userf() {
    alert(user.name);
  }