const paras = document.querySelectorAll('p');

console.log(paras);


paras.forEach(para => {
    // O textContent pega até mesmo o texto não visível, ao contráio do innerText
    if (para.textContent.includes("error")) {
        para.classList.add('error');
        console.log(para.innerText);
    }
    else if (para.innerText.includes("success")) {
        para.classList.add('success');
        console.log(para.innerText);
    }
});
