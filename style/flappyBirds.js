var i;
var i2;
var i3;
var i4;
var i5;
var i6;
var i7;
var c=0;
var bird=$('img.bird')[0];//定义小鸟~
var i8;
var i9;
var s1;
var s2
/*让小鸟的翅膀飞和不飞*/
function changeBring(){
	clearTimeout(i);
	var imgNo=parseInt(bird.src.charAt(bird.src.indexOf(".png")-1));
	if(imgNo==3){
		imgNo=1;
	}else{
		imgNo++;
	}
	bird.src="images/bird"+imgNo+".png";
	i=setTimeout("changeBring()",100);
}
function stop(){
	clearTimeout(i);
}
function whereabouts(){
	$('img.bird').stop();
	var birdHight=$('img.bird').css('top');
	var container=parseInt($('.container').css('height'));
	$('img.bird').animate({
	top:container-parseInt($('img.bird').css('height')),
	},1500,function(){
		clearTimeout(s1);
		clearTimeout(s2);
		clearTimeout(i9);
		$('ul.Conduit').stop();
		$('ul.Conduit').stop();
		clearTimeout(s3);
	});
	$('img.bird').css('transform','rotate(90deg)');
}
function die(){
	var c1=parseInt($('ul').css('left'));
	var c2=parseInt($('img.bird').css('width'));
	var ch=parseInt($('img.bird').css('top'));
	var c3=parseInt($('ul li').index($('ul li.d1')));
	var c4=parseInt($('img.bird').css('top'));
	var c5=c3+1;
	if((c1<100+c2)&&((c1+50)>100+c2)){
		if((ch<c3*150)||(ch+24>c5*150)){
		clearTimeout(s1);
		clearTimeout(s2);
		clearTimeout(i9);
		$('ul.Conduit').stop();
		$('ul.Conduit').stop();
		clearTimeout(s3);
		}
	}
	setTimeout('die()',1);
}
setTimeout('die()',1600);
function jump(){
	clearTimeout(i2);
	clearTimeout(i4);
	changeBring();
	$('img.bird').stop();
	var birdHight=$('img.bird').css('top');
	$('img.bird').css('transform','rotate(-60deg)');
	$('img.bird').animate({
	top:"-=100",
	},500,'swing');
	i2=setTimeout("changeT()",150);
	i4=setTimeout("whereabouts()",530);
}

function changeT(){
	clearTimeout(i3);
	$('img.bird').css('transform','rotate(0deg)');
	i3=setTimeout("stop()",250)
}

function addConduit(){
	var c=parseInt(10*Math.random());
	if(c>=7){
		c=3;
	}else if(c>=4){
		c=2;
	}else if(c>=2){
		c=1;
	}else{
		c=0;
	}
	var $newC=$('<ul class="Conduit"><li class="d"></li><li class="d"></li><li class="d"></li><li class="d"></li></ul>');
	$('div.container').append($newC);
	var c1=document.getElementById('container').lastChild;
	var c2=c1.firstChild;
	for(var i=0;i<c;i++){
		c2=c2.nextSibling;
	}
	$(c2).addClass('d1');
	$(c2).removeClass('d');
	s2=setTimeout('move()',1600);
	s1=setTimeout('addConduit()',1600);
}

function move(){
		$('ul.Conduit').animate({
		left:'-50',
	},3000,'linear',function(){
		this.remove();
	});
}
function move2(){
	$('img.bottom').animate({
		left:'-72',
	},240,'linear',function(){
		$('img.bottom').css('left','0px');
		move2();
	});
}
function changeTimes(){
	clearTimeout(i9);
	c++;
$('div.times').text(c);
i9=setTimeout('changeTimes()',1600);
}
var s3=setTimeout('changeTimes()',3600);
addConduit();
whereabouts();
$('div.container').on('click',function(){
	jump();
});

move2();