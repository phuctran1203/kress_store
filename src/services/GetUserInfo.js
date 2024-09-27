const fake_user = [
	{
		username: "phuctran",
		password: "123456",
		email: "phucdemo@gmail.com",
		fullname: "Tran Minh Phuc",
		birth: "",
		address: "",
		gender: "",
		phone: "0123456789",
		avatar: "avatar_user_1.jpg",
	},
	{
		username: "nam",
		password: "123456",
		email: "",
		fullname: "Nguyen Bao Nam",
		birth: "",
		address: "",
		gender: "",
		phone: "0000000000",
		avatar: "user_no_avatar.jpg",
	},
];
export function GetUser(username, password) {
	return fake_user.find((user) => user.username === username && user.password === password);
}
