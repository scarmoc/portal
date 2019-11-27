const zileleSaptamanii = {
	luni: 'Luni',
	marti: 'Marti',
	miercuri: 'Miercuri',
	joi: 'Joi',
	vineri: 'Vineri'
}

const materiiFacultate = {
	fundamente: 'Fundamentele programarii',
	fai: 'Fundamentele algebrice ale informaticii',
	arhitectura: 'Arhitectura sistemelor de dalcul',
	logica: 'Logica computationala',
	calcul: 'Calcul stiintific',
	sport: 'Sport'
}

const orarImpar = {
	luni: { 
		curs1: materiiFacultate.arhitectura,
		curs2: materiiFacultate.sport,
		curs3: materiiFacultate.fundamente 
	},

	marti: { 
		curs1: materiiFacultate.calcul,
		curs2: materiiFacultate.logica,
		curs3: materiiFacultate.sport 
	},

	miercuri: { 
		curs1: materiiFacultate.arhitectura,
		curs2: materiiFacultate.sport,
		curs3: materiiFacultate.calcul 
	},

	joi: { 
		curs1: materiiFacultate.logica,
		curs2: materiiFacultate.fai,
		curs3: materiiFacultate.sport 
	},

	vineri: {
		curs1: materiiFacultate.arhitectura,
		curs2: materiiFacultate.logica,
		curs3: materiiFacultate.fundamente 
	},
};



const orarPar = {
	luni: { 
		curs1: materiiFacultate.arhitectura,
		curs2: materiiFacultate.sport,
		curs3: materiiFacultate.fundamente 
	},

	marti: { 
		curs1: materiiFacultate.calcul,
		curs2: materiiFacultate.logica,
		curs3: materiiFacultate.sport 
	},

	miercuri: { 
		curs1: materiiFacultate.arhitectura,
		curs2: materiiFacultate.sport,
		curs3: materiiFacultate.calcul 
	},

	joi: { 
		curs1: materiiFacultate.logica,
		curs2: materiiFacultate.fai,
		curs3: materiiFacultate.sport 
	},

	vineri: {
		curs1: materiiFacultate.arhitectura,
		curs2: materiiFacultate.logica,
		curs3: materiiFacultate.fundamente 
	},
};



function grupa1Info() {

    const orar = `                
		<table>
			<tr>
				<th>Ora</th>
				<th>${zileleSaptamanii.luni}</th>
				<th>${zileleSaptamanii.marti}</th>
				<th>${zileleSaptamanii.miercuri}</th>
				<th>${zileleSaptamanii.joi}</th>
				<th>${zileleSaptamanii.vineri}</th>
			</tr>
			<tr>
				<td>08-10</td>
				<td>${orarPar.luni.curs1}</td>
				<td>${orarPar.marti.curs2}</td>
				<td>${orarPar.miercuri.curs3}</td>
				<td>${orarPar.joi.curs1}</td>
				<td>${orarPar.vineri.curs2}</td>
			</tr>
			<tr>
				<td>10-12</td>
				<td>${orarPar.luni.curs2}</td>
				<td>${orarPar.marti.curs3}</td>
				<td>${orarPar.miercuri.curs1}</td>
				<td>${orarPar.joi.curs2}</td>
				<td>${orarPar.vineri.curs3}</td>
			</tr>
			<tr>
				<td>12-14</td>
				<td>${orarPar.luni.curs3}</td>
				<td>${orarPar.marti.curs1}</td>
				<td>${orarPar.miercuri.curs2}</td>
				<td>${orarPar.joi.curs3}</td>
				<td>${orarPar.vineri.curs1}</td>
			</tr>
			<tr>
				<td>14-16</td>
				<td>${orarPar.luni.curs2}</td>
				<td>${orarPar.marti.curs3}</td>
				<td>${orarPar.miercuri.curs1}</td>
				<td>${orarPar.joi.curs2}</td>
				<td>${orarPar.vineri.curs3}</td>
			</tr>
			<tr>
				<td>16-18</td>
				<td>${orarPar.luni.curs1}</td>
				<td>${orarPar.marti.curs3}</td>
				<td>${orarPar.miercuri.curs2}</td>
				<td>${orarPar.joi.curs1}</td>
				<td>${orarPar.vineri.curs1}</td>
			</tr>
		</table>
	
	`;
	
	document.getElementById('orarHTML').innerHTML = orar;	
    
};



function grupa2Info() {

    const orar = `                
		<table>
			<tr>
				<th>Ora</th>
				<th>${zileleSaptamanii.luni}</th>
				<th>${zileleSaptamanii.marti}</th>
				<th>${zileleSaptamanii.miercuri}</th>
				<th>${zileleSaptamanii.joi}</th>
				<th>${zileleSaptamanii.vineri}</th>
			</tr>
			<tr>
				<td>08-10</td>
				<td>${orarPar.luni.curs1}</td>
				<td>${orarPar.marti.curs3}</td>
				<td>${orarPar.miercuri.curs2}</td>
				<td>${orarPar.joi.curs1}</td>
				<td>${orarPar.vineri.curs1}</td>
			</tr>
			<tr>
				<td>10-12</td>
				<td>${orarPar.luni.curs2}</td>
				<td>${orarPar.marti.curs3}</td>
				<td>${orarPar.miercuri.curs1}</td>
				<td>${orarPar.joi.curs2}</td>
				<td>${orarPar.vineri.curs3}</td>
			</tr>
			<tr>
				<td>12-14</td>
				<td>${orarPar.luni.curs2}</td>
				<td>${orarPar.marti.curs3}</td>
				<td>${orarPar.miercuri.curs1}</td>
				<td>${orarPar.joi.curs2}</td>
				<td>${orarPar.vineri.curs3}</td>
			</tr>
			<tr>
				<td>14-16</td>
				<td>${orarPar.luni.curs1}</td>
				<td>${orarPar.marti.curs2}</td>
				<td>${orarPar.miercuri.curs3}</td>
				<td>${orarPar.joi.curs1}</td>
				<td>${orarPar.vineri.curs2}</td>
			</tr>
			<tr>
				<td>16-18</td>
				<td>${orarPar.luni.curs3}</td>
				<td>${orarPar.marti.curs1}</td>
				<td>${orarPar.miercuri.curs2}</td>
				<td>${orarPar.joi.curs3}</td>
				<td>${orarPar.vineri.curs1}</td>
			</tr>
		</table>
	
	`;
	
	document.getElementById('orarHTML').innerHTML = orar;	
    
};

