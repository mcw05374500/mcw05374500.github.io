    var svgctrl = d3.select('svg');

    var x=50;
    var c1 = svgctrl.append('rect');
    c1.attr('x',x+20).attr('y',x+200).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green');
    var c2 = svgctrl.append('rect');
    c2.attr('x',x+80).attr('y',x+200).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green');
    var c3 = svgctrl.append('rect');
    c3.attr('x',x-49).attr('y',x+70).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green').attr('id','kk');
    var c4 = svgctrl.append('rect');
    c4.attr('x',x+151).attr('y',x+70).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green').attr('id','kk');
    var c5 = svgctrl.append('circle');
    c5.attr('cx',x+75).attr('cy',x+55).attr('r',70).attr('stroke','white').attr('stroke-width',3).attr('fill','green');
    var c6 = svgctrl.append('rect');
    c6.attr('x',x).attr('y',x+50).attr('rx',20).attr('ry',20).attr('width',150).attr('height',150).attr('stroke','white').attr('stroke-width',5).attr('fill','green');
   
    var c8 = svgctrl.append('circle');
    c8.attr('cx',x+50).attr('cy',x+20).attr('r',5).attr('stroke','white').attr('stroke-width',3).attr('fill','white');
    var c9 = svgctrl.append('circle');
    c9.attr('cx',x+105).attr('cy',x+20).attr('r',5).attr('stroke','white').attr('stroke-width',3).attr('fill','white');
    var c10 = svgctrl.append('line');
    c10.attr('x1',x+30).attr('y1',x).attr('x2',x).attr('y2',x-50).attr('stroke','green').attr('stroke-width',2);
    var c11 = svgctrl.append('line');
    c11.attr('x1',x+120).attr('y1',x).attr('x2',x+140).attr('y2',x-50).attr('stroke','green').attr('stroke-width',2);











var $d=$('#kk');
$d.bind('click', function() {

        $('rect').eq(2).attr('width',100).attr('height',50);
        $('rect').eq(3).attr('width',100).attr('height',50);
    })

    
$('button').bind('click',function(){
        $('rect').eq(2).attr('x',1).attr('y',20).attr('width',50).attr('height',100);
        $('rect').eq(3).attr('x',201).attr('y',20).attr('width',50).attr('height',100);
         $('#a').animate({left:'+=50px'});
         $('#a').animate({top:'+=50px'});
          $('#a').animate({top:'-=50px'});

}
)
