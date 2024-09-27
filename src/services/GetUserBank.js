const fake_bank = [
	{
		username: "phuctran",
		password: "123456",
		credit_number: "00338495362342324",
		bank_name: "ABC",
		bank_display_name: "Tran Minh Phuc",
	},
	{
		username: "phuctran",
		password: "123456",
		credit_number: "008568565565899999",
		bank_name: "MOTHER BANK",
		bank_display_name: "Tran Minh Phuc",
	},
	{
		username: "nam",
		password: "123456",
		credit_number: "4484848474746463639",
		bank_name: "MD Bank",
		bank_display_name: "Nguyen Bao Nam",
	},
];
export default function GetUserBank(username, password) {
	return fake_bank.filter((bank) => bank.username === username && bank.password === password);
}
