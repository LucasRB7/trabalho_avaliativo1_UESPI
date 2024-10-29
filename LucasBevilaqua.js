alert('Bem vindo ao nosso sistema de calculos!')
let opcao
do {
    opcao = prompt(`Escolha uma opção:
        1. Soma entre numeros
        2. Mostre a media entre 4 numeros
        3. Resto da divisao entre 2 numeros
        4. Adicione 50% de ganho ao salario
        5. Calculo da area de um triangulo
        6. Sair`);
    
        switch (opcao) {
            case '1':
                alert('Informe dois numeros para fazermos a soma...')
                let num1 = prompt('Digite o 1º numero: ')
                let num2 = prompt('Digite o 2º numero: ')
        
                let res = Number(num1) + Number(num2)
                alert(`A soma entre o valor ${num1} e o valor ${num2} é: ${res}!`)
                alert('Obrigado por utilizar o nosso sistema de soma!')
                
                break;
        
            case '2':
                alert('Informe 4 Notas para obtermos a média')
                let nota1 = Number(prompt('Digite a 1ª nota'))
                let nota2 = Number(prompt('Digite a 2ª nota'))
                let nota3 = Number(prompt('Digite a 3ª nota'))
                let nota4 = Number(prompt('Digite a 4ª nota'))
                let total = nota1 + nota2 + nota3 + nota4
                let media = total/4

                alert(`A Media entre as 4 notas é: ${media.toFixed(2)} `)

                break;
            case '3':
                alert('Digite 2 numeros para termos o resto da divisão')
                let n1 = Number(prompt('Digite um numero: '))
                let n2 = Number(prompt('Digite um segundo numero: '))
                let resto = n1%n2
                alert(`O resto da divisão entre o numero ${n1} e ${n2} é: ${resto}`)

                break;
            case '4':
                let salarioAtual = Number(prompt("Informe o salario do trabalhador: "));
                let aumento50 = salarioAtual/2;
                let salarioAtualizado = salarioAtual + aumento50
                alert(`O salario no valor de ${salarioAtual} acrescido de 50% é: ${salarioAtualizado.toFixed(2)}`)

                break;
            case '5':
                let base = Number(prompt('Informe a base do triangulo: '))
                let alt = Number(prompt('Informe a altura do triangulo: '))
                let area = (base * alt)/2
                alert(`A area do triangulo é: ${area}`)
        }
    
} while (opcao !== '6');