// Copyright (c) 2025, ptusharwrk139@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},
});

frappe.ui.form.on("Ride Add On", {
	service(frm, cdt, cdn) {
        var row = frappe.get_doc(cdt,cdn)
        let item_code = row.service
        console.log(item_code)
        frappe.db.get_value('Item Price', {"item_code": item_code}, 'price_list_rate')
            .then(r => {
            console.log(r.message.price_list_rate)
            frappe.model.set_value(cdt,cdn,"amount",r.message.price_list_rate)

        })
        
	},
});
