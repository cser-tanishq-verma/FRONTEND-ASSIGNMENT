let users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Bob", role: "admin" },
];

let result = {
  admin: [],
  user: [],
};

users.forEach((user) => {
  if (user.role === "admin") {
    result.admin.push(user.name);
  } else if (user.role === "user") {
    result.user.push(user.name);
  }
});

console.log(result);
