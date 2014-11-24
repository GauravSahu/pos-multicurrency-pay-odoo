openerp.point_of_sale = function(instance) {

    instance.point_of_sale = {};

    var module = instance.point_of_sale;

    openerp_pos_multicurrency_pay(instance,module);      
	
	instance.web.client_actions.add('pos.ui', 'instance.point_of_sale.PosWidget');
};
