/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   web_calculator.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mgrau <mgrau@student.42.fr>                +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/05 12:10:50 by mgrau             #+#    #+#             */
/*   Updated: 2021/05/05 13:15:34 by mgrau            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function display(val)
{
	if (document.getElementById("result").value.length < 15){
		document.getElementById("result").value+=val}
}

function solve()
{
	try {
		eval(document.getElementById("result").value); 
		} 
	catch (e) 
	{
		if (e instanceof SyntaxError) 
		{
			document.getElementById("result").value="Math error"
		}
	}
	document.getElementById("result").value=eval(document.getElementById("result").value)
	if (document.getElementById("result").value > 100000000000000)
		{document.getElementById("result").value = "LONG NBR"}
}
function erase()
{
	document.getElementById("result").value=''
}
