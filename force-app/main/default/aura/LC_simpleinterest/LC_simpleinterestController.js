({
	cal : function(comp, event, helper) {
		var p1=parseInt(comp.get("v.principal"));
        var r1=parseInt(comp.get("v.rate"));
        var t1=parseInt(comp.get("v.time"));
        var res=p1*r1*t1/100
        comp.set("v.result",res);
	}
})