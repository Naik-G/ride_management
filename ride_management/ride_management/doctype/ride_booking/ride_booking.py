# Copyright (c) 2025, ptusharwrk139@gmail.com and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RideBooking(Document):

	def validate(self):

		for rec in self.services:
			item_code = rec.service
			price_list_rate = frappe.db.get_value('Item Price', {"item_code": item_code}, 'price_list_rate')
			
			rec.amount = price_list_rate


	def before_save(self):
		if len(self.services) > 0:
			total_amount = float(self.price_per_km) * float(self.estimated_km)

			for rec in self.services:
				total_amount += rec.amount
			
			self.total_amount = total_amount
