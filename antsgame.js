(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"antsgame_atlas_1", frames: [[812,369,786,221],[0,556,660,156],[0,0,810,396],[662,592,520,123],[812,0,803,367],[1600,369,20,221],[0,398,684,156]]},
		{name:"antsgame_atlas_2", frames: [[826,0,821,555],[0,0,824,554],[826,557,821,555],[0,556,824,554],[826,1114,821,555],[0,1112,824,554]]},
		{name:"antsgame_atlas_3", frames: [[0,0,1188,849],[1190,677,822,556],[0,1235,822,556],[824,1235,822,556],[1190,0,800,675]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1440);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2467,335);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2562,1442);


(lib.CachedBmp_12 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["antsgame_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["antsgame_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2562,1442);


(lib.blow = function() {
	this.initialize(img.blow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2100,1500);


(lib.hover = function() {
	this.initialize(ss["antsgame_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hover_1 = function() {
	this.initialize(ss["antsgame_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pointer = function() {
	this.initialize(img.pointer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2100,1500);


(lib.rest = function() {
	this.initialize(ss["antsgame_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rest_1 = function() {
	this.initialize(ss["antsgame_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.selected = function() {
	this.initialize(ss["antsgame_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.selected_1 = function() {
	this.initialize(ss["antsgame_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.START = function() {
	this.initialize(ss["antsgame_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.START_1 = function() {
	this.initialize(ss["antsgame_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.START_2 = function() {
	this.initialize(ss["antsgame_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.target1 = function() {
	this.initialize(ss["antsgame_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.youWon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(456.05,115.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.youWon, new cjs.Rectangle(0,0,1280,720), null);


(lib.windHitTest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AqjmUIVHAAIAAMpI1HAAg");
	this.shape.setTransform(67.625,40.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AqjGVIAAspIVHAAIAAMpg");
	this.shape_1.setTransform(67.625,40.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.windHitTest, new cjs.Rectangle(-1,-1,137.3,82.9), null);


(lib.tilesSym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D7614").s().p("EBSEAy0IAAsaIMaAAIAAMagEBARAymIAAsZIMaAAIAAMZgEAuoAymIAAsZIMaAAIAAMZgEAc/AymIAAsZIMaAAIAAMZgEALXAymIAAsZIMZAAIAAMZgEgGSAymIAAsZIMZAAIAAMZgEgX6AymIAAsZIMaAAIAAMZgEgpjAymIAAsZIMaAAIAAMZgEg7MAymIAAsZIMaAAIAAMZgEhM1AymIAAsZIMaAAIAAMZgEhedAymIAAsZIMZAAIAAMZgEBSEAg2IAAsaIMaAAIAAMagEBARAgzIAAsaIMaAAIAAMagEAuoAgzIAAsaIMaAAIAAMagEAc/AgzIAAsaIMaAAIAAMagEALXAgzIAAsaIMZAAIAAMagEgGSAgzIAAsaIMZAAIAAMagEgX6AgzIAAsaIMaAAIAAMagEgpjAgzIAAsaIMaAAIAAMagEg7MAgzIAAsaIMaAAIAAMagEhM1AgzIAAsaIMaAAIAAMagEhedAgzIAAsaIMZAAIAAMagEBSEAPCIAAsaIMaAAIAAMagEBARAPAIAAsaIMaAAIAAMagEAuoAPAIAAsaIMaAAIAAMagAc/PAIAAsaIMaAAIAAMagALXPAIAAsaIMZAAIAAMagAmSPAIAAsaIMZAAIAAMagA36PAIAAsaIMaAAIAAMagEgpjAPAIAAsaIMaAAIAAMagEg7MAPAIAAsaIMaAAIAAMagEhM1APAIAAsaIMaAAIAAMagEhedAPAIAAsaIMZAAIAAMagEBSEgCxIAAsaIMaAAIAAMagEBARgCyIAAsaIMaAAIAAMagEAuogCyIAAsaIMaAAIAAMagAc/iyIAAsaIMaAAIAAMagALXiyIAAsaIMZAAIAAMagAmSiyIAAsaIMZAAIAAMagA36iyIAAsaIMaAAIAAMagEgpjgCyIAAsaIMaAAIAAMagEg7MgCyIAAsaIMaAAIAAMagEhM1gCyIAAsaIMaAAIAAMagEhedgCyIAAsaIMZAAIAAMagEBSEgUYIAAsZIMaAAIAAMZgEBARgUmIAAsZIMaAAIAAMZgEAuogUmIAAsZIMaAAIAAMZgAc/0mIAAsZIMaAAIAAMZgALX0mIAAsZIMZAAIAAMZgAmS0mIAAsZIMZAAIAAMZgA360mIAAsZIMaAAIAAMZgEgpjgUmIAAsZIMaAAIAAMZgEg7MgUmIAAsZIMaAAIAAMZgEhM1gUmIAAsZIMaAAIAAMZgEhedgUmIAAsZIMZAAIAAMZgEBSEgmWIAAsZIMaAAIAAMZgEBARgmZIAAsaIMaAAIAAMagEAuogmZIAAsaIMaAAIAAMagEAc/gmZIAAsaIMaAAIAAMagEALXgmZIAAsaIMZAAIAAMagEgGSgmZIAAsaIMZAAIAAMagEgX6gmZIAAsaIMaAAIAAMagEgpjgmZIAAsaIMaAAIAAMagEg7MgmZIAAsaIMaAAIAAMagEhM1gmZIAAsaIMaAAIAAMagEhedgmZIAAsaIMZAAIAAMag");
	this.shape.setTransform(604.625,325.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tilesSym, new cjs.Rectangle(0,0,1209.3,650.4), null);


(lib.targetBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("hovertargetwav");
	}
	this.frame_2 = function() {
		playSound("shoottargetwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// skins
	this.instance = new lib.rest();
	this.instance.setTransform(0,0,0.2436,0.2436);

	this.instance_1 = new lib.hover();
	this.instance_1.setTransform(0,0,0.2436,0.2436);

	this.instance_2 = new lib.selected();
	this.instance_2.setTransform(0,0,0.2436,0.2436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,135.2);


(lib.target = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.target1();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target, new cjs.Rectangle(0,0,200,168.8), null);


(lib.startbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("hovermp33");
	}
	this.frame_2 = function() {
		playSound("winSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.START_1();
	this.instance.setTransform(-97,366,0.4866,0.4866);

	this.instance_1 = new lib.START();
	this.instance_1.setTransform(-97,366,0.4866,0.4866);

	this.instance_2 = new lib.START_2();
	this.instance_2.setTransform(-97,366,0.4866,0.4866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,366,400,270.6);


(lib.rows_collision = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ECe7A1ZMlCNAAAECj4AjpMlHjAAAECopASIMlJ7AAAEip0gAXMFJVAAAEihfgSnMFLVAAAECn3gkXMlFYAAAEipOg1YMFHjAAA");
	this.shape.setTransform(632.1,341.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rows_collision, new cjs.Rectangle(-455.8,-1,2175.9,685.5), null);


(lib.pointer_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pointer();
	this.instance.setTransform(0,0,0.0828,0.0831);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pointer_1, new cjs.Rectangle(0,0,173.8,124.7), null);


(lib.playAgainBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(32,51.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playAgainBtn, new cjs.Rectangle(0,0,405,198), null);


(lib.outsideCollision = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("EB5QhAVIk9AAIAA3lEB0TBRaIATAAEB0TBRaIAAGhEB0TBRaMAAAiRvMjrQAAAIiSAAEh3FhHyIAIHdIAeahMAACB3OMDqwAAAEh2dgwhIgCKt");
	this.shape.setTransform(776.025,562.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1554.1,1127.3);


(lib.lostPlayAgainBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(71.3,57.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,401.5,183.5);


(lib.cols_collision = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Egr2BuZMgABg6KMAANhuhMAAAg0VEhPbBsKMAABg42MgAOhnpMgABg6CEhhKhtIMAAADXDEg8qBosMAAAjXDEgaIBrKMAAAjZSEgIIhrpMAAADZyEAIYBu4MAAAjahEAbIht4MAAADcwEAsphxGMAAADbhEA9qhvnMAAADguEBQKhwmMAAADdAEBhLht4MAAADYT");
	this.shape.setTransform(631.9,371.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cols_collision, new cjs.Rectangle(9,-353.4,1245.8,1449.8000000000002), null);


(lib.blowSym_in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.blow();
	this.instance.setTransform(0,0,0.1429,0.143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blowSym_in, new cjs.Rectangle(0,0,300,214.5), null);


(lib.blowBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("breathe_in_expwav");
	}
	this.frame_2 = function() {
		playSound("blow1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// skins
	this.instance = new lib.rest_1();

	this.instance_1 = new lib.hover_1();
	this.instance_1.setTransform(0,4);

	this.instance_2 = new lib.selected_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,824,558);


(lib.backgroundlost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0033").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backgroundlost, new cjs.Rectangle(0,0,1280,720), null);


(lib.antSimText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(272.75,-8.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000509").s().p("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");
	this.shape_1.setTransform(272.85,-8.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000A11").s().p("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");
	this.shape_2.setTransform(272.9,-7.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000F1A").s().p("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");
	this.shape_3.setTransform(273,-7.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001422").s().p("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");
	this.shape_4.setTransform(273.1,-6.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00192B").s().p("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");
	this.shape_5.setTransform(273.15,-6.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001E33").s().p("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");
	this.shape_6.setTransform(273.25,-5.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00233C").s().p("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");
	this.shape_7.setTransform(273.35,-4.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002944").s().p("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");
	this.shape_8.setTransform(273.4,-4.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002E4D").s().p("ACHDPQglgZgQgrQgLgdAAhQIAAisQAAgpgLgNQgLgNgZAAIgRAAIAAgMIDAAAIgRAMQgcAAgMASQgHALgBAmIAADAQABAaAFAhQAEAiANASQAMATAYAMQAWAMAiAAQAsAAAjgTQAhgTANgdQANgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgQAAQgaAAgPAWQgHAKABAlIAACzQAABDgOAlQgNAlgnAaQgmAahDAAQhJAAgmgZgAdVCnQg/hBAAhnQAAhpBIhDQA+g6BYAAQBWAAA/BCQBABBgBBiQABBkhBBDQg/BDhbAAQhcAAg9hBgAeOijQgtA3AABqQAABsAuA6QAkAtA7AAQA+AAApgxQApgxAAhpQAAhxgtg4Qgkgsg/AAQg8AAgkAsgAwCDlQgKgCgfgKQghgKgJAAQgHAAgFAFQgFAFgCAPIgMAAIAAiYIAMAAQAIAwAOAXQAPAYAeAQQAdAPAkAAQApAAAYgVQAXgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg4ggQg6gfgXgTQgZgTgMgXQgNgXAAgbQAAgwAlgiQAkgjA6AAQAiAAAoARQAiAJAGgFQAFgGADgPIANAAIAACZIgNAAQgFgsgPgaQgPgagdgPQgcgQgeAAQgiAAgXAVQgVAVAAAaQgBAUAOARQAVAZBMApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg+AAQgTAAgRgDgA83DlIkllkIAAEQQAAApAIAKQANAOAaAAIAPAAIAAAMIiaAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgUgWgJgHQgKgIgTgGQgKgDgTAAIAAgMIB4AAIEPFMIAAj/QAAgpgJgKQgMgOgaAAIgQgMICbAAIgQAMQgcAAgMARQgHALAAAlIAAF1gEAmbAAOIgbABIgUgBIAACBQAAAqAJAKQANAPAZAAIARAAIAAAMIi+AAIAAgMIAQAAQAdAAAMgTQAHgKgBgmIAAkdQAAgqgJgKQgMgPgaAAIgQAAIAAgMIChAAQBHAAAiALQAiAKAXAcQAXAbAAAmQAAApgaAeQgcAeg3AMIBcB/QAfAsAXAOQAWAPAkAEIh2AMgEAlsgC+IASC5QBAAAAggbQAggcABgqQAAgqgagaQgbgagrAAQgTAAggAGgAXUDeIAAgMIAQAAQAbAAAMgRQAIgLgBglIAAlSIg1AAQgeAAgOAFQgRAGgMARQgMASgDAeIgMAAIAGhoIFqAAIAEBoIgWgnQgKgTgRgJQgQgJgcAAIg/AAIAAFSQAAApAJAKQANAOAZAAIAQAMgASvDSQAagCAKgHQAIgIABgLQAAgOgOgfIgbhAIirAAIgeBGQgMAaAAANQAAAKALAIQAJAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAcACIivAMgAQSAxICYAAIhLiygAH1DeIAAgMIARAAQAcAAAMgTQAGgKAAgmIAAkdQABgqgKgKQgMgPgZAAIgRAAIAAgMIDJAAQgkAMgNAHQgPAHgFAKQgFALgBAnIAAEWQABAbAFAKQAUAOArAAIAgAAQAzAAAVgIQAUgHARgTQASgUAQgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIirl1IAAEoQgBApAJAKQANAOAaAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAALgRQAIgLAAglIAAkhQAAgdgHgOQgEgJgNgGQgMgHgbAAIAAgMIB+AAIChFaICelaIB9AAQgrAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAbAAIAOAAIAAAMgAsdDeIAAgMIAPAAQAcAAANgQQAHgLAAgoIAAkdQAAgigEgLQgDgIgKgGQgPgIgQAAIgPAAIAAgMIC+AAIgQAMQgbAAgNAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAQAAIAQAMgA50DeIAAgMIAPAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgNAFQgSAGgLARQgMASgDAeIgMAAIAFhoIFqAAIAFBoIgWgnQgLgTgQgJQgRgJgbAAIg/AAIAAFSQAAApAJAKQAMAOAaAAIAQAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIirAAIgfBGQgLAaAAANQAAAKAKAIQAJAHAhADIAAAMIiNAAIAAgMQAdgFAHgIQASgQATgwICdlsIALAAICaFwQAUAtAOANQAPANAcACIAAAMgEgoaAAxICYAAIhMiyg");
	this.shape_9.setTransform(273.5,-3.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003355").s().p("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");
	this.shape_10.setTransform(273.6,-3.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00385E").s().p("ACHDPQgmgZgPgrQgLgdAAhQIAAisQABgpgLgNQgMgNgZAAIgRAAIAAgMIDAAAIgRAMQgbAAgMASQgJALABAmIAADAQgBAaAGAhQAEAiAMASQANATAXAMQAXAMAjAAQArAAAigTQAjgTANgdQAMgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgQAAQgaAAgPAWQgHAKAAAlIAACzQAABDgMAlQgOAlgnAaQgnAahDAAQhIAAgmgZgAdVCnQg/hBAAhnQAAhpBIhDQA/g6BWAAQBXAABABCQA/BBAABiQAABkhABDQhABDhaAAQhdAAg9hBgAeOijQgtA3AABqQAABsAuA6QAkAtA7AAQA+AAApgxQApgxAAhpQgBhxgsg4Qgkgsg/AAQg8AAgkAsgAwCDlQgKgCgggKQgggKgIAAQgJAAgEAFQgFAFgCAPIgNAAIAAiYIANAAQAIAwAOAXQAPAYAeAQQAdAPAjAAQAqAAAXgVQAYgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg5ggQg4gfgZgTQgYgTgMgXQgMgXAAgbQAAgwAkgiQAlgjA4AAQAkAAAnARQAjAJAFgFQAGgGADgPIALAAIAACZIgLAAQgHgsgOgaQgQgagcgPQgcgQgeAAQgiAAgWAVQgXAVABAaQAAAUANARQAVAZBMApQA+AhAXARQAWASANAYQAMAYAAAbQAAAygnAlQgnAkg+AAQgTAAgRgDgA83DlIkllkIAAEQQAAApAIAKQANAOAaAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAk0QgTgWgKgHQgKgIgUgGQgJgDgUAAIAAgMIB5AAIEQFMIAAj/QAAgpgKgKQgMgOgaAAIgPgMICaAAIgQAMQgcAAgLARQgIALAAAlIAAF1gEAmaAAOIgbABIgTgBIAACBQAAAqAJAKQANAPAYAAIASAAIAAAMIi+AAIAAgMIARAAQAcAAAMgTQAGgKAAgmIAAkdQABgqgKgKQgMgPgZAAIgRAAIAAgMIChAAQBHAAAiALQAiAKAXAcQAXAbAAAmQAAApgaAeQgbAeg4AMIBcB/QAfAsAXAOQAWAPAkAEIh2AMgEAlsgC+IASC5QBAAAAhgbQAfgcAAgqQAAgqgagaQgZgagrAAQgUAAggAGgAXUDeIAAgMIAQAAQAcAAALgRQAIgLAAglIAAlSIg1AAQgfAAgOAFQgRAGgMARQgMASgDAeIgLAAIAEhoIFrAAIAEBoIgVgnQgLgTgQgJQgSgJgbAAIg+AAIAAFSQgBApAKAKQAMAOAaAAIAPAMgASuDSQAbgCAJgHQAKgIgBgLQABgOgNgfIgbhAIisAAIgfBGQgLAaAAANQAAAKAKAIQAKAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAcACIiwAMgAQSAxICZAAIhMiygAH1DeIAAgMIARAAQAcAAAMgTQAGgKABgmIAAkdQgBgqgIgKQgNgPgZAAIgRAAIAAgMIDJAAQgjAMgOAHQgPAHgFAKQgGALABAnIAAEWQgBAbAGAKQAUAOArAAIAhAAQAzAAAUgIQAVgHAQgTQARgUASgpIAKACIglB5gAjGDeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAkoIirF1IgLAAIirl1IAAEoQAAApAJAKQALAOAbAAIAQAAIAAAMIibAAIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAkhQAAgdgGgOQgFgJgMgGQgNgHgbAAIAAgMIB9AAIChFaICflaIB+AAQgsAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAaAAIAQAAIAAAMgAseDeIAAgMIAQAAQAcAAANgQQAHgLAAgoIAAkdQAAgigEgLQgEgIgKgGQgOgIgQAAIgQAAIAAgMIC/AAIgQAMQgbAAgNAQQgIALAAAoIAAEdQAAAiAEALQAEAIAKAGQAOAIAQAAIAQAMgA51DeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgOAFQgRAGgMARQgMASgCAeIgMAAIAFhoIFqAAIAFBoIgWgnQgKgTgRgJQgRgJgcAAIg+AAIAAFSQAAApAJAKQANAOAZAAIAPAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIisAAIgeBGQgLAaAAANQAAAKAKAIQAJAHAhADIAAAMIiNAAIAAgMQAcgFAIgIQASgQATgwICclsIAMAAICbFwQATAtAPANQAPANAbACIAAAMgEgoaAAxICYAAIhMiyg");
	this.shape_11.setTransform(273.65,-2.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003D66").s().p("ACHDPQgmgZgPgrQgLgdAAhQIAAisQABgpgLgNQgMgNgZAAIgRAAIAAgMIDAAAIgRAMQgbAAgMASQgJALAAAmIAADAQAAAaAGAhQAEAiANASQALATAZAMQAWAMAjAAQArAAAjgTQAhgTAOgdQAMgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgQAAQgaAAgPAWQgHAKAAAlIAACzQAABDgMAlQgOAlgnAaQgnAahDAAQhIAAgmgZgAdVCnQg/hBAAhnQAAhpBIhDQA/g6BWAAQBXAAA/BCQBABBAABiQAABkhABDQhABDhaAAQhdAAg9hBgAeOijQgtA3AABqQAABsAuA6QAkAtA7AAQA+AAApgxQApgxAAhpQAAhxgtg4Qgkgsg/AAQg8AAgkAsgAwCDlQgKgCgggKQgggKgIAAQgJAAgEAFQgFAFgCAPIgNAAIAAiYIANAAQAIAwAOAXQAPAYAeAQQAdAPAjAAQApAAAZgVQAXgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg5ggQg5gfgYgTQgYgTgMgXQgMgXAAgbQAAgwAkgiQAlgjA4AAQAkAAAnARQAjAJAFgFQAGgGACgPIAMAAIAACZIgMAAQgFgsgPgaQgQgagcgPQgcgQgeAAQgiAAgXAVQgWAVABAaQAAAUANARQAVAZBMApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg+AAQgTAAgRgDgA83DlIkllkIAAEQQAAApAIAKQANAOAaAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAk0QgUgWgJgHQgKgIgTgGQgKgDgUAAIAAgMIB5AAIEQFMIAAj/QAAgpgKgKQgMgOgaAAIgPgMICaAAIgQAMQgcAAgLARQgIALAAAlIAAF1gEAmaAAOIgbABIgTgBIAACBQAAAqAJAKQANAPAYAAIASAAIAAAMIi+AAIAAgMIARAAQAcAAAMgTQAGgKAAgmIAAkdQABgqgKgKQgMgPgZAAIgRAAIAAgMIChAAQBHAAAiALQAiAKAXAcQAXAbAAAmQAAApgaAeQgbAeg4AMIBcB/QAfAsAXAOQAWAPAkAEIh2AMgEAlsgC+IASC5QBAAAAhgbQAfgcAAgqQAAgqgZgaQgagagrAAQgUAAggAGgAXUDeIAAgMIAQAAQAbAAAMgRQAIgLAAglIAAlSIg2AAQgeAAgOAFQgRAGgMARQgMASgDAeIgLAAIAEhoIFrAAIAEBoIgVgnQgLgTgQgJQgRgJgcAAIg+AAIAAFSQgBApAKAKQAMAOAZAAIAQAMgASuDSQAbgCAJgHQAJgIAAgLQAAgOgMgfIgbhAIisAAIgfBGQgKAagBANQABAKAJAIQAKAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAcACIiwAMgAQSAxICZAAIhMiygAH1DeIAAgMIARAAQAcAAAMgTQAGgKABgmIAAkdQAAgqgJgKQgNgPgZAAIgRAAIAAgMIDJAAQgjAMgOAHQgPAHgFAKQgFALAAAnIAAEWQAAAbAFAKQAUAOArAAIAgAAQAzAAAVgIQAUgHARgTQARgUARgpIALACIgmB5gAjGDeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAkoIirF1IgLAAIirl1IAAEoQgBApAKAKQAMAOAaAAIAQAAIAAAMIibAAIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAkhQAAgdgGgOQgFgJgNgGQgMgHgbAAIAAgMIB+AAICgFaICflaIB9AAQgrAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAaAAIAPAAIAAAMgAseDeIAAgMIAQAAQAcAAANgQQAHgLAAgoIAAkdQAAgigEgLQgEgIgJgGQgPgIgQAAIgQAAIAAgMIC/AAIgQAMQgbAAgNAQQgIALAAAoIAAEdQAAAiAEALQAEAIAKAGQAOAIAQAAIAQAMgA51DeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgNAFQgSAGgMARQgMASgCAeIgMAAIAFhoIFqAAIAFBoIgWgnQgLgTgQgJQgRgJgcAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIirAAIgfBGQgLAaAAANQAAAKAKAIQAJAHAhADIAAAMIiNAAIAAgMQAdgFAHgIQARgQAUgwICdlsIALAAICaFwQATAtAQANQAPANAbACIAAAMgEgoaAAxICYAAIhMiyg");
	this.shape_12.setTransform(273.75,-2.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00426F").s().p("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");
	this.shape_13.setTransform(273.85,-1.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004777").s().p("ACIDPQgmgZgQgrQgKgdAAhQIAAisQgBgpgKgNQgMgNgZAAIgRAAIAAgMIDAAAIgRAMQgbAAgMASQgJALABAmIAADAQAAAaAEAhQAFAiAMASQAMATAYAMQAXAMAjAAQArAAAigTQAigTANgdQANgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgRAAQgaAAgOAWQgGAKgBAlIAACzQABBDgNAlQgOAlgmAaQgoAahDAAQhIAAglgZgAdUCnQg+hBAAhnQAAhpBIhDQA+g6BXAAQBXAABABCQA+BBABBiQgBBkg/BDQhABDhbAAQhbAAg/hBgAeOijQgtA3AABqQAABsAvA6QAjAtA6AAQA/AAApgxQAogxAAhpQAAhxgsg4QgkgshAAAQg7AAgkAsgAwCDlQgKgCgggKQgggKgIAAQgJAAgEAFQgFAFgDAPIgLAAIAAiYIALAAQAJAwAPAXQAOAYAeAQQAdAPAjAAQApAAAYgVQAYgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg5ggQg4gfgYgTQgZgTgMgXQgMgXAAgbQgBgwAlgiQAlgjA4AAQAkAAAnARQAiAJAGgFQAFgGAEgPIALAAIAACZIgLAAQgHgsgPgaQgPgagcgPQgcgQgeAAQgiAAgWAVQgXAVAAAaQAAAUAPARQATAZBNApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg9AAQgUAAgRgDgA84DlIkklkIAAEQQAAApAJAKQAMAOAaAAIAQAAIAAAMIibAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgTgWgKgHQgKgIgUgGQgJgDgUAAIAAgMIB5AAIEQFMIAAj/QAAgpgKgKQgMgOgaAAIgPgMICaAAIgQAMQgcAAgLARQgIALAAAlIAAF1gEAmbAAOIgcABIgTgBIAACBQAAAqAKAKQAMAPAZAAIARAAIAAAMIi+AAIAAgMIARAAQAcAAAMgTQAGgKABgmIAAkdQAAgqgJgKQgNgPgZAAIgRAAIAAgMICiAAQBGAAAiALQAhAKAYAcQAXAbAAAmQAAApgbAeQgbAeg3AMIBbB/QAgAsAWAOQAXAPAlAEIh3AMgEAlsgC+IATC5QA/AAAhgbQAfgcAAgqQAAgqgagaQgagagqAAQgTAAghAGgAXUDeIAAgMIAPAAQAcAAANgRQAGgLABglIAAlSIg1AAQggAAgNAFQgRAGgMARQgMASgCAeIgMAAIAEhoIFqAAIAGBoIgXgnQgKgTgRgJQgRgJgbAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgASvDSQAagCAKgHQAJgIAAgLQAAgOgNgfIgbhAIisAAIgfBGQgLAaABANQgBAKAKAIQAKAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAbACIiuAMgAQSAxICZAAIhMiygAH1DeIAAgMIAQAAQAcAAANgTQAHgKAAgmIAAkdQgBgqgIgKQgNgPgaAAIgQAAIAAgMIDJAAQgjAMgPAHQgOAHgFAKQgGALABAnIAAEWQgBAbAGAKQAUAOArAAIAhAAQAzAAAUgIQAVgHARgTQAQgUASgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIisl1IAAEoQABApAIAKQAMAOAbAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAALgRQAIgLAAglIAAkhQAAgdgGgOQgFgJgMgGQgMgHgcAAIAAgMIB9AAIChFaICflaIB+AAQgsAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAbAAIAPAAIAAAMgAseDeIAAgMIARAAQAbAAAMgQQAIgLAAgoIAAkdQAAgigEgLQgDgIgLgGQgOgIgPAAIgRAAIAAgMIC/AAIgRAMQgbAAgMAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAPAAIARAMgA51DeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgOAFQgQAGgMARQgNASgCAeIgMAAIAFhoIFqAAIAFBoIgWgnQgKgTgRgJQgRgJgcAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIisAAIgeBGQgLAaAAANQAAAKAKAIQAKAHAfADIAAAMIiLAAIAAgMQAbgFAJgIQAQgQAVgwICblsIAMAAICbFwQASAtAPANQAQANAbACIAAAMgEgobAAxICZAAIhLiyg");
	this.shape_14.setTransform(273.9,-1.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004C80").s().p("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");
	this.shape_15.setTransform(274,-0.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#005188").s().p("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");
	this.shape_16.setTransform(274.1,-0.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005690").s().p("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");
	this.shape_17.setTransform(274.15,0.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005B99").s().p("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");
	this.shape_18.setTransform(274.25,1.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0060A1").s().p("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");
	this.shape_19.setTransform(274.35,1.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0065AA").s().p("ACHDPQglgZgQgrQgLgdAAhQIAAisQAAgpgLgNQgLgNgZAAIgRAAIAAgMIDAAAIgRAMQgcAAgMASQgHALgBAmIAADAQABAaAFAhQAEAiANASQAMATAYAMQAWAMAiAAQAsAAAjgTQAhgTAOgdQAMgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgQAAQgbAAgOAWQgHAKABAlIAACzQAABDgOAlQgNAlgnAaQgmAahDAAQhJAAgmgZgAdVCnQg/hBAAhnQAAhpBIhDQA+g6BYAAQBWAAA/BCQBABBgBBiQABBkhBBDQg/BDhbAAQhcAAg9hBgAeOijQgtA3AABqQAABsAuA6QAkAtA7AAQA+AAApgxQApgxAAhpQAAhxgtg4Qgkgsg/AAQg8AAgkAsgAwCDlQgKgCgfgKQghgKgJAAQgHAAgFAFQgFAFgCAPIgMAAIAAiYIAMAAQAIAwAOAXQAPAYAeAQQAdAPAkAAQApAAAYgVQAXgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg4ggQg6gfgXgTQgZgTgMgXQgNgXAAgbQAAgwAlgiQAkgjA6AAQAiAAAoARQAiAJAGgFQAFgGADgPIANAAIAACZIgNAAQgFgsgPgaQgPgagdgPQgcgQgeAAQgiAAgXAVQgVAVAAAaQgBAUAOARQAVAZBMApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg+AAQgTAAgRgDgA84DlIkklkIAAEQQAAApAIAKQANAOAaAAIAPAAIAAAMIiaAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgUgWgJgHQgKgIgTgGQgKgDgTAAIAAgMIB4AAIEPFMIAAj/QAAgpgJgKQgMgOgaAAIgQgMICbAAIgQAMQgcAAgMARQgHALAAAlIAAF1gEAmbAAOIgbABIgUgBIAACBQAAAqAJAKQANAPAZAAIARAAIAAAMIi+AAIAAgMIAQAAQAdAAAMgTQAHgKgBgmIAAkdQAAgqgJgKQgMgPgaAAIgQAAIAAgMIChAAQBHAAAiALQAiAKAXAcQAXAbAAAmQAAApgaAeQgcAeg3AMIBcB/QAfAsAXAOQAWAPAkAEIh2AMgEAlsgC+IASC5QBAAAAggbQAggcABgqQAAgqgagaQgbgagrAAQgTAAggAGgAXUDeIAAgMIAQAAQAbAAAMgRQAIgLgBglIAAlSIg1AAQgeAAgOAFQgRAGgMARQgMASgDAeIgMAAIAGhoIFqAAIAEBoIgWgnQgKgTgQgJQgRgJgcAAIg/AAIAAFSQAAApAJAKQANAOAZAAIAQAMgASvDSQAagCAKgHQAIgIABgLQAAgOgOgfIgbhAIirAAIgeBGQgMAaAAANQAAAKALAIQAJAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAcACIivAMgAQSAxICYAAIhLiygAH1DeIAAgMIARAAQAbAAANgTQAGgKAAgmIAAkdQABgqgKgKQgMgPgZAAIgRAAIAAgMIDJAAQgkAMgNAHQgPAHgFAKQgFALgBAnIAAEWQABAbAFAKQAUAOArAAIAgAAQAzAAAVgIQAUgHARgTQASgUAQgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIisl1IAAEoQAAApAJAKQANAOAaAAIAQAAIAAAMIibAAIAAgMIAQAAQAcAAALgRQAIgLAAglIAAkhQAAgdgHgOQgEgJgNgGQgMgHgbAAIAAgMIB+AAIChFaICelaIB9AAQgrAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAbAAIAOAAIAAAMgAsdDeIAAgMIAPAAQAcAAANgQQAHgLAAgoIAAkdQAAgigEgLQgDgIgKgGQgPgIgQAAIgPAAIAAgMIC+AAIgRAMQgbAAgMAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAPAAIARAMgA50DeIAAgMIAPAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgNAFQgSAGgLARQgMASgDAeIgMAAIAFhoIFqAAIAFBoIgWgnQgLgTgQgJQgRgJgbAAIg/AAIAAFSQAAApAJAKQAMAOAaAAIAQAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIirAAIgfBGQgLAaAAANQAAAKAKAIQAJAHAhADIAAAMIiNAAIAAgMQAdgFAHgIQASgQATgwICdlsIALAAICaFwQAUAtAOANQAPANAcACIAAAMgEgoaAAxICYAAIhMiyg");
	this.shape_20.setTransform(274.4,2.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006AB2").s().p("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");
	this.shape_21.setTransform(274.5,2.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006FBB").s().p("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");
	this.shape_22.setTransform(274.6,3.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0075C3").s().p("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");
	this.shape_23.setTransform(274.65,3.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#007ACC").s().p("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");
	this.shape_24.setTransform(274.75,4.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#007FD4").s().p("ACHDPQglgZgQgrQgLgdAAhQIAAisQAAgpgLgNQgLgNgZAAIgRAAIAAgMIDAAAIgRAMQgcAAgMASQgHALgBAmIAADAQABAaAFAhQAEAiANASQAMATAYAMQAWAMAiAAQAsAAAjgTQAhgTANgdQANgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgQAAQgaAAgPAWQgHAKABAlIAACzQAABDgOAlQgNAlgnAaQgmAahDAAQhJAAgmgZgAdVCnQg/hBAAhnQAAhpBIhDQA+g6BYAAQBWAAA/BCQBABBgBBiQABBkhBBDQg/BDhbAAQhcAAg9hBgAeOijQgtA3AABqQAABsAuA6QAkAtA7AAQA+AAApgxQApgxAAhpQAAhxgtg4Qgkgsg/AAQg8AAgkAsgAwCDlQgKgCgfgKQghgKgJAAQgHAAgFAFQgFAFgCAPIgMAAIAAiYIAMAAQAIAwAOAXQAPAYAeAQQAdAPAkAAQApAAAYgVQAXgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg4ggQg6gfgXgTQgZgTgMgXQgNgXAAgbQAAgwAlgiQAkgjA6AAQAiAAAoARQAiAJAGgFQAFgGADgPIANAAIAACZIgNAAQgFgsgPgaQgPgagdgPQgcgQgeAAQgiAAgXAVQgVAVAAAaQgBAUAOARQAVAZBMApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg+AAQgTAAgRgDgA84DlIkklkIAAEQQAAApAIAKQANAOAaAAIAPAAIAAAMIiaAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgUgWgJgHQgKgIgTgGQgKgDgTAAIAAgMIB4AAIEPFMIAAj/QAAgpgJgKQgMgOgaAAIgQgMICbAAIgQAMQgcAAgMARQgHALAAAlIAAF1gEAmbAAOIgbABIgUgBIAACBQAAAqAJAKQANAPAZAAIARAAIAAAMIi+AAIAAgMIAQAAQAdAAAMgTQAHgKgBgmIAAkdQAAgqgJgKQgMgPgaAAIgQAAIAAgMIChAAQBHAAAiALQAiAKAXAcQAXAbAAAmQAAApgaAeQgcAeg3AMIBcB/QAfAsAXAOQAWAPAkAEIh2AMgEAlsgC+IASC5QBAAAAggbQAggcABgqQAAgqgagaQgbgagrAAQgTAAggAGgAXUDeIAAgMIAQAAQAbAAAMgRQAIgLgBglIAAlSIg1AAQgeAAgOAFQgRAGgMARQgMASgDAeIgMAAIAGhoIFqAAIAEBoIgWgnQgKgTgRgJQgQgJgcAAIg/AAIAAFSQAAApAJAKQANAOAZAAIAQAMgASvDSQAagCAKgHQAIgIABgLQAAgOgOgfIgbhAIirAAIgeBGQgMAaAAANQAAAKALAIQAJAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAbACIiuAMgAQSAxICYAAIhLiygAH1DeIAAgMIARAAQAbAAANgTQAGgKAAgmIAAkdQABgqgKgKQgMgPgZAAIgRAAIAAgMIDJAAQgkAMgNAHQgPAHgFAKQgFALgBAnIAAEWQABAbAFAKQAUAOArAAIAgAAQAzAAAVgIQAUgHARgTQASgUAQgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIisl1IAAEoQAAApAKAKQAMAOAaAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAkhQAAgdgHgOQgEgJgNgGQgMgHgbAAIAAgMIB+AAIChFaICelaIB9AAQgrAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAbAAIAOAAIAAAMgAsdDeIAAgMIAPAAQAcAAANgQQAHgLAAgoIAAkdQAAgigEgLQgDgIgKgGQgPgIgQAAIgPAAIAAgMIC+AAIgRAMQgbAAgMAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAPAAIARAMgA50DeIAAgMIAPAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgNAFQgSAGgLARQgMASgDAeIgMAAIAFhoIFqAAIAFBoIgWgnQgLgTgQgJQgRgJgbAAIg/AAIAAFSQAAApAJAKQAMAOAaAAIAQAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIirAAIgfBGQgLAaAAANQAAAKAKAIQAJAHAhADIAAAMIiNAAIAAgMQAdgFAHgIQASgQATgwICdlsIALAAICaFwQAUAtAOANQAPANAcACIAAAMgEgoaAAxICYAAIhMiyg");
	this.shape_25.setTransform(274.85,4.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0084DD").s().p("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");
	this.shape_26.setTransform(274.9,5.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0089E5").s().p("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");
	this.shape_27.setTransform(275,5.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#008EEE").s().p("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");
	this.shape_28.setTransform(275.1,6.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0093F6").s().p("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");
	this.shape_29.setTransform(275.15,6.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0098FF").s().p("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");
	this.shape_30.setTransform(275.25,7.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0096F7").s().p("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");
	this.shape_31.setTransform(275.25,8.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0094F0").s().p("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");
	this.shape_32.setTransform(275.25,8.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0091E8").s().p("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");
	this.shape_33.setTransform(275.25,8.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#008FE1").s().p("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");
	this.shape_34.setTransform(275.25,9.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#008DD9").s().p("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");
	this.shape_35.setTransform(275.25,9.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#008BD2").s().p("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");
	this.shape_36.setTransform(275.25,10.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0089CA").s().p("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");
	this.shape_37.setTransform(275.25,10.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0086C3").s().p("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");
	this.shape_38.setTransform(275.25,11.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0084BB").s().p("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");
	this.shape_39.setTransform(275.25,11.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0082B3").s().p("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");
	this.shape_40.setTransform(275.25,12.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0080AC").s().p("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");
	this.shape_41.setTransform(275.25,12.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#007EA4").s().p("ACIDPQgmgZgQgrQgKgdAAhQIAAisQgBgpgKgNQgMgNgZAAIgRAAIAAgMIDAAAIgRAMQgbAAgMASQgJALABAmIAADAQAAAaAEAhQAFAiAMASQAMATAYAMQAXAMAjAAQArAAAigTQAjgTAMgdQANgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgRAAQgaAAgOAWQgGAKgBAlIAACzQABBDgNAlQgOAlgmAaQgoAahDAAQhIAAglgZgAdUCnQg+hBAAhnQAAhpBIhDQA/g6BWAAQBXAABABCQA+BBABBiQgBBkg/BDQhABDhbAAQhbAAg/hBgAeOijQgtA3AABqQAABsAvA6QAjAtA6AAQA/AAApgxQAogxAAhpQAAhxgsg4QgkgshAAAQg7AAgkAsgAwCDlQgKgCgggKQgggKgIAAQgJAAgEAFQgFAFgDAPIgMAAIAAiYIAMAAQAJAwAPAXQAOAYAeAQQAdAPAjAAQApAAAYgVQAYgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg5ggQg4gfgZgTQgYgTgMgXQgMgXAAgbQgBgwAlgiQAlgjA4AAQAkAAAnARQAiAJAGgFQAFgGAEgPIALAAIAACZIgLAAQgHgsgPgaQgPgagcgPQgcgQgeAAQgiAAgWAVQgXAVAAAaQAAAUAPARQATAZBNApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg9AAQgUAAgRgDgA84DlIkklkIAAEQQAAApAJAKQAMAOAaAAIAQAAIAAAMIibAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgTgWgKgHQgKgIgUgGQgJgDgUAAIAAgMIB5AAIEQFMIAAj/QAAgpgKgKQgMgOgaAAIgPgMICaAAIgQAMQgcAAgLARQgIALAAAlIAAF1gEAmaAAOIgbABIgTgBIAACBQAAAqAKAKQAMAPAYAAIASAAIAAAMIi+AAIAAgMIARAAQAcAAAMgTQAGgKABgmIAAkdQAAgqgJgKQgNgPgZAAIgRAAIAAgMICiAAQBGAAAiALQAhAKAYAcQAXAbAAAmQAAApgbAeQgbAeg3AMIBbB/QAgAsAWAOQAXAPAlAEIh3AMgEAlsgC+IATC5QA/AAAhgbQAfgcAAgqQAAgqgagaQgagagqAAQgTAAghAGgAXUDeIAAgMIAPAAQAcAAANgRQAGgLABglIAAlSIg1AAQggAAgNAFQgRAGgMARQgMASgCAeIgMAAIAEhoIFqAAIAGBoIgXgnQgKgTgRgJQgRgJgbAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgASvDSQAagCAJgHQAKgIAAgLQgBgOgMgfIgbhAIisAAIgfBGQgLAaABANQgBAKAKAIQAKAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAbACIiuAMgAQSAxICZAAIhMiygAH1DeIAAgMIAQAAQAcAAANgTQAHgKAAgmIAAkdQgBgqgIgKQgNgPgaAAIgQAAIAAgMIDJAAQgjAMgPAHQgOAHgFAKQgGALABAnIAAEWQgBAbAGAKQAUAOArAAIAhAAQAzAAAUgIQAVgHARgTQAQgUASgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIisl1IAAEoQABApAIAKQAMAOAbAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAALgRQAIgLAAglIAAkhQAAgdgGgOQgFgJgMgGQgMgHgcAAIAAgMIB9AAIChFaICflaIB+AAQgsAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAaAAIAQAAIAAAMgAseDeIAAgMIARAAQAbAAAMgQQAIgLAAgoIAAkdQAAgigEgLQgDgIgLgGQgOgIgPAAIgRAAIAAgMIC/AAIgRAMQgbAAgMAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAPAAIARAMgA51DeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgOAFQgQAGgNARQgMASgCAeIgMAAIAFhoIFqAAIAFBoIgWgnQgKgTgRgJQgRgJgcAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIisAAIgeBGQgLAaAAANQAAAKAKAIQAKAHAfADIAAAMIiLAAIAAgMQAbgFAJgIQAQgQAVgwICblsIAMAAICbFwQASAtAPANQAQANAbACIAAAMgEgobAAxICZAAIhLiyg");
	this.shape_42.setTransform(275.25,13.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#007B9D").s().p("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");
	this.shape_43.setTransform(275.25,13.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#007995").s().p("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");
	this.shape_44.setTransform(275.25,14.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00778E").s().p("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");
	this.shape_45.setTransform(275.25,14.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#007586").s().p("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");
	this.shape_46.setTransform(275.25,15.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00727F").s().p("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");
	this.shape_47.setTransform(275.25,15.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#007077").s().p("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");
	this.shape_48.setTransform(275.25,16.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006E70").s().p("ACIDPQgmgZgQgrQgKgdAAhQIAAisQgBgpgKgNQgMgNgZAAIgRAAIAAgMIDAAAIgRAMQgbAAgMASQgJALABAmIAADAQAAAaAEAhQAFAiAMASQAMATAYAMQAXAMAjAAQArAAAigTQAjgTAMgdQANgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgRAAQgaAAgOAWQgGAKgBAlIAACzQABBDgNAlQgOAlgmAaQgoAahDAAQhIAAglgZgAdUCnQg+hBAAhnQAAhpBIhDQA/g6BWAAQBXAABABCQA+BBABBiQgBBkg/BDQhABDhbAAQhbAAg/hBgAeOijQgtA3AABqQAABsAvA6QAjAtA6AAQA/AAApgxQAogxAAhpQAAhxgsg4QgkgshAAAQg7AAgkAsgAwCDlQgKgCgggKQgggKgIAAQgJAAgEAFQgFAFgDAPIgMAAIAAiYIAMAAQAJAwAPAXQAOAYAeAQQAdAPAjAAQApAAAYgVQAYgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg5ggQg4gfgZgTQgYgTgMgXQgMgXAAgbQgBgwAlgiQAlgjA4AAQAkAAAnARQAiAJAGgFQAFgGAEgPIALAAIAACZIgLAAQgHgsgPgaQgPgagcgPQgcgQgeAAQgiAAgWAVQgXAVAAAaQAAAUAPARQATAZBNApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg9AAQgUAAgRgDgA84DlIkklkIAAEQQAAApAJAKQAMAOAaAAIAQAAIAAAMIibAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgTgWgKgHQgKgIgUgGQgJgDgUAAIAAgMIB5AAIEQFMIAAj/QAAgpgKgKQgMgOgaAAIgPgMICaAAIgQAMQgcAAgLARQgIALAAAlIAAF1gEAmaAAOIgbABIgTgBIAACBQAAAqAKAKQAMAPAYAAIASAAIAAAMIi+AAIAAgMIARAAQAcAAAMgTQAGgKABgmIAAkdQAAgqgJgKQgNgPgZAAIgRAAIAAgMICiAAQBGAAAiALQAhAKAYAcQAXAbAAAmQAAApgbAeQgbAeg3AMIBbB/QAgAsAWAOQAXAPAlAEIh3AMgEAlsgC+IATC5QA/AAAhgbQAfgcAAgqQAAgqgagaQgagagqAAQgTAAghAGgAXUDeIAAgMIAPAAQAcAAANgRQAGgLABglIAAlSIg1AAQggAAgNAFQgRAGgMARQgMASgCAeIgMAAIAEhoIFqAAIAGBoIgXgnQgKgTgRgJQgRgJgbAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgASvDSQAagCAJgHQAKgIAAgLQgBgOgMgfIgbhAIisAAIgfBGQgLAaABANQgBAKAKAIQAKAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAbACIiuAMgAQSAxICZAAIhMiygAH1DeIAAgMIAQAAQAcAAANgTQAHgKAAgmIAAkdQgBgqgIgKQgNgPgaAAIgQAAIAAgMIDJAAQgjAMgPAHQgOAHgFAKQgGALABAnIAAEWQgBAbAGAKQAUAOArAAIAhAAQAzAAAUgIQAVgHARgTQAQgUASgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIisl1IAAEoQABApAIAKQAMAOAbAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAALgRQAIgLAAglIAAkhQAAgdgGgOQgFgJgMgGQgMgHgcAAIAAgMIB9AAIChFaICflaIB+AAQgsAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAaAAIAQAAIAAAMgAseDeIAAgMIARAAQAbAAAMgQQAIgLAAgoIAAkdQAAgigEgLQgDgIgLgGQgOgIgPAAIgRAAIAAgMIC/AAIgRAMQgbAAgMAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAPAAIARAMgA51DeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgOAFQgQAGgNARQgMASgCAeIgMAAIAFhoIFqAAIAFBoIgWgnQgKgTgRgJQgRgJgcAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIisAAIgeBGQgLAaAAANQAAAKAKAIQAKAHAfADIAAAMIiLAAIAAgMQAbgFAJgIQAQgQAVgwICblsIAMAAICbFwQASAtAPANQAQANAbACIAAAMgEgobAAxICZAAIhLiyg");
	this.shape_49.setTransform(275.25,16.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006C68").s().p("ACIDPQgmgZgQgrQgKgdAAhQIAAisQgBgpgKgNQgMgNgZAAIgRAAIAAgMIDAAAIgRAMQgbAAgMASQgJALABAmIAADAQAAAaAEAhQAFAiAMASQAMATAYAMQAXAMAjAAQArAAAigTQAjgTAMgdQANgeAAhHIAAiyQAAgqgJgKQgNgPgZAAIgRgMICdAAIAAAMIgRAAQgaAAgOAWQgGAKgBAlIAACzQABBDgNAlQgOAlgmAaQgoAahDAAQhIAAglgZgAdUCnQg+hBAAhnQAAhpBIhDQA/g6BWAAQBXAABABCQA+BBABBiQgBBkg/BDQhABDhbAAQhbAAg/hBgAeOijQgtA3AABqQAABsAvA6QAjAtA6AAQA/AAApgxQAogxAAhpQAAhxgsg4QgkgshAAAQg7AAgkAsgAwCDlQgKgCgggKQgggKgIAAQgJAAgEAFQgFAFgDAPIgMAAIAAiYIAMAAQAJAwAPAXQAOAYAeAQQAdAPAjAAQApAAAYgVQAYgWAAgdQAAgRgJgQQgJgRgTgOQgNgKg5ggQg4gfgZgTQgYgTgMgXQgMgXAAgbQgBgwAlgiQAlgjA4AAQAkAAAnARQAiAJAGgFQAFgGAEgPIALAAIAACZIgLAAQgHgsgPgaQgPgagcgPQgcgQgeAAQgiAAgWAVQgXAVAAAaQAAAUAPARQATAZBNApQA+AhAXARQAXASAMAYQAMAYAAAbQAAAygnAlQgnAkg9AAQgUAAgRgDgA84DlIkklkIAAEQQAAApAJAKQAMAOAaAAIAQAAIAAAMIibAAIAAgMIAPAAQAdAAAMgRQAHgLAAglIAAk0QgTgWgKgHQgKgIgUgGQgJgDgUAAIAAgMIB5AAIEQFMIAAj/QAAgpgKgKQgMgOgaAAIgPgMICaAAIgQAMQgcAAgLARQgIALAAAlIAAF1gEAmaAAOIgbABIgTgBIAACBQAAAqAKAKQAMAPAYAAIASAAIAAAMIi+AAIAAgMIARAAQAcAAAMgTQAGgKABgmIAAkdQAAgqgJgKQgNgPgZAAIgRAAIAAgMICiAAQBGAAAiALQAhAKAYAcQAXAbAAAmQAAApgbAeQgbAeg3AMIBbB/QAgAsAWAOQAXAPAlAEIh3AMgEAlsgC+IATC5QA/AAAhgbQAfgcAAgqQAAgqgagaQgagagqAAQgTAAghAGgAXUDeIAAgMIAPAAQAcAAANgRQAGgLABglIAAlSIg1AAQggAAgNAFQgRAGgMARQgMASgCAeIgMAAIAEhoIFqAAIAGBoIgXgnQgKgTgRgJQgRgJgbAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgASvDSQAagCAJgHQAKgIAAgLQgBgOgMgfIgbhAIisAAIgfBGQgLAaABANQgBAKAKAIQAKAHAgADIAAAMIiMAAIAAgMQAcgFAIgIQARgQAUgwICclsICmFwQATAtAPANQAPANAbACIiuAMgAQSAxICZAAIhMiygAH1DeIAAgMIAQAAQAcAAANgTQAHgKAAgmIAAkdQgBgqgIgKQgNgPgaAAIgQAAIAAgMIDJAAQgjAMgPAHQgOAHgFAKQgGALABAnIAAEWQgBAbAGAKQAUAOArAAIAhAAQAzAAAUgIQAVgHARgTQAQgUASgpIALACIgmB5gAjGDeIAAgMIAQAAQAdAAALgRQAHgLAAglIAAkoIirF1IgLAAIisl1IAAEoQABApAIAKQAMAOAbAAIAPAAIAAAMIiaAAIAAgMIAQAAQAcAAALgRQAIgLAAglIAAkhQAAgdgGgOQgFgJgMgGQgMgHgcAAIAAgMIB9AAIChFaICflaIB+AAQgsAMgMARQgHALAAAlIAAEhQAAApAJAKQAMAOAaAAIAQAAIAAAMgAseDeIAAgMIARAAQAbAAAMgQQAIgLAAgoIAAkdQAAgigEgLQgDgIgLgGQgOgIgPAAIgRAAIAAgMIC/AAIgRAMQgbAAgMAQQgIALAAAoIAAEdQAAAiAEALQADAIALAGQAOAIAPAAIARAMgA51DeIAAgMIAQAAQAcAAAMgRQAHgLAAglIAAlSIg1AAQgfAAgOAFQgQAGgNARQgMASgCAeIgMAAIAFhoIFqAAIAFBoIgWgnQgKgTgRgJQgRgJgcAAIg+AAIAAFSQAAApAJAKQAMAOAaAAIAPAMgEgl+ADeIAAgMQAbgCAJgHQAJgIAAgLQAAgOgNgfIgbhAIisAAIgeBGQgLAaAAANQAAAKAKAIQAKAHAfADIAAAMIiLAAIAAgMQAbgFAJgIQAQgQAVgwICblsIAMAAICbFwQASAtAPANQAQANAbACIAAAMgEgobAAxICZAAIhLiyg");
	this.shape_50.setTransform(275.25,17.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#006A60").s().p("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");
	this.shape_51.setTransform(275.25,17.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#006759").s().p("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");
	this.shape_52.setTransform(275.25,18.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#006551").s().p("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");
	this.shape_53.setTransform(275.25,18.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00634A").s().p("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");
	this.shape_54.setTransform(275.25,19.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#006142").s().p("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");
	this.shape_55.setTransform(275.25,19.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#005F3B").s().p("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");
	this.shape_56.setTransform(275.25,20.075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#005C33").s().p("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");
	this.shape_57.setTransform(275.25,20.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#005A2C").s().p("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");
	this.shape_58.setTransform(275.25,21.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#005824").s().p("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");
	this.shape_59.setTransform(275.25,21.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,548,76.8);


(lib.ant_hitarea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(15,51.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ant_hitarea, new cjs.Rectangle(10,46.3,10,10), null);


(lib.ant_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjvStQhmhzAAikQAAijBmhzQArgxAzgbQhCilAAjnQAAjrBFinIAKgXQg2gagvguQhshsAAiaQAAiZBshtQARgQARgOQgTgegxg+Ig8hLQgSgWgMgKIgMgJQgHgFgEgFQgHgKgCgVIgIhCQgCgTAJgEQAEgCAGADQAFADACAFQADAHgBAQQgBAYAJAWQAFAMAIAMQAJAPATAWIAdAjIATAaQALARAHAIQARAXAnAqQAOAQAJAQQASgMASgJQBNgpBcAAQBWAABIAiIAUgiQAOgZADgVQACgJgBgRIABgZQACgLAGgRIAIgcQAEgSAAgZIgCgrQgBgwAKguQADgNAHgDQAGgDAGAFQAFAFABAHQABAHgHATQgHAXACAmIADA/QgBATgGAcIgLAwIgHAuQgEAbgGARQgJAegRARQAqAYAlAlQBsBtAACZQAACahsBsQgyAxg7AbIAIATQBFCnAADrQAADshFCnIgDAHQAlAZAgAlQBnBzAACjQAACkhnBzQhmBziRAAQiQAAhnhzg");
	this.shape.setTransform(39.8568,131.1938);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ant_body, new cjs.Rectangle(0,0,79.7,262.4), null);


(lib.loseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(23.7,168.6,0.5,0.5);

	this.instance_1 = new lib.backgroundlost();
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loseScreen, new cjs.Rectangle(-0.5,-0.5,1281,721), null);


(lib.blowSym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {playBlowAnim:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// blowAnim
	this.instance = new lib.blowSym_in();
	this.instance.setTransform(0.5,107.2,0.0033,1,0,0,0,150.3,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:150,scaleX:1,x:150},19).to({alpha:0},10).wait(1).to({y:-354.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-462,300.2,676.5);


(lib.ant = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap7Q1QgFgFABgJQAAgZANgZIAhhUQATgvAVguQAMgYAPgXIANgXQAZgzATg2QASgoAVgmIARgdQAJgPAFgQQADgPAAgQIAGgJIABgBQARgTAjABIBYgEIALAAIACAAQAJADABAHQAAAMgPACIgGABIggADIg5AFQgUADgQANQgEAJABALQgCAOgHALIgQAZQgaAogTAsIgmBZIgMAaIgpBPQg0BmgdBvQgCAGgEAEQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgEgEgAOAO9IgRhHQgDgLgHgLIgPgMQgGgGgBgLQgFgNgNgJIg3gyQgNgLgIgRQgZgEgJghQgdgvg0geQgtghgqgqQgnglgngpIgHACQhXAWhcgLIgWgBQgGAAgGgDQgGgHAKgJQAJgFAKACQAlABAmgCQAxgCAwgIQgDgNATgGQAMAAAIAMIABACQAgAgAcAiQAoAsAvAiIBCA0QAeAdAYAfIBnBvQASASAOATQAgAxgHA8QgHACgHAAIgCAAgANUEPIgBgCQgDgIACgKQgEgOgPgJQgLgPACgVQgFgUgPgPIgpg2IgUgZIgFgFIgGgGIghgeQgfgbgagfIgXgaIgOgQIgkgjQgngjgdgqIgKgbIgCgDIgDgEQgbAPgRAbIhHBcQgTAcgXAZIgGAEIgJAIQgLAHgOgBQgGgCgFgGQgDgLALgGQAKgFAKACQACgRASgNIAPgQIADgEIAXgcIA/hOIAfgoQAHgJAJgFQAQgEALARIACAEQAPAZAJAeQAMAUAUAPQAgAcAeAgIAVAWIABACIAaAbIBNBQIADADIAmApQAbAgAUAlIAcA9QAJANAEAQIAAACQgBAMgMAAQgFAAgGgCgArdDNIALgWQAGgKABgNQAFgPAJgMIADgGIAJgNQAWglAaghIAngsIAwgxQApgpAkgtQAXgdASghQAGgMAMgKQAHgDAKADQAFABAGAEQAMAHAIAOIApA4IAfArQAnA3AaA/QADAHAFAGQAGAEALgCIAQgFQAQgFARgJQALgHAMgCQAOgBABARIgBADIgJAHIgWALIgkAOIgDAAIgCABIgBAAIgCAAIgBAAQgaAHgWgOQgLgLgCgSQgRg5gmgvIgjguIg1hFQgIACgDAIIhkB8QgqAvgtArIgmAvQgMAQgLAQIgLARIgDAGIgRAmQgKAcgMAaIgOACQgKgFAFgSgAiljWIgKgGIgIgFQhHgyhcgLQgOgLgLgNQgPgPgUgHIgkgEQgKgFgHgLQgUgTgegFQiMguiDg/QgKABgIgFIgDgFQgCgIADgKQAIgqgOgrQgUhegbhdIgOgwIgNgyQgUgugMgvQAEgLAOABQAIAFgEAMQAAAeAVAZQAbA1ALA7QAjCJAXCNIABAKQBnAYBeA3IBmAyQAjASAmAMIAfALIAHAFIATAVQAlAlA5AEQAsANAsATIAGADIAFADQAHADAFAIQAEANgWADQgFAAgEgDgADrjsQgDgSAdAAQAXgBAWgFQBCgQA8glIAvgbIBGgqIAYgOIARgJIA7ghIAsgRIAIgFQAbgOAbgHIgGgiQgLhWAYhYIAKgwQAKg4AFg5IgBgoQgEhTgThSQgDgPAMgKQAOgBABAUQAMA+AHBAIABAIQAEApgBApIgFA3QgFAlgIAkQgQBRgGBSIAAAOQABAOAFANIAGAQIABAGQgDAVgcALIhbAvIhqA5IgiASIhSAtIgTAKIgFADIglASQgzAWg3AKIgMACIgEAAQgLAAgKgJg");
	this.shape.setTransform(91.5806,108.1838);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqMQ8QgDgFAAgIQAAgaANgYIAhhUQAUgvAWguQAMgYAPgXIAMgWQAbgzATg2QARgoAWgnIARgcQAJgPAGgQIAGgfIAGgKIABgBQASgSAjAEIBYABIAMAAIACABQAJADAAAIQgBALgPACIgGAAIggABIg6ACQgUABgRANQgEAJAAAKQgDAOgIALIgPAZQgbAngTAtIgmBZIgMAZIgqBQQg1BlgdBvQgCAGgEAEQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgEAAgEgGgANHOOQgCgMgGgMIgOgMQgFgHgBgLQgFgMgMgLIg0g0QgNgMgHgRQgYgGgIghQgagygygfQgrglgogrIhKhTIgGACQhXAYhaADIgWAAQgGAAgGgDQgGgGAKgMQAJgFAKACQAlABAkgGQAwgHAwgLQgFgNATgHQAMgCAKAMIACACQAfAfAaAoQAlAtAuAlIA+A4QAdAeAWAgIBhB1QAQATAOAUQAdAxgKA9IgRABgAM2EoIgBgCQgCgIACgKQgEgOgOgJQgLgPADgWQgFgUgOgQIgng3IgUgaIgEgFIgGgGIgggfQgegcgZggIgWgbIgOgQQgQgUgSgQQgmgkgcgsIgIgaIgCgEIgEgEQgaAQgRAbIhEBeQgUAcgWAZIgFAFIgKAGQgLAJgMgCQgHgCgFgHQgDgIAMgHQAJgFALADQABgSASgMIANgSIADgEIAXgcIA9hQIAfgpQAHgJAJgFQAQgDAKAQIADAEQAPAZAHAfQAMAVATAPQAfAeAdAhIAUAXIABACIAZAbIBKBTIADADIAlAqQAaAhATAlIAaA/QAHANAEAQIAAACQgBAMgLAAQgFAAgHgDgArgDYQAEgLAHgLQAGgLABgMQAFgQAJgMIADgFIAIgOQAXgkAagiIAogsIAwgwQAogqAlgsQAWgdATgiQAHgMALgIQAIgEAJADIALAFQANAJAHANIAoA5IAeAsQAlA5AYA/QADAHAFAGQAHAFAJgDIAQgEQAQgFAQgJQAMgHAMgCQAOgBABARIgBADIgJAHIgWALIgkAOIgDAAIgCABIgBAAIgCAAIgBAAQgbAGgVgOQgLgMgBgRQgOg6gmgxIghguIg1hHQgGADgEAHIhlB8IhXBaIgmAuIgXAgIgLASIgDAGIgRAlQgKAdgNAaIgOABQgJgGAFgQgAixjFIgKgGIgHgGQhGg2hbgPQgOgLgKgOQgPgPgTgIIgkgGQgJgGgHgLQgUgUgdgFQiJg1iBhFQgJAAgJgFIgCgGQgCgHAEgKQALgpgKgtQgMhfgThfIgJgxQgEgagFgZQgQgwgIgvQAEgLAPACQAHAGgEAMQgEAeATAaQAXA3AGA8QAXCLALCPIAAAKQBnAcBaA7IBkA3QAiAUAlAOIAfAMIAGAFIATAWQAiAlA5AIQAtAPApAVIAGADIAFADQAHAEAFAHQAFAOgXACgADjjbQgEgRAegBQAWgCAVgGQBCgUA6goIAtgdIBDgtIAYgQIAQgKQAbgTAegRIAsgTIAHgGQAagPAbgJIgIgiQgPhVAUhZIAHgxQAIg4ABg5IgDgoQgHhSgYhSQgDgOALgLQAOgBACAUQAPA9AKA/IABAIQAGApACApIgCA3IgKBJQgLBSgDBTIABANQACAPAGAMIAGAQIABAGQgCAVgbAMIhYA0IhnA/IghAUIhQAxIgSALIgFADIgkAUQgxAZg2ANIgNADIgFABQgLAAgJgLg");
	this.shape_1.setTransform(92.4938,106.4508);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AqcREQgEgGABgIQgBgZAOgZIAihTQATgwAXgtQAMgYAPgXIANgWQAagzAUg2QASgoAWgmIARgcQAJgPAGgQQADgPAGgSIAHgJIABAAQATgRAjAGIBYAGIANABIACABQAIADgCAIQgBAMgPAAIgGAAQgRgBgPAAIg6gCQgUABgRALQgFAJgBALQgEANgIALIgQAZQgaAngUAsIgnBZIgMAZIgqBQQg1BlgfBuQgBAHgFADQAAAAgBABQAAAAgBAAQgBAAAAABQgBAAAAAAQgEAAgEgFgAMmPrIgJhIQgBgLgGgMIgNgNQgFgIAAgKQgEgNgMgLIgxg3QgMgNgGgRQgZgIgFghQgXgzgxgiQgpgnglgtIhFhXIgFACQhWAahYAQIgWABQgGAAgGgCQgGgHAKgNQAJgFAKACQAlABAigLQAugLAvgPQgFgMARgJQAMgCANALIACACQAfAfAXArQAjAwArAnIA7A8QAbAeAVAjIBaB5QAQATAMAWQAbAzgOA7gAMXFBIgBgDQgCgIACgJQgDgOgOgKQgKgQADgVQgDgUgOgRIglg4IgTgbIgEgFIgGgGQgOgRgRgPQgdgdgYgiIgVgbIgNgRQgQgTgRgSQgkglgbgsIgHgbIgCgDIgEgEQgaAQgQAbIhDBgQgSAcgWAZIgGAFIgJAHQgLAJgMgCQgGgBgFgIQgEgJAMgHQAJgEALACQACgRASgMQAIgIADgKIADgFIAWgcIA8hRIAdgrQAIgIAJgFQAQgEAKAQIACAFQAQAYAFAhQALAVATAQQAfAeAbAiIATAYIACACIAXAbIBHBXIADACIAkAsQAZAiARAmIAYA/QAHANAEAQIgBADQgBALgKAAQgGAAgHgDgArkDiIALgWQAGgLABgMQAGgPAIgMIAEgGIAIgNQAWgkAbgiIAogsIAwgwQAogpAlgtQAXgdATgiQAHgMALgIQAJgDAJADIAKAFQANAJAHAOIAmA6IAdAsQAkA7AWA/QACAIAFAFQAHAGAJgDIAPgEQAQgFAQgJQAMgHAMgCQAPAAABAQIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgBAAIgCABQgbAGgUgRQgLgLAAgSQgOg6gkgyIgfgvIgzhIQgGADgFAGIAAABIhkB7QgrAugtAsIgmAuQgNAQgKAQIgLARIgDAGIgSAlQgKAdgMAaIgOABQgKgFAFgRgAi9izIgLgHIgHgHQhCg5hbgSIgXgbQgOgQgTgJIgjgIQgKgEgGgNQgSgVgegHQiGg7h9hLQgKABgJgHIgCgGQAAgHADgLQAQgngGgtQgEhggLhhIgFgxIgFg0QgMgxgEgwQAGgKAOADQAHAHgGALQgGAeARAcQASA5AAA7QAMCOgCCOIAAAJQBkAjBZA+IBhA8QAhAUAkAQIAeAOIAHAGIARAVQAiApA3AJQAsASAoAWIAGAEIAFACQAHAEAFAHQAEAPgWABgADajJQgEgRAegCQAWgCAUgIQBAgXA4grIAsgfIBBgxIAWgRIAQgLQAagVAdgSIAqgWIAIgGQAYgQAbgLIgKghQgUhVAQhaIAFgwQAFg6gBg5IgFgmQgMhTgchPQgEgPALgLQAOgCADATQASA8ANA/IACAIQAIAoAEApIAAA4IgGBKQgIBSACBSIABAOQADAOAHANIAHAOIABAGQAAAVgbAOIhVA5IhjBEIggAVIhNA2IgSAMIgFAEIgiAWQgxAbg1AQIgMADIgGABQgLAAgJgKg");
	this.shape_2.setTransform(93.4278,104.7501);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqmRKQgEgFABgJQAAgZANgZIAjhUQAUguAXguIAbguIANgWQAbgzAUg2QASgnAWgnIARgcQAJgOAHgRQACgPAKgSIAIgIIAAgBQAVgPAiAIIBYALIANACIADABQAIACgEAKQgCALgPgBIgGAAIgggDIg5gFQgUgBgTAKQgFAJgBAKQgEANgKALIgPAZQgbAngUAtIgnBYIgNAZIgqBPQg1BlghBuQgBAGgEAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDAAgFgEgAL9QAIgGhIQgBgMgFgMIgMgOQgFgHAAgLQgCgOgLgLIgvg6QgLgNgFgSQgYgJgEghQgUg0gvglQgmgpgkgvIhAhbIgEADQhUAahVAfIgWACQgFAAgHgDQgGgGALgPQAIgFAKACQAlACAfgQQAtgPAtgTQgFgMAQgLQAMgDAOALIADACQAfAeAUAwQAgAxApAqIA4A+QAaAhASAjIBUB+QAOAVALAVQAYA1gRA7gAL+FYIgBgCQgDgIAEgKQgCgOgOgKQgKgRADgVQgDgUgNgRIgig5IgSgbIgFgGIgGgGIgdghQgcgfgWgiIgVgcIgMgRIgggmQgjgmgZguIgGgaIgCgEIgEgDQgZAQgQAcIhABhQgTAcgVAaIgFAFIgJAIQgLAIgMgCQgHgBgEgHQgEgKANgHQAJgEAKACQABgSATgLQAIgIAAgLIAEgEIAVgdIA6hSIAegsQAGgIAKgGQAQgDAKAQIADAEQAPAZAEAhQAKAWASAQQAeAgAZAjIATAXIABACIAYAdIBDBZIAEADIAiAsQAXAkAQAmIAWBAQAHANACARIAAACQgCALgJAAQgGAAgHgEgArhDsIALgWQAGgLACgMQAEgQAJgMIAEgFIAIgOQAWgkAbghIAogsIAxgwQAogpAlgsQAXgeATghQAHgLAMgJQAHgEAKADIALAGQAMAJAHAPIAlA7IAbAtQAjA7AUBAQACAIAEAGQAHAFAKgCIAOgEQAQgFAPgJQAMgIANgBQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgCAAIgBABQgbAGgUgSQgKgMAAgRQgNg7ghgyIgggxIgvhJQgIACgDAHIgBAAIhlB7QgrAugtAsIgmAuIgXAgIgMARIgDAGIgRAlQgLAdgMAaIgOABQgKgGAGgQgAjCikIgLgHIgIgHQg/g8hbgXQgMgMgJgPQgNgSgTgIIgjgJQgJgHgGgMQgRgVgdgJQiEhBh6hQQgJgBgJgHIgBgFQgBgIAFgKQATgngDgtQAFhggDhhIgBgyQABgagBgZQgHgyAAgxQAGgJAOAEQAHAHgHALQgJAdAOAdQANA6gEA8QAACOgPCNIgBAJQBjAnBVBCIBeBAQAhAXAkARIAcAPIAHAGIAQAXQAfApA4ANQArATAmAYIAGAEIAFACQAIAEAEAIQAEAOgVABgADYi3QgEgRAdgDQAWgDATgJQA/gaA2gvIApghIA+g1IAWgSIAOgMQAagWAbgUIAqgYIAHgGQAXgSAagMIgLghQgYhUAMhaIACgxQABg5gDg5IgHgnQgQhRgfhPQgFgOAKgMQAOgDAEAUQAVA8AQA9IADAIQAJAoAGApQACAbABAcQABAlgEAlQgCBSAFBTIACANQAEAOAHAMIAIAPIABAGQABAVgbAPIhSA+IheBJIgfAXIhKA6IgRANIgEAEIgiAYQguAdg1ATIgMAEIgHABQgKAAgJgJg");
	this.shape_3.setTransform(93.75,103.1394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AqnRNQgFgFACgIQAAgaANgYIAkhUQATguAXguIAcguIAOgWQAbgzAUg1QASgoAXgmIARgbQAJgPAGgQQAEgPANgTIAHgIIABAAQAWgPAiALIBWAQIAPADIACAAQAIADgFAKQgCAMgQgCIgGgBIgggFIg4gIQgUgDgTAKQgGAHgCALQgFANgKAKIgQAZQgbAngUAtIgoBYIgMAZIgsBOQg2BlggBuQgCAGgEAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgEAAgEgGgALXQSIgBhJQAAgMgFgMQgFgIgGgGQgFgIACgLQgCgOgLgLIgrg9QgLgOgEgSQgXgJgCgjQgRg0gtgoQgkgrghgxQgegugdgwQgBAAAAABQgBAAgBAAQAAAAAAABQAAAAAAABQhTAbhQAtIgWACQgGABgFgDQgHgFAKgSQAJgFAKACQAlADAbgVQAtgSArgYQgIgLAQgMQAMgEAQALIACABQAgAeARA0QAdAyAnAsIA0BCQAYAiARAkIBMCCQANAVAKAWQAVA2gUA6gALrFtIgBgCQgBgJADgJQgCgPgNgKQgKgQAFgVQgDgUgMgSIghg6IgRgcIgEgGIgFgHIgdghQgbgggVgjIgTgdIgMgRIgfgnQgigngXgvQgDgOgBgMIgDgEIgDgDQgaARgPAcIg+BiQgSAcgVAbIgFAFIgJAIQgKAJgMgCQgGgCgFgHQgEgJANgHQAJgFALADQABgSATgMQAIgHgCgMIADgEIAVgeIA4hTIAdgtQAHgJAKgFQAPgEAKARIADAEQAPAZADAiQAJAWASARQAcAhAZAjIASAYIABACIAWAeIBBBbIADADIAgAuQAXAkAPAnIATBAQAHAOACAQIgBADQgCAKgJAAQgGAAgIgEgArXD0QAEgLAHgLQAGgLACgMQAEgQAKgMIADgFIAJgOQAWgkAbghIAogsIAxgvQAogpAlgsQAYgeATghQAIgMALgIQAIgDAJADIALAFQANAJAGAQIAjA9IAaAtQAhA7ASBCQADAHAEAHQAGAFAKgCIAMgDQARgFAPgKQAMgIANAAQAPgBABARIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgBAAIgCAAQgbAGgTgTQgLgMABgRQgKg8ghgzIgdgxIgvhLQgGACgFAHIAAAAIhmB7IhYBZIgmAuIgYAgIgLARIgDAGIgSAmQgKAcgNAaIgOABQgJgGAFgQgAjBiVIgLgIIgHgHQg+g/hYgbIgUgcQgNgSgSgKIgigLQgJgGgFgNQgRgWgcgKQiAhHh3hWQgJgBgJgIQgCgCABgEQAAgHAFgKQAWglACgtQANhgAFhhIAEgyIAEgzQgDgyAEgwQAHgJAOAGQAGAHgIALQgLAbAMAfQAHA6gJA8QgNCNgbCLIgBAJQBhAqBSBHIBbBFQAgAYAiATQAPAHAOAJIAGAGIAPAYQAdArA3AOQAqAVAlAaIAGAEIAFADQAHAEAEAIQAEAOgVAAgADdioQgEgRAdgDQAWgDARgLQA+gdAzgyIAngkIA7g4IAVgTIAOgNQAYgXAbgVIAogbIAGgGQAXgUAZgNIgNggQgbhTAGhaIAAgxQAAg6gIg4IgIgnQgUhRgjhMQgGgOAKgMQANgEAFATQAYA8ATA8IADAHQAMAoAIApIAFA2QADAlgBAlQABBTAJBSIADANQAEAOAIAMIAJAOIABAFQACAWgZAQIhPBCIhaBOIgeAZIhGA+IgRAOIgEAEIggAaQgtAgg0AWIgLAEQgEACgEAAQgKAAgJgKg");
	this.shape_4.setTransform(93.345,101.6538);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AqpRQQgEgFACgIQAAgaANgYIAkhTQAUgvAXgtIAcguIAOgWQAbgyAVg2QATgnAXgnIARgbQAJgOAGgRQADgPARgSIAIgIIABgBQAXgMAhAMIBVAWIAQADIACABQAHADgGAKQgEALgPgDIgGAAIgfgHIg4gMQgTgFgVAJQgFAHgDALIgQAWQgJAMgHAOQgcAngTAsIgqBYIgMAYIgrBPQg4BkghBuQgBAGgFAEIgEABQgEAAgEgFgAKwQhIAChIQAAgLgDgNQgFgIgGgHQgDgIABgLQgBgOgKgMIgog/QgJgPgDgRQgYgMAAgiQgNg2grgpQgigtgdgzQgdgvgZgyQgBAAgBABQgBAAAAAAQAAAAgBABQAAAAAAABQhQAchLA6IgVADQgGABgGgCQgHgFALgVQAIgEAKACQAmADAXgZQAqgWApgbQgIgLAPgNQALgFATAKIABACQAfAcAPA4QAaA0AkAuIAyBEQAUAkAQAkIBFCHQAMAWAJAWQASA3gYA5gALYGBIgBgDQgBgIADgJQAAgPgOgLQgJgQAGgVQgCgUgMgSIgfg8IgQgcIgEgGIgFgHIgbgiQgaghgUgjIgSgeIgMgSIgdgoQghgogWgvIgDgbIgCgDIgEgEQgZASgOAdIg9BjQgQAcgVAbIgEAGIgJAIQgLAJgLgCQgHgCgEgHQgEgJANgHQAJgFAKADQACgSATgMQAIgIgEgLIACgEIAVgfIA2hUIAdgvQAIgIAIgGQARgDAJARIADAEQAPAZABAjQAJAWAQARQAbAiAZAkIARAZIABACIAUAfIA+BdIADADIAfAvQAWAkANAnIARBCQAGAOABAQIAAACQgCALgJAAQgFAAgJgFgArND7IALgWQAGgKACgMQAEgQAKgMIADgFIAJgOQAWgkAbghQAUgXAVgUIAwgwQApgpAlgsQAYgdAUgiQAHgMAMgHQAIgEAKAEIAJAGQAOAJAFAQIAiA+IAZAuQAeA8ARBCIAGAOQAGAGAKgCIAMgDQARgGAPgKQAKgGAPgBQAPgBABARIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgCAAIgBAAQgaAGgUgUQgKgMABgSQgJg8gfgzIgcgyIgthNQgGACgFAHIAAAAIhlB7IhaBZIglAtIgZAgIgKARIgDAGIgSAlQgLAdgNAaIgOABQgJgGAFgRgAi3iFIgJgDIgMgHIgHgIQg6hChXgfQgKgOgJgPQgLgSgSgLIgigNQgJgGgEgNQgPgXgcgLQh+hNhyhbQgJgCgJgJIgBgFQABgIAHgKQAYgjAGgtQAVheAOhgIAIgxQAFgZAEgaQAAgyAJgvQAIgIAMAGQAGAIgJAKQgNAbAJAfQADA6gPA7QgZCLgnCJIgBAIQBfAwBOBKIBYBIQAeAZAiAVIAcASIAGAGIANAZQAcArA2ASQAoAXAlAbIAFAEIAFADQAHAEAEAIQAEAPgTAAIgCgBgADjiZQgHgRAegEQAWgDARgNQA7ghAwgzIAmgmIA3g8IAUgUIAOgNQAXgZAZgXIAmgcIAGgHQAWgUAYgPQgIgPgGgRQgghRAChbIgCgxQgEg5gJg4IgMgmQgXhQgohKQgFgOAJgNQANgEAGATQAbA6AWA7IADAHQANAoAKAoIAJA2IAFBKQAFBSAOBSIADANQAGANAHAMIAKANIACAGQACAVgYASIhLBGIhWBTIgdAbIhCBBIgQAPIgEAEIgfAbQgrAkgyAYIgLAFQgEACgDAAQgKAAgJgKg");
	this.shape_5.setTransform(92.95,100.2515);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AqqRSQgEgFABgJQAAgaAOgXIAlhUQAUguAYgtQANgXAPgXIAOgWQAcgyAUg1QATgoAXgmIASgbQAKgOAFgRQAEgPAUgSIAJgHIABgBQAXgMAgAPIBUAbIAQAEIACABQAIAEgJAKQgDAKgPgDIgHgBIgegJIg3gQQgUgFgUAHQgHAHgDAKQgHAMgKAKQgJALgHAPQgcAngUAsIgqBXIgMAZIgtBOQg3BkgiBuQgBAGgFADIgEACQgEAAgEgFgAKGQvIAHhIQABgLgEgOIgKgPQgDgIACgLQAAgOgKgNIgkhAQgJgPgBgTQgXgMACgiQgLg2gpgtQgfgugbg1IgwhjQgEgBACADQhNAchGBIIgVADQgGACgFgCQgIgFAKgWQAJgFAKADQAlACATgbQApgaAmgfQgJgKAOgOQAKgGAVAJIACACQAfAbALA7QAYA2AhAwQAYAjAVAkQAUAkANAmIA9CKQALAWAIAXQAOA4gaA3gALEGUIgBgDQgBgIAEgJQgBgPgNgMQgHgQAFgVQAAgUgMgSIgdg9IgPgdIgEgGIgFgHIgagkQgYghgTgkIgSgeIgKgTIgcgpQgggpgUgwQgBgOAAgMIgDgEIgDgDQgZASgOAdIg6BjQgRAegTAcIgFAFIgJAJQgJAJgMgCQgGgCgFgHQgEgJANgIQAJgDALACQACgSASgMQAJgIgHgNIADgEIATgeIA1hVIAdgxQAHgIAJgFQAPgDALARIACADQAPAZAAAkQAHAWARATQAaAiAWAkIARAaIABADIATAfIA7BfIADAEIAdAvQAUAlAMAoIAPBCQAGAOABARIgBACQgDAJgIAAQgGAAgIgEgArEECIAMgWQAHgKABgMQAFgQAJgMIADgFIAJgOQAXgkAbghIAogrIAxgxQApgnAlgsQAYgdAUgiQAIgLAMgIQAHgDAKADIAKAGQAMAJAGASIAgA+IAXAvQAeA9AOBCIAGAOQAGAGAKgBQAJgBACgCQAQgGAQgKQAKgHAPAAQAPgBABARIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgBAAIgCAAQgaAGgUgVQgJgNABgSQgGg8gfg0IgagzIgqhOQgHACgFAHIAAAAIhmB6IhZBZIgnAuQgMAPgLAQIgMARIgDAGIgSAmQgKAcgNAaIgOABQgJgGAEgRgAi2h4IgJgDIgMgHIgHgJQg3hEhWgkIgRgdQgLgUgRgLIghgOQgJgHgEgNQgOgYgbgMQh6hThthgQgKgCgIgKIgBgFQACgIAGgKQAdghAJgsQAchbAXhfIAMgwIANgyQAFgzAMgtQAJgIAMAHQAFAJgJAJQgQAZAGAgQgCA8gUA4QgkCJgzCEIgDAIQBdAzBMBPIBUBMQAdAbAhAWQAOAJANAKIAFAHIANAYQAZAtA2AUQAoAZAhAdIAGAEIAFADQAHAFAEAHQACAOgRAAIgCAAgADniLQgGgRAdgEQAWgFAOgNQA6gkAtg2IAkgoIA1g/IASgVIANgOQAWgaAXgYIAlgeIAGgIQAUgVAYgRQgJgNgHgRQgkhQgChbIgFgwQgHg5gMg4IgNglQgbhPgrhIQgIgOAJgNQANgEAHASQAeA4AZA6IADAIQAQAmAMAoIALA1IAJBKQAIBSATBRIADANQAGANAJALIAKANIACAFQAEAVgXATIhHBLIhSBXIgbAcIg/BFIgOAQIgFAEIgcAdQgpAmgxAaIgLAHQgEACgEAAQgJAAgKgKg");
	this.shape_6.setTransform(92.625,98.9746);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AqrRRQgEgFABgIQAAgaAPgYIAlhTQAUguAYgtQANgXAQgWIAOgWQAcgyAVg1QATgoAXglIASgcQAKgPAGgQQAEgPAXgSIAJgGIABAAQAYgLAfARIBSAgIARAEIACABQAIAEgLAKQgEALgPgFIgGgBIgegLIg2gTQgTgGgVAGQgHAHgEAJQgHAMgLAJQgJALgHAPQgcAngVAsIgqBXIgNAYIgsBOQg4BkgjBuQgBAGgFADQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgEAAgEgGgAJaQ6IAKhIQACgLgCgNIgKgQQgDgIADgLQAAgOgIgNIgghDQgIgPgBgTQgXgNAFgiQgJg3glguQgdgxgYg1IgrhmQgDgBACADQglAOgeAsQgfAkgoASIgUAFQgGABgFgCQgIgEAKgYQAIgFAKADQAmADAOgfQAngeAjghQgKgKANgPQAKgHAWAJIACABQAeAaAJA/QAVA3AeAyIApBJQASAlALAmIA2COQAJAXAGAXQAMA5gdA2gAKvGkIAAgDQgBgIAEgJQAAgPgNgLQgHgRAHgVQgBgUgKgTIgbg9IgOgeIgEgGIgFgHIgZglQgXghgSglIgQgfIgKgTQgNgXgOgTQgdgqgTgxQgBgOABgMIgDgDIgDgDQgZATgNAdIg4BkQgQAegTAcIgFAGIgIAIQgKAJgLgCQgGgCgFgGQgEgKANgHQAJgEALACQACgSATgLQAIgIgJgOIADgEIATgeIAzhXIAcgyQAHgIAJgFQAQgDAKARIACAEQAOAZgBAkQAHAWAQAUQAZAjAVAlIAPAaIABACIATAhIA3BhIADADIAcAxQATAlAKApIANBCQAFAPAAAQIAAACQgDAKgIAAQgGAAgJgGgAq6EIIAMgWQAGgKACgNQAEgPAKgMIADgFIAJgOQAXgkAbghIAogrIAygwQAogoAmgrQAYgeAUgiQAIgLAMgIQAIgDAJAEIAKAGQAMAKAGASIAeA/IAWAvQAcA+ANBDQABAHAEAHQAGAGAKgBQAJgBABgCQAQgGAPgKQALgHAPAAQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgaAGgTgXQgJgOACgRQgFg8gdg2IgZgzIgohPQgHACgFAHIAAAAIhnB5IhZBZIgnAtIgYAgIgLARIgDAGIgSAlQgLAdgMAZIgOABQgKgFAFgRgAi2htIgIgCIgNgIIgHgKQgzhHhVgmQgJgPgGgQQgLgUgQgMIghgPQgIgIgDgNQgNgYgbgOQh1hYhphlQgKgCgIgLIAAgGQABgIAIgJQAfgeANgrQAlhZAehdIAQgvIARgwQAKgwAQgvQAJgGAMAIQAEAJgKAIQgSAZADAfQgHA7gYA3QgxCFg+B/IgDAIQBbA3BHBSIBRBQQAcAcAgAYQANAJANALIAFAHIALAZQAYAuA0AXQAnAaAgAfIAGAEIAEADQAHAEAEAIQACAOgPAAIgEgBgADrh/QgGgQAcgFQAWgFANgPQA4gnAqg5IAhgpIAyhCIARgWIAMgPQAUgbAXgZIAiggIAGgIQATgXAXgRQgKgOgIgQQgnhNgHhbIgIgxQgJg4gPg3IgOglQgghMguhHQgIgNAIgOQANgFAIASQAgA3AcA5IADAHQASAlAOAnIAOA1QAHAlAFAkQANBSAWBQIAFAMQAGANAJALIALAMIACAGQAFAUgWAVIhDBOIhMBcIgaAdIg7BJIgOAQIgEAFIgbAeQgnAngvAeIgLAHQgEACgEAAQgJAAgKgKg");
	this.shape_7.setTransform(92.325,97.8004);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AqsRQQgEgFABgIQABgaAOgYIAmhSQAVgvAYgsIAdguIAOgWQAcgxAWg1QATgoAYglIASgbQAKgOAGgRQAEgPAagRIAJgGIABgBQAZgJAeATIBQAlIASAFIACABQAHAEgMAKQgFALgOgGIgGgCIgegMIg1gWQgSgIgVAFQgIAGgEAJQgIAMgMAJQgJAKgHAQQgcAmgVAsIgqBXIgNAYIguBOQg5BjgiBuQgCAGgEADQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgEAAgEgFgAIsREIAOhHQADgLgCgOIgJgQQgCgJAEgKQAAgOgHgOIgdhEQgIgQABgSQgVgPAFgiQgFg3gjgwQgagygVg3QgUgzgRg1QgBAAgBAAQAAAAAAAAQAAAAAAABQABAAAAABQgjAOgZAxQgdApglAUIgUAFQgFACgGgCQgIgDAJgbQAIgFAKADQAmADAKghQAjghAhgkQgLgJALgQQAJgIAZAIIABABQAeAYAGBDQASA4AcAzIAlBLQAPAnAJAmIAuCRQAIAXAFAYQAIA5ggA0gAKaG0IgBgDQAAgIAEgJQABgPgNgMQgGgRAHgVQAAgUgKgTIgZg/IgNgeIgDgGIgEgHIgYglQgXgjgQglIgPggIgKgTQgLgXgOgVQgbgqgSgxQAAgOACgMIgDgDIgEgDQgYATgMAdIg2BmQgQAegSAdIgFAFIgIAJQgJAJgLgCQgGgCgGgGQgDgLANgGQAKgEAKACQABgSAUgLQAHgIgKgOIACgFIATgeIAxhYIAbgzQAIgJAJgEQAQgDAJARIACADQAPAZgDAmQAGAWAPAUQAYAjAUAnIAOAbIABACIARAhIA1BiIACAEIAaAxQASAnAJAoIALBDQAEAPAAAQIgBACQgDAJgIAAQgGAAgIgFgAqxENQAFgKAHgMQAGgJACgNQAFgQAJgMIAEgFIAIgNQAYgkAaghIApgrIAygwQApgoAlgrQAYgdAVgjQAIgKAMgIQAIgCAJADQAFACAFAEQAMAKAGASIAcBAIAVAwQAaA/ALBDQABAHADAIQAGAFAKAAQAJgBAAgCQAQgGAPgKQALgHAQAAQAOAAABAQIgBADIgJAHIgWALIgkAOIgDABIgCAAIgBAAIgCAAIgBABQgaAGgTgZQgIgNABgRQgDg9gbg3IgYgzIgmhQQgGABgFAHIgBAAIhnB5QgrAuguArIgnAtQgNAPgLARIgLARIgDAGQgLATgIASQgKAcgNAaIgOABQgKgGAFgRgAi2hiIgIgCQgGgDgHgGIgHgKQgwhJhTgrIgOgfQgJgUgQgNIgggRQgIgIgCgNQgMgZgbgPQhxhdhkhqQgJgDgIgLIAAgGQADgIAIgJQAhgbARgqQAshWAmhZIAUguQALgWAKgYQAPgwATgsQAKgGALAJQADAKgLAHQgTAWAAAhQgMA6gdA0Qg8CBhJB4IgDAIQBYA7BDBVIBNBUQAbAdAfAZQANAKAMAMIAEAHIALAaQAVAvAzAZQAmAcAeAgIAGAEIAEADQAHAFADAHQACANgOAAIgEAAgADvhzQgGgQAcgGQAVgGAMgPQA1gqAng7IAfgrIAuhEIAQgXIALgQQATgbAVgbIAhgjIAFgHQASgZAWgSQgLgNgJgQQgrhLgMhbIgJgwQgMg3gSg3IgQgkQgkhKgyhFQgIgMAHgPQANgGAJASQAjA1AeA4IAEAHQAUAkAQAmIAQA1IAQBIQARBRAaBOIAFANQAHANAKAKIALAMIACAFQAGAUgUAWIg/BRIhHBgIgYAfIg3BLIgNASIgEAEIgZAgQglAqguAgQgGACgEAFQgEADgEAAQgJAAgKgKg");
	this.shape_8.setTransform(92.075,96.731);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AqjRNQgEgFABgJQABgZAPgYIAlhSQAWgvAYgsIAegtIAOgWQAcgxAWg1QAUgoAXglIATgbQAKgPAGgQQAEgOAegRIAKgGIABAAQAZgHAdAUIBNAqIATAGIACABQAHAEgOAKQgGAKgOgGIgGgCIgcgPIg0gZQgSgJgVAEQgIAFgFAKQgJAKgLAJQgLAKgGAQQgcAngWArIgrBXIgNAYIguBOQg5BigkBuQgBAFgFAEIgEABQgEAAgEgFgAIFRKIAShGQADgLgBgNIgHgRQgCgJAEgKQACgOgHgOIgZhFQgHgRABgSQgUgQAIghQgCg4ghgyQgYgzgRg4IgghqQgBAAAAAAQgBgBAAABQABAAAAABQABAAABABQgiAOgVA2QgZAsgjAXIgUAGQgEABgGgBQgIgDAIgcQAIgFAKADQAmAEAFglQAggjAegoQgLgHAJgSQAJgIAZAHIACABQAcAWAEBGQAOA5AaA1IAgBNQAOAnAGAnIAmCTQAHAYAEAYQAFA5giAzIgQgHgAKNHAIgBgCQAAgJAFgIQABgPgMgNQgGgRAIgUQABgUgJgUIgXg/QgFgPgHgPIgDgHIgEgHIgXgmQgVgkgPgmIgOggIgJgTQgLgXgNgVQgbgsgPgxQAAgOADgMIgDgDIgEgDQgXATgMAeIg0BnQgPAfgRAcIgFAGIgIAJQgJAKgKgDQgHgCgFgHQgDgJANgHQAJgFALADQABgSATgLQAJgIgOgOIADgFIARggIAwhXIAbg1QAHgIAKgFQAPgDAJARIADAEQANAYgEAmQAGAXAOAUQAXAkASAnIAOAcIABACIAQAhIAxBlIACAEIAZAyQAQAnAIApIAIBDQAEAPgBAQIAAACQgEAJgHAAQgGAAgJgHgAqfERIAMgWQAGgKACgNQAGgPAJgMIADgFIAJgOQAXgjAbghIApgrIAygwQApgoAmgrQAYgdAVgiQAIgLAMgHQAJgDAIAEIAKAGQAMALAFASIAbBBIATAwQAYBAAJBDQACAIADAHQAFAGAKgBQAJAAgBgCQAQgGAPgKQALgIAQABQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgaAFgSgZQgIgOACgRQgBg8gag4IgWg0IgkhRQgHABgFAHIAAAAIhnB4IhaBZIgnAtIgZAfIgLASIgDAFQgKATgIATQgLAcgNAZIgOABQgKgGAFgQgAithZIgIgDIgNgIIgHgKQgthMhQguQgIgQgFgQQgIgUgQgOIgfgTQgHgIgCgNQgLgagZgQQhuhjhfhuQgJgDgHgNIABgFQACgHAJgJQAkgYAUgpQA0hRAthWIAYgsQANgVAMgXQASgvAYgqQAKgFAKAKQADAKgMAGQgVAVgDAgQgRA4ghAyQhHB7hTByIgEAHQBWBAA/BXIBJBXQAZAfAeAaQANALALAMIAEAHIAJAbQAUAwAxAbQAkAeAdAhIAFAEIAEADQAHAFAEAIQACAMgNAAIgFAAgAD8hpQgHgQAcgGQAVgGAKgRQAzgtAkg9IAcgtIAqhGIAPgYIAKgQQARgdAUgcIAfgkIAFgIQAQgZAVgTQgMgNgJgQQgvhIgQhaIgMgwQgPg2gUg2IgSgjQgnhJg1hCQgJgMAGgPQAMgGAKARQAmAzAhA3IAFAGQAVAkARAlIAUAzIATBIQAVBPAeBOIAGAMQAHAMAKAKIAMALIADAFQAHAVgUAWIg5BVIhDBjIgVAgIgzBPIgMASIgEAFIgYAhQgiArgsAjQgGACgEAGQgEADgEAAQgJAAgKgKg");
	this.shape_9.setTransform(90.9403,95.8018);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AHfRLIAWhFQAEgLgBgNIgGgSQgCgJAFgJQACgOgGgOIgVhHQgFgRABgSQgSgRAJghQAAg4gdgzQgVg1gPg5QgNg0gMg1QgeAOgRA6QgVAvgiAZIgSAHQgFACgGgBQgHgDAGgeQAJgFAKADQAlAEAAgnQAegmAagpQgNgHAJgSQAHgJAbAGIACABQAbAVABBJQAMA6AWA1IAdBPQAKAoAFAnIAeCVQAGAZACAXQACA5glAxgAF1HPIAAABIABAAIgBgBIAAgBIAAABgAqYRFQgEgGABgIQACgaAOgXIAmhSQAWgvAZgsIAdgtIAPgWQAcgwAXg2QATgnAZglIASgbQAKgOAGgQQAEgPAigQIAKgFIABAAQAZgGAcAWIBLAvIATAHIACABQAHAEgQAKQgGAJgOgGIgFgDIgcgQIgygdQgSgJgVACQgIAEgGAKIgVASQgLAJgGASQgcAlgWAsIgsBWIgNAZIguBNQg6BiglBtQgBAGgFADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgEgFgAKBHIIAAgDQAAgIAFgJQABgPgLgNQgGgRAJgUQACgUgJgUIgVhAIgKgfIgDgGIgEgIIgVgmQgUglgOgmIgNggIgIgUIgWgtQgagsgNgyQAAgOAEgMIgDgDIgEgDQgXAUgLAeIgyBoQgOAfgRAdIgEAGIgIAJQgKAKgJgDQgHgCgFgHQgDgJANgHQAJgFALADQABgSAUgLQAIgIgQgPIADgEIARggIAthZIAbg2QAHgIAKgFQAPgDAJARIACAEQAOAZgGAmQAFAXAOAUQAVAmARAnIANAcIABACIAPAiIAtBmIACAEIAXAzQAPAoAHApIAGBDQADAPgBAQIgBACQgEAJgHAAQgGAAgJgHgAqLEQIAMgWQAGgKACgNQAGgPAJgMIADgFIAJgOQAYgjAbghIApgrIAxgwQAqgnAmgrQAYgdAVgjQAJgKAMgHQAIgDAJAEIAKAHQALAKAGATIAYBCIASAwQAXBBAHBEQABAHADAHQAFAGAKAAQAJAAgCgCQAQgGAPgLQALgHAQABQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgaAFgSgaQgHgOADgRQAAg9gYg4IgVg0IgihTQgGABgGAHIAAAAIhoB4QgsAtguArIgnAtIgYAfIgMASIgDAGIgTAlQgKAcgNAZIgOABQgKgGAFgQgAiihVIgJgDIgNgIIgGgLQgqhOhOgyIgLggQgIgVgPgOIgegUQgGgJgCgNQgJgagZgSQhohnhbhzQgJgDgGgOIAAgFQAEgHAKgIQAlgWAXgmQA7hNA0hRIAcgqIAdgqQAWgtAbgoQAMgEAIALQABAKgLAFQgXATgGAgQgVA2gmAvQhRB1hdBqIgEAGQBTBDA7BbIBFBaQAYAgAcAcIAXAXIAEAIIAIAbQAQAxAxAdQAjAgAaAiIAGAFIAEACQAHAGADAHQABAMgLAAIgFAAgAEKhkQgGgQAbgHQAUgGAJgRQAxgwAgg/IAagvIAmhIIANgZIAJgQQAQgeASgdIAdgmIAEgIQAPgaAUgUQgMgMgKgQQgzhGgUhZIgOgvQgSg2gXg0IgUgjQgqhGg5hAQgJgLAGgPQALgHALAQQAoAyAkA0IAFAHQAXAiATAkIAWAzIAXBGQAZBPAhBMIAHALQAIAMALAJIAMALIADAFQAIAUgSAXIg1BYIg9BnIgUAiIgvBRIgLASIgDAFIgWAjQggAtgqAlQgGACgDAGQgEADgFAAQgIAAgLgJg");
	this.shape_10.setTransform(89.6188,95.4311);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AG3RJIAahEQAEgKAAgOQgCgJgDgIQgBgJAFgKQADgNgFgPIgShIQgEgRADgSQgSgSALghQAEg2gbg2QgRg2gMg5IgUhrIACgBIgCgBIAAACQgbAPgMA9QgRAyggAbIgRAHQgFADgGgBQgHgDAFggQAJgEAKADQAlAEgFgoQAagpAWgsQgMgFAGgTQAHgJAdAEIABABQAaATgCBMQAJA6ATA3IAYBRQAJAoACAnIAWCWQAEAZACAYQgCA6goAugAqNQ6QgDgFABgJQABgZAPgYIAnhSQAWgtAYgtIAegsIAPgWQAdgxAWg1QAVgnAYglIASgbQAKgOAHgQQAEgOAlgQIAKgEIABAAQAagEAaAYIBIAzIAUAIIACABQAHAEgSAKQgHAJgNgIIgGgDIgagSIgwgfQgRgLgWAAQgIAFgGAJIgXARQgKAJgGASQgdAlgWAsIgsBWIgOAYIgvBNQg6BiglBtQgCAGgEADIgFACQgEAAgEgGgAJ1HNIAAgDQAAgIAFgJQACgOgLgOQgFgSAKgTQACgUgIgUIgShBIgKgfIgDgGIgEgIIgUgoQgSgkgNgnIgMghIgHgUQgJgYgMgWQgXgtgMgzQABgOAFgLIgEgDIgDgDQgXAVgLAeIgvBpQgOAfgQAeIgFAGIgHAJQgJAKgKgDQgGgCgFgHQgEgJANgHQAKgFALADQABgSATgLQAJgIgSgPIACgFIAQggIAshaIAbg3QAHgIAJgEQAPgDAJAQIADAEQANAYgHAoQAEAXANAVQAUAlAQApIALAcIABACIAOAjIAqBnIACAEIAVA0QANAoAGApIADBEQADAPgBAQIgBACQgEAIgHAAQgGAAgJgHgAp3ENQAEgLAIgLQAGgKACgNQAFgPAKgMIADgFIAJgNQAXgkAcggIApgrIAygwQApgnAmgrQAYgdAWgjQAJgKAMgHQAJgCAIAEIAKAHQALAKAFAUIAXBCIARAxQAUBBAFBEIAEAPQAGAGAJAAQAJAAgDgCQAQgGAPgLQALgIARACQAOAAABAQIgBADIgJAHIgWALIgkAOIgDABIgCAAIgBAAIgCAAIgBABQgaAFgSgbQgGgOADgSQABg8gWg5IgTg1IgghUQgHACgFAGIAAAAIhoB4IhbBYIgnAtQgOAPgLAQIgLARIgDAGIgTAlQgLAcgNAZIgOABQgJgGAFgQgAiYhTIgJgDQgGgCgHgHIgGgLQgmhQhMg1QgHgQgDgRQgGgVgPgPIgcgVQgHgKgBgNQgJgagXgTQhjhshVh2QgJgFgGgNIABgGQAEgGAKgJQAngRAbglQBBhIA7hMIAfgnIAhgnQAZgsAfglQAMgDAHAMQABAKgMAEQgZAQgIAgQgbA0gpAsQhbBthlBhIgEAGQBPBIA3BcIBBBeQAWAhAbAdIAWAZIADAHIAHAbQAPAyAvAgQAhAhAYAkIAGAEIAEADQAGAFADAHQACAMgLAAIgFAAgAEYhiQgHgOAbgIQAUgIAHgRQAugzAdhAIAXgwIAihKIAMgZIAJgSQANgeARgeIAbgnIAEgJQANgbATgVQgNgLgKgPQg3hEgYhYIgRguQgUg2gagyIgVgiQgvhEg7g8QgKgLAFgQQAMgHALAQQArAuAmA0IAFAGQAZAhAVAjIAYAxQAPAjALAjQAdBNAmBKIAHALQAIAMALAJIAOAKIACAEQAJAUgQAYIgxBbIg3BqIgSAiIgqBUIgKATIgDAFIgUAkQgeAvgnAnQgGACgDAHQgEAEgFAAQgIAAgLgLg");
	this.shape_11.setTransform(88.3639,95.2053);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AHfRLIAWhFQAEgLgBgNIgGgSQgCgIAFgKQACgOgGgOIgVhHQgFgRABgSQgSgRAJghQAAg3gdg0QgVg1gOg5IgahpQgfAOgQA6QgVAvgiAZIgSAHQgFACgGgBQgHgDAGgeQAJgFAKADQAlAEAAgmQAegnAagpQgMgHAIgSQAHgJAcAGIABABQAbAVABBJQAMA6AWA1IAdBPQAKAoAFAnIAeCVQAGAZACAXQACA5glAxgAF1HPIAAABIABAAIgBgBIAAgBgAqYREQgEgFABgIQABgaAPgXIAmhTQAWgtAZgtIAdgtIAPgWQAcgxAXg1QATgnAZglIASgbQAKgOAGgQQAEgPAigQIAKgFIABAAQAZgGAcAWIBLAvIATAHIACABQAHAEgQAKQgGAJgOgGIgGgDIgbgQIgygdQgSgJgVACQgIAEgGAKIgVASQgLAJgGARQgcAngWArIgsBWIgNAZIguBNQg6BiglBtQgBAGgFADIgEACQgEAAgEgGgAKBHIIAAgDQAAgIAFgJQABgPgLgNQgFgRAIgUQACgUgJgUIgVhAIgKgfIgDgGIgEgIIgVgmQgUglgOgmIgNggIgIgUIgWgtQgagsgNgyQAAgOAEgMIgDgDIgEgDQgXAUgLAeIgyBoQgOAfgRAdIgEAGIgIAJQgKAKgJgDQgHgCgFgHQgDgJANgHQAJgFALADQABgSAUgLQAIgIgQgPIADgEIARggIAthZIAbg2QAHgIAKgFQAPgDAJARIACAEQAOAZgGAmQAFAXAOAUQAVAmARAnIANAcIABACIAPAiIAtBmIACAEIAXAzQAPAoAHApIAGBDQADAPgBAQIgBACQgEAJgHAAQgGAAgJgHgAqLEQQAFgLAHgLQAGgKACgNQAGgPAJgMIADgFIAJgOQAYgjAbghIApgrIAxgwQAqgnAmgrQAYgdAVgjQAJgKAMgHQAIgDAJAEIAKAHQALAKAGATIAYBCIASAwQAXBBAHBEQABAHADAHQAFAGAKAAQAJAAgCgCQAQgGAPgLQALgHAQABQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgaAFgSgaQgHgOADgRQAAg9gYg4IgVg0IgihTQgGABgGAHIAAAAIhoB4QgsAtguArIgnAtIgYAfIgMASIgDAFIgTAlQgKAdgNAZIgOABQgKgGAFgQgAiihVIgJgDIgNgIIgGgLQgqhOhOgyIgLggQgIgVgPgOIgegUQgGgJgCgNQgJgagZgSQhohnhbhzQgJgDgGgOIAAgFQAEgHAKgIQAlgWAXgmQA7hNA0hRIAcgqQAPgUAOgWQAWgtAbgoQAMgEAIALQABAKgLAFQgXATgGAgQgVA2gmAvQhRB1hdBqIgEAGQBTBDA7BbIBFBaQAYAgAcAcIAXAXIAEAIIAIAbQAQAxAxAdQAjAgAaAiIAGAFIAEACQAHAGADAHQABAMgLAAIgFAAgAEKhkQgGgPAbgIQAUgGAJgRQAxgwAgg/IAagvIAmhIIANgZIAJgQQAPgeATgdIAdgmIAEgIQAPgaAUgUQgMgMgKgQQgzhGgUhZIgPgvQgRg2gXg0QgKgSgKgQQgrhHg4g/QgKgMAGgPQAMgHAKARQApAxAkA0IAFAHQAWAjAUAjIAWAzQANAiAJAkQAaBPAhBLIAHAMQAHAMALAJIANALIADAFQAIAUgSAXIg1BYIg9BnIgUAhIgvBSIgLASIgDAFIgWAjQggAtgqAlQgGACgDAGQgEADgFAAQgIAAgLgJg");
	this.shape_12.setTransform(89.6264,95.4332);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AqjRNQgEgFABgJQABgZAOgYIAmhTQAWgtAYgtIAegtIAOgWQAcgyAWg0QAUgoAXglIATgbQAKgOAGgRQAEgPAegQIAKgGIABAAQAZgHAdAUIBNAqIATAGIACABQAHAEgOAKQgGAKgOgGIgGgCIgcgPIg0gZQgSgIgVADQgIAFgFAKIgUATQgLAKgGAQQgcAngWArIgrBXIgNAYIguBNQg5BjgkBtQgCAGgEADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgEAAgDgFgAIFRLIAShHQADgLgBgNIgHgRQgCgJAEgKQABgOgGgOIgZhFQgHgRABgSQgUgQAIghQgCg4ghgyQgYgzgRg4QgRg0gOg0IAAgCIAAACQghAOgWA2QgZAsgjAXIgTAGQgFABgGgBQgIgDAIgcQAIgFAKADQAmAEAFglQAggjAegoQgLgHAJgSQAJgIAZAHIACABQAcAWAEBHQAPA4AZA1IAgBNQAOAnAGAoIAmCSQAHAYAEAYQAFA5gjAzgAKNHAIgBgCQAAgJAFgIQABgPgMgNQgGgSAIgTQABgUgJgUIgXg/QgFgPgHgPIgDgHIgEgHIgXgmQgVgkgPgmIgOggIgJgTQgLgXgNgVQgbgsgPgxQAAgOADgMIgDgDIgEgDQgXATgMAeIg0BnQgPAfgRAcIgFAGIgIAJQgJAKgKgDQgHgCgFgHQgDgJANgHQAJgFALADQABgSATgLQAJgIgOgOIADgFIARggIAwhXIAbg1QAHgIAKgFQAPgDAJARIADAEQANAYgEAmQAGAXAOAUQAXAkASAnIAOAcIABACIAQAhIAxBlIACAEIAZAyQAQAnAIApIAIBDQAEAPgBAQIAAACQgEAJgHAAQgGAAgJgHgAqfERIAMgWQAGgKACgNQAFgPAKgMIADgFIAJgOQAXgkAbggIApgrIAygwQApgoAmgrQAYgdAVgiQAIgLAMgHQAJgDAIAEIAKAGQAMALAFASIAbBBIATAwQAYBAAJBDQACAIADAHQAFAGAKgBQAJAAgBgCQAQgGAPgKQALgIAQABQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgaAFgSgZQgIgOACgRQgBg8gag4IgWg0IgkhRQgHABgFAHIAAAAIhoB4IhZBZIgnAtQgOAPgLAQIgLASIgDAFIgTAlQgKAdgNAZIgOABQgKgGAFgQgAithZIgIgDIgNgIIgHgKQgthMhQguQgIgQgFgQQgIgUgQgOIgfgTQgHgIgCgNQgLgagZgQQhuhjhfhuQgJgDgHgNIABgFQACgHAJgJQAkgYAUgpQA0hRAthWIAYgsIAZgsQASgvAYgqQAKgFAKAKQACAKgLAGQgVAVgDAgQgRA4giAyQhGB7hTByIgEAHQBWBAA/BXIBJBXQAZAfAeAaQANALALAMIAEAHIAJAbQAUAwAxAbQAkAeAdAhIAFAEIAEADQAHAFAEAIQACAMgNAAIgFAAgAD8hpQgHgQAcgGQAVgGAKgRQAzgtAkg9IAcgtIAqhGIAPgYIAKgQQARgdAUgcIAfgkIAFgIQAQgZAVgTQgLgNgKgQQgvhIgQhaIgMgwQgPg3gVg1IgSgjQgnhJg1hCQgJgMAHgPQAMgGAJARQAnAzAhA3IAEAGQAVAkASAlIATAzQALAkAIAkQAVBPAeBOIAGAMQAIAMAKAKIAMALIADAFQAHAUgUAXIg5BVIhDBjIgWAgIgzBPIgMASIgDAFIgYAhQgiArgsAjQgGACgEAGQgEADgEAAQgJAAgKgKg");
	this.shape_13.setTransform(90.948,95.8027);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AqsRQQgEgFABgJQAAgZAPgYIAlhTQAWguAYgtQANgXAQgWIAOgWQAcgxAWg1QATgoAYglIARgbQAKgPAHgQQAEgPAagSIAJgFIACgBQAYgJAeATIBQAlIASAFIACABQAHAEgMAKQgFALgOgGIgGgCIgegMIg1gWQgSgIgVAFQgIAGgEAJQgIAMgMAJQgJAKgHAQQgcAmgVAsIgrBXIgNAYIgtBOQg5BjgjBtQgCAGgEAEIgEABQgEAAgEgFgAIrREIAPhHQACgLgBgOIgJgQQgCgJADgKQABgOgIgOIgchEQgIgQABgSQgVgPAFgiQgFg2gjgxQgagygVg3QgUgzgRg1QgBgBAAABQgBAAAAAAQAAAAABABQAAAAABABQgkAOgZAxQgdApglAUIgUAFQgFACgGgCQgIgDAJgbQAIgEAKACQAmADAKghQAjghAhgkQgLgJALgQQAJgIAZAIIACABQAdAYAGBDQASA4AcAzIAlBMQAPAmAJAnIAuCQQAIAYAFAXQAIA5ggA0gAKZG0IAAgDQAAgIAEgJQABgPgNgMQgGgSAHgUQAAgUgKgTIgZg/IgNgeIgDgGIgEgHIgYglQgXgjgQglIgPggIgKgTQgLgXgOgVQgbgqgSgxQAAgOACgMIgDgDIgEgDQgYATgMAdQgaA1gdAxQgPAegSAdIgFAFIgIAJQgJAJgLgCQgGgCgGgGQgDgLANgGQAKgEAKACQABgSAUgLQAHgIgKgOIACgFIATgeIAxhYIAbgzQAIgJAJgEQAQgDAJARIACADQAPAZgDAmQAGAWAPAUQAYAjAUAnIAOAbIABACIARAhIA1BiIACAEIAaAxQASAnAJAoIALBDQAEAPAAAQIgBACQgDAJgIAAQgGAAgJgFgAqxENQAFgKAHgMQAGgKACgMQAEgQAKgMIAEgFIAIgNQAYgkAaghIApgrIAygwQAogoAmgrQAYgdAVgjQAIgKAMgIQAIgCAJADQAFACAFAEQAMAKAGASIAcBAIAVAwQAaA/ALBDQABAHADAIQAGAFAKAAQAJgBAAgCQAQgGAPgKQALgHAQAAQAOAAABAQIgBADIgJAHIgWALIgkAOIgDABIgCAAIgBAAIgCAAIgBABQgaAGgTgZQgIgNABgRQgDg9gbg3IgYgzIgmhQQgGABgFAHIgBAAIhnB5QgrAuguArIgnAtIgYAfIgLASIgEAGIgSAlQgLAcgNAaIgOABQgJgHAFgQgAi2hiIgIgCQgGgDgHgGIgHgKQgwhJhTgrIgOgfQgJgUgQgNIgggRQgIgIgCgNQgMgZgbgPQhxhdhkhqQgJgDgIgLIAAgGQADgIAIgJQAhgbAQgqQAthWAmhZIAUguQALgWAKgYQAOgwAUgsQAKgGALAJQADAJgLAIQgUAWABAhQgMA6gdA0Qg8CBhJB4IgDAIQBYA7BDBVIBNBUQAbAdAfAZQANAKAMAMIAEAHIALAaQAVAvAzAZQAmAcAeAgIAGAEIAEADQAHAFADAHQADANgOAAIgFAAgADvhzQgGgQAcgGQAVgGAMgPQA1gqAng7IAfgsIAthDIAQgXIAMgQQASgcAVgaIAhgjIAGgIQARgYAWgSQgLgNgIgQQgshLgLhbIgKgwQgMg3gSg3IgQgkQgkhKgyhFQgJgMAIgOQAMgGAJARQAkA1AeA4IAEAHQAUAkAQAmQAJAaAHAaQAKAkAGAlQARBRAaBOIAGANQAHANAJAJIAMAMIACAGQAGAUgVAVIg+BSIhHBgIgYAfIg3BLIgNASIgEAEIgZAgQglAqguAgQgGACgEAFQgEADgEAAQgJAAgKgKg");
	this.shape_14.setTransform(92.0525,96.7401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AqrRRQgFgFACgIQAAgaAOgYIAlhTQAVguAYgtIAdgtIANgWQAcgyAWg1QATgoAXglIASgcQAKgOAGgQQAEgPAXgSIAJgHIABAAQAYgLAfARIBSAgIARAFIACABQAIAEgLAKQgEAKgPgEIgGgCIgegLIg2gSQgTgHgVAGQgHAGgEAKQgHAMgLAKQgJAKgHAQQgcAmgVAsIgqBXIgNAZIgtBOQg4BjgiBuQgCAGgEADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDAAgEgFgAJaQ7IAKhIQACgLgDgNQgDgIgGgIQgDgJADgKQAAgOgIgNIghhDQgHgPgBgTQgXgOAFgiQgJg2glgvQgdgwgYg2IgrhmQgBAAAAAAQgBAAAAABQAAAAAAAAQABABAAABQglAOgdAsQggAkgnARIgVAFQgFACgGgCQgHgFAJgYQAIgEAKACQAmADAOgfQAngeAjghQgJgJAMgPQAKgHAWAIIACACQAeAZAJBAQAVA3AeAxIApBJQASAmALAmIA2COQAJAWAGAYQAMA4gdA2IgQgEgAKvGlIgBgDQAAgIAEgJQAAgPgNgMQgHgRAGgVQAAgUgKgSIgcg+IgOgeIgDgGIgFgHIgZgkQgXgigSglIgQgfIgKgTQgNgWgOgTQgegrgSgwQgBgOABgMIgDgEIgDgDQgZATgNAdIg4BkQgQAegTAdIgFAFIgIAJQgKAJgLgDQgGgBgFgHQgEgJANgIQAJgDALACQACgSATgMQAIgIgJgNIADgFIATgdIAzhXIAcgyQAHgIAJgFQAQgEAKARIACAEQAOAZgBAkQAHAXAQATQAZAkAVAkIAPAbIABACIATAgIA3BhIADAEIAcAwQASAmALAoIANBCQAFAPAAAQIAAADQgEAJgIAAQgGAAgIgFgAq6EIQAEgKAHgMQAGgKACgMQAGgQAJgMIADgFIAJgNQAWglAcggIAogsIAygwQAogoAmgrQAYgdAUgiQAIgLAMgIQAIgDAJAEIAKAGQAMAKAGARIAeA/IAWAwQAcA+ANBCQABAIAEAHQAGAGAKgCQAJAAABgCQAQgGAPgKQALgIAPABQAPgBABARIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgBAAIgCAAQgaAGgTgXQgJgNACgRQgFg9gdg2IgZgyIgohPQgHABgFAHIAAAAIhnB5QgrAuguArIgnAuQgNAQgLAPIgLASIgDAFIgSAmQgLAcgNAaIgOABQgJgGAFgRgAi2hsIgIgDIgNgIIgHgJQgzhHhVgnQgJgOgGgRQgLgTgQgMIghgQQgIgIgDgMQgNgZgbgOQh1hYhphlQgKgCgIgLIAAgFQABgIAIgKQAfgeANgrQAlhZAehcIAQgvIARgxQAJgwARguQAKgHALAIQAEAJgLAIQgRAYADAhQgHA6gZA3QgwCFg+B/IgDAIQBbA4BHBRIBRBQQAcAcAgAYQANAJANALIAFAHIALAaQAYAuA0AWQAnAbAgAeIAGAFIAEACQAHAFAEAIQACANgPAAIgEAAgADrh+QgGgRAcgFQAWgFANgOQA4gnAqg5IAhgqIAxhBIARgWIANgPQATgbAXgaIAjggIAGgIQATgXAXgRQgLgNgHgRQgohNgHhbIgIgwQgJg4gPg4IgPgkQgghNguhGQgIgOAIgNQANgFAIASQAhA2AbA6IAEAGQASAmAOAnIAOA0IAMBKQANBRAWBQIAFAMQAHAOAJAKIAKANIACAFQAGAVgWAUIhDBOIhNBcIgZAdIg7BJIgOAQIgEAFIgbAeQgnAogvAdIgLAHQgEADgEAAQgJAAgKgKg");
	this.shape_15.setTransform(92.325,97.7767);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AqrRSQgEgGABgIQABgaAOgYIAkhTQAVguAXgtQANgXAQgXIANgWQAcgyAVg1QATgoAXglIASgcQAKgPAFgQQAEgPAUgSIAJgHIABgBQAXgLAgAOIBUAcIAQADIACABQAIAEgJAKQgEALgPgEIgGgBIgfgJIg3gQQgTgEgUAGQgHAIgDAJQgHAMgKAKQgJALgHAPQgcAngVAsIgpBXIgNAZIgsBOQg4BkghBuQgCAGgEADIgEABQgFAAgEgEgAKGQwIAGhIQABgMgDgNIgKgPQgDgIACgLQAAgOgKgNIgkhAQgJgQgCgSQgWgMACgiQgLg3gogsQgggvgag0QgagxgXgzQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABQhOAchFBHIgVAEQgGABgFgCQgIgEAKgXQAJgEAKACQAlADATgcQApgaAmgeQgJgKAOgPQAKgFAVAJIACABQAfAbALA8QAYA2AhAwIAtBGQAUAlANAlIA9CLQALAWAHAXQAPA4gaA3gALEGUIgBgDQgBgIAEgJQgBgPgNgLQgIgRAGgVQAAgUgMgSIgdg9IgPgdIgEgGIgFgHIgagjQgYgigTgkIgSgeIgLgTIgbgoQgggpgUgwQgBgOAAgNIgDgDIgDgDQgZASgOAdIg6BjQgRAegTAbIgFAGIgJAIQgJAJgMgCQgGgCgFgGQgEgKANgHQAJgEALACQACgSASgLQAJgIgHgNIADgFIATgdIA1hWIAdgwQAHgIAJgGQAPgDALARIACAEQAPAZAAAjQAHAXARASQAaAiAWAlIARAaIABACIATAfIA7BfIADAEIAdAvQAUAmAMAnIAPBCQAGAPABAQIgBACQgDAKgIAAQgGAAgIgFgArEECIAMgVQAGgLACgMQAEgQAKgMIADgFIAJgNQAWgkAbghIApgsIAxgwQApgoAlgsQAYgdAUgiQAIgLAMgIQAHgDAKAEIAKAGQAMAJAGARIAgA+IAXAvQAeA+AOBCIAGAOQAGAGAKgCQAJAAACgDQAQgGAQgJQAKgIAPAAQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgaAGgUgWQgJgMABgSQgGg8gfg1IgagyIgqhOQgHABgFAHIAAABIhmB6IhZBYIgnAuIgYAfIgLASIgDAGIgSAlQgLAcgMAaIgOABQgKgGAFgRgAi2h4IgJgCIgMgIIgHgJQg3hEhWgjIgRgeQgLgTgRgLIghgOQgJgIgEgMQgOgYgbgNQh6hThthgQgKgBgIgKIgBgGQACgIAGgJQAdghAJgsQAchcAXhfIALgwQAIgYAGgaQAFgyAMguQAJgIAMAIQAEAJgJAIQgPAaAGAgQgCA7gUA4QglCKgyCDIgDAJQBdAzBMBOIBUBNQAdAaAhAWQAOAJANAKIAFAHIANAZQAZAtA2AUQAoAZAhAdIAGAEIAFADQAHAEAEAIQACANgRAAIgCAAgADniLQgGgQAdgFQAWgEAOgNQA6glAtg2IAkgoIA0g+IASgWIANgOQAWgaAYgYIAkgeIAGgIQAVgVAYgQQgKgOgHgRQgkhPgChbIgGgxQgGg4gNg4IgMgmQgdhOgqhJQgIgNAJgNQANgFAHASQAeA5AZA6IAEAHQAQAnALAnIAMA1QAGAlACAlQAJBSATBRIAEANQAGANAIALIALANIABAGQAEAUgXAUIhGBKIhSBXIgbAdIg/BFIgPAQIgEAEIgdAdQgpAlgwAbIgLAGQgEACgEAAQgJAAgKgKg");
	this.shape_16.setTransform(92.625,98.9496);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AqpRQQgFgFACgJQAAgZANgYIAkhUQAVguAXgtIAcguIAOgWQAbgyAVg2QASgnAXgmIARgcQAKgPAGgQQAEgPAQgSIAIgIIABAAQAXgOAhANIBVAWIAQADIACABQAIADgIALQgDAKgPgCIgGgBIgfgHIg4gMQgTgEgVAIQgFAIgEAKQgGAMgJAKIgQAaQgbAngVAsIgpBYIgMAYIgsBPQg3BkghBuQgCAGgEADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAgEgFgAKvQiIADhIQAAgLgDgNIgLgPQgDgIABgLQgBgOgLgMIgng/QgJgPgDgSQgYgLAAgiQgOg2gqgpQgigugdgyIg2hhQgBAAgBAAQgBAAAAAAQAAABAAAAQAAABAAAAQhQAchMA6IgVADQgGACgGgDQgHgFALgUQAIgFAKADQAlACAYgYQAqgXAqgaQgJgLAPgNQAMgFASAKIACABQAfAdAOA4QAaA0AkAuIAyBEQAUAkAQAkIBECHQAMAWAKAWQARA3gXA5gALYGCIgBgDQgBgIADgJQAAgPgOgLQgJgRAGgVQgCgUgMgRIgfg8IgQgdIgEgGIgFgGQgMgTgPgQQgagggUgkIgSgeIgMgSQgOgUgQgTQgggpgWgvIgDgaIgCgEIgEgDQgZASgOAcIg9BjQgQAdgVAbIgEAFIgJAIQgLAJgLgCQgHgBgEgHQgEgKANgHQAJgEAKACQACgSATgMQAHgHgDgMIACgEIAUgeIA3hUIAdgwQAIgIAIgFQARgEAJARIADAEQAPAZABAjQAJAWAQASQAbAiAZAjIARAZIABACIAUAfIA+BdIADAEIAfAuQAVAlAOAnIARBBQAGAPABAQIAAACQgDAKgIAAQgGAAgIgEgArND7IALgVQAGgLABgMQAGgQAJgMIADgFIAJgNQAXglAaggIApgsIAwgwQApgpAlgrQAYgeAUghQAHgMAMgIQAIgDAKADIAKAGQAMAJAGARIAiA9IAZAvQAeA8ARBCIAGAOQAGAFAKgCIAMgDQARgGAPgJQAKgHAPgBQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgCAAIgBABQgaAGgUgUQgKgNABgRQgJg9gfgzIgcgyIgthMQgGABgFAHIAAABIhmB6QgrAtguAsIgmAuQgNAPgLAQIgLASIgDAFIgSAmQgLAcgMAaIgOABQgJgGAFgRgAi3iEIgJgDIgMgHIgHgJQg6hChXgfQgKgNgJgQQgLgSgSgLIgigMQgJgHgEgNQgPgXgcgLQh+hNhyhbQgJgBgJgJIgBgGQABgIAHgKQAYgiAGgtQAVhfANhgIAJgxIAIgyQABgzAIgvQAJgJAMAHQAFAJgIAJQgNAbAIAfQAEA7gQA6QgYCMgnCIIgBAJQBfAvBOBKIBYBJQAeAZAiAVIAcARIAGAHIANAYQAcAsA2ARQAoAYAlAbIAFAEIAFACQAHAFAEAHQAEAPgTAAIgCAAgADjiZQgHgQAegEQAWgEAQgMQA8ghAwg0IAmgmIA3g8IATgUIAPgNQAWgZAZgXIAmgcIAHgHQAVgVAZgOQgJgPgGgRQgghRAChbIgCgxQgFg5gKg4IgKgmQgYhPgohLQgGgOAJgMQANgFAHATQAcA5AVA8IADAIQAOAnAKAoIAIA2IAGBKQAFBSAOBSIADANQAFANAJAMIAJANIACAGQACAVgYASIhKBGIhWBTIgdAbIhDBBIgPAPIgEAEIgfAcQgrAjgyAYIgLAGQgEACgDAAQgKAAgJgLg");
	this.shape_17.setTransform(92.95,100.2129);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AqoRNQgFgGACgIQAAgZAOgYIAjhUQAUguAXguIAcguIANgWQAbgyAUg2QATgoAXgmIARgbQAKgPAFgQQADgPAOgTIAHgIIABAAQAWgPAiALIBWARIAPACIACABQAIADgFAKQgDALgPgCIgGAAIgggFIg4gJQgUgCgUAJQgGAHgBALQgFANgKAKIgQAaQgbAngUAsIgoBYIgNAYIgrBPQg3BlggBuQgCAGgEADQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgEAAgEgFgALXQTIgBhJQAAgMgFgMQgFgHgHgHQgEgIABgLQgCgOgKgLIgrg9QgLgOgEgSQgYgJgBgjQgRg0gtgoQgkgrgggxQgfgugcgwQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQhTAbhQAtIgWACQgFACgGgDQgHgFAKgTQAJgEAKACQAmACAagUQAtgTArgXQgIgMARgLQALgEARAKIACACQAfAeARAzQAeAzAmAsIA0BCQAYAiARAkIBMCCQANAWAKAVQAUA2gTA6gALrFuIgBgDQgBgIADgJQgCgPgOgLQgJgQAFgVQgCgUgNgRIghg7IgRgcIgEgGIgFgGIgdgiQgagggWgiIgTgdIgNgSQgOgUgQgTQgigngXguQgDgOgBgNIgDgDIgDgEQgaASgPAcIg+BhQgSAdgVAaIgFAFIgJAIQgKAJgMgCQgGgBgFgHQgEgKANgHQAJgEALACQABgSATgMQAHgGgBgMIADgEIAVgeIA4hTIAdguQAHgJAKgFQAPgDAKARIADADQAPAZADAjQAJAWASARQAcAgAZAkIASAYIABACIAWAeIBBBbIACADIAhAtQAXAkAOAnIAUBBQAHANABARIAAACQgCALgJAAQgGAAgIgEgArYD0QAFgLAHgLQAGgLABgMQAGgPAJgNIADgFIAIgNQAXgkAbgiIAogrIAxgwQAogpAlgsQAYgeATghQAIgMALgIQAIgDAJADIALAGQANAJAGAQIAjA8IAaAuQAhA7ASBCQADAHAEAGQAGAGAKgCIAMgEQARgFAPgKQAMgHANgBQAPAAABAQIgCADIgJAHIgWALIgkAOIgCABIgCAAIgCAAIgBAAIgCABQgbAGgTgTQgLgMABgSQgKg8ghgyIgdgxIgvhLQgGABgFAHIAAABIhmB6IhYBaIgmAtQgOAQgKAQIgLASIgDAGIgSAlQgKAcgNAaIgOABQgJgGAEgQgAjBiVIgLgHIgHgIQg+g/hYgbIgUgcQgNgSgSgJIgigLQgJgHgFgMQgRgXgcgKQiAhHh3hVQgJgCgJgIIgBgFQAAgIAFgKQAWglACgtQANhgAFhgIADgyQADgaACgZQgDgyAEgwQAHgJANAFQAGAIgIAKQgKAcALAeQAIA7gKA7QgMCOgbCKIgBAKQBhAqBSBHIBbBEQAgAYAiATQAPAIAOAJIAGAGIAPAXQAdArA3APQAqAVAlAaIAGAEIAFACQAHAFAEAHQAEAPgVAAgADdinQgFgRAegDQAWgEARgLQA+geAygxIAogkIA7g4IAUgTIAPgNQAYgXAagVIAogbIAHgGQAWgUAagNQgIgPgFgRQgdhTAHhaIAAgxQgCg6gGg4IgJgnQgUhQgkhNQgGgNAKgNQANgDAGATQAYA6ATA9IADAHQAMAoAIApQAEAaACAcQACAlgBAlQABBTAKBSIADANQAFAOAHAMIAJAOIABAFQADAVgaARIhOBCIhbBPIgeAZIhGA9IgQAPIgFADIgfAaQgtAhg0AVIgLAFQgEACgEAAQgJAAgKgKg");
	this.shape_18.setTransform(93.325,101.6072);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AqnRJQgEgFABgIQAAgaANgYIAjhUQAUgvAXgtIAcguIAMgXQAbgyAVg2QARgnAXgnIARgcQAKgOAFgRQAEgPAJgSIAIgIIAAgBQAVgPAiAIIBYALIANACIADABQAIADgEAJQgBAMgQgBIgGAAIgggDIg5gGQgUgBgTAKQgFAJgBAKQgFANgJALIgQAZQgbAngTAtIgoBYIgNAZIgqBPQg2BlggBuQgBAGgFADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgEgFgAL8QBIgFhIQgBgLgGgNQgEgHgIgHQgEgHAAgLQgDgOgLgLIgug6QgLgNgFgSQgYgJgEghQgUg0gvglQgmgpgjgvQghgsgfgvQgEAAAAADQhVAZhUAgIgXABQgGABgFgDQgHgGALgQQAJgFAKADQAlABAegPQAugPAtgTQgHgMARgLQAMgDAPALIACACQAfAeAUAwQAgAxApAqIA4A/QAaAgASAjIBUB/QANAUAMAVQAXA1gRA7gAL9FZIAAgDQgDgIADgJQgCgPgOgKQgJgQADgVQgDgUgNgRIgjg6IgRgbIgFgGIgGgGIgeghQgbgegWgiIgVgdIgMgQIghgnQgigmgZgtIgGgbIgCgDIgEgEQgaARgPAcIhABgQgTAcgVAaIgFAFIgJAIQgLAJgMgCQgHgCgEgHQgEgJANgHQAJgFAKADQABgSATgLQAIgIAAgLIAEgEIAVgdIA6hSIAegtQAGgJAKgEQAPgFALASIADADQAOAZAFAiQAKAVASARQAeAfAZAjIATAXIABACIAYAeIBDBYIADAEIAjAsQAXAiAQAnIAWBAQAHAOACAQIAAACQgCALgKAAQgFAAgIgDgAriDsIALgWQAGgLACgMQAEgQAKgMIADgFIAIgNQAXglAbghIAogsIAxgwQAogpAlgsQAXgeATghQAHgLAMgJQAHgDAKADIALAFQAMAJAHAPIAlA8IAbAtQAjA6AUBBQACAHAEAHQAHAEAKgCIAOgDQAQgFAPgKQAMgHANgBQAPgBABARIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgCAAIgBAAQgbAGgUgRQgKgMAAgSQgNg7ghgyIgggwIgvhKQgIADgDAGIgBABIhlB7QgrAtgtAsIgnAuIgXAgIgLARIgDAGIgSAmQgKAcgMAaIgPABQgJgGAFgQgAjCijIgLgHIgIgHQg/g8hbgXQgMgNgJgOQgNgSgTgJIgjgJQgJgGgGgMQgRgWgdgIQiEhBh6hRQgJAAgJgIIgBgFQgBgIAFgKQATgngDgtQAEhggChhIgBgyQABgZgBgaQgIgyAAgwQAHgJAOADQAFAIgGAKQgIAeAOAdQANA6gFA7QAACOgOCNIgBAKQBjAmBVBDIBeBAQAhAWAkASIAcAPIAHAGIAQAXQAfAoA4ANQArATAmAZIAGADIAFADQAIAEAEAHQAEAPgVABgADYi3QgEgRAcgCQAXgDATgKQA+gaA2guIApgiIA+g1IAWgSIAPgMQAagWAbgUIApgYIAHgGQAYgTAagLQgIgQgDgRQgZhTALhbIACgxQADg5gGg5IgGgnQgQhRgghOQgFgPALgMQANgCAEATQAWA8APA9IADAIQAKAoAGApQADAbAAAbQABAmgDAlQgDBSAGBTIACANQAEAOAHAMIAIAPIABAFQABAVgaAQIhSA+IheBJIggAXIhJA6IgRANIgFAEIghAYQguAeg1ATIgMAEIgHABQgKAAgJgKg");
	this.shape_19.setTransform(93.75,103.0746);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AqdREQgEgFABgJQAAgaANgYIAihUQAUgvAWgtQAMgYAQgXIANgWQAagyAUg2QASgpAWgmIARgcQAJgPAGgQQADgPAHgRIAGgJIABgBQAUgRAjAGIBXAHIANABIACABQAJACgCAJQgCAMgPAAIgGAAIgggBIg5gCQgUAAgSAMQgFAIgBALQgDANgJALIgQAZQgaAngUAtIgnBYIgMAZIgrBQQg1BlgfBuQgBAGgEAEQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgEAAgEgEgAMmPtIgJhIQgBgLgGgMIgNgNQgFgIAAgKQgEgOgMgKIgxg4QgMgMgGgSQgYgHgGgiQgXgygwgjQgpgnglgtQgjgqgigtIgFADQhWAZhYAQIgWABQgGAAgGgCQgGgHAKgNQAJgFAKACQAlABAhgLQAwgKAugQQgFgMARgJQAMgCANALIACACQAfAfAXAsQAjAvArAnIA7A8QAbAfAVAiIBaB6QAPATAMAVQAbA0gOA7gAMXFCIgBgDQgCgIACgJQgCgOgOgKQgLgQADgWQgDgTgOgRIglg4IgTgbIgEgFIgGgGIgfggQgcgdgYgiIgVgbIgOgRQgPgUgSgRQgkglgbgtIgHgaIgCgEIgDgDQgaAQgRAbQggAxgiAuQgTAdgWAZIgFAFIgJAHQgLAJgMgCQgHgCgFgHQgDgJAMgHQAJgFALADQABgRATgMQAHgIADgKIADgFIAWgcIA8hRIAegrQAHgJAJgFQAQgDAKAQIADAEQAQAYAFAhQAKAVATARQAeAeAcAiIAUAXIABADIAYAbIBHBWIADADIAjArQAZAjASAlIAXBAQAIANADAQIAAACQgCAMgKAAQgFAAgIgDgArkDiIALgWQAGgKACgNQAEgPAJgMIAEgFIAIgOQAXgkAagiIAogsIAwgwQApgpAlgsQAWgdATgiQAIgMALgIQAIgEAJADIALAGQANAIAGAPIAnA6IAcAsQAkA6AWBAQADAHAEAGQAHAGAKgDIAOgEQARgFAQgKQALgGANgCQAOgBABARIgBADIgJAHIgWALIgkAOIgDAAIgCABIgBAAIgCAAIgBAAQgbAGgVgQQgKgMgBgRQgNg7gkgxIgggvIgyhIQgHACgEAHIAAAAIhlB8QgrAtgtAsIgmAuIgXAgIgLASIgDAGIgSAlQgKAdgMAZIgOACQgKgGAFgRgAi8izIgLgHIgHgGQhDg5hbgTIgWgaQgOgRgUgIIgigIQgLgFgFgMQgTgVgdgHQiGg7h+hLQgJAAgJgGIgCgGQgBgHAEgLQAQgngHgtQgEhhgLhgIgFgyIgFgzQgMgwgEgxQAGgKAOADQAHAHgGALQgGAeARAcQASA4ABA8QALCOgCCOIAAAJQBlAiBYA/IBhA7QAhAVAlAQIAeAOIAGAFIARAWQAiAoA4AKQArARApAXIAGADIAEADQAIAEAEAHQAFAPgWABgADbjIQgFgRAegBQAWgDAUgIQBBgXA3grIAsggIBBgxIAWgRIAQgLQAagUAdgTIAqgWIAHgGQAZgRAbgKQgHgQgDgRQgUhVAPhaIAFgxQAEg5gBg5IgFgnQgNhSgbhPQgFgPALgLQAOgCADATQATA8ANA/IACAIQAHAoAFApIAAA3IgFBKQgIBTADBSIABAOQADANAGANIAIAPIABAGQgBAVgaAOIhVA5IhjBEIggAWIhNA2IgSAMIgFADIgiAWQgwAcg1AQIgMADIgHABQgKAAgJgKg");
	this.shape_20.setTransform(93.3778,104.6751);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AqNQ8QgEgFABgIQAAgaANgYIAihUQATgvAWguQAMgYAPgWIANgXQAagyAUg3QARgoAWgmIARgcQAKgPAFgRIAGgfIAGgJIABgBQATgSAjAEIBYABIALAAIADABQAIADAAAIQgBALgPACIgGAAIggABIg5ACQgUABgRAMQgFAJAAALQgDANgIAMIgPAYQgbAogTAtIgnBYIgMAZIgqBQQg0BlgeBvQgCAGgEAEQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgEAAgEgGgANUPXIgNhHQgCgMgGgLIgOgNQgFgHgBgLQgFgMgMgLIg0g0QgMgMgHgRQgagGgHgiQgZgwgzghQgqgkgogrIhKhTIgGACQhXAYhaACIgWAAQgGAAgGgDQgGgGAKgMQAJgFAKACQAlACAkgHQAwgGAvgMQgDgNASgHQAMgBAKALIACACQAfAgAaAnQAlAtAtAmIA/A4QAcAeAXAgIBgB1QARATANAUQAdAxgKA9IgNABIgEAAgAM2EpIgBgCQgDgIADgKQgDgOgPgJQgLgQADgVQgFgUgNgQIgog3IgTgaIgFgFIgGgGQgPgRgRgOQgegcgYggIgWgbIgOgQQgRgUgSgRQglgjgcgsIgJgaIgCgEIgDgEQgbAQgQAbIhFBeQgTAcgXAZIgFAFIgJAGQgLAJgNgCQgGgCgFgHQgEgIAMgHQAJgFALADQABgSATgMIAMgSIAEgEIAWgcIA+hQIAegpQAHgJAJgFQAQgEAKARIADAEQAQAZAGAfQAMAVATAPQAfAeAdAhIAUAWIACADIAYAbIBLBTIACADIAmAqQAZAhATAlIAaA/QAIANAEAQIgBACQgBAMgKAAQgFAAgIgDgArhDYQAFgKAHgMQAGgKABgNQAFgPAJgNIADgFIAJgNQAWglAaghIAogsIAwgxQAogpAlgsQAXgeATghQAHgMALgIQAHgEAKADIALAFQANAJAHANIAoA5IAdAsQAmA5AYA/QACAHAFAGQAHAFAKgDIAPgEQARgFAQgJQALgHAMgCQAPgBABARIgCADIgJAHIgWALIgkAOIgCAAIgCABIgCAAIgBAAIgCAAQgbAGgUgOQgLgMgCgRQgOg6gmgxIghguIg0hHQgHADgEAHIhkB8IhYBaIgmAuQgMAQgLAQIgLARIgDAGIgRAmQgLAcgMAaIgOACQgJgGAEgRgAiwjEIgLgGIgHgGQhFg2hcgPQgNgLgKgOQgPgPgUgIIgjgGQgKgGgHgLQgTgUgegFQiJg1iAhFQgKAAgIgFIgDgGQgBgHADgKQAMgpgKgtQgMhfgUhfIgJgxQgEgagFgZQgQgwgJgvQAGgLANACQAIAGgFAMQgDAeATAaQAXA3AGA8QAXCLALCPIAAAKQBnAcBbA7IBjA3QAjAUAlAOIAeAMIAHAFIASAWQAjAlA5AIQAsAPAqAVIAGADIAEADQAIAEAFAHQAEAOgWACgADjjaQgDgRAdgBQAWgCAWgGQBBgUA6goIAtgdIBDguIAYgPIAQgLQAcgTAdgRIAsgTIAHgGQAagPAbgJIgIgiQgRhVAUhZIAHgxQAIg4ABg5IgDgoQgIhSgYhRQgEgPAMgLQAOgBACAUQAPA9AKA/IACAIQAGApACApIgCA3QgDAlgHAkQgLBSgCBTIABANQADAPAFAMIAHAPIABAGQgCAVgbANIhYA1IhnA+IghAUIhPAyIgTALIgFADIgjAUQgyAZg2ANIgMADIgGABQgKAAgKgLg");
	this.shape_21.setTransform(92.4188,106.3508);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ap8Q0QgEgFABgIQgBgaANgYIAihVQATgvAVgtQAMgYAPgXIANgXQAagzATg2QARgoAWgnIARgcQAJgPAFgQQADgPAAgQIAGgJIAAgBQASgUAjADIBYgFIALAAIACABQAJACABAIQAAALgPACIgGABIggADIg5AFQgUADgQANQgEAJABALQgCANgIAMIgQAZQgaAogTAsIgmBZIgMAZIgpBQQg0BmgeBvQgBAGgEADQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgEgFgANvN4QgDgLgHgLIgOgMQgGgGgBgLQgFgNgNgJIg3gyQgOgMgHgQQgagFgJghQgcgvg0gdQgtgjgqgoQgngmgngpIgGACQhYAWhcgLIgWgBQgGAAgGgEQgGgGAKgKQAJgFAKACIBLAAQAwgDAxgHQgDgOATgFQAMAAAIALIACADQAfAgAcAjQAoArAvAiIBCA1QAdAcAZAfIBnBwQARASAPATQAfAwgHA9IgQACgANVEQIgBgDQgDgIACgJQgEgOgPgJQgLgPACgWQgFgTgPgQIgpg1IgUgaIgFgFIgGgGIghgdQgfgcgageIgXgbIgOgQIgkgjQgngigdgrIgKgaIgCgEIgDgEQgbAPgRAbIhHBcQgTAcgXAZIgGAFIgJAHQgLAIgOgBQgGgCgFgHQgDgKALgGQAKgFAKACQACgSASgMIAPgRIADgEIAXgbIA/hPIAfgnQAHgJAJgFQAPgFALARIADAEQAQAYAIAfQAMAVAUAOQAgAdAeAgIAVAWIABACIAaAbIBNBQIADADIAmAoQAbAhAUAkIAcA+QAJANAEAQIAAACQgBAMgMAAQgFAAgGgCgArdDOIALgWQAGgLACgMQAEgQAKgMIADgFIAIgOQAWgkAagiIAogsIAwgxQAogpAlgtQAWgeATggQAHgMALgJQAIgEAJADQAGABAFAEQANAJAHANIApA3IAfArQAnA4AaA/QADAHAFAGQAGAEALgDIAQgFQAQgFARgJQALgGAMgDQAOAAABAQIgBADIgJAHIgWALIgkAOIgDABIgCAAIgBAAIgCAAIgBABQgaAHgWgPQgLgLgCgRQgRg6gmgvIgjguIg1hEQgHABgEAIIhkB8QgrAwgsArIgmAuQgNAQgKAQIgLASIgDAGIgSAlQgJAdgNAaIgOABQgJgGAEgQgAikjVIgKgGIgIgGQhHgyhdgLQgMgKgMgOQgPgPgUgGIgkgFQgKgEgHgMQgUgSgegFQiMgviDg+QgKABgIgGIgDgEQgCgIADgKQAHgqgNgrQgUhegchdIgOgwIgNgyQgUgugMgvQAEgLAOABQAIAFgEAMQAAAeAVAZQAbA1ALA7QAkCJAXCNIABAKQBnAYBeA2IBmAzQAjASAmAMIAfALIAHAFIATAUQAlAlA5AEQAsAOAsASIAGAEIAFACQAHADAFAIQAEAOgWADQgFAAgEgDgADsjsQgEgRAeAAQAWgCAXgFQBCgQA8glIAvgaIBFgrIAYgOIARgJQAdgRAegQIAtgRIAIgFQAagOAcgIIgHgiQgMhWAZhYIAJgwQAKg4AEg5IgBgnQgEhTgUhTQgDgPAMgJQAOgBABATQANA/AHA/IABAIQAEAqAAApIgFA2QgFAlgIAkQgPBRgGBTIAAANQABAPAGANIAGAPIAAAGQgCAVgdALIhbAwIhpA5IgiASIhSAtIgTAKIgGADIgkASQgzAWg3ALIgMACIgFAAQgLAAgJgKg");
	this.shape_22.setTransform(91.4886,108.1087);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(1));

	// body
	this.instance = new lib.ant_body();
	this.instance.setTransform(94.55,89.05,1,1,0,0,0,39.9,131.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-42.1,182.70000000000002,262.40000000000003);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ant();
	this.instance.setTransform(-0.15,19.15,1,1,0,0,0,91.4,108.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAAIAAgBIABgCIABgCIACgBIACgBIAGgCIADAAIAGAGIAAACQAAAFgCAEIgNACQgDgDgDgHg");
	this.shape.setTransform(74.975,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-91.3,-131.2,182.7,262.4), null);


// stage content:
(lib.antsgame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		createjs.Sound.play("introMusic", {loop:-1});
		
		this.startBTN.addEventListener("click", startGame.bind(this));
		function startGame(){
			this.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		var sym = this;
		var canTargetMoveFlag = true;
		let myAnts = [this.ant1, this.ant2]; // add more ants in the future 
		let antsVX = [0, 0];
		let antsVY = [0, 0];
		let outOfBounds = [0, 0];
		var canEndGame = true;
		this.stop();
		
		
		function init() {
			var curPX = 0;
			var curPY = 0;
			//var canEndGame = true;
			sym.pointer1.visible = true;
			sym.target1.visible = false;
			sym.cols.visible = false;
			sym.rows.visible = false;
			sym.winScreen.visible = false;
			sym.againBtn.visible = false;
			sym.loseScreen.visible = false;
			sym.playAgainLost.visible = false;
			createjs.Sound.stop();
			createjs.Sound.play("winSound");
			createjs.Sound.play("backgroundMusic", {loop:-1});
		
		}
		init();
		
		/*document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		var curPX = 0;
		var curPY = 0;
		this.pointer1.visible = true;
		this.target1.visible = false;
		this.cols.visible = false;
		this.rows.visible = false;
		this.winScreen.visible = false;
		this.againBtn.visible = false;*/
		
		
		// moves pointer arrow to desired location using drag and drop
		this.pointer1.on("pressmove", movePointer);
		function movePointer(e) {
			var p = stage.globalToLocal(e.stageX, e.stageY);
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;
		}
		
		this.pointer1.on("pressup", dropPointer);
		function dropPointer(e) {
			console.log("dropped pointer");
			var p = stage.globalToLocal(e.stageX, e.stageY);
			curPX = p.x;
			curPY = p.y;
		}
		
		// place the target wherever the pointer is located
		this.button_2.addEventListener("click", fl_ClickToPosition_3.bind(this));
		function fl_ClickToPosition_3() {
			this.pointer1.visible = true;
			this.target1.visible = true;
			if (canTargetMoveFlag) {
				this.target1.x = this.pointer1.x;
				this.target1.y = this.pointer1.y;
				this.button_2.visible = false;
				canTargetMoveFlag = false;
			}
		}
		// place the wind wherever the pointer is located
		this.button_1.addEventListener("click", fl_ClickToPosition_4.bind(this));
		function fl_ClickToPosition_4() {
			this.pointer1.visible = true;
		
			this.blowing.x = this.pointer1.x;
			this.blowing.y = this.pointer1.y;
			this.windHit.x = this.pointer1.x;
			this.windHit.y = this.pointer1.y;
			this.blowing.gotoAndPlay("playWind");
		
		}
		
		
		// win condition - if ant hits target, 
		// set cantargetmoveflag = true
		// show win page and button to restart
		
		
		
		
		
		function hitBounds(mc1, mc2) {
		
			var m1x = mc1.x;
		
			var m1y = mc1.y;
		
			var m1w = mc1.nominalBounds.width;
		
			var m1h = mc1.nominalBounds.height;
		
			var m2x = mc2.x;
		
			var m2y = mc2.y;
		
			var m2w = mc2.nominalBounds.width;
		
			var m2h = mc2.nominalBounds.height;
		
			return m1x < m2x + m2w &&
		
			m1x + m1w > m2x &&
		
			m1y < m2y + m2h &&
		
			m1y + m1h > m2y;
		
		}
		
		
		
		
		sym.addEventListener("tick", moveContinuously);
		
		
		myAnts[0].addChild(this.antHit1);
		myAnts[0].hitArea = this.antHit1;
		myAnts[1].addChild(this.antHit2);
		myAnts[1].hitArea = this.antHit2;
		
		
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}
		function getRandomSpeed() {
			var temp = getRandomInt(2);
			var output = 0;
			if (temp == 1) {
				output = 1;
			} else {
				output = -1;
			}
			return output;
		}
		
		// set the ants location before they go into the continuous movement
		for (let i = 0; i < myAnts.length; i++) {
			myAnts[i].x = getRandomInt(1000)+100;
			myAnts[i].y = getRandomInt(680)+20;
		}
		for (let i = 0; i < myAnts.length; i++) {
			antsVX[i] = getRandomSpeed();
			antsVY[i] = getRandomSpeed();
		
		}
		
		/*var rCW;
		rotate_CW.addEventListener(MouseEvent.CLICK, rotateCW);
		function rotateCW(){
			rCW = new Tween(Object(this).parent.module, "rotation", Strong.easeOut, Object(this).parent.module.rotation, Object(this).parent.module.rotation+90, .5, true);
		}*/
		
		
		
		function moveContinuously() {
			if (canEndGame){
				var numOutOfBounds = 0;
				
			for (let i = 0; i < myAnts.length; i++) {
				var isHitX = sym.cols.hitTest(myAnts[i].x, myAnts[i].y);
				var isHitY = sym.rows.hitTest(myAnts[i].x, myAnts[i].y);
				var isBlown = hitBounds(myAnts[i], sym.windHit);
				var isAtTarget = hitBounds(myAnts[i], sym.target1);
				//var isOutOfBounds = sym.outsideCollision.hitTest(myAnts[i].x, myAnts[i].y);
				
				// check if it is out of bounds!
				var isOutOfBounds = false;
				var curX = myAnts[i].x;
				var curY = myAnts[i].y;
				var pt = myAnts[i].localToGlobal(stage.x,stage.y);
				console.log(pt.x,pt.y);
				if (pt.x > 1300 || pt.x < -20 || pt.y > 740 || pt.y < -20){
					isOutOfBounds = true;
					console.log("ant went out of bounds!");
					loseGame();
					canEndGame = false;
					return;
				}
				
			// if it hits an intersection, choose a random x or y direction
				if (isHitX && isHitY) {
					// choose a random direction, x or y
					let xOrY = getRandomSpeed();
					if (xOrY > 0) {
						antsVX[i] = getRandomSpeed();
						antsVY[i] = 0;
						if (antsVX[i] == 1){
							myAnts[i].rotation = 90;
						}
						else{
							myAnts[i].rotation = -90;
						}
						//new Tween(myAnts[i], "rotation", Strong.easeOut, myAnts[i].rotation, myAnts[i].rotation+90, .5, true);
						
					} else {
						antsVY[i] = getRandomSpeed();
						antsVX[i] = 0;
						if (antsVY[i] == 1){
							myAnts[i].rotation = 180;
						} 
						else{
							myAnts[i].rotation = 0;
						}
					}
					myAnts[i].x += antsVX[i];
					myAnts[i].y += antsVY[i];
					createjs.Sound.play("antSound");
				} else if (isHitX) {
					antsVX[i] = 0;
					myAnts[i].y += antsVY[i];
				} else if (isHitY) {
					antsVY[i] = 0;
					// curVX = getRandomSpeed();
					myAnts[i].x += antsVX[i];
				} else {
					myAnts[i].x += antsVX[i];
					myAnts[i].y += antsVY[i];
				}
		
				if (isBlown) {
					console.log("isblown ran")
					antsVX[i] = -1 * antsVX[i];
					antsVY[i] = -1 * antsVY[i];
					myAnts[i].rotation = myAnts[i].rotation + 180;
					myAnts[i].x += antsVX[i];
					myAnts[i].y += antsVY[i];
					isBlown = false;
					// move the hitbox far far away so there is no chance of ant seeing it
					sym.windHit.x = -100;
					sym.windHit.y = -100;
				}
				if (isAtTarget && canEndGame) {
					console.log("an ant hit the target");
					// open the you win screen!
					endGame();
					canEndGame = false;
					return;
					
				}
		
			}
		}
		}
		
		function endGame(){
			if (canEndGame){
				sym.winScreen.visible = true;
				sym.againBtn.visible = true;
				// sym.removeEventListener("tick", moveContinuously);
				createjs.Sound.stop();
		
				createjs.Sound.play("winSound");
				createjs.Sound.play("introMusic", {loop:-1});
		
			}
		}
		
		function loseGame(){
			sym.loseScreen.visible = true;
			sym.playAgainLost.visible = true;
			createjs.Sound.stop();
			createjs.Sound.play("lostSound");
			// createjs.Sound.play("introMusic", {loop:-1});
		
		}
		
		this.blowing.visible = false;
		var isBlown = false;
		this.blowing.addChild(this.windHit);
		this.blowing.hitArea = this.windHit;
		this.windHit.visible = false;
		
		this.button_1.addEventListener("click", playBlowingAnim.bind(this));
		function playBlowingAnim() {
			this.blowing.visible = true;
		
			this.blowing.gotoAndPlay("playWind");
		
		}
		
		
		this.againBtn.addEventListener("click", restart);
		this.playAgainLost.addEventListener("click", restart);
		function restart() {
			//sym.removeEventListener("tick",moveContinuously);
			//sym.removeAllEventListeners(
			console.log("restart was called");
			location.reload();
		
		}
		
		
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		console.log("in frame 2");
		
		
		this.againBtn.addEventListener("click", restart);
		function restart(){
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// startScreen
	this.startBTN = new lib.startbtn();
	this.startBTN.name = "startBTN";
	this.startBTN.setTransform(1286.55,210.35,1,1,0,0,0,411,278);
	new cjs.ButtonHelper(this.startBTN, 0, 1, 2, false, new lib.startbtn(), 3);

	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(138.1,258.85,0.5,0.5);

	this.instance_1 = new lib.antSimText();
	this.instance_1.setTransform(658,254.8,1,1,0,0,0,287.1,39.1);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(469.1,72.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.startBTN}]}).to({state:[]},1).wait(2));

	// lostScreen
	this.playAgainLost = new lib.lostPlayAgainBtn();
	this.playAgainLost.name = "playAgainLost";
	this.playAgainLost.setTransform(640.75,495.25,1,1,0,0,0,200.6,91.6);
	new cjs.ButtonHelper(this.playAgainLost, 0, 1, 1);

	this.loseScreen = new lib.loseScreen();
	this.loseScreen.name = "loseScreen";
	this.loseScreen.setTransform(639.5,359.5,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.loseScreen},{t:this.playAgainLost}]},1).to({state:[]},1).wait(1));

	// winScreen
	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(-73.45,-6.15,0.5,0.5);

	this.winScreen = new lib.youWon();
	this.winScreen.name = "winScreen";
	this.winScreen.setTransform(639.5,359.5,1,1,0,0,0,640,360);

	this.againBtn = new lib.playAgainBtn();
	this.againBtn.name = "againBtn";
	this.againBtn.setTransform(656.95,476.05,1,1,0,0,0,202.5,98.9);
	new cjs.ButtonHelper(this.againBtn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A86CwMA/SAAAIAAe7Mg/SAAAgEhj/g4PMDH/AAAMAAABwfMjH/AAAg");
	this.shape.setTransform(639.5,359.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape},{t:this.againBtn},{t:this.winScreen}]},1).to({state:[]},1).wait(1));

	// pointer
	this.pointer1 = new lib.pointer_1();
	this.pointer1.name = "pointer1";
	this.pointer1.setTransform(301.9,404.4,1,1,0,0,0,86.9,62.4);
	this.pointer1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// added_target
	this.target1 = new lib.target();
	this.target1.name = "target1";
	this.target1.setTransform(-228.95,236.9,1,1,0,0,0,100,84.4);
	this.target1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.target1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// target_button
	this.button_2 = new lib.targetBTN();
	this.button_2.name = "button_2";
	this.button_2.setTransform(1146,256.6,1,1,0,0,0,100,67.6);
	this.button_2._off = true;
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.targetBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// blow_button
	this.button_1 = new lib.blowBTN();
	this.button_1.name = "button_1";
	this.button_1.setTransform(1145.55,101.9,0.2427,0.2427,0,0,0,412.2,277.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.blowBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// wind
	this.windHit = new lib.windHitTest();
	this.windHit.name = "windHit";
	this.windHit.setTransform(704.6,337.55,1,1,0,0,0,67.6,40.5);

	this.blowing = new lib.blowSym();
	this.blowing.name = "blowing";
	this.blowing.setTransform(862,344.2,1,1,0,0,0,150,107.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blowing},{t:this.windHit}]},1).to({state:[]},1).wait(1));

	// ant
	this.antHit2 = new lib.ant_hitarea();
	this.antHit2.name = "antHit2";
	this.antHit2.setTransform(907.15,220.7,1,1,0,0,0,14.2,52.1);
	this.antHit2.alpha = 0;

	this.ant2 = new lib.Symbol1();
	this.ant2.name = "ant2";
	this.ant2.setTransform(904.55,210.7,0.4435,0.4434,0,0,0,0,0.1);

	this.antHit1 = new lib.ant_hitarea();
	this.antHit1.name = "antHit1";
	this.antHit1.setTransform(696.1,329.85,1,1,0,0,0,14.2,52.1);
	this.antHit1.alpha = 0;

	this.ant1 = new lib.Symbol1();
	this.ant1.name = "ant1";
	this.ant1.setTransform(693.5,319.85,0.4435,0.4434,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ant1},{t:this.antHit1},{t:this.ant2},{t:this.antHit2}]},1).to({state:[]},1).wait(1));

	// outside_collision
	this.outsideCollision = new lib.outsideCollision();
	this.outsideCollision.name = "outsideCollision";
	this.outsideCollision.setTransform(658.95,312.55,1,1,0,0,0,776,562.6);
	this.outsideCollision._off = true;

	this.timeline.addTween(cjs.Tween.get(this.outsideCollision).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// rows_collision
	this.rows = new lib.rows_collision();
	this.rows.name = "rows";
	this.rows.setTransform(751.3,358.7,1,1,0,0,0,751.3,341.7);
	this.rows._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rows).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// cols_collision
	this.cols = new lib.cols_collision();
	this.cols.name = "cols";
	this.cols.setTransform(627.9,419.9,1,1,0,0,0,621.9,419.9);
	this.cols._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cols).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// tiles
	this.tiles = new lib.tilesSym();
	this.tiles.name = "tiles";
	this.tiles.setTransform(639.25,359.85,1,1,0,0,0,604.6,325.2);
	this.tiles._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tiles).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// background_tiles
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ehj/g4PMDH/AAAMAAABwfMjH/AAAg");
	this.shape_1.setTransform(639.5,359.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFB8").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_2.setTransform(639.5,359.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1719.1,1095.5);
// library properties:
lib.properties = {
	id: '8242FB3AAE855B4C852A8FF3738F3A35',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_3.png", id:"CachedBmp_3"},
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/CachedBmp_8.png", id:"CachedBmp_8"},
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/blow.png", id:"blow"},
		{src:"images/pointer.png", id:"pointer"},
		{src:"images/antsgame_atlas_1.png", id:"antsgame_atlas_1"},
		{src:"images/antsgame_atlas_2.png", id:"antsgame_atlas_2"},
		{src:"images/antsgame_atlas_3.png", id:"antsgame_atlas_3"},
		{src:"sounds/antSound.mp3", id:"antSound"},
		{src:"sounds/blow1wav.mp3", id:"blow1wav"},
		{src:"sounds/breathe_in_expwav.mp3", id:"breathe_in_expwav"},
		{src:"sounds/backgroundMusic.mp3", id:"backgroundMusic"},
		{src:"sounds/introMusic.mp3", id:"introMusic"},
		{src:"sounds/hovermp33.mp3", id:"hovermp33"},
		{src:"sounds/hovertargetwav.mp3", id:"hovertargetwav"},
		{src:"sounds/lostSound.mp3", id:"lostSound"},
		{src:"sounds/shoottargetwav.mp3", id:"shoottargetwav"},
		{src:"sounds/winSound.mp3", id:"winSound"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8242FB3AAE855B4C852A8FF3738F3A35'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;