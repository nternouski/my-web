class ContactController < ApplicationController
	def mail
		if params[:commit].present? && params[:commit] == "Enviar"
			if params[:email].empty? || params[:nombre].empty? || params[:mensaje].empty?
				flash[:danger]="Los campos nombre, mail y mensaje no deben estar vacios."
			else
				UserMailer.contact(params[:nombre],params[:email],params[:asunto],params[:mensaje]).deliver
				flash[:success]="Su mail se envio correctamente."
			end
		end
	end
end