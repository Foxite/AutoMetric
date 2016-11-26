// NOTE: Because standardization sucks, US and UK decided it would be more useful to have their own, different units for some quantities, so this addon focuses on AMERICAN units. The UK already have a de jure Metric system (except they don't use it).

function forEachUnit(text) {
	// Search for each imperial unit
	
	var names = ["fl oz"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
			
				num *= 29.5735;
			
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				}
			
				// Round to two decimals
				num *= 100;
				num = Math.round(num);
				num /= 100;
			
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " ml", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " l", start);
				}
			}
		} while (index != -1);
	}
	
	var names = ["pint"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
			
				num *= 473.1764;
			
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				}
			
				// Round to two decimals
				num *= 100;
				num = Math.round(num);
				num /= 100;
			
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " ml", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " l", start);
				}
			}
		} while (index != -1);
	}
	
	names = ["gallon", "gal"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
				
				num *= 3.785;
				
				// Round to two decimals
				num *= 100;
				num = Math.round(num);
				num /= 100;
				
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				text = stringInsert(text, num + " l", start);
			}
		} while (index != -1);
	}
	
	
	names = ["lbs", "pounds", "pound"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
			
				num *= 453.59237;
			
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				} else if (num > 0 && num < 1) {
					num *= 1000;
					scale = 0.001;
				}
			
				// Round to two decimals
				num *= 100;
				num = Math.round(num);
				num /= 100;
			
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " grams", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " kg", start);
				} else if (scale == 0.001) {
					text = stringInsert(text, num + " mg", start);
				}
			}
		} while (index != -1);
	}
	
	names = ["oz", "ounces", "ounce"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
			
				num *= 28.3495;
			
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				} else if (num > 0 && num < 1) {
					num *= 1000;
					scale = 0.001;
				}
			
				// Round to two decimals
				num *= 100;
				num = Math.round(num);
				num /= 100;
			
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " grams", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " kg", start);
				} else if (scale == 0.001) {
					text = stringInsert(text, num + " mg", start);
				}
			}
		} while (index != -1);
	}
	
	names = ["stone"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
			
				num *= 6.3503;
				
				// Round to two decimals
				num *= 100;
				num = Math.round(num);
				num /= 100;
			
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				text = stringInsert(text, num + " kg", start);
			}
		} while (index != -1);
	}
	
	names = ["inches", "inch"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
				
				num = num * 0.0254;
				
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				} else if (num > 0.01 && num < 1) {
					num *= 100;
					scale = 0.01;
				} else if (num > 0 && num < 0.01) {
					num *= 1000;
					scale = 0.001;
				}
				
				// Significant to two digits
				num = num * 100;
				num = Math.round(num);
				num = num / 100;
				
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " m", start);
				} else if (scale == 0.01) {
					text = stringInsert(text, num + " cm", start);
				} else if (scale == 0.001) {
					text = stringInsert(text, num + " mm", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " km", start);
				}
			}
		} while (index != -1);
	}
	
	names = ["foot", "ft"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
				
				num = num * 0.3048;
				
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				} else if (num > 0.01 && num < 1) {
					num *= 100;
					scale = 0.01;
				} else if (num < 0.01) {
					num *= 1000;
					scale = 0.001;
				}
				
				// Significant to two digits
				num = num * 100;
				num = Math.round(num);
				num = num / 100;
				
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " m", start);
				} else if (scale == 0.01) {
					text = stringInsert(text, num + " cm", start);
				} else if (scale == 0.001) {
					text = stringInsert(text, num + " mm", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " km", start);
				}
			}
		} while (index != -1);
	}
	
	names = ["yard", "yd"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
				
				num = num * 0.9144;
				
				var scale = 1;
				if (num > 1000) {
					num /= 1000;
					scale = 1000;
				} else if (num > 0.01 && num < 1) {
					num *= 100;
					scale = 0.01;
				} else if (num < 0.01) {
					num *= 1000;
					scale = 0.001;
				}
				
				// Significant to two digits
				num = num * 100;
				num = Math.round(num);
				num = num / 100;
				
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				if (scale == 1) {
					text = stringInsert(text, num + " m", start);
				} else if (scale == 0.01) {
					text = stringInsert(text, num + " cm", start);
				} else if (scale == 0.001) {
					text = stringInsert(text, num + " mm", start);
				} else if (scale == 1000) {
					text = stringInsert(text, num + " km", start);
				}
			}
		} while (index != -1);
	}
	
	names = ["mile", "miles"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
				
				num = num * 1.609344;
				
				// Significant to two digits
				num = num * 100;
				num = Math.round(num);
				num = num / 100;
				
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				text = stringInsert(text, num + " km", start);
			}
		} while (index != -1);
	}
	
	names = ["acre"];
	for (var i = 0; i < names.length; i++) {
		var s = names[i];
		var index = -1;
		do {
			if (!new RegExp(".*\\b" + s + "\\b.*").test(text)) break;
			var index = text.indexOf(s, index);
			if (index != -1) { // Found
				obj = getNumber(text, index);
				num = obj.num;
				
				num = num * 4046.85642;
				
				// Significant to two digits
				num = num * 100;
				num = Math.round(num);
				num = num / 100;
				
				// Replace number and unit in text
				start = obj.start;
				end = obj.end;
				if (text.charAt(index - 1) == " ") { // The value is seperated from the unit by a space
					text = stringCut(text, start, end + s.length);
				} else { // It is not
					text = stringCut(text, start, end + s.length - 1);
				}
				text = stringInsert(text, num + " m²", start);
			}
		} while (index != -1);
	}
	
	return text;
}

// Disclaimer: This is not my code. It came from SO. http://stackoverflow.com/a/40749720/3141917
function iterateOverElements(){
	var xpathResult = document.evaluate(
		"//*/text()", 
		document, 
		null, 
		XPathResult.ORDERED_NODE_ITERATOR_TYPE, 
		null
	);
	var results = [];
	// We store the result in an array because if the DOM mutates
	// during iteration, the iteration becomes invalid.
	while(res = xpathResult.iterateNext()) {
		results.push(res);
	}
	results.forEach(function(res){
		res.textContent = forEachUnit(res.textContent);
		
		//res.textContent = res.textContent.replace(search,replacement);
	})
}
// End not-my-code.

// Convenience.
function getNumber(text, end) { // charAt(end) == 'l'
	var start = 0;
	var index = end;
	// Select entire number
	if (text.charAt(index - 1) == " ") {
		index = index - 2;
	} else {
		index--;
	}
	// Search for the start of the number, going backwards from the end of the number
	var j = -1;
	var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ","];
	for (var i = index; i > 0; i--) { // The > instead of >= is deliberate.
		if (digits.indexOf(text.charAt(i)) == -1) { // If the character at i is not a digit, that next character in the string is the beginning of the number.
			j = i + 1;
			break;
		}
	}
	
	// If j == -1, that means that there was no space and the number starts at index 0.
	if (j == -1) {
		start = 0;
	} else {
		start = j;
	}
	
	var str = text.slice(start, end).replace(",", "");
	var num = parseFloat(str);
	var ret = {
		num: num,
		start: start,
		end: end
	};
	return ret;
}

// Inserts a string into another at a specified index.
function stringInsert(string, insert, index) {
	return string.slice(0, index) + insert + string.slice(index, string.length);
}

// Cuts out a substring, and returns the resulting string. (Not the substring.)
function stringCut(string, start, end) {
	return string.substring(0, start) + string.substring(end, string.length);
}

iterateOverElements();
