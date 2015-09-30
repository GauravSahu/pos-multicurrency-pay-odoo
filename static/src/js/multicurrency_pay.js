openerp.pos_multicurrency_pay = function(openerp){
_t = openerp.web._t;
QWeb = openerp.web.qweb,
  
      round_di = openerp.web.round_decimals;
     round_pr = openerp.web.round_precision 
    
    
     openerp.point_of_sale.Order = openerp.point_of_sale.Order.extend({
     
     	 
    	  getPaidTotal: function() {
            return (this.get('paymentLines')).reduce((function(sum, paymentLine) {
                if(paymentLine.cashregister.currency[1]==='USD'){
                        
                        sum = sum + round_di(parseFloat(parseFloat(paymentLine.get_amount()) / 0.074) || 0, 2);
                        console.log(sum);
                        return sum;
                }
                else{
                        sum = sum + paymentLine.get_amount();
                        console.log(sum);
                        return sum;
                }
              
            }), 0);
        },
    });
 }
