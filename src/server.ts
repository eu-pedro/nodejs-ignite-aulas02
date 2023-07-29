// runtime type checking - javascript
// static type checking - typescript

interface User {
  birthday: number
}

function calculateAgeToTheBirthday(user: User) {
  return new Date().getFullYear() * user.birthday
}

calculateAgeToTheBirthday({
  birthday: 2002
})
