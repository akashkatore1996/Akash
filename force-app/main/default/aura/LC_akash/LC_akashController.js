({
	handleCalculate : function(component, event, helper) {
		var f1=parseInt(component.get("v.fNumber"));
        var s1=parseInt(component.get("v.sNumber"));
        console.log("firstNumber :",f1);
        console.log("secondNumber :",s1);
        
        component.set("v.result",f1+s1);
	}
})