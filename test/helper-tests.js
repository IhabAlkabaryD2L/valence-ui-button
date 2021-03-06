var verifyElementDimensions = function( elemConstructor ) {
	var elem;

	beforeEach( function () {
		jasmine.addMatchers( vui.jasmine.dom.matchers );
		elem = elemConstructor();
		document.body.appendChild(elem);
	});

	it( 'has correct outer height', function() {
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 29, Windows: 28 } }
		);
	} );

	it( 'has correct inner height', function() {
		expect( elem.clientHeight ).toBeOnAgent(
			{ default: { default: 27, Windows: 26 } }
		);
	} );

	it( 'has correct margins' , function() {
		expect( elem ).toHaveMargin( '0px' );
	} );

	it( 'responds to font change Arial 11', function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="11px";
		expect( elem.offsetHeight ).toBe( 28 );
	} );

	it( 'responds to font change Arial 13', function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="13px";
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 29, Windows: 28 } }
		);
	} );

	it( 'responds to font change Arial 15', function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="15px";
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 32, Windows: 29 }, Firefox: { default: 31 } }
		);
	} );

	it( 'responds to font change Arial 17', function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="17px";
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 34, Windows: 32 }, Firefox: { default: 33 } }
		);
	} );

	it( 'responds to font change Verdana 11', function() {
		document.body.style.fontFamily="Verdana";
		document.body.style.fontSize="11px";
		expect( elem.offsetHeight ).toBe( 28 );
	} );

	it( 'responds to font change Verdana 13', function() {
		document.body.style.fontFamily="Verdana";
		document.body.style.fontSize="13px";
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 29, Windows: 28 }, Firefox: { default: 29 } }
		);
	} );

	it( 'responds to font change Verdana 15', function() {
		document.body.style.fontFamily="Verdana";
		document.body.style.fontSize="15px";
		expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 30, 'Firefox' : 32 } );
	} );

	it( 'responds to font change Verdana 17', function() {
		document.body.style.fontFamily="Verdana";
		document.body.style.fontSize="17px";
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 33, Windows: 32 }, Firefox: { default: 34 }, Chrome: { default: 33 } }
		);
	} );

	afterEach( function() {
		document.body.removeChild(elem);
	});

};
