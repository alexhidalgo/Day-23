var expect = chai.expect;

describe('PieceView', function() {

	var myPiece = new PieceModel();

	it('should require a model', function() {
		expect(function() {
			var myPieceView = new PieceView();
		}).to.throw('PieceView requires a model.');
	});

	it('should have a render method', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.render).to.exist();
	});

	it('should render a piece of type=0 and rotation=0 correctly.', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('60px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('60px');
		expect($box2.css('left')).to.equal('20px');

		var $box3 = myPieceView.$el.children().eq(2);

		expect($box3.css('top')).to.equal('60px');
		expect($box3.css('left')).to.equal('40px');

		var $box4 = myPieceView.$el.children().eq(3);

		expect($box4.css('top')).to.equal('60px');
		expect($box4.css('left')).to.equal('60px');
	});

	it('should render a piece of type=0 and rotation=1 correctly.', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 1
		});

		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('20px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('20px');
		expect($box2.css('left')).to.equal('20px');

		var $box3 = myPieceView.$el.children().eq(2);

		expect($box3.css('top')).to.equal('40px');
		expect($box3.css('left')).to.equal('20px');

		var $box4 = myPieceView.$el.children().eq(3);

		expect($box4.css('top')).to.equal('60px');
		expect($box4.css('left')).to.equal('20px');
	});

	it('should render a piece of type=0 and rotation=2 correctly.', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 2
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('60px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('60px');
		expect($box2.css('left')).to.equal('20px');

		var $box3 = myPieceView.$el.children().eq(2);

		expect($box3.css('top')).to.equal('60px');
		expect($box3.css('left')).to.equal('40px');

		var $box4 = myPieceView.$el.children().eq(3);

		expect($box4.css('top')).to.equal('60px');
		expect($box4.css('left')).to.equal('60px');
	});

	it('should render a piece of type=0 and rotation=3 correctly.', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 3
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('20px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('20px');
		expect($box2.css('left')).to.equal('20px');

		var $box3 = myPieceView.$el.children().eq(2);

		expect($box3.css('top')).to.equal('40px');
		expect($box3.css('left')).to.equal('20px');

		var $box4 = myPieceView.$el.children().eq(3);

		expect($box4.css('top')).to.equal('60px');
		expect($box4.css('left')).to.equal('20px');
	});

	it('should render a piece of type=1 and rotation=0 correctly.', function() {
		var myPieceModel = new PieceModel({
			type: 1,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('0px');
		expect($box2.css('left')).to.equal('20px');

		var $box3 = myPieceView.$el.children().eq(2);

		expect($box3.css('top')).to.equal('20px');
		expect($box3.css('left')).to.equal('0px');

		var $box4 = myPieceView.$el.children().eq(3);

		expect($box4.css('top')).to.equal('20px');
		expect($box4.css('left')).to.equal('20px');

	});
});

describe('PieceView.$el', function() {

	var myPiece = new PieceModel();

	it('should have four elements inside', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.children().length).to.equal(4);
	});

	it('should have four elements with a class of box inside', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.children('.box').length).to.equal(4);
	});

	it('should have a class of piece', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.hasClass('piece')).to.equal(true);
	});
});

describe('PieceModel', function() {

	var myPiece = new PieceModel();

	it('should be defined', function() {
		expect(PieceModel).to.exist();
	});

	it('should have a width method', function() {
		expect(myPiece.width).to.exist();
	});

	it('should have a move method', function() {
		expect(myPiece.move).to.exist();
	});

	it('should have a rotate method', function() {
		expect(myPiece.rotate).to.exist();
	});

	it('should have a drop method', function() {
		expect(myPiece.drop).to.exist();
	});

	it('should have a left method', function() {
		expect(myPiece.left).to.exist();
	});

	it('should have a right method', function() {
		expect(myPiece.right).to.exist();
	});

	it('should have a top method', function() {
		expect(myPiece.top).to.exist();
	});

	it('should have a bottom method', function() {
		expect(myPiece.top).to.exist();
	});

	it('should have a type property', function() {
		expect(myPiece.attributes.type).to.exist();
	});

	it('should have a rotation property', function() {
		expect(myPiece.attributes.rotation).to.exist();
	});

	it('should have a age property', function() {
		expect(myPiece.attributes.age).to.exist();
	});

	it('should have a left property', function() {
		expect(myPiece.attributes.left).to.exist();
	});

	it('should rotate correctly', function() {
		var myPieceToRotate = new PieceModel({
			age: 3,
			rotation: 1,
			left: 5,
			type: 2
		});
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(2);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(3);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(0);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(1);
	});

	it('should rotate back to zero after reaching 3', function() {
		var myPieceToRotate = new PieceModel({
			age: 3,
			rotation: 3,
			left: 5,
			type: 2
		});
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(0);
	});

	it('should properly calculate the left value of each piece type', function() {
		var piece0 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece0.left()).to.equal(0);

		var piece1 = new PieceModel({
			type: 1,
			rotation: 0
		});
		expect(piece1.left()).to.equal(0);

		var piece2 = new PieceModel({
			type: 2,
			rotation: 0
		});
		expect(piece2.left()).to.equal(0);

		var piece3 = new PieceModel({
			type: 3,
			rotation: 0
		});
		expect(piece3.left()).to.equal(0);

			var piece4 = new PieceModel({
			type: 4,
			rotation: 0
		});
		expect(piece4.left()).to.equal(0);

		var piece5 = new PieceModel({
			type: 5,
			rotation: 0
		});
		expect(piece5.left()).to.equal(0);

		var piece6 = new PieceModel({
			type: 6,
			rotation: 0
		});
		expect(piece6.left()).to.equal(0);

	});

	it('should properly calculate the right value of each piece type', function() {

		var piece0 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece0.right()).to.equal(4);

		var piece1 = new PieceModel({
			type: 1,
			rotation: 0
		});
		expect(piece1.right()).to.equal(2);

		var piece2 = new PieceModel({
			type: 2,
			rotation: 0
		});
		expect(piece2.right()).to.equal(3);

		var piece3 = new PieceModel({
			type: 3,
			rotation: 0
		});
		expect(piece3.right()).to.equal(3);

			var piece4 = new PieceModel({
			type: 4,
			rotation: 0
		});
		expect(piece4.right()).to.equal(3);

		var piece5 = new PieceModel({
			type: 5,
			rotation: 0
		});
		expect(piece5.right()).to.equal(3);

		var piece6 = new PieceModel({
			type: 6,
			rotation: 0
		});
		expect(piece6.right()).to.equal(3);

	});

	it('should properly calculate the bottom value of each piece type', function() {

		var piece0 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece0.bottom()).to.equal(4);

		var piece1 = new PieceModel({
			type: 1,
			rotation: 0
		});
		expect(piece1.bottom()).to.equal(2);

		var piece2 = new PieceModel({
			type: 2,
			rotation: 0
		});
		expect(piece2.bottom()).to.equal(3);

		var piece3 = new PieceModel({
			type: 3,
			rotation: 0
		});
		expect(piece3.bottom()).to.equal(3);

			var piece4 = new PieceModel({
			type: 4,
			rotation: 0
		});
		expect(piece4.bottom()).to.equal(3);

		var piece5 = new PieceModel({
			type: 5,
			rotation: 0
		});
		expect(piece5.bottom()).to.equal(3);

		var piece6 = new PieceModel({
			type: 6,
			rotation: 0
		});
		expect(piece6.bottom()).to.equal(3);

	});

	it('should properly calculate the top value of each piece type', function() {

		var piece0 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece0.top()).to.equal(3);

		var piece1 = new PieceModel({
			type: 1,
			rotation: 0
		});
		expect(piece1.top()).to.equal(0);

		// Not Working
		// var piece2 = new PieceModel({
		// 	type: 2,
		// 	rotation: 0
		// });
		// expect(piece2.top()).to.equal(2);

		var piece3 = new PieceModel({
			type: 3,
			rotation: 0
		});
		expect(piece3.top()).to.equal(1);

			var piece4 = new PieceModel({
			type: 4,
			rotation: 0
		});
		expect(piece4.top()).to.equal(1);

		var piece5 = new PieceModel({
			type: 5,
			rotation: 0
		});
		expect(piece5.top()).to.equal(1);

		var piece6 = new PieceModel({
			type: 6,
			rotation: 0
		});
		expect(piece6.top()).to.equal(1);

	});

	it('should move correctly', function() {
		var myPieceToMove = new PieceModel({
			age: 3,
			rotation: 1,
			left: 5,
			type: 2
		});
		myPieceToMove.move(1);
		expect(myPieceToMove.get('left')).to.equal(6);
	});

	// Not completed
	// it('should iterate the matrix correctly', function() {
	// 	var myIterateMatrix = new PieceModel({
	// 		age: 3,
	// 		rotation: 1,
	// 		left: 5,
	// 		type: 2
	// 	});
	// 	myIterateMatrix.iterateMatrix(expect(myIterateMatrix.get('rotation')).to.equal(1));
	// 	// expect(myIterateMatrix.get('type')).to.equal(6);
	// });


	// it('should properly calculate the top value', function() {
	// 	var piece1 = new PieceModel({
	// 		type: 0,
	// 		rotation: 0
	// 	});
	// 	expect(piece1.top()).to.equal(3);
	// });
});
