class WelcomeController < ApplicationController
	def index
		nacimiento = Time.local(1993, 9, 14, 0, 0, 0)
		ahora = Time.now
		if ahora.month > nacimiento.month || (nacimiento.month == nacimiento.month && ahora.day >= nacimiento.day)
  			@cantidad_de_anios = ahora.year - nacimiento.year
  		else
  			@cantidad_de_anios = ahora.year - nacimiento.year - 1
  		end
  end
end
