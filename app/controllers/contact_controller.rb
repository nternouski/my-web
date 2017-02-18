class ContactController < ApplicationController
	def mail
		if params[:commit].present? && params[:commit] == "Enviar" && verify_recaptcha
			if params[:email].empty? || params[:nombre].empty? || params[:mensaje].empty?
				flash[:danger]="Los campos nombre, mail y mensaje no deben estar vacios."
			else
				if UserMailer.contact(params[:nombre],params[:email],params[:asunto],params[:mensaje]).deliver
					flash[:success]="Su mail se envió correctamente."
				end
			end
		end
	end
end