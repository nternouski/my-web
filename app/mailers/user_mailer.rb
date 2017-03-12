class UserMailer < ActionMailer::Base
	default from: "mipaginasnt@gmail.com"
  def contact(nomYap,email,asunto,mensaje)
    @email = email
    @nomYap = nomYap
    @asunto = asunto
  	@mensaje = mensaje
    mail(to: "nahuelternouski@gmail.com", subject: "#{@asunto}")
  end
end