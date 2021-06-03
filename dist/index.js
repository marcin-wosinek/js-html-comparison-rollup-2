var contacts = [
	{
		name: "Christopher L Sanders",
		phone: "769-232-1807"
	},
	{
		name: "Frances J Nolte",
		phone: "901-287-0419"
	}
];

var template = "<h2 class=\"name\">name</h2>\n\n<p class=\"phone\">phone</p>\n";
var contactList = document.createElement("div");
contactList.className = "contact-list";
contacts.forEach(function (entry) {
  var element = document.createElement("div");
  element.className = "contact";
  element.innerHTML = template;
  element.querySelector(".name").innerHTML = entry.name;
  element.querySelector(".phone").innerHTML = entry.phone;
  contactList.appendChild(element);
});
document.body.appendChild(contactList);
