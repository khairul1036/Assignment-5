document.getElementById('btn-donate')
    .addEventListener('click', function () {
        showSectionById('donate-form');
        activeBtnColor('btn-donate');
    });


document.getElementById('btn-history')
    .addEventListener('click', function () {
        showSectionById('donate-history');
        activeBtnColor('btn-history');
    });