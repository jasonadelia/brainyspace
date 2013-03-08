/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'brainyspace\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-printer' : '&#x2305;',
			'icon-mail' : '&#x2709;',
			'icon-wifi' : '&#x2314;',
			'icon-whiteboard' : '&#x25a4;',
			'icon-tiers' : '&#x25b3;',
			'icon-meetings' : '&#x2318;',
			'icon-lounge' : '&#x274f;',
			'icon-hipster' : '&#x263b;',
			'icon-eventspace' : '&#x2610;',
			'icon-community' : '&#x271c;',
			'icon-coffee' : '&#x2668;',
			'icon-chair' : '&#x230b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};