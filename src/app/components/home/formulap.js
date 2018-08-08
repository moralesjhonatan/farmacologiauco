function cont() {
    var c = 0;
    if (document.forms['evaluacion']['radio1'][1].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio2'][1].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio3'][1].checked)
        {
        c++;
        }		
    if (document.forms['evaluacion']['radio4'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio5'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio6'][1].checked)
        {
        c++;
        }	
    if (document.forms['evaluacion']['radio7'][0].checked)
        {
        c++;
        }
	if (document.forms['evaluacion']['radio8'][1].checked)
        {
        c++;
        }
	if (document.forms['evaluacion']['radio9'][0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio10[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio11[2].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio12[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio13[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio14[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio15[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio16[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio17[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio18[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio19[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio20[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio21[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio22[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio23[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio24[1].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio25[0].checked)
        {
        c++;
        }
	if (document.forms.evaluacion.radio26[0].checked)
		{
		c++;
		}
	if (document.forms.evaluacion.radio27[1].checked)
        {
        c++;
        }
		document.getElementById("resultado").value="Su resultado es: " + c;

	if (c >= 14)
		{
			document.getElementById('ingresar').disabled = '';
			
		}
	else
		{
			document.getElementById('ingresar').disabled = 'disabled';
		}

}


