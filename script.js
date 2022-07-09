const inputs = document.querySelectorAll('input');

function handleUpdate (){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

console.log(document.body);
console.dir(document.body);


// вместо событий 'change' и 'mousemove' можно написать 'input'
//inputs.forEach(input => input.addEventListener('change', handleUpdate));
//inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));