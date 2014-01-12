function closure_101(){
	function incrementer(){
		var i = 0;
		function f(){
			while(i < 10){
				console.log(i);
				i++;
			}
		}
		return f;
	}
	var zero_a_nove = incrementer();
	console.log('vamo...');
	zero_a_nove();
	console.log('vamo de novo...');
	zero_a_nove();
}

function cc(){
	function Conta(nome){
		var saldo = 0;
		var extrato = [];
		var conta = {
			'depositar': function(valor){
				saldo += valor;
				extrato.push('+'+valor);
			},
			'sacar': function(valor){
				saldo -= valor;
				extrato.push('-'+valor);
			},
			'transferir': function(valor, conta2){
				conta.sacar(valor);
				conta2.depositar(valor);
			},
			'print_all':function(){
				console.log('----------'+nome+'-----------')
				console.log('Saldo: '+saldo);
				console.log('Extrato:');
				for (i in extrato){
					console.log('\t'+extrato[i]);
				}
			}
		}
		return conta;
	}

	var conta1 = Conta('Joao');
	var conta2 = Conta('Maria');

	conta1.depositar(50);
	conta2.depositar(100);
	conta1.transferir(25, conta2);
	conta1.print_all();
	conta2.print_all();
}