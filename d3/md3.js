    var svgctrl = d3.select('svg');

    var c1 = svgctrl.append('rect');
    c1.attr('x',70).attr('y',250).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green');
    var c2 = svgctrl.append('rect');
    c2.attr('x',130).attr('y',250).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green');







    var c3 = svgctrl.append('rect');
    c3.attr('x',1).attr('y',120).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green').attr('id','kk');
    var c4 = svgctrl.append('rect');
    c4.attr('x',201).attr('y',120).attr('rx',20).attr('ry',20).attr('width',50).attr('height',100).attr('stroke','white').attr('stroke-width',5).attr('fill','green').attr('id','kk');
    var c5 = svgctrl.append('circle');
    c5.attr('cx',125).attr('cy',105).attr('r',70).attr('stroke','white').attr('stroke-width',3).attr('fill','green');
    var c6 = svgctrl.append('rect');
    c6.attr('x',50).attr('y',100).attr('rx',20).attr('ry',20).attr('width',150).attr('height',150).attr('stroke','white').attr('stroke-width',5).attr('fill','green');
   
    var c8 = svgctrl.append('circle');
    c8.attr('cx',100).attr('cy',70).attr('r',5).attr('stroke','white').attr('stroke-width',3).attr('fill','white');
    var c9 = svgctrl.append('circle');
    c9.attr('cx',155).attr('cy',70).attr('r',5).attr('stroke','white').attr('stroke-width',3).attr('fill','white');
    var c10 = svgctrl.append('line');
    c10.attr('x1',80).attr('y1',50).attr('x2',50).attr('y2',0).attr('stroke','green').attr('stroke-width',2);
    var c11 = svgctrl.append('line');
    c11.attr('x1',170).attr('y1',50).attr('x2',190).attr('y2',0).attr('stroke','green').attr('stroke-width',2);











var $d=$('#kk');
$d.bind('click', function() {

        $('rect').eq(2).attr('width',100).attr('height',50);
         $('rect').eq(3).attr('width',100).attr('height',50);
    })

    
$('button').bind('click',function(){
    $('rect').eq(2).attr('x',1).attr('y',20).attr('width',50).attr('height',100);
         $('rect').eq(3).attr('x',201).attr('y',20).attr('width',50).attr('height',100);
}
)
