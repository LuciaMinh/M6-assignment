const form = document.getElementById('empForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission

  console.log(`ID: ${document.getElementById('id').value}`);
  console.log(`Name: ${document.getElementById('name').value}`);
  console.log(`Extension: ${document.getElementById('ext').value}`);
  console.log(`Department: ${document.getElementById('department').value}`);
});