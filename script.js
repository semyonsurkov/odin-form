const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('form');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  const formData = new FormData(form);

  fetch('https://eogq7bt1cf5yuc2.m.pipedream.net', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      submitButton.textContent = 'Account created';
      submitButton.style.borderColor = 'green';
      submitButton.style.color = 'green';
      console.log('SUCCESS');

    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
