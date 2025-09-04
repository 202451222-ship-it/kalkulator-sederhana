document.addEventListener('DOMContentLoaded', () => {
    // Mengakses elemen DOM dengan selektor yang benar (menggunakan ID)
    const buttonsBox = document.querySelector('#buttons');
    const expressionDiv = document.querySelector('#expression');
    const resultDiv = document.querySelector('#result');

    // Mendefinisikan variabel expression, result, dan variabel status isResultDisplayed
    let expression = '';
    let result = '';
    let isResultDisplayed = false;

    // Mendefinisikan fungsi yang akan dijalankan saat tombol diklik
    function buttonClick(event) {
        const target = event.target;
        const action = target.dataset.action;
        const value = target.dataset.value;

        if (!action) {
            return;
        }

        // Memeriksa jika hasil sedang ditampilkan dan tombol yang ditekan adalah angka atau desimal.
        if (isResultDisplayed && (action === 'number' || action === 'decimal')) {
            expression = '';
            result = '';
            isResultDisplayed = false;
        }

        // Logika untuk menangani setiap jenis tombol
        switch (action) {
            case 'clear':
                // Mengatur ulang ekspresi dan hasil
                expression = '';
                result = '';
                isResultDisplayed = false;
                break;

            case 'backspace':
                // Menghapus karakter terakhir dari ekspresi
                expression = expression.slice(0, -1);
                break;

            case 'negate':
                // Mengubah tanda angka
                if (expression !== '' && expression !== '0') {
                    if (expression.startsWith('-')) {
                        expression = expression.substring(1);
                    } else {
                        expression = '-' + expression;
                    }
                }
                break;
                
            case 'number':
                // Menambahkan angka ke ekspresi
                expression += value;
                break;

            case 'decimal':
                // Menambahkan titik desimal, pastikan tidak ada lebih dari satu di angka saat ini
                // Menambahkan validasi agar titik desimal tidak bisa di awal atau setelah operator
                const lastPart = expression.split(/[\+\-\*\/%]/).pop();
                if (lastPart.length > 0 && !lastPart.includes('.')) {
                    expression += value;
                }
                break;

            case 'addition':
            case 'subtraction':
            case 'multiplication':
            case 'mod':
            case 'division':
                // Menambahkan operator ke ekspresi
                // Memeriksa apakah karakter terakhir bukan operator
                const lastChar = expression.slice(-1);
                if (!['+', '-', '*', '/', '%'].includes(lastChar)) {
                    expression += value;
                }
                isResultDisplayed = false;
                break;

            case 'submit':
                // Menghitung hasil dari ekspresi
                try {
                    const expressionToEval = expression.replace(/%/g, '/100');
                    result = eval(expressionToEval);
                    isResultDisplayed = true;
                } catch (error) {
                    result = 'Error';
                }
                break;
        }

        // Memperbarui tampilan di DOM
        expressionDiv.textContent = expression;
        resultDiv.textContent = result;
    }

    // Menambahkan event listener ke container tombol
    buttonsBox.addEventListener('click', buttonClick);
});