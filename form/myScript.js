function output(){
				var main_form, fname, birthday, sex, town, school, major, email, goals;
				
				main_form = document.getElementById("form");
				
				fname = main_form.elements["Name"].value;
				if (fname === "") {
				console.warn('Full Name is missing.');
				}
				else {
					console.log('Full Name: ' + fname);
				}
				
				
				birthday = main_form.elements["DateofBirth"].value;
				if (birthday === "") {
				console.warn('Date of Birth is missing.');
				}
				else {
					console.log('Date of Birth: ' + birthday);
				}
				
				sex = main_form.elements["Gender"].value;
				if (sex === "") {
				console.warn('Gender is missing.');
				}
				else {
					console.log('Gender: '+sex);
				}
				
				town = main_form.elements["Hometown"].value;
				if (town === "") {
				console.warn('Hometown is missing.');
				}
				else {
					console.log('Hometown: '+town);
				}
				
				school = main_form.elements["School"].value;
				if (school === "") {
				console.warn('School is missing.');
				}
				else {
					console.log('School: '+school);
				}
				
				major = main_form.elements["Major"].value;
				if (major === "") {
				console.warn('Major is missing.');
				}
				else {
					console.log('Major: '+major);
				}
				
				email = main_form.elements["Email"].value;
				if (email === "") {
				console.warn('Email is missing.');
				}
				else {
					console.log('Email: '+email);
				}
				
				goals = main_form.elements["PersonalGoals"].value;
				if (goals === "") {
				console.warn('Personal Goals is missing.');
				}
				else {
					console.info('Personal Goals: '+goals);
				}
				
			}
			