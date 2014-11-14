$().ready(function(){
	ContactsDB.init("AddressBook","1.0","Lab",324234324);
	ContactsDB.createTable("create table if not exists contacts(name,email,phone)",contactsTableCreated);
	$("#addbutton").on("tap",addContact);
});
var GLOBAL = {
	contacts : []
};

function contactsTableCreated(result){
	ContactsDB.execute("select * from contacts",
		[],
	   function(result){
		 for(var i=0;i<result.rows.length;i++){
			GLOBAL.contacts.push(result.rows.item(i));
		 }
		 displayContacts();
		},
	   function(error){
		   alert("ERROR");
	   });
}

function displayContacts(){
	if(GLOBAL.contacts.length > 0){
		$("#contactslist").html("");
		GLOBAL.contacts.forEach(function(contact){
			var li = "<li>";
			li += contact.name;
			li += "</li>";
			$("#contactslist").append(li);
		});
		$("#contactslist").listview("refresh");
	}
}

function addContact(){
	var name = $("#name").val();
	var email = $("#email").val();
	var phoneNumber = $("#phonenumber").val();
	var query = "insert into contacts values(?,?,?)";
	var params = [name,email,phoneNumber];
	ContactsDB.execute(query,
		params,
		function(result){
			console.log(result);
			var contact = {name:name,email:email,phoneNumebr:phoneNumber};
			GLOBAL.contacts.push(contact);
			$("body").pagecontainer("change","#contactspage");
			displayContacts();
		},
		function(error){
			console.log(error);
		});
}