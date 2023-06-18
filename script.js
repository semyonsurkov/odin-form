const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('form');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('https://eogq7bt1cf5yuc2.m.pipedream.net', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('SUCCESS');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
