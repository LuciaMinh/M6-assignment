let id;
let name;
let ext;
let email;
let department;
let submit;

id = document.getElementById('id');
fullName = document.getElementById('name');
ext = document.getElementById('ext');
email = document.getElementById('email');
department = document.getElementById('department');
submit = document.querySelector('button[type="submit"]');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = {
    '1. ID'              : id.value,
    '2. Name'            : fullName.value,
    '3. Extension'       : ext.value,
    '4. Email'           : email.value,
    '5. Department'      : department.value,
  };
  console.log(formData);
});