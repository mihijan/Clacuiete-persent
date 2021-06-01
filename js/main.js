
const $button = document.querySelector('.button'); 
const inpAll = document.querySelector('#exampleFormControlInput1');
const inpWins = document.querySelector('#exampleFormControlInput2');

$button.addEventListener('click', async (e) => {
    e.preventDefault();

    const inpAllValue = + inpAll.value;
    const inpWinsValue = + inpWins.value;
    const formData = new FormData();

    formData.append('all', inpAllValue);
    formData.append('wins', inpWinsValue);

    let responce = await fetch('../server.php', {
        method: 'POST',
        body: formData,
    })
    responce.json().then(result => alert(result));

});



